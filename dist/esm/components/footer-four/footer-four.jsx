var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { defaultTheme } from "./footer-four-theme";
import { mergeTheme } from "nodoku-core";
import { ts } from "nodoku-core";
import { NdTranslatableText } from "nodoku-core";
import { extractValueFromText } from "nodoku-core";
import { NdList } from "nodoku-core";
export function FooterFourImpl(props) {
    return __awaiter(this, void 0, void 0, function () {
        var rowIndex, componentIndex, content, theme, themes, lng, imageProvider, i18nextTrustedHtmlProvider, defaultThemeName, effectiveTheme, brand, sections, _i, content_1, b, t, brandLogo, copyrightNotice, companyName, companyNameText, copyrightNoticeText;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    rowIndex = props.rowIndex, componentIndex = props.componentIndex, content = props.content, theme = props.theme, themes = props.themes, lng = props.lng, imageProvider = props.imageProvider, i18nextTrustedHtmlProvider = props.i18nextTrustedHtmlProvider, defaultThemeName = props.defaultThemeName;
                    effectiveTheme = mergeTheme(theme, defaultTheme);
                    if (themes.length > 0) {
                        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme);
                    }
                    brand = undefined;
                    sections = [];
                    for (_i = 0, content_1 = content; _i < content_1.length; _i++) {
                        b = content_1[_i];
                        if (((_a = b.title) === null || _a === void 0 ? void 0 : _a.text) && b.title.text === "{Brand}") {
                            brand = b;
                        }
                        b.paragraphs.filter(function (p) { return p instanceof NdList; })
                            .forEach(function (p) { return p.items.forEach(function (i) { return sections.push(i); }); });
                    }
                    return [4 /*yield*/, i18nextTrustedHtmlProvider(lng)];
                case 1:
                    t = (_b.sent()).t;
                    brandLogo = (brand && brand.images.length > 0) ? t(brand.images[0].url).__html : "icon:react-icons/ci:CiCircleMinus";
                    copyrightNotice = brand === null || brand === void 0 ? void 0 : brand.paragraphs.find(function (p) { return (p instanceof NdTranslatableText) &&
                        p.text.startsWith("{copyrightNotice}"); });
                    companyName = brand === null || brand === void 0 ? void 0 : brand.paragraphs.find(function (p) { return (p instanceof NdTranslatableText) &&
                        p.text.startsWith("{companyName}"); });
                    companyNameText = extractValueFromText(companyName ? t(companyName) : undefined, "companyName");
                    copyrightNoticeText = extractValueFromText(copyrightNotice ? t(copyrightNotice) : undefined, "copyrightNotice");
                    return [4 /*yield*/, imageProvider({
                            url: brandLogo,
                            alt: "logo",
                            imageStyle: effectiveTheme.imageStyle
                        })];
                case 2: 
                // console.log("effective theme", effectiveTheme)
                return [2 /*return*/, (<footer className={ts(effectiveTheme, "containerStyle")}>
            <div className={ts(effectiveTheme, "innerContainerStyle")}>
                <div className="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 lg:justify-start">
                        <div className={ts(effectiveTheme, "imageContainerStyle")}>
                            {_b.sent()}
                        </div>
                        <span className={ts(effectiveTheme, "brandNameStyle")} dangerouslySetInnerHTML={companyNameText}/>
                    </a>
                    {(brand === null || brand === void 0 ? void 0 : brand.subTitle) && <h2 className={ts(effectiveTheme, "subTitleStyle")} dangerouslySetInnerHTML={t(brand.subTitle)}></h2>}
                </div>
                <div className={ts(effectiveTheme, "contentContainerStyle")}>

                    {sections.map(function (oneListItem, ib) {
                            return (<div key={"footer-content-block-".concat(ib)} className="space-y-3">

                                {oneListItem.text && oneListItem.text instanceof NdTranslatableText &&
                                    <h3 className={ts(effectiveTheme, "sectionTitleStyle")} dangerouslySetInnerHTML={t(oneListItem.text)}/>}
                                {oneListItem.subList && oneListItem.subList instanceof NdList &&
                                    <ul className="space-y-1">
                                        {oneListItem.subList.items.map(function (item, i) {
                                            var link = item.text;
                                            return (<li key={"footer-content-block-".concat(ib, "-cta-").concat(i)}>
                                                    <a rel="noopener noreferrer" href={t(link.url).__html} dangerouslySetInnerHTML={t(link.urlText || link.url)}/>
                                                </li>);
                                        })}

                                    </ul>}
                            </div>);
                        })}
                </div>
            </div>
            {copyrightNotice && <div className={ts(effectiveTheme, "copyrightNoticeStyle")} dangerouslySetInnerHTML={copyrightNoticeText}/>}
        </footer>)];
            }
        });
    });
}
