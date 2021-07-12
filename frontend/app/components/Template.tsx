import React, { useState } from "react";
import { Navigation } from "./Navigation";
import styled from "styled-components";
import { History } from "./History";

const TemplateWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

const TemplateInner = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

const TemplateFrame = styled.div`
    position: relative;
    flex: 1;
`;

const TemplateStage = styled.div`
    height: 100%;
    overflow-y: auto;
`;

export const Template: React.FC = ({ children }) => {
    const [historyActive, setHistoryActive] = useState<boolean>(false);

    return (
        <TemplateWrapper>
            <TemplateInner>
                <TemplateFrame>
                    <Navigation
                        historyActive={historyActive}
                        toggleHistory={() => setHistoryActive(prevState => !prevState)}
                    />
                    <TemplateStage>{children}</TemplateStage>
                </TemplateFrame>
                <History active={historyActive} onClose={() => setHistoryActive(false)} />
            </TemplateInner>
        </TemplateWrapper>
    );
};
