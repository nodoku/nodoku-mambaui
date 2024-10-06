import { ThemeStyle } from "nodoku-core";
import { NodokuComponents } from "nodoku-components";
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
export declare class FaqHeaderTheme {
    className?: string;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    imageContainerStyle?: ThemeStyle;
    imageStyle?: ThemeStyle;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    contentContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ThemeStyle;
    footerContainerStyle?: ThemeStyle;
    footerStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;
    static defaultTheme: FaqHeaderTheme;
}
declare const _default: FaqHeaderTheme;
export default _default;
