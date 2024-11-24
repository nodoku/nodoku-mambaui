import {ThemeStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import {ImageStyle} from "nodoku-core";
import ParagraphTheme = NodokuComponents.ParagraphTheme;

export class HeroRightTextTheme {

    className?: string;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    imageContainerStyle?: ThemeStyle;
    imageStyle?: ImageStyle;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    contentContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ParagraphTheme;
    footerContainerStyle?: ThemeStyle;
    footerStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;

    static defaultTheme: HeroRightTextTheme = {

    }

}

export default HeroRightTextTheme.defaultTheme;