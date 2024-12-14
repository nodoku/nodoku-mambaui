import {JSX} from "react";
import {HeroOneTheme} from "./hero-one-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps, NdCallToAction} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import Backgrounds = NodokuComponents.Backgrounds;
import {ts, tsi} from "nodoku-core";
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
        i18nextTrustedHtmlProvider,
        defaultThemeName
    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: HeroOneTheme = mergeTheme(theme, defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextTrustedHtmlProvider(lng);

    // console.log("effective theme", effectiveTheme)

    const paragraphs = await Paragraphs({
        lng: lng,
        blockParagraphs: block.paragraphs,
        paragraphTheme: effectiveTheme.paragraphStyle || paragraphDefaultTheme,
        codeHighlightTheme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultTheme,
        listTheme: effectiveTheme.listTheme || listCompDefaultTheme,
        defaultThemeName: defaultThemeName,
        i18nextTrustedHtmlProvider: i18nextTrustedHtmlProvider
    });

    const backgrounds = await Backgrounds({
        lng: lng,
        defaultThemeName: defaultThemeName,
        bgColorStyle: effectiveTheme.bgColorStyle,
        bgImageStyle: effectiveTheme.bgImageStyle
    });

    return (
        <section className={`relative ${ts(effectiveTheme, "containerStyle")}`}>

            {backgrounds}

            <div
                className={`${ts(effectiveTheme, "innerContainerStyle")}`}>
                {block.title &&
                    <h1 className={`${ts(effectiveTheme, "titleStyle")}`}
                        dangerouslySetInnerHTML={t(block.title)}/>
                }
                {block.subTitle &&
                    <h3 className={`${ts(effectiveTheme, "subTitleStyle")}`}
                        dangerouslySetInnerHTML={t(block.subTitle)}/>
                }

                {paragraphs}

                <div key={`hero-one-${rowIndex}-${componentIndex}-cta-container`} className={`${ts(effectiveTheme, "ctaContainerStyle")}`}>
                    {block.callToActions.map((cta: NdCallToAction, i: number) => (
                        <a key={`hero-one-${rowIndex}-${componentIndex}-cta-${i}`} href={t(cta.ctaUrl).__html as string}>
                            <button type={"button"}
                                    className={`${tsi(effectiveTheme, "ctaButtonStyle", i)}`}
                                    dangerouslySetInnerHTML={t(cta.ctaTitle || cta.ctaUrl)}/>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );

}