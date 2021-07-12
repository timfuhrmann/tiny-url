import React, { createContext, useContext, useEffect, useState } from "react";
import validate from "validate.js";
import { Data } from "../type/data";

interface CreateLink {
    tinyUrl: string;
    errors?: string[];
}

interface DataProviderType {
    history: Data.Url[];
    createLink: (link: string) => Promise<CreateLink>;
}

const DataContext = createContext<DataProviderType>({} as DataProviderType);

const STORAGE_HISTORY = "linkify-history";

const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

export const DataProvider: React.FC = ({ children }) => {
    const [history, setHistory] = useState<Data.Url[]>([]);

    useEffect(() => {
        const json = localStorage.getItem(STORAGE_HISTORY);

        if (!json) {
            return;
        }

        const localHistory = JSON.parse(json) as Data.Url[];

        const identifiers = localHistory.map(item => item.id);

        if (!identifiers || identifiers.length === 0) {
            return;
        }

        getLinks(identifiers).catch(console.error);
    }, []);

    useEffect(() => {
        localStorage.setItem(STORAGE_HISTORY, JSON.stringify(history));
    }, [history]);

    const getLinks = async (identifiers: string[]) => {
        const urls = await fetch(baseUrl + "/link", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ identifiers }),
        }).then(res => res.json());

        setHistory(urls);
    };

    const createLink = async (link: string): Promise<CreateLink> => {
        const validation = validate({ website: link }, { website: { url: true } });

        if (validation && validation.website) {
            return { tinyUrl: "", errors: validation.website };
        }

        const url = await fetch(baseUrl + "/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ link }),
        })
            .then(res => res.json())
            .catch(console.error);

        if (!url) {
            return {
                tinyUrl: "",
                errors: ["An unknown error has occurred. Please try again later."],
            };
        }

        setHistory(prevState => [...prevState, url]);

        return { tinyUrl: url.tinyUrl };
    };

    return <DataContext.Provider value={{ history, createLink }}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
