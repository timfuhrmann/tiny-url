import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Clipboard, Icon } from "../lib/Icon";
import { copyToClipboard } from "../lib/Copy";
import { ActionText } from "../css/typography";

const CopyButton = styled.button`
    display: flex;
    align-items: center;
    color: ${p => p.theme.gray900};
    transition: color 0.1s;
    will-change: color;

    @media (hover: hover) {
        &:hover {
            color: ${p => p.theme.blue700};
        }
    }
`;

const ClipboardIcon = styled.div`
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;

    @media ${p => p.theme.bp.l} {
        width: 2.4rem;
        height: 2.4rem;
    }
`;

const CopyInfo = styled.div<{ active: boolean }>`
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: ${p => p.theme.gray900};
    color: ${p => p.theme.gray50};
    opacity: ${p => (p.active ? 1 : 0)};
    transition: opacity 0.2s;
    will-change: opacity;
`;

interface CopyLinkProps {
    onCopy?: () => void;
}

export const CopyLink: React.FC<CopyLinkProps> = ({ onCopy, children }) => {
    const [copied, setCopied] = useState<boolean>(false);

    useEffect(() => {
        if (!copied) {
            return;
        }

        const timeout = setTimeout(() => {
            setCopied(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, [copied]);

    const handleCopy = (e: React.MouseEvent) => {
        const button = e.target as HTMLButtonElement;
        copyToClipboard(button.innerText);
        setCopied(true);
    };

    return (
        <>
            <CopyButton type="button" onClick={handleCopy}>
                {children}
                <ClipboardIcon>
                    <Icon name="clipboard" icon={Clipboard} />
                </ClipboardIcon>
            </CopyButton>
            <CopyInfo active={copied}>
                <ActionText>Copied to clipboard!</ActionText>
            </CopyInfo>
        </>
    );
};
