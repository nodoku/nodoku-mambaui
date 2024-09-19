import {JSX} from "react";
import {HeroLeftTextTheme} from "./hero-left-text-theme";
import {NdCode, NdContentBlock, NdList, NdSkinComponentProps, NdTranslatedText} from "nodoku-core";
import {mergeTheme} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import ListComp = NodokuComponents.ListComp;
import HighlightedCode = NodokuComponents.HighlightedCode;


export async function HeroLeftTextImpl(props: NdSkinComponentProps<HeroLeftTextTheme, void>): Promise<JSX.Element> {

    const {componentIndex, content, theme, themes, lng, i18nextProvider, defaultThemeName} = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: HeroLeftTextTheme = mergeTheme(theme, HeroLeftTextTheme.defaultTheme);
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
        <section className={`relative ${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            <div className={`${absZero} ${effectiveTheme.bgImageStyle?.base} ${effectiveTheme.bgImageStyle?.decoration}`} style={style}/>
            <div className={`${absZero} ${effectiveTheme.bgColorStyle?.base} ${effectiveTheme.bgColorStyle?.decoration}`}/>

            <div className={`${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.base}`}>
                {block.title &&
                    <h1 className={`${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}>
                        {t(block.title.key, block.title.ns)}
                    </h1>
                }
                {block.subTitle &&
                    <h2 className={`${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}>
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
                    <div className={`${effectiveTheme.footerStyle?.base} ${effectiveTheme.footerStyle?.decoration}`}>
                        <a href="#"
                           className={`${effectiveTheme.footerButtonStyle?.base} ${effectiveTheme.footerButtonStyle?.decoration}`}>
                            {t(block.footer.key, block.footer.ns)}
                        </a>
                    </div>
                }
            </div>
            <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                <img src={t(url.key, url.ns)} alt={alt && t(alt.key, alt.ns)}
                     className={`${effectiveTheme.rightImageStyle?.base} ${effectiveTheme.rightImageStyle?.decoration}`}/>
            </div>
        </section>
    )

}