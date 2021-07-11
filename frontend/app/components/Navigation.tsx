import React from "react";
import styled from "styled-components";
import { Content } from "../css/content";
import { ActionText } from "../css/typography";
import { Button } from "./Button";

const NavigationWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding: 2rem 0;
`;

const NavigationInner = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavigationGroup = styled.div`
    display: flex;
    align-items: center;
`;

const NavigationItem = styled(ActionText)`
    margin-left: 4rem;

    &:first-child {
        margin: 0;
    }
`;

const Logo = styled.div`
    font-weight: 600;
    font-size: 3rem;
    letter-spacing: -0.1rem;
`;

interface NavigationProps {
    toggleHistory: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ toggleHistory }) => {
    return (
        <NavigationWrapper>
            <Content>
                <NavigationInner>
                    <NavigationGroup>
                        <NavigationItem>
                            <Logo>Linkify</Logo>
                        </NavigationItem>
                    </NavigationGroup>
                    <NavigationGroup>
                        <NavigationItem>
                            <Button type="button" onClick={toggleHistory}>
                                History
                            </Button>
                        </NavigationItem>
                    </NavigationGroup>
                </NavigationInner>
            </Content>
        </NavigationWrapper>
    );
};
