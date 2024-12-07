import {JSX} from "react";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {FaqOneQuestionTheme} from "./faq-one-question-theme";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import {ts} from "nodoku-core";
import paragraphDefaultTheme = NodokuComponents.paragraphDefaultTheme;
import highlightedCodeDefaultTheme = NodokuComponents.highlightedCodeDefaultTheme;
import listCompDefaultTheme = NodokuComponents.listCompDefaultTheme;
import {defaultTheme} from "./faq-one-question-theme";


export async function FaqOneQuestionImpl(props: NdSkinComponentProps<FaqOneQuestionTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        i18nextProvider,
        defaultThemeName
    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: FaqOneQuestionTheme = mergeTheme(theme, defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    // console.log("effective theme", effectiveTheme)

    return (
        <section className={`relative ${ts(effectiveTheme, "containerStyle")}`}>
            <div className={`${ts(effectiveTheme, "innerContainerStyle")}`}>
                <details open={false}>
                    {block.title &&
                        <summary className={`${ts(effectiveTheme, "titleStyle")}`}
                             dangerouslySetInnerHTML={{__html: t(block.title)}} />
                    }

                    {await Paragraphs({
                        lng: lng,
                        blockParagraphs: block.paragraphs,
                        paragraphTheme: effectiveTheme.paragraphStyle || paragraphDefaultTheme,
                        codeHighlightTheme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultTheme,
                        listTheme: effectiveTheme.listTheme || listCompDefaultTheme,
                        defaultThemeName: defaultThemeName,
                        i18nextProvider: i18nextProvider
                    })}
                </details>
            </div>
        </section>
    )
}