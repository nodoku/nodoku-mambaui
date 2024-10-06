import {JSX} from "react";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {FaqHeaderTheme} from "./faq-header-theme";


export async function FaqHeaderImpl(props: NdSkinComponentProps<FaqHeaderTheme, void>): Promise<JSX.Element> {

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

    let effectiveTheme: FaqHeaderTheme = mergeTheme(theme, FaqHeaderTheme.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    var style: React.CSSProperties = block.bgImageUrl ? {
        backgroundImage: `url(${t(block.bgImageUrl.key, block.bgImageUrl.ns)})`
    } : {};

    // console.log("effective theme", effectiveTheme)

    // const {url, alt} = block.images[0];

    const absZero = "absolute top-0 left-0 right-0 bottom-0";


    return (
        <section
            className={`${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            <div className={`${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
                {block.title &&
                    <h2 className={`${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                        dangerouslySetInnerHTML={{__html: t(block.title.key, block.title.ns)}}/>
                }
                {block.subTitle &&
                    <h4 className={`${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}
                        dangerouslySetInnerHTML={{__html: t(block.subTitle.key, block.subTitle.ns)}}/>
                }
            </div>
        </section>
    )
}