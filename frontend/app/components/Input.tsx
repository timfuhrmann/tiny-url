import React, { useState } from "react";
import styled from "styled-components";
import { Content } from "../css/content";
import { useData } from "../context/DataProvider";
import { ActionText } from "../css/typography";
import { Button } from "./Button";

const InputWrapper = styled.div`
    padding: 2rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${p => p.theme.gray200};
    background-color: ${p => p.theme.gray100};
`;

const InputResult = styled.div<{ active: boolean }>`
    max-height: ${p => (p.active ? "none" : 0)};
    overflow: hidden;
`;

const ResultsInner = styled.div`
    padding-top: 2rem;
`;

const InputUrl = styled.input`
    background: none;
    border: none;
    width: 100%;
    cursor: pointer;
    color: ${p => p.theme.gray900};
`;

const InputError = styled.div`
    color: ${p => p.theme.red700};
`;

const InputInner = styled.div`
    display: flex;
    align-items: center;
`;

const InputBox = styled.input`
    flex: 1;
    background: none;
    height: 4rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid ${p => p.theme.gray400};
    color: ${p => p.theme.gray900};
    transition: border-color 0.1s;
    will-change: border-color;

    &::placeholder {
        color: ${p => p.theme.gray400};
    }

    &:focus,
    &:not(:placeholder-shown) {
        border-color: ${p => p.theme.gray600};
    }
`;

export const Input: React.FC = () => {
    const { createLink } = useData();
    const [string, setString] = useState<string>("");
    const [tinyUrl, setTinyUrl] = useState<string>("");
    const [errors, setErrors] = useState<string[]>([]);

    const onSubmit = async () => {
        reset();

        const { tinyUrl, errors } = await createLink(string);

        if (errors) {
            setErrors(errors);
            return;
        }

        setTinyUrl(tinyUrl);
    };

    const copyToClipboard = (e: React.MouseEvent) => {
        const text = e.target as HTMLInputElement;

        text.select();
        text.setSelectionRange(0, 99999);

        document.execCommand("copy");
    };

    const reset = () => {
        setTinyUrl("");
        setErrors([]);
    };

    return (
        <Content>
            <InputWrapper>
                <InputInner>
                    <InputBox
                        type="text"
                        placeholder="Shorten your link here..."
                        value={string}
                        onInput={e => setString((e.target as HTMLInputElement).value)}
                    />
                    <Button type="button" onClick={onSubmit}>
                        <ActionText>Submit</ActionText>
                    </Button>
                </InputInner>
                <InputResult active={!!tinyUrl || errors.length > 0}>
                    <ResultsInner>
                        {tinyUrl && (
                            <div>
                                <span>Your TinyURL: </span>
                                <InputUrl
                                    type="text"
                                    value={tinyUrl}
                                    onClick={copyToClipboard}
                                    readOnly
                                />
                            </div>
                        )}
                        {errors.length > 0 &&
                            errors.map(error => <InputError key={error}>{error}</InputError>)}
                    </ResultsInner>
                </InputResult>
            </InputWrapper>
        </Content>
    );
};
