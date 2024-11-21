import {JSX} from "react";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {FaqOneQuestionTheme} from "./faq-one-question-theme";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;


export async function FaqOneQuestionImpl(props: NdSkinComponentProps<FaqOneQuestionTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        // imageUrlProvider,
        i18nextProvider,
        defaultThemeName} = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: FaqOneQuestionTheme = mergeTheme(theme, FaqOneQuestionTheme.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    // var style: React.CSSProperties = block.bgImageUrl ? {
    //     backgroundImage: `url(${t(block.bgImageUrl)})`
    // } : {};

    // console.log("effective theme", effectiveTheme)

    // const {url, alt} = block.images[0];

    const absZero = "absolute top-0 left-0 right-0 bottom-0";

    // const imgUrl = await imageUrlProvider(t(url.key, url.ns));

    return (
        <section className={`relative ${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            <div className={`${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
                <details open={false}>
                    {block.title &&
                        <summary className={`${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                             dangerouslySetInnerHTML={{__html: t(block.title)}} />
                    }
                    {/*<div className="">*/}
                    {/*    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde neque in fugiat magni, quas*/}
                    {/*        animi enim veritatis deleniti ex. Impedit.</p>*/}
                    {/*</div>*/}

                    {await Paragraphs({
                        lng: lng,
                        blockParagraphs: block.paragraphs,
                        paragraphStyle: effectiveTheme.paragraphStyle,
                        codeHighlightTheme: effectiveTheme.codeHighlightTheme!,
                        listTheme: effectiveTheme.listTheme!,
                        defaultThemeName: defaultThemeName,
                        i18nextProvider: i18nextProvider
                    })}
                </details>
            </div>
        </section>
    )
}