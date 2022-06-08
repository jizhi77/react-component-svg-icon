const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const {override, addWebpackModuleRule, addWebpackPlugin, addLessLoader} = require('customize-cra')

const path = require('path')

module.exports = override(
    addWebpackModuleRule(
        {
            test: /\.svg$/,
            include: path.resolve(__dirname, "src/"),
            use: [
                {
                    loader: 'svg-sprite-loader',
                    options: {
                        symbolId: "icon-[name]",
                    }
                }
            ],

        }
    ),

    addWebpackPlugin(new ProgressBarPlugin())
)
