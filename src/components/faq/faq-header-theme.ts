import {ThemeStyle} from "nodoku-core";

export type FaqHeaderTheme = {

    className?: string;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;

}

export const defaultTheme: FaqHeaderTheme = {

}

// export default FaqHeaderTheme.defaultTheme;