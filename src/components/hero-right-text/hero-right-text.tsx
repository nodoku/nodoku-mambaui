import {JSX} from "react";
import {HeroRightTextTheme} from "./hero-right-text-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import Backgrounds = NodokuComponents.Backgrounds;
import {ts} from "nodoku-core";
import paragraphDefaultTheme = NodokuComponents.paragraphDefaultTheme;
import highlightedCodeDefaultTheme = NodokuComponents.highlightedCodeDefaultTheme;
import listCompDefaultTheme = NodokuComponents.listCompDefaultTheme;


export async function HeroRightTextImpl(props: NdSkinComponentProps<HeroRightTextTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        imageProvider,
        i18nextProvider,
        defaultThemeName} = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: HeroRightTextTheme = mergeTheme(theme, HeroRightTextTheme.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    // console.log("effective theme", effectiveTheme)

    const {url, alt} = block.images[0];

    // const imgUrl = await imageUrlProvider(t(url));

    const paragraphs = await Paragraphs({
        lng: lng,
        blockParagraphs: block.paragraphs,
        paragraphTheme: effectiveTheme.paragraphStyle || paragraphDefaultTheme,
        codeHighlightTheme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultTheme,
        listTheme: effectiveTheme.listTheme || listCompDefaultTheme,
        defaultThemeName: defaultThemeName,
        i18nextProvider: i18nextProvider
    });

    const backgrounds = await Backgrounds({
        lng: lng,
        defaultThemeName: defaultThemeName,
        bgColorStyle: effectiveTheme.bgColorStyle,
        bgImageStyle: effectiveTheme.bgImageStyle,
        i18nextProvider: i18nextProvider,
        // bgImageUrl: block.bgImageUrl,
        // imageUrlProvider: imageUrlProvider
    });

    return (
        <section className={`relative ${ts(effectiveTheme, "containerStyle")} ${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            {backgrounds}

            <div
                className={`${ts(effectiveTheme, "innerContainerStyle")} ${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
                <div
                    className={`${ts(effectiveTheme, "imageContainerStyle")} ${effectiveTheme.imageContainerStyle?.base} ${effectiveTheme.imageContainerStyle?.decoration}`}>
                    {/*<img src={imgUrl} alt=""*/}
                    {/*     className={`${effectiveTheme.imageStyle?.base} ${effectiveTheme.imageStyle?.decoration}`}/>*/}
                    {await imageProvider({url: t(url), alt: alt && t(alt), imageStyle: effectiveTheme.imageStyle})}
                </div>
                <div
                    className={`${ts(effectiveTheme, "contentContainerStyle")} ${effectiveTheme.contentContainerStyle?.base} ${effectiveTheme.contentContainerStyle?.decoration}`}>
                    {block.title &&
                        <h1 className={`${ts(effectiveTheme, "titleStyle")} ${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.title)}} />
                    }

                    {block.subTitle &&
                        <h3 className={`${ts(effectiveTheme, "subTitleStyle")} ${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.subTitle)}} />
                    }

                    {paragraphs}

                    {block.footer &&
                        <div
                            className={`${ts(effectiveTheme, "footerContainerStyle")} ${effectiveTheme.footerContainerStyle?.base} ${effectiveTheme.footerContainerStyle?.decoration}`}>
                            <a rel="noopener noreferrer" href="#"
                               className={`${ts(effectiveTheme, "footerStyle")} ${effectiveTheme.footerStyle?.base} ${effectiveTheme.footerStyle?.decoration}`}>
                                <span dangerouslySetInnerHTML={{__html: t(block.footer)}}/>

                            </a>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}