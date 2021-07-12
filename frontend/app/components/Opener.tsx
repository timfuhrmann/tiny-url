import React, { useRef } from "react";
import styled from "styled-components";
import { Content } from "../css/content";
import { Headline } from "../css/typography";
import { useLottie } from "../lib/Lottie";

const OpenerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 0 10rem;
    text-align: center;

    @media ${p => p.theme.bp.xl} {
        padding: 0;
        flex-direction: row;
        justify-content: space-between;
        text-align: left;
        min-height: 60rem;
    }
`;

const OpenerFrame = styled.div`
    width: 100%;
    max-width: 50rem;
    margin-top: -2.5rem;

    @media ${p => p.theme.bp.xl} {
        width: 80rem;
        max-width: none;
        margin-top: -12.5rem;
    }
`;

const OpenerContent = styled.div`
    @media ${p => p.theme.bp.xl} {
        padding-right: 5rem;
    }
`;

const OpenerText = styled.div`
    margin-top: 2rem;
    color: ${p => p.theme.gray700};
`;

export const Opener: React.FC = () => {
    const frameRef = useRef<HTMLDivElement | null>(null);
    useLottie(frameRef, "/opener.json");

    return (
        <Content>
            <OpenerWrapper>
                <OpenerContent>
                    <Headline>Shorten your links in a blink of an eye.</Headline>
                    <OpenerText>
                        Build your brand’s recognition and get detailed insights on how your links
                        are performing.
                    </OpenerText>
                </OpenerContent>
                <OpenerFrame ref={frameRef} />
            </OpenerWrapper>
        </Content>
    );
};
