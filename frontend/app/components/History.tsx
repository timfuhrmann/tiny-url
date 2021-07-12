import React from "react";
import styled from "styled-components";
import { ActionText, FlowTextSmall, SecondaryHeadline } from "../css/typography";
import { useData } from "../context/DataProvider";
import { CopyLink } from "./CopyLink";
import { Close, Icon } from "../lib/Icon";

const HistoryWrapper = styled.div<{ active: boolean }>`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 100%;
    transform: ${p => (p.active ? "translate3d(-100%, 0, 0)" : "translate3d(0, 0, 0)")};
    height: 100%;
    width: 100%;
    max-width: 42.5rem;
    transition: transform 0.3s;
    will-change: transform;

    @media ${p => p.theme.bp.l} {
        position: relative;
        top: auto;
        left: auto;
        transform: none;
        width: 42.5rem;
        max-width: ${p => (p.active ? "42.5rem" : 0)};
        height: auto;
        transition: max-width 0.3s;
        will-change: max-width;
        overflow: hidden;
    }
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
    display: flex;
    flex-direction: column;
    height: 100%;

    padding: 2rem 0 0;
`;

const HistoryList = styled.div`
    margin-top: 2rem;
    border-top: 0.1rem solid ${p => p.theme.gray600};
    flex: 1;
    overflow-y: auto;
`;

const HistoryItem = styled.div`
    line-height: 1.4;
    padding: 2rem;
    border-top: 0.1rem solid ${p => p.theme.gray600};

    &:first-child {
        border: none;
    }
`;

const HistoryHead = styled(SecondaryHeadline)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
`;

const ItemLink = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const ItemContent = styled(FlowTextSmall)`
    color: ${p => p.theme.gray700};
`;

const ButtonClose = styled.button`
    width: 2rem;
    height: 2rem;

    @media ${p => p.theme.bp.l} {
        display: none;
    }
`;

interface HistoryProps {
    active: boolean;
    onClose: () => void;
}

export const History: React.FC<HistoryProps> = ({ active, onClose }) => {
    const { history } = useData();

    return (
        <HistoryWrapper active={active}>
            <HistoryFrame>
                <HistoryInner>
                    <HistoryHead>
                        History
                        <ButtonClose type="button" onClick={onClose}>
                            <Icon name="close" icon={Close} />
                        </ButtonClose>
                    </HistoryHead>
                    <HistoryList>
                        {history.map(item => (
                            <HistoryItem key={item.id}>
                                <ItemLink>
                                    <CopyLink value={item.tinyUrl} />
                                </ItemLink>
                                <ItemContent>
                                    <ItemLink>{item.link}</ItemLink>
                                    <div>Clicks: {item.clicks}</div>
                                </ItemContent>
                            </HistoryItem>
                        ))}
                    </HistoryList>
                </HistoryInner>
            </HistoryFrame>
        </HistoryWrapper>
    );
};
