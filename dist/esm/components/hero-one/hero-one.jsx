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
import { NdCode, NdTranslatedText } from "nodoku-core";
import { mergeTheme } from "nodoku-core";
import { NodokuComponents } from "nodoku-components";
var HighlightedCode = NodokuComponents.HighlightedCode;
var ListComp = NodokuComponents.ListComp;
export function HeroOneImpl(props) {
    return __awaiter(this, void 0, void 0, function () {
        var componentIndex, content, theme, themes, lng, i18nextProvider, defaultThemeName, effectiveTheme, block, t, style, backgrounds, lightClassName, darkClassName;
        var _this = this;
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
                    style = block.bgImage ? {
                        backgroundImage: "url(".concat(t(block.bgImage.url.key, (_b = (_a = block.bgImage) === null || _a === void 0 ? void 0 : _a.url) === null || _b === void 0 ? void 0 : _b.ns), ")")
                    } : {};
                    backgrounds = [];
                    lightClassName = "light:inline-block dark:hidden " + (defaultThemeName === "light" ? "inline-block" : "hidden");
                    darkClassName = "light:hidden dark:inline-block " + (defaultThemeName === "dark" ? "inline-block" : "hidden");
                    if ((_d = (_c = effectiveTheme.bgColorStyle) === null || _c === void 0 ? void 0 : _c.css) === null || _d === void 0 ? void 0 : _d.light) {
                        backgrounds.push(<div className={"absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ".concat(lightClassName)} style={(_f = (_e = effectiveTheme.bgColorStyle) === null || _e === void 0 ? void 0 : _e.css) === null || _f === void 0 ? void 0 : _f.light}>lala light</div>);
                    }
                    if ((_h = (_g = effectiveTheme.bgColorStyle) === null || _g === void 0 ? void 0 : _g.css) === null || _h === void 0 ? void 0 : _h.dark) {
                        backgrounds.push(<div className={"absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg ".concat(darkClassName)} style={(_k = (_j = effectiveTheme.bgColorStyle) === null || _j === void 0 ? void 0 : _j.css) === null || _k === void 0 ? void 0 : _k.dark}>lala dark</div>);
                    }
                    return [4 /*yield*/, Promise.all(block.paragraphs.map(function (p) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        if (p instanceof NdTranslatedText) {
                                            // return <p className="text-2xl max-w-2xl mx-auto text-gray-400"> {t(p.key, p.ns)} </p>
                                            return [2 /*return*/, <p className={"lala ".concat((_a = effectiveTheme.paragraphStyle) === null || _a === void 0 ? void 0 : _a.base, " ").concat((_b = effectiveTheme.paragraphStyle) === null || _b === void 0 ? void 0 : _b.decoration)}> {t(p.key, p.ns)} </p>];
                                        }
                                        if (!(p instanceof NdCode)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, HighlightedCode({ code: p, theme: effectiveTheme.codeHighlightTheme, defaultThemeName: defaultThemeName })];
                                    case 1: return [2 /*return*/, _c.sent()];
                                    case 2: return [4 /*yield*/, ListComp({ list: p, lng: lng, i18nextProvider: i18nextProvider, listTheme: effectiveTheme.listTheme })
                                        // return await <ListComp list={p as NdList} lng={lng} i18nextProvider={i18nextProvider} />
                                    ];
                                    case 3: return [2 /*return*/, _c.sent()
                                        // return await <ListComp list={p as NdList} lng={lng} i18nextProvider={i18nextProvider} />
                                    ];
                                }
                            });
                        }); }))];
                case 2: return [2 /*return*/, (<section className="relative dark:bg-gray-900 bg-gray-100">
            {backgrounds}

            <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-28 md:px-8">
                <div className="space-y-5 max-w-4xl mx-auto text-center">
                    {block.title &&
                            // <h2 className="text-6xl text-white font-extrabold mx-auto md:text-7xl">
                            <h2 className="text-6xl font-extrabold mx-auto md:text-7xl">
                            {t(block.title.key, block.title.ns)}
                        </h2>}
                    {block.subTitle &&
                            // <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                            <h2 className="text-4xl font-extrabold mx-auto md:text-5xl">
                            {t(block.subTitle.key, block.subTitle.ns)}
                        </h2>}
                    {_o.sent()}

                    {block.footer &&
                            <button className={"".concat((_l = effectiveTheme.footerButtonStyle) === null || _l === void 0 ? void 0 : _l.base, " ").concat((_m = effectiveTheme.footerButtonStyle) === null || _m === void 0 ? void 0 : _m.decoration)}>
                            Get started
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd"/>
                            </svg>
                        </button>}
                </div>
            </div>
        </section>)];
            }
        });
    });
}
