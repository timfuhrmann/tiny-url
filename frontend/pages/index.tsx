import React from "react";
import styled from "styled-components";
import { Opener } from "../app/components/Opener";
import { Input } from "../app/components/Input";

const HomeWrapper = styled.div`
    padding: 10rem 0;

    @media ${p => p.theme.bp.xl} {
        padding: 0 0 10rem;
    }
`;

const Home: React.FC = () => {
    return (
        <HomeWrapper>
            <Opener />
            <Input />
        </HomeWrapper>
    );
};

export default Home;
