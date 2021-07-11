import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";
import { Content } from "../css/content";
import { Headline } from "../css/typography";

const OpenerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 70rem;
`;

const OpenerFrame = styled.div`
    width: 80rem;
    margin-top: -12.5rem;
`;

const OpenerContent = styled.div`
    padding-right: 5rem;
`;

const OpenerText = styled.div`
    margin-top: 2rem;
    color: ${p => p.theme.gray700};
`;

export const Opener: React.FC = () => {
    const frameRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        if (!frameRef.current) {
            return;
        }

        const animation = lottie.loadAnimation({
            container: frameRef.current,
            loop: true,
            autoplay: true,
            path: "/opener.json",
            name: "opener",
        });

        return () => animation.destroy("opener");
    }, []);
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
