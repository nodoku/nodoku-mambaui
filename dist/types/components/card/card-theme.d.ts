import { ThemeStyle } from "nodoku-core";
import { NodokuComponents } from "nodoku-components";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;
export declare class CardTheme {
    className?: string;
    containerStyle?: ThemeStyle;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    imageStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ThemeStyle;
    footerContainerStyle?: ThemeStyle;
    footerButtonStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;
    static defaultTheme: CardTheme;
}
declare const _default: CardTheme;
export default _default;
