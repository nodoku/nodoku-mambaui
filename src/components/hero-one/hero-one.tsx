import {JSX} from "react";
import {HeroOneTheme} from "./hero-one-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps, NdCallToAction} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import Backgrounds = NodokuComponents.Backgrounds;
import {ts} from "nodoku-core";
import paragraphDefaultTheme = NodokuComponents.paragraphDefaultTheme;
import highlightedCodeDefaultTheme = NodokuComponents.highlightedCodeDefaultTheme;
import listCompDefaultTheme = NodokuComponents.listCompDefaultTheme;
import {defaultTheme} from "./hero-one-theme";


export async function HeroOneImpl(props: NdSkinComponentProps<HeroOneTheme, void>): Promise<JSX.Element> {

    const {
        rowIndex,
        componentIndex,
        content,
        theme,
        themes,
        lng,
        i18nextProvider,
        defaultThemeName
    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: HeroOneTheme = mergeTheme(theme, defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

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
        i18nextProvider: i18nextProvider
    });


    return (
        <section className={`relative ${ts(effectiveTheme, "containerStyle")}`}>

            {backgrounds}

            <div
                className={`${ts(effectiveTheme, "innerContainerStyle")}`}>
                {block.title &&
                    <h1 className={`${ts(effectiveTheme, "titleStyle")}`}
                        dangerouslySetInnerHTML={{__html: t(block.title)}}/>
                }
                {block.subTitle &&
                    <h3 className={`${ts(effectiveTheme, "subTitleStyle")}`}
                        dangerouslySetInnerHTML={{__html: t(block.subTitle)}}/>
                }

                {paragraphs}

                {block.callToActions.map((cta: NdCallToAction, i) => (
                    <div key={`hero-one-${rowIndex}-${componentIndex}-cta-${i}`} className={`${ts(effectiveTheme, "footerContainerStyle")}`}>
                        <a href={t(cta.ctaUrl)}>
                            <button type={"button"}
                                    className={`${ts(effectiveTheme, "footerStyle")}`}
                                    dangerouslySetInnerHTML={{__html: t(cta.ctaTitle || cta.ctaUrl)}}/>
                        </a>
                    </div>))
                }
            </div>
        </section>
    );

}