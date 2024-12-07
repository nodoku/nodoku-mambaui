import {JSX} from "react";
import {CardTheme} from "./card-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import {ts} from "nodoku-core";
import paragraphDefaultTheme = NodokuComponents.paragraphDefaultTheme;
import highlightedCodeDefaultTheme = NodokuComponents.highlightedCodeDefaultTheme;
import listCompDefaultTheme = NodokuComponents.listCompDefaultTheme;
import {NdCallToAction} from "nodoku-core";
import {defaultTheme} from "./card-theme";


export async function CardImpl(props: NdSkinComponentProps<CardTheme, void>): Promise<JSX.Element> {

    const {
        rowIndex,
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

    let effectiveTheme: CardTheme = mergeTheme(theme, defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    // console.log("effective theme", effectiveTheme)

    const {url, alt} = block.images[0];

    const paragraphs: JSX.Element = await Paragraphs({
        lng: lng,
        blockParagraphs: block.paragraphs,
        paragraphTheme: effectiveTheme.paragraphStyle || paragraphDefaultTheme,
        codeHighlightTheme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultTheme,
        listTheme: effectiveTheme.listTheme || listCompDefaultTheme,
        defaultThemeName: defaultThemeName,
        i18nextProvider: i18nextProvider
    })

    return (
        <div key={`card-${rowIndex}-${componentIndex}`} className={`relative ${ts(effectiveTheme, "containerStyle")}`}>

            {await imageProvider({url: t(url), alt: alt && t(alt), imageStyle: effectiveTheme.imageStyle})}

            <div key={`card-${rowIndex}-${componentIndex}-innerContainer`} className={`${ts(effectiveTheme, "innerContainerStyle")}`}>
                <div className="space-y-2">
                    {block.title &&
                        <h2 className={`${ts(effectiveTheme, "titleStyle")}`}
                            dangerouslySetInnerHTML={{__html: t(block.title)}} />
                    }
                    {block.subTitle &&
                        <h2 className={`${ts(effectiveTheme, "subTitleStyle")}`}
                            dangerouslySetInnerHTML={{__html: t(block.subTitle)}} />
                    }

                    {paragraphs}

                </div>
                {block.callToActions.map((cta: NdCallToAction, i) => (
                    <div key={`card-${rowIndex}-${componentIndex}-cta-${i}`} className={`${ts(effectiveTheme, "ctaContainerStyle")}`}>
                        <a href={t(cta.ctaUrl)}>
                             <button type="button"
                                    className={`${ts(effectiveTheme, "ctaButtonStyle")}`}>
                                <span dangerouslySetInnerHTML={{__html: t(cta.ctaTitle || cta.ctaUrl)}}/>
                            </button>
                        </a>
                    </div>))
                }
            </div>
        </div>
    )

}