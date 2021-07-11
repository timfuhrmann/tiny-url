export const theme = {
    //region Color
    gray50: "#080808",
    gray75: "#1A1A1A",
    gray100: "#1E1E1E",
    gray200: "#2C2C2C",
    gray300: "#393939",
    gray400: "#494949",
    gray500: "#5C5C5C",
    gray600: "#7C7C7C",
    gray700: "#A2A2A2",
    gray800: "#C8C8C8",
    gray900: "#EFEFEF",

    red400: "#D7373F",
    red500: "#E34850",
    red600: "#EC5B62",
    red700: "#F76D74",

    green400: "#268E6C",
    green500: "#2D9D78",
    green600: "#33AB84",
    green700: "#39B990",
    //endregion

    //region Breakpoints
    bp: {
        m: "screen and (min-width: 768px)",
        l: "screen and (min-width: 1024px)",
        xl: "screen and (min-width: 1340px)",
        xxl: "screen and (min-width: 2000px)",
    },
    //endregion
};

type Theme = typeof theme;

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
