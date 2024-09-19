import {JSX} from "react";
import {CardTheme} from "./card-theme";
import {NdCode, NdContentBlock, NdList, NdSkinComponentProps, NdTranslatedText} from "nodoku-core";
import {mergeTheme} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import HighlightedCode = NodokuComponents.HighlightedCode;
import ListComp = NodokuComponents.ListComp;



export async function CardImpl(props: NdSkinComponentProps<CardTheme, void>): Promise<JSX.Element> {

    const {componentIndex, content, theme, themes, lng, i18nextProvider, defaultThemeName} = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: CardTheme = mergeTheme(theme, CardTheme.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    var style: React.CSSProperties = block.bgImage ? {
        backgroundImage: `url(${t(block.bgImage.url.key, block.bgImage?.url?.ns)})`
    } : {};

    // console.log("effective theme", effectiveTheme)

    const {url, alt} = block.images[0];

    const absZero = "absolute top-0 left-0 right-0 bottom-0";

    return (
        // <article className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm relative pb-12" >
        <article className={`relative ${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            <div className={`${absZero} ${effectiveTheme.bgImageStyle?.base} ${effectiveTheme.bgImageStyle?.decoration}`} style={style} />
            <div className={`${absZero} ${effectiveTheme.bgColorStyle?.base} ${effectiveTheme.bgColorStyle?.decoration}`} />
            {url && <img
                src={t(url.key, url.ns)} alt={alt && t(alt.key, alt.ns)}
                loading="lazy"
                className={`${effectiveTheme.imageStyle?.base} ${effectiveTheme.imageStyle?.decoration}`}/>}

            <div
                className={`relative ${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration} pb-20`}>
                {block.title &&
                    // <h3 className="text-2xl text-gray-900 mt-3 mb-4" dangerouslySetInnerHTML={{ __html: t(block.title.key, block.title.ns) }} >
                    <h3 className={`${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                        dangerouslySetInnerHTML={{__html: t(block.title.key, block.title.ns)}}/>
                }
                {block.subTitle &&
                    // <h4 className="text-xl text-gray-900 mt-3 mb-4"
                    <h4 className={`${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}
                        dangerouslySetInnerHTML={{__html: t(block.subTitle.key, block.subTitle.ns)}}/>
                }
                {await Promise.all(block.paragraphs.map(async (p: NdTranslatedText | NdList | NdCode) => {
                    if (p instanceof NdTranslatedText) {
                        // return <p className="text-gray-700 text-sm mt-2" dangerouslySetInnerHTML={{ __html: t(p.key, p.ns)}}></p>
                        return <p
                            className={`${effectiveTheme.paragraphStyle?.base} ${effectiveTheme.paragraphStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(p.key, p.ns)}}/>
                    }
                    if (p instanceof NdCode) {
                        return await HighlightedCode({
                            code: p as NdCode,
                            theme: effectiveTheme.codeHighlightTheme!,
                            defaultThemeName: defaultThemeName
                        })
                    } else {
                        return await ListComp({
                            list: p as NdList,
                            lng: lng,
                            i18nextProvider: i18nextProvider,
                            listTheme: effectiveTheme.listTheme!
                        })
                        // return await <ListComp list={p as NdList} lng={lng} i18nextProvider={i18nextProvider} />
                    }
                }))}

                {block.footer &&
                    <div className={"absolute bottom-0 right-0"}>

                        <a href="#"
                           className={`${effectiveTheme.footerButtonStyle?.base} ${effectiveTheme.footerButtonStyle?.decoration}`}>
                            {t(block.footer.key, block.footer.ns)}
                            <svg className={"rtl:rotate-180 w-3.5 h-3.5 ms-2"} aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                      d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                }

            </div>
        </article>
    )

}