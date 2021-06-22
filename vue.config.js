module.exports = {
    pages: {
        index: {
            // entry for the page
            entry: "src/main.js",
            // the source template
            template: "public/index.html",
            // output as dist/index.html
            filename: "index.html",
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: "SuperMonkey",
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        about: {
            // entry for the page
            entry: "src/about.js",
            // the source template
            template: "public/index.html",
            // output as dist/index.html
            filename: "about.html",
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: "FAQ SuperMonkey",
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ["chunk-vendors", "chunk-common", "about"]
        },
        '404': {
            entry: "src/404.js",
            template: "public/404.html",
            filename: "404.html",
            title: "SuperMonkey",
            chunks: ["chunk-vendors", "chunk-common", "404"],
        },
    }
};