import {ThemeStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ParagraphTheme = NodokuComponents.ParagraphTheme;

export type FaqOneQuestionTheme = {

    className?: string;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    imageContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ParagraphTheme;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;

}

export const defaultTheme: FaqOneQuestionTheme = {

}


// export default FaqOneQuestionTheme.defaultTheme;