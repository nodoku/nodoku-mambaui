import {NdDefaultThemeName, ThemeStyle} from "nodoku-core";
import {ExtendedThemeStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;

export class HeroTwoTheme {

    className?: string;
    containerStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ExtendedThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ThemeStyle;
    footerContainerStyle?: ThemeStyle;
    footerStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;

    static defaultTheme: HeroTwoTheme = {

    }

}

export default HeroTwoTheme.defaultTheme;