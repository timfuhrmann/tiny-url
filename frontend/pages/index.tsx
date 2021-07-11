import React from "react";
import { Opener } from "../app/components/Opener";
import { Input } from "../app/components/Input";
import styled from "styled-components";

const InputWrapper = styled.div`
    //margin-top: 2rem;
`;

const Home: React.FC = () => {
    return (
        <div>
            <Opener />
            <Input />
        </div>
    );
};

export default Home;
