import {ThemeStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import ListCompTheme = NodokuComponents.ListCompTheme;
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import {ImageStyle} from "nodoku-core";

export class HeroLeftTextTheme {

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
    paragraphStyle?: ThemeStyle;
    footerContainerStyle?: ThemeStyle;
    footerStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;

    static defaultTheme: HeroLeftTextTheme = {

    }

}

export default HeroLeftTextTheme.defaultTheme;