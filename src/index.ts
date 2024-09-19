import {NdSkinComponentProps} from "nodoku-core";
import {JSX} from "react";
import {HeroOneTheme} from "./components/hero-one/hero-one-theme";
import {HeroOneImpl} from "./components/hero-one/hero-one";
import {HeroLeftTextImpl} from "./components/hero-left-text/hero-left-text";
import {CardImpl} from "./components/card/card";

export namespace NodokuFloatUi {

    export async function HeroOne(props: NdSkinComponentProps<HeroOneTheme, void>): Promise<JSX.Element> {
        return HeroOneImpl(props)
    }

    export async function HeroLeftText(props: NdSkinComponentProps<HeroOneTheme, void>): Promise<JSX.Element> {
        return HeroLeftTextImpl(props)
    }

    export async function Card(props: NdSkinComponentProps<HeroOneTheme, void>): Promise<JSX.Element> {
        return CardImpl(props)
    }

}