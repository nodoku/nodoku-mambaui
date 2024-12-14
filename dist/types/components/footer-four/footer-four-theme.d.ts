import { ThemeStyle, ImageStyle } from "nodoku-core";
export type FooterFourTheme = {
    className?: string;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    contentContainerStyle?: ThemeStyle;
    imageStyle?: ImageStyle;
    imageContainerStyle?: ThemeStyle;
    brandNameStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    sectionTitleStyle?: ThemeStyle;
    copyrightNoticeStyle?: ThemeStyle;
};
export declare const defaultTheme: FooterFourTheme;
