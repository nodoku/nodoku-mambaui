import {NdSkinComponentProps} from "nodoku-core";
import {JSX} from "react";
import {CardTheme} from "./components/card/card-theme";
import {HeroOneTheme} from "./components/hero-one/hero-one-theme";
import {HeroTwoTheme} from "./components/hero-two/hero-two-theme";
import {HeroLeftTextTheme} from "./components/hero-left-text/hero-left-text-theme";
import {HeroRightTextTheme} from "./components/hero-right-text/hero-right-text-theme";
import {CardImpl} from "./components/card/card";
import {HeroOneImpl} from "./components/hero-one/hero-one";
import {HeroTwoImpl} from "./components/hero-two/hero-two";
import {HeroLeftTextImpl} from "./components/hero-left-text/hero-left-text";
import {HeroRightTextImpl} from "./components/hero-right-text/hero-right-text";
import {FaqOneQuestionTheme} from "./components/faq/faq-one-question-theme";
import {FaqOneQuestionImpl} from "./components/faq/faq-one-question";
import {FaqHeaderTheme} from "./components/faq/faq-header-theme";
import {FaqHeaderImpl} from "./components/faq/faq-header";
import {FooterFourTheme} from "./components/footer-four/footer-four-theme";
import {FooterFourImpl} from "./components/footer-four/footer-four";

export namespace NodokuMambaUi {

    export async function Card(props: NdSkinComponentProps<CardTheme, void>): Promise<JSX.Element> {
        return CardImpl(props)
    }

    export async function HeroOne(props: NdSkinComponentProps<HeroOneTheme, void>): Promise<JSX.Element> {
        return HeroOneImpl(props)
    }

    export async function HeroTwo(props: NdSkinComponentProps<HeroTwoTheme, void>): Promise<JSX.Element> {
        return HeroTwoImpl(props)
    }

    export async function HeroLeftText(props: NdSkinComponentProps<HeroLeftTextTheme, void>): Promise<JSX.Element> {
        return HeroLeftTextImpl(props)
    }

    export async function HeroRightText(props: NdSkinComponentProps<HeroRightTextTheme, void>): Promise<JSX.Element> {
        return HeroRightTextImpl(props)
    }

    export async function FaqOneQuestion(props: NdSkinComponentProps<FaqOneQuestionTheme, void>): Promise<JSX.Element> {
        return FaqOneQuestionImpl(props)
    }

    export async function FaqHeader(props: NdSkinComponentProps<FaqHeaderTheme, void>): Promise<JSX.Element> {
        return FaqHeaderImpl(props)
    }

    export async function FooterFour(props: NdSkinComponentProps<FooterFourTheme, void>): Promise<JSX.Element> {
        return FooterFourImpl(props)
    }

}