import { ThemeStyle } from "nodoku-core";
import { ExtendedThemeStyle } from "nodoku-core";
import { NodokuComponents } from "nodoku-components";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;
import ParagraphTheme = NodokuComponents.ParagraphTheme;
export declare class HeroTwoTheme {
    className?: string;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ExtendedThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ParagraphTheme;
    footerContainerStyle?: ThemeStyle;
    footerStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;
    static defaultTheme: HeroTwoTheme;
}
declare const _default: HeroTwoTheme;
export default _default;
