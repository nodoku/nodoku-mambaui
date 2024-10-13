import {JSX} from "react";
import {CardTheme} from "./card-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;


export async function CardImpl(props: NdSkinComponentProps<CardTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        imageUrlProvider,
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

    const imgUrl = await imageUrlProvider(t(url));

    const paragraphs = await Paragraphs({
        lng: lng,
        blockParagraphs: block.paragraphs,
        paragraphStyle: effectiveTheme.paragraphStyle,
        codeHighlightTheme: effectiveTheme.codeHighlightTheme!,
        listTheme: effectiveTheme.listTheme!,
        defaultThemeName: defaultThemeName,
        i18nextProvider: i18nextProvider
    })

    return (
        <div className={`relative ${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>

            <img src={imgUrl} alt={alt && t(alt)}
                 className={`${effectiveTheme.imageStyle?.base} ${effectiveTheme.imageStyle?.decoration}`}/>

            <div className={`${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
                <div className="space-y-2">
                    {block.title &&
                        <h2 className={`${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.title)}} />
                    }
                    {block.subTitle &&
                        <h2 className={`${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.subTitle)}} />
                    }

                    {paragraphs}

                </div>
                {block.footer &&
                    <div className={`${effectiveTheme.footerContainerStyle?.base} ${effectiveTheme.footerContainerStyle?.decoration}`}>
                        <button type="button"
                                className={`${effectiveTheme.footerButtonStyle?.base} ${effectiveTheme.footerButtonStyle?.decoration}`}>
                            {t(block.footer)}
                        </button>
                    </div>
                }
            </div>
        </div>
    )

}