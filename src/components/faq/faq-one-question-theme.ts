import {ThemeStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ParagraphTheme = NodokuComponents.ParagraphTheme;
import TypographyTheme = NodokuComponents.TypographyTheme;

export type FaqOneQuestionTheme = {

    className?: string;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    typographyTheme?: TypographyTheme

    // imageContainerStyle?: ThemeStyle;
    // subTitleStyle?: ThemeStyle;
    // paragraphStyle?: ParagraphTheme;
    // codeHighlightTheme?: HighlightedCodeTheme;
    // listTheme?: ListCompTheme;

}

export const defaultTheme: FaqOneQuestionTheme = {

}


// export default FaqOneQuestionTheme.defaultTheme;