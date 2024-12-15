import {JSX} from "react";
import {FooterFourTheme} from "./footer-four-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import Backgrounds = NodokuComponents.Backgrounds;
import {ts, tsi} from "nodoku-core";
import paragraphDefaultTheme = NodokuComponents.paragraphDefaultTheme;
import highlightedCodeDefaultTheme = NodokuComponents.highlightedCodeDefaultTheme;
import listCompDefaultTheme = NodokuComponents.listCompDefaultTheme;
import {NdCallToAction} from "nodoku-core";
import {defaultTheme} from "./footer-four-theme";
import {NdTranslatableText} from "nodoku-core";
import {NdContentImage} from "nodoku-core";
import {extractValueFromText} from "nodoku-core";


export async function FooterFourImpl(props: NdSkinComponentProps<FooterFourTheme, void>): Promise<JSX.Element> {

    const {
        rowIndex,
        componentIndex,
        content,
        theme,
        themes,
        lng,
        imageProvider,
        i18nextTrustedHtmlProvider,
        defaultThemeName
    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: FooterFourTheme = mergeTheme(theme, defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    let brand: NdContentBlock | undefined = undefined;
    const sections: NdContentBlock[] = [];
    for (const b of content) {
        if (b.title?.text && b.title.text === "{Brand}") {
            brand = b;
        } else {
            sections.push(b)
        }
    }

    const {t} = await i18nextTrustedHtmlProvider(lng);

    const brandLogo: string = (brand && brand.images.length > 0) ? t(brand.images[0].url).__html as string : "icon:react-icons/ci:CiCircleMinus";
    const copyrightNotice: NdTranslatableText | undefined = brand?.paragraphs
        .find(p => (p instanceof NdTranslatableText) &&
            (p as NdTranslatableText).text.startsWith("{copyrightNotice}")) as NdTranslatableText | undefined;
    const companyName: NdTranslatableText | undefined = brand?.paragraphs
        .find(p => (p instanceof NdTranslatableText) &&
            (p as NdTranslatableText).text.startsWith("{companyName}")) as NdTranslatableText | undefined;

    const companyNameText = extractValueFromText(companyName ? t(companyName) : undefined, "companyName");
    const copyrightNoticeText = extractValueFromText(copyrightNotice ? t(copyrightNotice) : undefined, "copyrightNotice");


    // console.log("effective theme", effectiveTheme)

    return (
        <footer className={ts(effectiveTheme, "containerStyle")}>
            <div className={ts(effectiveTheme, "innerContainerStyle")}>
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className={ts(effectiveTheme, "imageContainerStyle")}>
                            {await imageProvider({
                                url: brandLogo,
                                alt: "logo",
                                imageStyle: effectiveTheme.imageStyle}
                            )}
                        </div>
                        <span className={ts(effectiveTheme, "brandNameStyle")} dangerouslySetInnerHTML={companyNameText} />
                    </a>
                    {brand?.subTitle && <h2 className={ts(effectiveTheme, "subTitleStyle")} dangerouslySetInnerHTML={t(brand?.subTitle)}></h2>}
                </div>
                <div className={ts(effectiveTheme, "contentContainerStyle")}>

                    {sections.map((contentBlock: NdContentBlock, ib) => {
                        return (
                            <div key={`footer-content-block-${ib}`} className="space-y-3">

                                {contentBlock.title &&
                                    <h3 className={ts(effectiveTheme, "sectionTitleStyle")} dangerouslySetInnerHTML={t(contentBlock.title)}/>}
                                <ul className="space-y-1">
                                    {contentBlock.callToActions.map((cta: NdCallToAction, i ) => {
                                        return (
                                            <li key={`footer-content-block-${ib}-cta-${i}`}>
                                                <a rel="noopener noreferrer" href={t(cta.ctaUrl).__html as string} dangerouslySetInnerHTML={t(cta.ctaTitle || cta.ctaUrl)} />
                                            </li>
                                        )
                                    })}

                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            {copyrightNotice && <div className={ts(effectiveTheme, "copyrightNoticeStyle")} dangerouslySetInnerHTML={copyrightNoticeText} />}
        </footer>
    )
}
