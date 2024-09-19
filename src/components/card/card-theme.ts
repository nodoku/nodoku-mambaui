import {NdDefaultThemeName, ThemeStyle} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import HighlightedCodeTheme = NodokuComponents.HighlightedCodeTheme;
import ListCompTheme = NodokuComponents.ListCompTheme;

export class CardTheme {

    className?: string;
    containerStyle?: ThemeStyle;
    bgImageStyle?: ThemeStyle;
    bgColorStyle?: ThemeStyle;
    imageStyle?: ThemeStyle;
    innerContainerStyle?: ThemeStyle;
    titleStyle?: ThemeStyle;
    subTitleStyle?: ThemeStyle;
    paragraphStyle?: ThemeStyle;
    footerContainerStyle?: ThemeStyle;
    footerButtonStyle?: ThemeStyle;
    codeHighlightTheme?: HighlightedCodeTheme;
    listTheme?: ListCompTheme;

    static defaultTheme: CardTheme = {

        // containerStyle: {
        //     base: "mx-auto mt-4 shadow-lg rounded-md duration-300 hover:shadow-sm",
        //     decoration: "border"
        // },
        //
        // bgImageStyle: {
        //     base: "-z-20 bg-cover bg-no-repeat",
        //     decoration: "blur-sm "
        // },
        //
        // bgColorStyle: {
        //     base: "-z-10",
        //     decoration: "opacity-50 bg-white dark:bg-gray-700"
        // },
        //
        // imageStyle: {
        //     base: "w-full h-48 rounded-t-md",
        //     decoration: "",
        // },
        //
        // innerContainerStyle: {
        //     base: "pt-3 mx-6 mb-6",
        //     decoration: ""
        // },
        //
        // titleStyle: {
        //     base: "text-2xl mt-3 mb-4",
        //     decoration: ""
        // },
        //
        // subTitleStyle: {
        //     base: "text-xl mt-3 mb-4",
        //     decoration: "text-gray-600 dark:text-gray-300"
        // },
        //
        // paragraphStyle: {
        //     base: " mt-2 mb-2",
        //     decoration: ""
        // },
        //
        // footerContainerStyle: {
        //     base: "absolute bottom-0 right-0",
        //     decoration: "p-3"
        // },
        //
        // footerButtonStyle: {
        //     base: "inline-flex items-center text-center focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
        //     decoration: "px-3 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg dark:bg-blue-600 dark:hover:bg-blue-700"
        // },
        //
        // codeHighlightTheme: {
        //     light: "a11y-light",
        //     dark: "a11y-dark"
        // },


    }

}

export default CardTheme.defaultTheme;

