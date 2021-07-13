import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";
import { FlowText } from "./typography";

export const GlobalStyle = createGlobalStyle`
    ${reset};

    body {
        font-family: "Circular Std", Helvetica, Arial, sans-serif;
        color: ${p => p.theme.gray900};
        background-color: ${p => p.theme.gray50};
      ${FlowText};
    }
`;
