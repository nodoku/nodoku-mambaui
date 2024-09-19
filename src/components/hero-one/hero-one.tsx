import {JSX} from "react";
import {HeroOneTheme} from "./hero-one-theme";
import {NdCode, NdContentBlock, NdList, NdSkinComponentProps, NdTranslatedText} from "nodoku-core";
import {mergeTheme} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import HighlightedCode = NodokuComponents.HighlightedCode;
import ListComp = NodokuComponents.ListComp;


export async function HeroOneImpl(props: NdSkinComponentProps<HeroOneTheme, void>): Promise<JSX.Element> {

    const {componentIndex, content, theme, themes, lng, i18nextProvider, defaultThemeName} = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: HeroOneTheme = mergeTheme(theme, HeroOneTheme.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    var style: React.CSSProperties = block.bgImage ? {
        backgroundImage: `url(${t(block.bgImage.url.key, block.bgImage?.url?.ns)})`
    } : {};

    // console.log("effective theme", effectiveTheme)

    const backgrounds: JSX.Element[] = [];

    const lightClassName = "light:inline-block dark:hidden " + (defaultThemeName === "light" ? "inline-block" : "hidden")
    const darkClassName = "light:hidden dark:inline-block " + (defaultThemeName === "dark" ? "inline-block" : "hidden")

    if (effectiveTheme.bgColorStyle?.css?.light) {
        backgrounds.push(<div
            className={`absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ${lightClassName}`}
            style={effectiveTheme.bgColorStyle?.css?.light}>lala light</div>);
    }
    if (effectiveTheme.bgColorStyle?.css?.dark) {
        backgrounds.push(<div
            className={`absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ${darkClassName}`}
            style={effectiveTheme.bgColorStyle?.css?.dark}>lala dark</div>);
    }

    return (
        <section className="relative dark:bg-gray-900 bg-gray-100">
            {backgrounds}

            <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    {block.title &&
                        // <h2 className="text-6xl text-white font-extrabold mx-auto md:text-7xl">
                        <h2 className="text-6xl font-extrabold mx-auto md:text-7xl">
                            {t(block.title.key, block.title.ns)}
                        </h2>
                    }
                    {block.subTitle &&
                        // <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                        <h2 className="text-4xl font-extrabold mx-auto md:text-5xl">
                            {t(block.subTitle.key, block.subTitle.ns)}
                        </h2>
                    }
                    {await Promise.all(block.paragraphs.map(async (p: NdTranslatedText | NdList | NdCode) => {
                        if (p instanceof NdTranslatedText) {
                            // return <p className="text-2xl max-w-2xl mx-auto text-gray-400"> {t(p.key, p.ns)} </p>
                            return <p className={`lala ${effectiveTheme.paragraphStyle?.base} ${effectiveTheme.paragraphStyle?.decoration}`}> {t(p.key, p.ns)} </p>
                        } if (p instanceof NdCode) {
                            return await HighlightedCode({code: p as NdCode, theme: effectiveTheme.codeHighlightTheme!, defaultThemeName: defaultThemeName})
                        } else {
                            return await ListComp({list: p as NdList, lng: lng, i18nextProvider: i18nextProvider, listTheme: effectiveTheme.listTheme!})
                            // return await <ListComp list={p as NdList} lng={lng} i18nextProvider={i18nextProvider} />
                        }
                    }))}

                    {block.footer &&
                        <button className={`${effectiveTheme.footerButtonStyle?.base} ${effectiveTheme.footerButtonStyle?.decoration}`}>
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="w-5 h-5">
                                <path fillRule="evenodd"
                                      d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                                      clipRule="evenodd"/>
                            </svg>
                        </button>
                    }
                </div>
            </div>
        </section>
    )

}