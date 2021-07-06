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
            title: "MonkeyBrix",
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ["chunk-vendors", "chunk-common", "index"]
        },
        terms: {
            // entry for the page
            entry: "src/terms-and-conditions.js",
            // the source template
            template: "public/index.html",
            // output as dist/index.html
            filename: "terms-and-conditions.html",
            // when using title option,
            // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
            title: "Monkeybrix Terms & Conditions",
            // chunks to include on this page, by default includes
            // extracted common chunks and vendor chunks.
            chunks: ["chunk-vendors", "chunk-common", "terms"]
        }
    }
};
