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
import { CardTheme } from "./card-theme";
import { mergeTheme } from "nodoku-core";
import { NodokuComponents } from "nodoku-components";
var Paragraphs = NodokuComponents.Paragraphs;
export function CardImpl(props) {
    return __awaiter(this, void 0, void 0, function () {
        var componentIndex, content, theme, themes, lng, imageUrlProvider, i18nextProvider, defaultThemeName, effectiveTheme, block, t, style, _a, _b, _c, url, alt, absZero, imgUrl;
        var _d;
        var _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
        return __generator(this, function (_u) {
            switch (_u.label) {
                case 0:
                    componentIndex = props.componentIndex, content = props.content, theme = props.theme, themes = props.themes, lng = props.lng, imageUrlProvider = props.imageUrlProvider, i18nextProvider = props.i18nextProvider, defaultThemeName = props.defaultThemeName;
                    effectiveTheme = mergeTheme(theme, CardTheme.defaultTheme);
                    if (themes.length > 0) {
                        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme);
                    }
                    block = content[0];
                    return [4 /*yield*/, i18nextProvider(lng)];
                case 1:
                    t = (_u.sent()).t;
                    if (!block.bgImageUrl) return [3 /*break*/, 3];
                    _d = {};
                    _b = "url(".concat;
                    return [4 /*yield*/, imageUrlProvider(t(block.bgImageUrl.key, block.bgImageUrl.ns))];
                case 2:
                    _a = (_d.backgroundImage = _b.apply("url(", [_u.sent(), ")"]),
                        _d);
                    return [3 /*break*/, 4];
                case 3:
                    _a = {};
                    _u.label = 4;
                case 4:
                    style = _a;
                    _c = block.images[0], url = _c.url, alt = _c.alt;
                    absZero = "absolute top-0 left-0 right-0 bottom-0";
                    return [4 /*yield*/, imageUrlProvider(t(url.key, url.ns))];
                case 5:
                    imgUrl = _u.sent();
                    return [4 /*yield*/, Paragraphs({
                            lng: lng,
                            blockParagraphs: block.paragraphs,
                            paragraphStyle: effectiveTheme.paragraphStyle,
                            codeHighlightTheme: effectiveTheme.codeHighlightTheme,
                            listTheme: effectiveTheme.listTheme,
                            defaultThemeName: defaultThemeName,
                            i18nextProvider: i18nextProvider
                        })];
                case 6: return [2 /*return*/, (<div className={"relative ".concat((_e = effectiveTheme.containerStyle) === null || _e === void 0 ? void 0 : _e.base, " ").concat((_f = effectiveTheme.containerStyle) === null || _f === void 0 ? void 0 : _f.decoration)}>

            <img src={imgUrl} alt={alt && t(alt.key, alt.ns)} className={"".concat((_g = effectiveTheme.imageStyle) === null || _g === void 0 ? void 0 : _g.base, " ").concat((_h = effectiveTheme.imageStyle) === null || _h === void 0 ? void 0 : _h.decoration)}/>

            <div className={"".concat((_j = effectiveTheme.innerContainerStyle) === null || _j === void 0 ? void 0 : _j.base, " ").concat((_k = effectiveTheme.innerContainerStyle) === null || _k === void 0 ? void 0 : _k.decoration)}>
                <div className="space-y-2">
                    {block.title &&
                            <h2 className={"".concat((_l = effectiveTheme.titleStyle) === null || _l === void 0 ? void 0 : _l.base, " ").concat((_m = effectiveTheme.titleStyle) === null || _m === void 0 ? void 0 : _m.decoration)} dangerouslySetInnerHTML={{ __html: t(block.title.key, block.title.ns) }}/>}
                    {block.subTitle &&
                            <h2 className={"".concat((_o = effectiveTheme.subTitleStyle) === null || _o === void 0 ? void 0 : _o.base, " ").concat((_p = effectiveTheme.subTitleStyle) === null || _p === void 0 ? void 0 : _p.decoration)} dangerouslySetInnerHTML={{ __html: t(block.subTitle.key, block.subTitle.ns) }}/>}
                    {/*<p className="text-gray-100 dark:text-gray-800">Curabitur luctus erat nunc, sed ullamcorper erat*/}
                    {/*    vestibulum eget.</p>*/}

                    {_u.sent()}
                </div>
                {block.footer &&
                            <div className={"".concat((_q = effectiveTheme.footerContainerStyle) === null || _q === void 0 ? void 0 : _q.base, " ").concat((_r = effectiveTheme.footerContainerStyle) === null || _r === void 0 ? void 0 : _r.decoration)}>
                        <button type="button" className={"".concat((_s = effectiveTheme.footerButtonStyle) === null || _s === void 0 ? void 0 : _s.base, " ").concat((_t = effectiveTheme.footerButtonStyle) === null || _t === void 0 ? void 0 : _t.decoration)}>
                            {t(block.footer.key, block.footer.ns)}
                        </button>
                    </div>}
            </div>
        </div>)];
            }
        });
    });
}
