import {ThemeStyle, ImageStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;
import ParagraphTheme = NodokuComponents.ParagraphTheme;

export type CardTheme = {

    className?: string;
    containerStyle?: ThemeStyle;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    imageStyle?: ImageStyle;
    innerContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ParagraphTheme;
    ctaContainerStyle?: ThemeStyle;
    ctaButtonStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;


}

export const defaultTheme: CardTheme = {

}

// export default CardTheme.defaultTheme;

