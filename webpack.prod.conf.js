const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 生成 html 文件
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // 分离 css 文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除生成文件
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // 压缩 JS
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin'); // 压缩 css
const copyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { VueLoaderPlugin } = require('vue-loader');
const postcss = require('./postcss.config');

// 版本号
const appVersion = new Date().getTime()
// 网站图标
const favicon = path.resolve(process.cwd(), 'src/favicon.ico')

module.exports={
    entry:{
        app:[path.resolve(__dirname, 'src/main.js')],
    },
    output:{
        path:path.resolve(__dirname,'dist'),
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
        publicPath:"/"
    },
    mode:"production",
    // 加载器 loader 配置项
    module:{
        rules:[
            {
                test: require.resolve('jquery'),
                use: [
                    {
                    loader: 'expose-loader',
                    options: 'jQuery'
                },
                {
                    loader: 'expose-loader',
                    options: '$'
                }]
            },
            {
                test: /\.vue$/,
                use:[
                    {
                        loader: 'vue-loader',
                        options:{
                            // 去除模板中的空格
                            preserveWhitespace: false,
                            // postcss配置,把vue文件中的样式部分,做后续处理
                            postcss:{
                                plugins:postcss.plugins,
                                options:{parser: 'postcss-scss'}
                            },
                            loaders:{
                                css: [MiniCssExtractPlugin.loader, 'css-loader'],
                                scss: [MiniCssExtractPlugin.loader, 'css-loader', 'scss-loader'],
                            }
                        }
                    }
                ],
            },
            {
                test: /\.json$/,  //用于匹配loaders所处理文件拓展名的正则表达式
                use: 'json-loader', //具体loader的名称
                type: 'javascript/auto',
                exclude: /node_modules/
            },
            {
                test: /\.(js|jsx)$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: [path.resolve(__dirname, 'src'), path.resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader',
                        options: {
                            plugins:postcss.plugins,
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', 
                    },
                    { loader: 'postcss-loader',
                        options: {
                            plugins:postcss.plugins,
                            parser: 'postcss-scss',
                        }
                    },
                    {
                        loader: 'sass-loader', 
                        options: { 
                            publicPath:""
                         }
                    },
                    { loader: 'sass-resources-loader',
                        options: {
                            sourceMap: true,
                            resources: [
                                path.resolve(__dirname, 'src/styles/core/_settings.scss'),
                                path.resolve(__dirname, 'src/styles/core/_mixin.scss'),
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            },{// 编译 less 
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader', 
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:postcss.plugins,
                            parser: 'postcss-less',
                        }
                    },
                    {
                        loader: 'less-loader', 
                        options: { 
                            publicPath:""
                        }
                    }
                ]
            },
            {
                test: /\.(png|jp?g|gif|svg|ico)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,        // 小于8192字节的图片打包成base 64图片
                            name:'images/[name].[hash:8].[ext]',
                            publicPath:''
                        }
                    }
                ]
            },
            {
                // 文件依赖配置项——字体图标
                test: /\.(woff|woff2|svg|eot|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192, 
                        name: 'fonts/[name].[ext]?[hash:8]',
                        publicPath:''
                    },
                }],
            }, {
                // 文件依赖配置项——音频
                test: /\.(wav|mp3|ogg)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192, 
                        name: 'audios/[name].[ext]?[hash:8]',
                        publicPath:''
                    },
                }],
            }, {
                // 文件依赖配置项——视频
                test: /\.(ogg|mpeg4|webm)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        limit: 8192, 
                        name: 'videos/[name].[ext]?[hash:8]',
                        publicPath:''
                    },
                }],
            }, 
        ]
    },
    optimization: {
        namedChunks: true,
        moduleIds: 'hashed',
        splitChunks: {
            maxInitialRequests: 6,
            cacheGroups: {
                dll: {
                    chunks:'all',
                    test: /[\\/]node_modules[\\/](jquery|core-js|vue|vue-router)[\\/]/,
                    name: 'dll',
                    priority: 2,
                    enforce: true,
                    reuseExistingChunk: true
                },
                // superSlide: {
                //     chunks:'all',
                //     test: /[\\/]src[\\/]vendor[\\/]/,
                //     name: 'superSlide',
                //     priority: 1,
                //     enforce: true,
                //     reuseExistingChunk: true
                // },
                commons: {
                    name: 'commons',
                    minChunks: 2,//Math.ceil(pages.length / 3), 当你有多个页面时，获取pages.length，至少被1/3页面的引入才打入common包
                    chunks:'all',
                    reuseExistingChunk: true
                }
            }
        },
        runtimeChunk: {
            name: 'manifest'
        },
        minimizer: [ // 用于配置 minimizers 和选项
            // webpack 不支持es6语法的压缩，这里要使用需要babel配合
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            }),// 压缩 js
            new OptimizeCSSAssetsPlugin({}), // 压缩 css
        ]
    },
    // 插件配置项
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',//输出文件的名称
            template: path.resolve(__dirname, 'index.html'),//模板文件的路径
            title:'红星编辑器',//配置生成页面的标题
            minify:{
                removeRedundantAttributes:true, // 删除多余的属性
                collapseWhitespace:true, // 折叠空白区域
                removeAttributeQuotes: true, // 移除属性的引号
                removeComments: true, // 移除注释
                collapseBooleanAttributes: true // 省略只有 boolean 值的属性值 例如：readonly checked
            }, // 压缩 html 文件
            favicon,
            appVersion
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash].css',
            chunkFilename: 'css/[name].[hash].css',
        }),
        new CleanWebpackPlugin(),// 删除 dist 文件夹
        new copyWebpackPlugin([
            {
                from:path.resolve(__dirname+'/static'),// 打包的静态资源目录地址
                to:'./static' // 打包到dist下面的static
            },
            {
                from:path.resolve(__dirname+'/README'),// 打包的静态资源目录地址
                to:'./README' // 打包到dist下面的README
            },
        ]),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            //  是否在默认浏览器中自动打开报告
            openAnalyzer: false,
            //  将在“服务器”模式下使用的端口启动HTTP服务器。
            analyzerPort: 9528, 
            reportFilename: 'static/report.html',
        }),
        new VueLoaderPlugin(),
    ],
    resolve: {
        // 设置可省略文件后缀名
        extensions: [' ','.js','.json','.jsx','.vue'],
        // 查找 module 的话从这里开始查找;
        modules: [path.resolve(__dirname, "src"), path.resolve(__dirname, "node_modules")], // 绝对路径;
        // 配置路径映射（别名）
        alias: {
          '@': path.resolve('src'),
        }
    },
}