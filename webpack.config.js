const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.jsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundled.js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: [
                    path.resolve(__dirname, "node_modules")
                ]
            }
        ]
    },
    devServer: {
        contentBase: "./dist",
        host: "0.0.0.0"
    }
}