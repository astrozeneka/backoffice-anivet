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
    "payment-methods", "references-and-links", "validate-user", "validate-order", "validate-receipt", "order-finished",
    "parcels", "documents", "certifications", "add-parcel", "upload-document", "upload-result", "upload-certification",
    "view-parcel", "view-document", "view-result", "view-certification",

    "owner-list", "owner-add", "owner-edit", "owner-delete",
    "breeder-list", "breeder-add", "breeder-edit","breeder-delete",
    "vet-list", "vet-add", "vet-edit", "vet-delete",
    "scientist-list", "scientist-add", "scientist-edit", "scientist-delete",
    "admin-list", "admin-add", "admin-edit", "admin-delete"
]
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
        "references-and-links": "./src/js/references-and-links.js",
        "order-finished": "./src/js/order-finished.js",

        login: "./src/js/login.js",
        dashboard: "./src/js/dashboard.js",
        /*
        activity: "./src/js/activity.js",
        orders: "./src/js/orders.js",
        samples: "./src/js/samples.js",
        shipping: "./src/js/shipping",
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
        "add-user": "./src/js/add-user",
        "submit-receipt": "./src/js/submitReceipt.js",

        "validate-user": "./src/js/validate-user.js",
        "validate-order": "./src/js/validate-order.js",
        "validate-receipt": "./src/js/validate-receipt.js",

        "parcels": "./src/js/parcels.js",
        "documents": "./src/js/documents.js",
        "results": "./src/js/results",
        "certifications": "./src/js/certifications.js",
        "add-parcel": "./src/js/add-parcel",
        "upload-document": "./src/js/upload-document.js",
        "upload-result": "./src/js/upload-result.js",
        "upload-certification": "./src/js/upload-certification",
        "view-parcel": "./src/js/view-parcel",
        "view-document": "./src/js/view-document",
        "view-result": "./src/js/view-result",
        "view-certification": "./src/js/view-certification",
        */

        "owner-list": "./src/js/owner-list", // Owner CRUD
        "owner-add": "./src/js/owner-add",
        "owner-edit": "./src/js/owner-edit",
        "owner-delete": "./src/js/owner-delete",
        "breeder-list": "./src/js/breeder-list", // Breeder Crud
        "breeder-add": "./src/js/breeder-add",
        "breeder-edit": "./src/js/breeder-edit",
        "breeder-delete": "./src/js/breeder-delete",
        "vet-list": "./src/js/vet-list", // Vet Crud
        "vet-add": "./src/js/vet-add",
        "vet-edit": "./src/js/vet-edit",
        "vet-delete": "./src/js/vet-delete",
        "scientist-list": "./src/js/scientist-list", // Scientist Crud
        "scientist-add": "./src/js/scientist-add",
        "scientist-edit": "./src/js/scientist-edit",
        "scientist-delete": "./src/js/scientist-delete",
        "admin-list": "./src/js/admin-list", // Admin Crud
        "admin-add": "./src/js/admin-add",
        "admin-edit": "./src/js/admin-edit",
        "admin-delete": "./src/js/admin-delete"
        // Should have one Crud page set for each editable view
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
