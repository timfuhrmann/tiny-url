import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "../app/css/theme";
import { GlobalStyle } from "../app/css/GlobalStyle";
import { DataProvider } from "../app/context/DataProvider";
import { Template } from "../app/components/Template";
import { Meta } from "../app/lib/Meta";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <DataProvider>
            <ThemeProvider theme={theme}>
                <Meta />
                <GlobalStyle />
                <Template>
                    <Component {...pageProps} />
                </Template>
            </ThemeProvider>
        </DataProvider>
    );
};

export default App;
