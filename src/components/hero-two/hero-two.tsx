import {JSX} from "react";
import {HeroTwoTheme} from "./hero-two-theme";
import {NdCode, NdContentBlock, NdList, NdSkinComponentProps, NdTranslatedText} from "nodoku-core";
import {mergeTheme} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import HighlightedCode = NodokuComponents.HighlightedCode;
import ListComp = NodokuComponents.ListComp;
import Paragraphs = NodokuComponents.Paragraphs;
import Backgrounds = NodokuComponents.Backgrounds;


export async function HeroTwoImpl(props: NdSkinComponentProps<HeroTwoTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        i18nextProvider,
        defaultThemeName,
        imageUrlProvider
    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: HeroTwoTheme = mergeTheme(theme, HeroTwoTheme.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    var style: React.CSSProperties = block.bgImageUrl ? {
        backgroundImage: `url(${t(block.bgImageUrl.key, block.bgImageUrl?.ns)})`
    } : {};

    // console.log("effective theme", effectiveTheme)

    // const backgrounds: JSX.Element[] = [];
    //
    // const lightClassName = "light:inline-block dark:hidden " + (defaultThemeName === "light" ? "inline-block" : "hidden")
    // const darkClassName = "light:hidden dark:inline-block " + (defaultThemeName === "dark" ? "inline-block" : "hidden")
    //
    // if (effectiveTheme.bgColorStyle?.css?.light) {
    //     backgrounds.push(<div
    //         className={`absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ${lightClassName}`}
    //         style={effectiveTheme.bgColorStyle?.css?.light}>lala light</div>);
    // }
    // if (effectiveTheme.bgColorStyle?.css?.dark) {
    //     backgrounds.push(<div
    //         className={`absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ${darkClassName}`}
    //         style={effectiveTheme.bgColorStyle?.css?.dark}>lala dark</div>);
    // }

    const paragraphs = await Paragraphs({
        lng: lng,
        blockParagraphs: block.paragraphs,
        paragraphStyle: effectiveTheme.paragraphStyle,
        codeHighlightTheme: effectiveTheme.codeHighlightTheme!,
        listTheme: effectiveTheme.listTheme!,
        defaultThemeName: defaultThemeName,
        i18nextProvider: i18nextProvider
    });

    const backgrounds = await Backgrounds({
        lng: lng,
        defaultThemeName: defaultThemeName,
        bgColorStyle: effectiveTheme.bgColorStyle,
        bgImageStyle: effectiveTheme.bgImageStyle,
        i18nextProvider: i18nextProvider,
        bgImageUrl: block.bgImageUrl,
        imageUrlProvider: imageUrlProvider
    });

    return (
        <section className={"relative"}>
            {backgrounds}
            <div className={`${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
                <div
                    className={`${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
                    {block.title &&
                        <h1 className={`${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.title.key, block.title.ns)}} />
                    }

                    {block.subTitle &&
                        <h3 className={`${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.subTitle.key, block.subTitle.ns)}} />
                    }

                    {paragraphs}

                    {/*<p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900 dark:text-gray-50">*/}
                    {/*    Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!*/}
                    {/*</p>*/}

                    {block.footer &&
                        <div className={`${effectiveTheme.footerContainerStyle?.base} ${effectiveTheme.footerContainerStyle?.decoration}`}>
                            <button type="button"
                                    className={`${effectiveTheme.footerStyle?.base} ${effectiveTheme.footerStyle?.decoration}`}>
                                {t(block.footer.key, block.footer.ns)}
                            </button>
                        </div>
                    }

                </div>
            </div>
        </section>
    )

}