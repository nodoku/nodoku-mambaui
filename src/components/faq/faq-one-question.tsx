import {JSX} from "react";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {ts} from "nodoku-core";
import {FaqOneQuestionTheme} from "./faq-one-question-theme";
import {defaultTheme} from "./faq-one-question-theme";
import {NodokuComponents} from "nodoku-components";
import Typography = NodokuComponents.Typography;
import TypographyTheme = NodokuComponents.TypographyTheme;


export async function FaqOneQuestionImpl(props: NdSkinComponentProps<FaqOneQuestionTheme, void>): Promise<JSX.Element> {

    const {
        rowIndex,
        componentIndex,
        content,
        theme,
        themes,
        lng,
        i18nextTrustedHtmlProvider,
        defaultThemeName,
        imageProvider,
        clientSideComponentProvider,

    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: FaqOneQuestionTheme = mergeTheme(theme, defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextTrustedHtmlProvider(lng);

    // console.log("effective theme", effectiveTheme)

    const title = block.title;
    // block.title = undefined
    block.htmlElements = block.htmlElements.slice(1)

    const typoProps: NdSkinComponentProps<TypographyTheme, void> = {
        rowIndex,
        componentIndex,
        content: [block],
        defaultThemeName,
        theme: effectiveTheme.typographyTheme,
        themes: [],
        options: undefined,
        lng,
        imageProvider,
        i18nextTrustedHtmlProvider,
        clientSideComponentProvider
    }

    return (
        <section className={`relative ${ts(effectiveTheme, "containerStyle")}`}>
            <div className={`${ts(effectiveTheme, "innerContainerStyle")}`}>
                <details open={false}>
                    {title &&
                        <summary className={`${ts(effectiveTheme, "titleStyle")}`}
                             dangerouslySetInnerHTML={t(title)} />
                    }

                    {await Typography(typoProps)}

                </details>
            </div>
        </section>
    )
}