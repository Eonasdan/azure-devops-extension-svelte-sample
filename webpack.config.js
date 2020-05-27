const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

var mode = "";
var prod = false;

module.exports = (env, argv) => {
    mode = argv.mode || "development";
    prod = argv.mode === "production";

    if (env === "ado") {
        config.output.publicPath = "/dist/";
    }

    return config;
};

var config = {
    entry: {
        bundle: ["./src/main.js"],
    },
    resolve: {
        alias: {
            svelte: path.resolve("node_modules", "svelte"),
            "azure-devops-extension-sdk": path.resolve(
                "node_modules",
                "azure-devops-extension-sdk",
            ),
        },
        extensions: [".mjs", ".js", ".svelte"],
        mainFields: ["svelte", "browser", "module", "main"],
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].js",
        chunkFilename: "[name].[id].js",
    },
    devtool: "inline-source-map",
    devServer: {
        https: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: "svelte-loader",
                    options: {
                        emitCss: true,
                        hotReload: true,
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    /**
                     * MiniCssExtractPlugin doesn't support HMR.
                     * For developing, use 'style-loader' instead.
                     * */
                    prod ? MiniCssExtractPlugin.loader : "style-loader",
                    "css-loader",
                ],
            },
            {
                test: /\.woff$/,
                use: [
                    {
                        loader: "base64-inline-loader",
                    },
                ],
            },
        ],
    },
    mode,
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: __dirname + "/public", to: __dirname + "/dist" },
            ],
        }),
    ],
    devtool: prod ? false : "source-map",
};
