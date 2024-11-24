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
import { HeroOneTheme } from "./hero-one-theme";
import { mergeTheme } from "nodoku-core";
import { NodokuComponents } from "nodoku-components";
var Paragraphs = NodokuComponents.Paragraphs;
var Backgrounds = NodokuComponents.Backgrounds;
import { ts } from "nodoku-core";
var paragraphDefaultTheme = NodokuComponents.paragraphDefaultTheme;
var highlightedCodeDefaultTheme = NodokuComponents.highlightedCodeDefaultTheme;
var listCompDefaultTheme = NodokuComponents.listCompDefaultTheme;
export function HeroOneImpl(props) {
    return __awaiter(this, void 0, void 0, function () {
        var componentIndex, content, theme, themes, lng, i18nextProvider, defaultThemeName, effectiveTheme, block, t, paragraphs, backgrounds;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    componentIndex = props.componentIndex, content = props.content, theme = props.theme, themes = props.themes, lng = props.lng, i18nextProvider = props.i18nextProvider, defaultThemeName = props.defaultThemeName;
                    effectiveTheme = mergeTheme(theme, HeroOneTheme.defaultTheme);
                    if (themes.length > 0) {
                        effectiveTheme = mergeTheme(themes[componentIndex % themes.length], effectiveTheme);
                    }
                    block = content[0];
                    return [4 /*yield*/, i18nextProvider(lng)];
                case 1:
                    t = (_o.sent()).t;
                    return [4 /*yield*/, Paragraphs({
                            lng: lng,
                            blockParagraphs: block.paragraphs,
                            paragraphTheme: effectiveTheme.paragraphStyle || paragraphDefaultTheme,
                            codeHighlightTheme: effectiveTheme.codeHighlightTheme || highlightedCodeDefaultTheme,
                            listTheme: effectiveTheme.listTheme || listCompDefaultTheme,
                            defaultThemeName: defaultThemeName,
                            i18nextProvider: i18nextProvider
                        })];
                case 2:
                    paragraphs = _o.sent();
                    return [4 /*yield*/, Backgrounds({
                            lng: lng,
                            defaultThemeName: defaultThemeName,
                            bgColorStyle: effectiveTheme.bgColorStyle,
                            bgImageStyle: effectiveTheme.bgImageStyle,
                            i18nextProvider: i18nextProvider,
                            // bgImageUrl: block.bgImageUrl,
                            // imageUrlProvider: imageUrlProvider
                        })];
                case 3:
                    backgrounds = _o.sent();
                    return [2 /*return*/, (<section className={"relative ".concat(ts(effectiveTheme, "containerStyle"), " ").concat((_a = effectiveTheme.containerStyle) === null || _a === void 0 ? void 0 : _a.base, " ").concat((_b = effectiveTheme.containerStyle) === null || _b === void 0 ? void 0 : _b.decoration)}>

            {backgrounds}

            <div className={"".concat(ts(effectiveTheme, "innerContainerStyle"), " ").concat((_c = effectiveTheme.innerContainerStyle) === null || _c === void 0 ? void 0 : _c.base, " ").concat((_d = effectiveTheme.innerContainerStyle) === null || _d === void 0 ? void 0 : _d.decoration)}>
                {block.title &&
                                <h1 className={"".concat(ts(effectiveTheme, "titleStyle"), " ").concat((_e = effectiveTheme.titleStyle) === null || _e === void 0 ? void 0 : _e.base, " ").concat((_f = effectiveTheme.titleStyle) === null || _f === void 0 ? void 0 : _f.decoration)} dangerouslySetInnerHTML={{ __html: t(block.title) }}/>}
                {block.subTitle &&
                                <h3 className={"".concat(ts(effectiveTheme, "subTitleStyle"), " ").concat((_g = effectiveTheme.subTitleStyle) === null || _g === void 0 ? void 0 : _g.base, " ").concat((_h = effectiveTheme.subTitleStyle) === null || _h === void 0 ? void 0 : _h.decoration)} dangerouslySetInnerHTML={{ __html: t(block.subTitle) }}/>}

                {paragraphs}

                {block.footer &&
                                <div className={"".concat(ts(effectiveTheme, "footerContainerStyle"), " ").concat((_j = effectiveTheme.footerContainerStyle) === null || _j === void 0 ? void 0 : _j.base, " ").concat((_k = effectiveTheme.footerContainerStyle) === null || _k === void 0 ? void 0 : _k.decoration)}>
                        <button type={"button"} className={"".concat(ts(effectiveTheme, "footerStyle"), " ").concat((_l = effectiveTheme.footerStyle) === null || _l === void 0 ? void 0 : _l.base, " ").concat((_m = effectiveTheme.footerStyle) === null || _m === void 0 ? void 0 : _m.decoration)} dangerouslySetInnerHTML={{ __html: t(block.footer) }}/>
                    </div>}
            </div>
        </section>)];
            }
        });
    });
}
