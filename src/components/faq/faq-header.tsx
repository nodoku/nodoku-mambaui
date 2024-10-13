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

    // console.log("effective theme", effectiveTheme)

    return (
        <section
            className={`${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            <div className={`${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
                {block.title &&
                    <h2 className={`${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                        dangerouslySetInnerHTML={{__html: t(block.title)}}/>
                }
                {block.subTitle &&
                    <h4 className={`${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}
                        dangerouslySetInnerHTML={{__html: t(block.subTitle)}}/>
                }
            </div>
        </section>
    )
}