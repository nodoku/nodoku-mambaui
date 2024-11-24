import {JSX} from "react";
import {HeroTwoTheme} from "./hero-two-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import Backgrounds = NodokuComponents.Backgrounds;
import {ts} from "nodoku-core";
import paragraphDefaultTheme = NodokuComponents.paragraphDefaultTheme;
import highlightedCodeDefaultTheme = NodokuComponents.highlightedCodeDefaultTheme;
import listCompDefaultTheme = NodokuComponents.listCompDefaultTheme;


export async function HeroTwoImpl(props: NdSkinComponentProps<HeroTwoTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        i18nextProvider,
        defaultThemeName,
        // imageUrlProvider
    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: HeroTwoTheme = mergeTheme(theme, HeroTwoTheme.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    // var style: React.CSSProperties = block.bgImageUrl ? {
    //     backgroundImage: `url(${t(block.bgImageUrl)})`
    // } : {};

    // console.log("effective theme", effectiveTheme)

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
        <section className={"relative"}>
            {backgrounds}
            <div className={`${ts(effectiveTheme, "containerStyle")} ${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
                <div
                    className={`${ts(effectiveTheme, "innerContainerStyle")} ${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
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
                        <div className={`${ts(effectiveTheme, "footerContainerStyle")} ${effectiveTheme.footerContainerStyle?.base} ${effectiveTheme.footerContainerStyle?.decoration}`}>
                            <button type={"button"}
                                    className={`${ts(effectiveTheme, "footerStyle")} ${effectiveTheme.footerStyle?.base} ${effectiveTheme.footerStyle?.decoration}`}
                                    dangerouslySetInnerHTML={{__html: t(block.footer)}}/>
                        </div>
                    }

                </div>
            </div>
        </section>
    )

}