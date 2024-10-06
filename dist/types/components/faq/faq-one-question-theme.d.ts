import { ThemeStyle } from "nodoku-core";
import { NodokuComponents } from "nodoku-components";
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
export declare class FaqOneQuestionTheme {
    className?: string;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    imageContainerStyle?: ThemeStyle;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;
    static defaultTheme: FaqOneQuestionTheme;
}
declare const _default: FaqOneQuestionTheme;
export default _default;
