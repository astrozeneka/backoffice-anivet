const { VueLoaderPlugin } = require("vue-loader")
const htmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

let pages = ["main", "register", "adminLogin"]
let hwpList = []
pages.forEach((page)=>{
    hwpList.push(new htmlWebpackPlugin({
        hash: true,
        template: './public/index.html',
        filename: `${page}.html`,
        chunks: [page],
        inject: 'body'
    }))
})

let BOPages = ["login", "dashboard", "activity", "orders", "samples", "shipping", "results", "owners", "breeders",
    "vets", "scientists", "stats", "settings", "sample-details", "finance", "view-user", "notify-user", "update-user",
    "delete-user", "add-user", "submit-receipt", "payments", "terms-and-conditions", "submit-orders", "preview-invoice",
    "payment-methods", "references-and-links"]
let BOList = []
BOPages.forEach((page)=>{
    BOList.push(new htmlWebpackPlugin({
        hash: true,
        template: './public/index.html',
        filename: `${page}.html`,
        chunks: [page],
        inject: 'body'
    }))
})

module.exports = {
    mode: "development",
    entry: {
        main: "./src/js/main.js",
        register: "./src/js/register.js",
        adminLogin: "./src/js/adminLogin.js",

        "submit-receipt": "./src/js/submitReceipt.js",

        login: "./src/js/login.js",
        dashboard: "./src/js/dashboard.js",
        payments: "./src/js/payments.js",

        "terms-and-conditions": "./src/js/terms-and-conditions.js",
        "submit-orders": "./src/js/submit-orders.js",
        "preview-invoice": "./src/js/preview-invoice.js",
        "payment-methods": "./src/js/payment-methods.js",
        "references-and-links": "./src/js/references-and-links.js"

        /*
        login: "./src/js/login.js",
        dashboard: "./src/js/dashboard.js",
        activity: "./src/js/activity.js",
        orders: "./src/js/orders.js",
        samples: "./src/js/samples.js",
        shipping: "./src/js/shipping",
        results: "./src/js/results",
        owners: "./src/js/owners",
        breeders: "./src/js/breeders",
        vets: "./src/js/vets",
        scientists: "./src/js/scientists",
        stats: "./src/js/stats",
        settings: "./src/js/settings",
        "sample-details": "./src/js/sample-details",
        finance: "./src/js/finance",
        "delete-user": "./src/js/delete-user",
        "notify-user": "./src/js/notify-user",
        "update-user": "./src/js/update-user",
        "view-user": "./src/js/view-user",
        "add-user": "./src/js/add-user"
        "submit-receipt": "./src/js/submitReceipt.js",
         */
    },
    output: {
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.vue$/,
                loader: "vue-loader"
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:8].[ext]"
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        ...hwpList,
        ...BOList,
        new CopyPlugin({
            patterns: [
                { from: "./src/assets", to: "./assets"}
            ]
        })
    ],
    resolve: {
        alias: {
            vue$: "vue/dist/vue.runtime.esm.js",
        },
        extensions: ["*", ".js", ".vue", ".json"]
    },
    devServer: {
        disableHostCheck: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    }
}
