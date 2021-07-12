import styled, { css } from "styled-components";

export const Headline = styled.div`
    font-size: 3rem;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: -0.1rem;

    @media ${p => p.theme.bp.l} {
        font-size: 5rem;
    }
`;

export const SecondaryHeadline = styled.div`
    font-size: 2.5rem;
    line-height: 1.1;
    font-weight: 600;
    letter-spacing: -0.1rem;

    @media ${p => p.theme.bp.l} {
        font-size: 3.5rem;
    }
`;

export const FlowText = css`
    font-size: 1.7rem;
    line-height: 1.2;
    letter-spacing: -0.05rem;

    @media ${p => p.theme.bp.l} {
        font-size: 2rem;
    }
`;

export const FlowTextSmall = styled.div`
    font-size: 1.7rem;
    line-height: 1.4;
    letter-spacing: -0.05rem;
`;

export const ActionText = styled.div`
    font-size: 1.6rem;
    line-height: 1;
    font-weight: 500;
`;
