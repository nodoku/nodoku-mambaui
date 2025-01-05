export namespace NodokuMambaUiTailwind {
    export function tailwindConfig(nodeModules: string = "./node_modules"): string[] {
        return [
            `./${nodeModules}/nodoku-mambaui/esm/**/*.js`,
            `./${nodeModules}/nodoku-mambaui/esm/**/*.jsx`,
            `./${nodeModules}/nodoku-mambaui/schemas/**/*.yml`,
        ]
    }

}