const webpack = require('webpack');

module.exports = {
    configureWebpack: {//引入jquery
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },

}