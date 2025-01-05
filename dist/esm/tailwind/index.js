export var NodokuMambaUiTailwind;
(function (NodokuMambaUiTailwind) {
    function tailwindConfig(nodeModules) {
        if (nodeModules === void 0) { nodeModules = "./node_modules"; }
        return [
            "./".concat(nodeModules, "/nodoku-mambaui/esm/**/*.js"),
            "./".concat(nodeModules, "/nodoku-mambaui/esm/**/*.jsx"),
            "./".concat(nodeModules, "/nodoku-mambaui/schemas/**/*.yml"),
        ];
    }
    NodokuMambaUiTailwind.tailwindConfig = tailwindConfig;
})(NodokuMambaUiTailwind || (NodokuMambaUiTailwind = {}));
