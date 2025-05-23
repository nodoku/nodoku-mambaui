import {ExtendedThemeStyle, ThemeStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;
import ParagraphTheme = NodokuComponents.ParagraphTheme;

export type HeroTwoTheme = {

    className?: string;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ExtendedThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ParagraphTheme;
    ctaContainerStyle?: ThemeStyle;
    ctaButtonStyle?: ThemeStyle[];
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;

}

export const defaultTheme: HeroTwoTheme = {

}

// export default HeroTwoTheme.defaultTheme;