import {JSX} from "react";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {FaqHeaderTheme} from "./faq-header-theme";
import {ts} from "nodoku-core";
import {defaultTheme} from "./faq-header-theme";

export async function FaqHeaderImpl(props: NdSkinComponentProps<FaqHeaderTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        i18nextTrustedHtmlProvider
    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: FaqHeaderTheme = mergeTheme(theme, defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextTrustedHtmlProvider(lng);

    // console.log("effective theme", effectiveTheme)

    return (
        <section className={`${ts(effectiveTheme, "containerStyle")}`}>
            <div className={`${ts(effectiveTheme, "innerContainerStyle")}`}>
                {block.title &&
                    <h2 className={`${ts(effectiveTheme, "titleStyle")}`}
                        dangerouslySetInnerHTML={t(block.title)}/>
                }
                {block.subTitle &&
                    <h4 className={`${ts(effectiveTheme, "subTitleStyle")}`}
                        dangerouslySetInnerHTML={t(block.subTitle)}/>
                }
            </div>
        </section>
    )
}