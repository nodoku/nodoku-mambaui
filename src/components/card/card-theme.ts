import {ThemeStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;
import {ImageStyle} from "nodoku-core";

export class CardTheme {

    className?: string;
    containerStyle?: ThemeStyle;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    imageStyle?: ImageStyle;
    innerContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ThemeStyle;
    footerContainerStyle?: ThemeStyle;
    footerButtonStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;

    static defaultTheme: CardTheme = {

    }

}

export default CardTheme.defaultTheme;

