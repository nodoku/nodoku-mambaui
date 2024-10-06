import { NdSkinComponentProps } from "nodoku-core";
import { JSX } from "react";
import { CardTheme } from "./components/card/card-theme";
import { HeroOneTheme } from "./components/hero-one/hero-one-theme";
import { HeroTwoTheme } from "./components/hero-two/hero-two-theme";
import { HeroLeftTextTheme } from "./components/hero-left-text/hero-left-text-theme";
import { HeroRightTextTheme } from "./components/hero-right-text/hero-right-text-theme";
import { FaqOneQuestionTheme } from "./components/faq/faq-one-question-theme";
import { FaqHeaderTheme } from "./components/faq/faq-header-theme";
export declare namespace NodokuMambaUi {
    function Card(props: NdSkinComponentProps<CardTheme, void>): Promise<JSX.Element>;
    function HeroOne(props: NdSkinComponentProps<HeroOneTheme, void>): Promise<JSX.Element>;
    function HeroTwo(props: NdSkinComponentProps<HeroTwoTheme, void>): Promise<JSX.Element>;
    function HeroLeftText(props: NdSkinComponentProps<HeroLeftTextTheme, void>): Promise<JSX.Element>;
    function HeroRightText(props: NdSkinComponentProps<HeroRightTextTheme, void>): Promise<JSX.Element>;
    function FaqOneQuestion(props: NdSkinComponentProps<FaqOneQuestionTheme, void>): Promise<JSX.Element>;
    function FaqHeader(props: NdSkinComponentProps<FaqHeaderTheme, void>): Promise<JSX.Element>;
}
