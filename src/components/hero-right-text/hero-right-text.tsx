import {JSX} from "react";
import {HeroRightTextTheme} from "./hero-right-text-theme";
import {NdCode, NdContentBlock, NdList, NdSkinComponentProps, NdTranslatedText} from "nodoku-core";
import {mergeTheme} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import ListComp = NodokuComponents.ListComp;
import HighlightedCode = NodokuComponents.HighlightedCode;
import Paragraphs = NodokuComponents.Paragraphs;
import Backgrounds = NodokuComponents.Backgrounds;


export async function HeroRightTextImpl(props: NdSkinComponentProps<HeroRightTextTheme, void>): Promise<JSX.Element> {

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

    let effectiveTheme: HeroRightTextTheme = mergeTheme(theme, HeroRightTextTheme.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    var style: React.CSSProperties = block.bgImageUrl ? {
        backgroundImage: `url(${t(block.bgImageUrl.key, block.bgImageUrl.ns)})`
    } : {};

    // console.log("effective theme", effectiveTheme)

    const {url, alt} = block.images[0];

    const absZero = "absolute top-0 left-0 right-0 bottom-0";

    const imgUrl = await imageUrlProvider(t(url.key, url.ns));

    const paragraphs = await Paragraphs({
        lng: lng,
        blockParagraphs: block.paragraphs,
        paragraphStyle: effectiveTheme.paragraphStyle,
        codeHighlightTheme: effectiveTheme.codeHighlightTheme!,
        listTheme: effectiveTheme.listTheme!,
        defaultThemeName: defaultThemeName,
        i18nextProvider: i18nextProvider
    });

    const backgrounds = await Backgrounds({
        lng: lng,
        defaultThemeName: defaultThemeName,
        bgColorStyle: effectiveTheme.bgColorStyle,
        bgImageStyle: effectiveTheme.bgImageStyle,
        i18nextProvider: i18nextProvider,
        bgImageUrl: block.bgImageUrl,
        imageUrlProvider: imageUrlProvider
    });

    return (
        <section className={`relative ${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            {backgrounds}

            <div
                className={`${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
                <div
                    className={`${effectiveTheme.imageContainerStyle?.base} ${effectiveTheme.imageContainerStyle?.decoration}`}>
                    <img src={imgUrl} alt=""
                         className={`${effectiveTheme.imageStyle?.base} ${effectiveTheme.imageStyle?.decoration}`}/>
                </div>
                <div
                    className={`${effectiveTheme.contentContainerStyle?.base} ${effectiveTheme.contentContainerStyle?.decoration}`}>
                    {block.title &&
                        <h1 className={`${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.title.key, block.title.ns)}} />
                    }

                    {block.subTitle &&
                        <h3 className={`${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}
                            dangerouslySetInnerHTML={{__html: t(block.subTitle.key, block.subTitle.ns)}} />
                    }

                    {/*<p className="">Dictum aliquam porta in condimentum ac integer*/}
                    {/*    <br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem*/}
                    {/*</p>*/}

                    {paragraphs}

                    {block.footer &&
                        <div
                            className={`${effectiveTheme.footerContainerStyle?.base} ${effectiveTheme.footerContainerStyle?.decoration}`}>
                            <a rel="noopener noreferrer" href="#"
                               className={`${effectiveTheme.footerStyle?.base} ${effectiveTheme.footerStyle?.decoration}`}>
                                {t(block.footer.key, block.footer.ns)}
                            </a>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}