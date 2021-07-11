import styled from "styled-components";

export const Button = styled.button`
    height: 4rem;
    margin-left: 2rem;
    padding: 0 1rem;
    border-radius: 0.5rem;
    background-color: ${p => p.theme.gray300};
    border: 0.1rem solid ${p => p.theme.gray400};
    transition: border-color 0.1s, background-color 0.1s;
    will-change: border-color, background-color;

    @media (hover: hover) {
        &:hover {
            background-color: ${p => p.theme.gray100};
            border-color: ${p => p.theme.gray600};
        }
    }

    &:active {
        background-color: ${p => p.theme.gray100};
        border-color: ${p => p.theme.gray600};
    }
`;
