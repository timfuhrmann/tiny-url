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
    display: flex;
`;

const TemplateFrame = styled.div`
    position: relative;
    flex: 1;
`;

const TemplateStage = styled.div`
    overflow-y: auto;
`;

export const Template: React.FC = ({ children }) => {
    const [historyActive, setHistoryActive] = useState<boolean>(false);

    return (
        <div>
            <TemplateWrapper>
                <TemplateFrame>
                    <Navigation toggleHistory={() => setHistoryActive(prevState => !prevState)} />
                    <TemplateStage>{children}</TemplateStage>
                </TemplateFrame>
                <History active={historyActive} />
            </TemplateWrapper>
        </div>
    );
};
