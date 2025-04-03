import {JSX} from "react";
import {FooterFourTheme} from "./footer-four-theme";
import {defaultTheme} from "./footer-four-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {ts} from "nodoku-core";
import {NdTranslatableText} from "nodoku-core";
import {extractValueFromText} from "nodoku-core";
import {NdList} from "nodoku-core";
import {NdListItem} from "nodoku-core";
// import {NdLink} from "nodoku-core";


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
    const sections: NdListItem[] = [];
    for (const b of content) {
        if (b.title?.text && b.title.text === "{Brand}") {
            brand = b;
        }
        b.paragraphs.filter(p => p instanceof NdList)
            .forEach(p => p.items.forEach(i => sections.push(i)))
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
                    {brand?.subTitle && <h2 className={ts(effectiveTheme, "subTitleStyle")} dangerouslySetInnerHTML={t(brand.subTitle)}></h2>}
                </div>
                <div className={ts(effectiveTheme, "contentContainerStyle")}>

                    {sections.map((oneListItem: NdListItem, ib) => {
                        return (
                            <div key={`footer-content-block-${ib}`} className="space-y-3">

                                {oneListItem.text && oneListItem.text instanceof NdTranslatableText &&
                                    <h3 className={ts(effectiveTheme, "sectionTitleStyle")} dangerouslySetInnerHTML={t(oneListItem.text)}/>}
                                {oneListItem.subList && oneListItem.subList instanceof NdList &&
                                    <ul className="space-y-1">
                                        {oneListItem.subList.items.map((item: NdListItem, i ) => {
                                            const link = item.text as NdTranslatableText
                                            return <li key={`footer-content-block-${ib}-cta-${i}`} dangerouslySetInnerHTML={t(link)}/>
                                        })}

                                    </ul>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
            {copyrightNotice && <div className={ts(effectiveTheme, "copyrightNoticeStyle")} dangerouslySetInnerHTML={copyrightNoticeText} />}
        </footer>
    )
}
