import {JSX} from "react";
import {HeroOneTheme} from "./hero-one-theme";
import {mergeTheme, NdContentBlock, NdSkinComponentProps} from "nodoku-core";
import {NodokuComponents} from "nodoku-components";
import Paragraphs = NodokuComponents.Paragraphs;
import Backgrounds = NodokuComponents.Backgrounds;


export async function HeroOneImpl(props: NdSkinComponentProps<HeroOneTheme, void>): Promise<JSX.Element> {

    const {
        componentIndex,
        content,
        theme,
        themes,
        lng,
        i18nextProvider,
        defaultThemeName,
        imageUrlProvider
    } = props;

    // console.log("content card ", JSON.stringify(content));
    // console.log("visual card ", JSON.stringify(theme));

    let effectiveTheme: HeroOneTheme = mergeTheme(theme, HeroOneTheme.defaultTheme);
    if (themes.length > 0) {
        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme)
    }

    const block: NdContentBlock = content[0];

    const {t} = await i18nextProvider(lng);

    // var style: React.CSSProperties = block.bgImageUrl ? {
    //     backgroundImage: `url(${t(block.bgImageUrl.key, block.bgImageUrl.ns)})`
    // } : {};

    // console.log("effective theme", effectiveTheme)

    // const backgrounds: JSX.Element[] = [];

    // const lightClassName = "light:inline-block dark:hidden " + (defaultThemeName === "light" ? "inline-block" : "hidden")
    // const darkClassName = "light:hidden dark:inline-block " + (defaultThemeName === "dark" ? "inline-block" : "hidden")

    // if (effectiveTheme.bgColorStyle?.css?.light) {
    //     backgrounds.push(<div
    //         className={`absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ${lightClassName}`}
    //         style={effectiveTheme.bgColorStyle?.css?.light}></div>);
    // }
    // if (effectiveTheme.bgColorStyle?.css?.dark) {
    //     backgrounds.push(<div
    //         className={`absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ${darkClassName}`}
    //         style={effectiveTheme.bgColorStyle?.css?.dark}></div>);
    // }

    // return (
    //     <section className="dark:bg-gray-800 bg-gray-100 dark:text-gray-100 text-gray-800">
    //         <div
    //             className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
    //             {block.title &&
    //                 <h1 className="text-4xl font-bold leading-none sm:text-5xl"
    //                     dangerouslySetInnerHTML={{__html: t(block.title.key, block.title.ns)}} />
    //             }
    //
    //             {/*<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae*/}
    //             {/*    esse ab amet vero eaque explicabo!</p>*/}
    //
    //             {await Paragraphs({
    //                 lng: lng,
    //                 blockParagraphs: block.paragraphs,
    //                 paragraphStyle: effectiveTheme.paragraphStyle,
    //                 codeHighlightTheme: effectiveTheme.codeHighlightTheme!,
    //                 listTheme: effectiveTheme.listTheme!,
    //                 defaultThemeName: defaultThemeName,
    //                 i18nextProvider: i18nextProvider
    //             })}
    //
    //             {block.footer &&
    //                 <div className="flex flex-wrap justify-center">
    //                     <button
    //                         className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 dark:bg-violet-600 text-gray-900 dark:text-gray-50">
    //                         {t(block.footer.key, block.footer.ns)}
    //                     </button>
    //                 </div>
    //             }
    //         </div>
    //     </section>
    // )

    // const div1 = (
    //     <div x-data="{ open: false }">
    //         <div className="bg-gray-900">
    //             <section className="relative">
    //                 <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
    //                     <div className="space-y-5 max-w-4xl mx-auto text-center">
    //                         <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
    //                             Build and scale up your startup with the best tools
    //                         </h2>
    //                         <p className="max-w-2xl mx-auto text-gray-400">
    //                             Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
    //                             doloremque laudantium, totam rem aperiam, eaque ipsa quae.
    //                         </p>
    //                         <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
    //                             <div className="flex">
    //                                 <svg
    //                                     className="w-5 h-5"
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     fill="currentColor"
    //                                     viewBox="0 0 20 20"
    //                                 >
    //                                     <path
    //                                         d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
    //                                     />
    //                                 </svg>
    //                                 <svg
    //                                     className="w-5 h-5"
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     fill="currentColor"
    //                                     viewBox="0 0 20 20"
    //                                 >
    //                                     <path
    //                                         d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
    //                                     />
    //                                 </svg>
    //                                 <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    //                                     <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
    //                                 </svg>
    //                                 <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    //                                     <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
    //                                 </svg>
    //                             </div>
    //                             <p><span className="text-gray-100">5.0</span> by over 200 users</p>
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"
    //                     style={{background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)"}} ></div>
    //             </section>
    //         </div>
    //     </div>
    // )

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

    const div2 = (
        <section className={`relative ${effectiveTheme.containerStyle?.base} ${effectiveTheme.containerStyle?.decoration}`}>
            {/*<div className={`absolute top-0 left-0 right-0 bottom-0 ${effectiveTheme.bgImageStyle?.base} ${effectiveTheme.bgImageStyle?.decoration}`} style={style}></div>*/}
            {/*<div className={`absolute top-0 left-0 right-0 bottom-0 ${effectiveTheme.bgColorStyle?.base} ${effectiveTheme.bgColorStyle?.decoration}`}>*/}
            {/*    {backgrounds}*/}
            {/*</div>*/}
            {backgrounds}
            <div
                className={`${effectiveTheme.innerContainerStyle?.base} ${effectiveTheme.innerContainerStyle?.decoration}`}>
                {block.title &&
                    <h1 className={`${effectiveTheme.titleStyle?.base} ${effectiveTheme.titleStyle?.decoration}`}
                        dangerouslySetInnerHTML={{__html: t(block.title.key, block.title.ns)}}/>
                }
                {block.subTitle &&
                    <h3 className={`${effectiveTheme.subTitleStyle?.base} ${effectiveTheme.subTitleStyle?.decoration}`}
                        dangerouslySetInnerHTML={{__html: t(block.subTitle.key, block.subTitle.ns)}}/>
                }
                {/*<p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae*/}
                {/*    esse ab amet vero eaque explicabo!</p>*/}

                {paragraphs}

                {block.footer &&
                    <div
                        className={`${effectiveTheme.footerContainerStyle?.base} ${effectiveTheme.footerContainerStyle?.decoration}`}>
                        <button
                            className={`${effectiveTheme.footerStyle?.base} ${effectiveTheme.footerStyle?.decoration}`}>
                            Get started
                        </button>
                    </div>
                }
            </div>
        </section>
    );

    // return <div>{[div1, div2]}</div>
    return div2;

}