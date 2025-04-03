import { ThemeStyle } from "nodoku-core";
import { NodokuComponents } from "nodoku-components";
import TypographyTheme = NodokuComponents.TypographyTheme;
export type FaqOneQuestionTheme = {
    className?: string;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    typographyTheme?: TypographyTheme;
};
export declare const defaultTheme: FaqOneQuestionTheme;
