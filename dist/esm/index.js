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
import { CardImpl } from "./components/card/card";
import { HeroOneImpl } from "./components/hero-one/hero-one";
import { HeroTwoImpl } from "./components/hero-two/hero-two";
import { HeroLeftTextImpl } from "./components/hero-left-text/hero-left-text";
import { HeroRightTextImpl } from "./components/hero-right-text/hero-right-text";
import { FaqOneQuestionImpl } from "./components/faq/faq-one-question";
import { FaqHeaderImpl } from "./components/faq/faq-header";
import { FooterFourImpl } from "./components/footer-four/footer-four";
export var NodokuMambaUi;
(function (NodokuMambaUi) {
    function Card(props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, CardImpl(props)];
            });
        });
    }
    NodokuMambaUi.Card = Card;
    function HeroOne(props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, HeroOneImpl(props)];
            });
        });
    }
    NodokuMambaUi.HeroOne = HeroOne;
    function HeroTwo(props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, HeroTwoImpl(props)];
            });
        });
    }
    NodokuMambaUi.HeroTwo = HeroTwo;
    function HeroLeftText(props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, HeroLeftTextImpl(props)];
            });
        });
    }
    NodokuMambaUi.HeroLeftText = HeroLeftText;
    function HeroRightText(props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, HeroRightTextImpl(props)];
            });
        });
    }
    NodokuMambaUi.HeroRightText = HeroRightText;
    function FaqOneQuestion(props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, FaqOneQuestionImpl(props)];
            });
        });
    }
    NodokuMambaUi.FaqOneQuestion = FaqOneQuestion;
    function FaqHeader(props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, FaqHeaderImpl(props)];
            });
        });
    }
    NodokuMambaUi.FaqHeader = FaqHeader;
    function FooterFour(props) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, FooterFourImpl(props)];
            });
        });
    }
    NodokuMambaUi.FooterFour = FooterFour;
})(NodokuMambaUi || (NodokuMambaUi = {}));
