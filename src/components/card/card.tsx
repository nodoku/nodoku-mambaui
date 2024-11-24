import {JSX} from "react";
import {CardTheme} from "./card-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import {ts} from "nodoku-core";
import paragraphDefaultTheme = NodokuComponents.paragraphDefaultTheme;
import highlightedCodeDefaultTheme = NodokuComponents.highlightedCodeDefaultTheme;
import listCompDefaultTheme = NodokuComponents.listCompDefaultTheme;


export async function CardImpl(props: NdSkinComponentProps<CardTheme, void>): Promise<JSX.Element> {

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

    let effectiveTheme: CardTheme = mergeTheme(theme, CardTheme.defaultTheme);
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
    })

    return (
        <div className={`relative ${ts(effectiveTheme, "containerStyle")} ${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>

            {/*<img src={imgUrl} alt={alt && t(alt)}*/}
            {/*     className={`${effectiveTheme.imageStyle?.base} ${effectiveTheme.imageStyle?.decoration}`}/>*/}
            {await imageProvider({url: t(url), alt: alt && t(alt), imageStyle: effectiveTheme.imageStyle})}

            <div className={`${ts(effectiveTheme, "innerContainerStyle")} ${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
                <div className="space-y-2">
                    {block.title &&
                        <h2 className={`${ts(effectiveTheme, "titleStyle")} ${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.title)}} />
                    }
                    {block.subTitle &&
                        <h2 className={`${ts(effectiveTheme, "subTitleStyle")} ${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.subTitle)}} />
                    }

                    {paragraphs}

                </div>
                {block.footer &&
                    <div className={`${ts(effectiveTheme, "footerContainerStyle")} ${effectiveTheme.footerContainerStyle?.base} ${effectiveTheme.footerContainerStyle?.decoration}`}>
                        <button type="button"
                                className={`${ts(effectiveTheme, "footerButtonStyle")} ${effectiveTheme.footerButtonStyle?.base} ${effectiveTheme.footerButtonStyle?.decoration}`}>
                            <span dangerouslySetInnerHTML={{__html: t(block.footer)}}/>
                        </button>
                    </div>
                }
            </div>
        </div>
    )

}