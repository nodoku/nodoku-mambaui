import {ThemeStyle, ImageStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ParagraphTheme = NodokuComponents.ParagraphTheme;

export type FooterFourTheme = {

    className?: string;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    contentContainerStyle?: ThemeStyle;
    imageStyle?: ImageStyle;
    imageContainerStyle?: ThemeStyle;
    brandNameStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    sectionTitleStyle?: ThemeStyle
    copyrightNoticeStyle?: ThemeStyle


}

export const defaultTheme: FooterFourTheme = {

}

// export default HeroLeftTextTheme.defaultTheme;