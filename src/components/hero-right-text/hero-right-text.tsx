import {JSX} from "react";
import {HeroRightTextTheme} from "./hero-right-text-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps, NdCallToAction} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import Backgrounds = NodokuComponents.Backgrounds;
import {ts, tsi} from "nodoku-core";
import paragraphDefaultTheme = NodokuComponents.paragraphDefaultTheme;
import highlightedCodeDefaultTheme = NodokuComponents.highlightedCodeDefaultTheme;
import listCompDefaultTheme = NodokuComponents.listCompDefaultTheme;
import {defaultTheme} from "./hero-right-text-theme";


export async function HeroRightTextImpl(props: NdSkinComponentProps<HeroRightTextTheme, void>): Promise<JSX.Element> {

    const {
        rowIndex,
        componentIndex,
        content,
        theme,
        themes,
        lng,
        imageProvider,
        i18nextTrustedHtmlProvider,
        defaultThemeName
    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: HeroRightTextTheme = mergeTheme(theme, defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextTrustedHtmlProvider(lng);

    // console.log("effective theme", effectiveTheme)

    const {url, alt} = block.images[0];

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
                <div className={`${ts(effectiveTheme, "imageContainerStyle")}`}>
                    {await imageProvider({url: t(url).__html as string, alt: alt && t(alt).__html as string, imageStyle: effectiveTheme.imageStyle})}
                </div>
                <div className={`${ts(effectiveTheme, "contentContainerStyle")}`}>
                    {block.title &&
                        <h1 className={`${ts(effectiveTheme, "titleStyle")}`}
                            dangerouslySetInnerHTML={t(block.title)} />
                    }

                    {block.subTitle &&
                        <h3 className={`${ts(effectiveTheme, "subTitleStyle")}`}
                            dangerouslySetInnerHTML={t(block.subTitle)} />
                    }

                    {paragraphs}

                    <div className={`${ts(effectiveTheme, "ctaContainerStyle")}`}>
                    {block.callToActions.map((cta: NdCallToAction, i) => (

                            <a key={`hero-right-text-${rowIndex}-${componentIndex}-cta-${i}`} rel="noopener noreferrer" href={t(cta.ctaUrl).__html as string}
                               className={`${tsi(effectiveTheme, "ctaButtonStyle", i)}`}>
                                <span dangerouslySetInnerHTML={t(cta.ctaTitle || cta.ctaUrl)}/>

                            </a>
                    ))}
                    </div>
                </div>
            </div>
        </section>
    )
}