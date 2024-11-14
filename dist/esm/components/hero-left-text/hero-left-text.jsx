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
import { HeroLeftTextTheme } from "./hero-left-text-theme";
import { mergeTheme } from "nodoku-core";
import { NodokuComponents } from "nodoku-components";
var Paragraphs = NodokuComponents.Paragraphs;
var Backgrounds = NodokuComponents.Backgrounds;
export function HeroLeftTextImpl(props) {
    return __awaiter(this, void 0, void 0, function () {
        var componentIndex, content, theme, themes, lng, imageUrlProvider, i18nextProvider, defaultThemeName, effectiveTheme, block, t, _a, url, alt, imgUrl, paragraphs, backgrounds;
        var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
        return __generator(this, function (_v) {
            switch (_v.label) {
                case 0:
                    componentIndex = props.componentIndex, content = props.content, theme = props.theme, themes = props.themes, lng = props.lng, imageUrlProvider = props.imageUrlProvider, i18nextProvider = props.i18nextProvider, defaultThemeName = props.defaultThemeName;
                    effectiveTheme = mergeTheme(theme, HeroLeftTextTheme.defaultTheme);
                    if (themes.length > 0) {
                        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme);
                    }
                    block = content[0];
                    return [4 /*yield*/, i18nextProvider(lng)];
                case 1:
                    t = (_v.sent()).t;
                    _a = block.images[0], url = _a.url, alt = _a.alt;
                    return [4 /*yield*/, imageUrlProvider(t(url))];
                case 2:
                    imgUrl = _v.sent();
                    return [4 /*yield*/, Paragraphs({
                            lng: lng,
                            blockParagraphs: block.paragraphs,
                            paragraphStyle: effectiveTheme.paragraphStyle,
                            codeHighlightTheme: effectiveTheme.codeHighlightTheme,
                            listTheme: effectiveTheme.listTheme,
                            defaultThemeName: defaultThemeName,
                            i18nextProvider: i18nextProvider
                        })];
                case 3:
                    paragraphs = _v.sent();
                    return [4 /*yield*/, Backgrounds({
                            lng: lng,
                            defaultThemeName: defaultThemeName,
                            bgColorStyle: effectiveTheme.bgColorStyle,
                            bgImageStyle: effectiveTheme.bgImageStyle,
                            i18nextProvider: i18nextProvider,
                            bgImageUrl: block.bgImageUrl,
                            imageUrlProvider: imageUrlProvider
                        })];
                case 4:
                    backgrounds = _v.sent();
                    return [2 /*return*/, (<section className={"relative ".concat((_b = effectiveTheme.containerStyle) === null || _b === void 0 ? void 0 : _b.base, " ").concat((_c = effectiveTheme.containerStyle) === null || _c === void 0 ? void 0 : _c.decoration)}>
            {backgrounds}

            <div className={"".concat((_d = effectiveTheme.innerContainerStyle) === null || _d === void 0 ? void 0 : _d.base, " ").concat((_e = effectiveTheme.innerContainerStyle) === null || _e === void 0 ? void 0 : _e.decoration)}>
                <div className={"".concat((_f = effectiveTheme.contentContainerStyle) === null || _f === void 0 ? void 0 : _f.base, " ").concat((_g = effectiveTheme.contentContainerStyle) === null || _g === void 0 ? void 0 : _g.decoration)}>
                    {block.title &&
                                <h1 className={"".concat((_h = effectiveTheme.titleStyle) === null || _h === void 0 ? void 0 : _h.base, " ").concat((_j = effectiveTheme.titleStyle) === null || _j === void 0 ? void 0 : _j.decoration)} dangerouslySetInnerHTML={{ __html: t(block.title) }}/>}

                    {block.subTitle &&
                                <h3 className={"".concat((_k = effectiveTheme.subTitleStyle) === null || _k === void 0 ? void 0 : _k.base, " ").concat((_l = effectiveTheme.subTitleStyle) === null || _l === void 0 ? void 0 : _l.decoration)} dangerouslySetInnerHTML={{ __html: t(block.subTitle) }}/>}

                    {paragraphs}

                    {block.footer &&
                                <div className={"".concat((_m = effectiveTheme.footerContainerStyle) === null || _m === void 0 ? void 0 : _m.base, " ").concat((_o = effectiveTheme.footerContainerStyle) === null || _o === void 0 ? void 0 : _o.decoration)}>
                            <a rel="noopener noreferrer" href="#" className={"".concat((_p = effectiveTheme.footerStyle) === null || _p === void 0 ? void 0 : _p.base, " ").concat((_q = effectiveTheme.footerStyle) === null || _q === void 0 ? void 0 : _q.decoration)}>
                                <span dangerouslySetInnerHTML={{ __html: t(block.footer) }}/>

                            </a>
                        </div>}
                </div>
                <div className={"".concat((_r = effectiveTheme.imageContainerStyle) === null || _r === void 0 ? void 0 : _r.base, " ").concat((_s = effectiveTheme.imageContainerStyle) === null || _s === void 0 ? void 0 : _s.decoration)}>
                    <img src={imgUrl} alt="" className={"".concat((_t = effectiveTheme.imageStyle) === null || _t === void 0 ? void 0 : _t.base, " ").concat((_u = effectiveTheme.imageStyle) === null || _u === void 0 ? void 0 : _u.decoration)}/>
                </div>
            </div>
        </section>)];
            }
        });
    });
}
