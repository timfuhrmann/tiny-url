import React from "react";
import styled from "styled-components";
import { Content } from "../css/content";
import { ActionText } from "../css/typography";
import { Icon, Close, Menu } from "../lib/Icon";

const NavigationWrapper = styled.div`
    position: absolute;
    z-index: 1;
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

const NavigationItem = styled(ActionText)`
    margin-left: 4rem;

    &:first-child {
        margin: 0;
    }
`;

const Logo = styled.div`
    font-size: 2.5rem;
    font-weight: 600;
    letter-spacing: -0.1rem;

    @media ${p => p.theme.bp.l} {
        font-size: 3rem;
    }
`;

const ButtonHamburger = styled.button`
    width: 2rem;
    height: 2rem;

    @media ${p => p.theme.bp.l} {
        width: 2.4rem;
        height: 2.4rem;
    }
`;

interface NavigationProps {
    historyActive: boolean;
    toggleHistory: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ historyActive, toggleHistory }) => {
    return (
        <NavigationWrapper>
            <Content>
                <NavigationInner>
                    <NavigationItem>
                        <Logo>Linkify</Logo>
                    </NavigationItem>
                    <NavigationItem>
                        <ButtonHamburger type="button" onClick={toggleHistory}>
                            {historyActive ? (
                                <Icon name="close" icon={Close} />
                            ) : (
                                <Icon name="menu" icon={Menu} />
                            )}
                        </ButtonHamburger>
                    </NavigationItem>
                </NavigationInner>
            </Content>
        </NavigationWrapper>
    );
};
