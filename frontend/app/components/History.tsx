import React from "react";
import styled from "styled-components";
import { SecondaryHeadline } from "../css/typography";
import { useData } from "../context/DataProvider";

const HistoryWrapper = styled.div<{ active: boolean }>`
    position: relative;
    width: 40rem;
    max-width: ${p => (p.active ? "40rem" : 0)};
    overflow: hidden;
    transition: max-width 0.3s;
    will-change: max-width;
`;

const HistoryFrame = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: inherit;
    background-color: ${p => p.theme.gray100};
    border-left: 0.1rem solid ${p => p.theme.gray200};
`;

const HistoryInner = styled.div`
    padding: 2rem;
`;

const HistoryList = styled.div`
    margin-top: 2rem;
`;

const HistoryItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ItemUrl = styled.div`
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

interface HistoryProps {
    active: boolean;
}

export const History: React.FC<HistoryProps> = ({ active }) => {
    const { history } = useData();

    return (
        <HistoryWrapper active={active}>
            <HistoryFrame>
                <HistoryInner>
                    <SecondaryHeadline>History</SecondaryHeadline>
                    <HistoryList>
                        {history.map(item => (
                            <HistoryItem key={item.id}>
                                <ItemUrl>{item.tinyUrl}</ItemUrl>
                                <span>Clicks: {item.clicks}</span>
                            </HistoryItem>
                        ))}
                    </HistoryList>
                </HistoryInner>
            </HistoryFrame>
        </HistoryWrapper>
    );
};
