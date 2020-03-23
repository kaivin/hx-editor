const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const open = require('opn');// 打开浏览器
const chalk = require('chalk');// 改变命令行中输出日志颜色插件
const ip = require('ip').address();
const webpack = require("webpack");
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
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
        filename: 'js/[name].[hash].js',
        chunkFilename: 'js/[name].[chunkhash].js',
        publicPath:""
    },
    mode:"development",
    // 开发工具
    devtool: 'eval-source-map',
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
                                css: ['vue-style-loader', 'css-loader'],
                                scss: ['vue-style-loader', 'css-loader', 'scss-loader'],
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
                test: /\.js$/,
                use:[{loader:'eslint-loader',
                    options: { // 这里的配置项参数将会被传递到 eslint 的 CLIEngine 
                        formatter: require('eslint-friendly-formatter') // 指定错误报告的格式规范
                    }
                }],
                enforce: "pre", // 编译前检查
                exclude: [/node_modules/,path.resolve(__dirname, 'src/vendor/jquery.SuperSlide.2.1.1.js')], // 不检测的文件
                include: [path.resolve(__dirname, 'src')], // 指定检查的目录
            },
            {
                test: /\.(js|jsx)$/,
                use: [{
                    loader:'babel-loader',
                    options:{// options、query不能和loader数组一起使用
                        cacheDirectory:true// 利用缓存，提高性能，babel is slow
                    },
                }],
                include: path.resolve(__dirname, 'src'),
                
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'postcss-loader',
                      options: {
                        plugins:postcss.plugins,
                        sourceMap: true,
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: 'style-loader', 
                    },
                    {
                        loader: 'css-loader', 
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins:postcss.plugins,
                            parser: 'postcss-scss',
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'sass-loader', 
                        options: { sourceMap: true }
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
            },{// 编译less
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', 
                    },
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
                            sourceMap: true,
                        }
                    },
                    {
                        loader: 'less-loader', 
                        options: { 
                            sourceMap: true,
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
                    },
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
            // {
            //     test: /\.html$/,
            //     use: [{
            //         loader: 'html-loader',
            //         options: {
            //             attrs: ['img:src', 'img:data-src'],
            //             minimize: false
            //         }
            //     }]
            // },
        ]
    },
    // 插件配置项
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',// 输出文件的名称
            template: path.resolve(__dirname, 'index.html'),// 模板文件的路径
            title:'红星编辑器',// 配置生成页面的标题
            favicon,
            appVersion
        }),
        new webpack.HotModuleReplacementPlugin(),
        // 跳过编译时出错的代码并记录，使编译后运行时的包不会发生错误
        new webpack.NoEmitOnErrorsPlugin(),
        // 友好的终端错误显示方式
        new FriendlyErrorsPlugin({
            // 运行成功
            compilationSuccessInfo:{
                message:[`你的应用程序在这里运行：http://${ip}:${this.port}`],
                // notes:['有些附加说明要在成功编辑时显示']
            },
            //  运行错误
            onErrors:function(severity,errors){
                // 可以收听插件转换和优先级的错误
                // 严重性可以是'错误'或'警告'
                if (severity !== 'error') {
                    return;
                  }
                  const error = errors[0];
                  notifier.notify({
                    title: "Webpack error",
                    message: severity + ': ' + error.name,
                    subtitle: error.file || '',
                    // icon: ICON
                  });
            },
            //是否每次编译之间清除控制台
            //默认为true
            clearConsole:true,
        }),
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery',
        //     'window.$': 'jquery',
        // }),
        new VueLoaderPlugin(),
    ],
    // externals: {
    //     jquery: 'jQuery'
    // },
    // 开发服务配置项
    devServer: {
        port: 8089,
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        host: ip,
        overlay:true,
        hot:true,
        inline:true,
        after() {
            open(`http://${ip}:${this.port}`)
            .then(() => {
                console.log(chalk.cyan(`成功打开链接： http://${ip}:${this.port}`));
            })
            .catch(err => {
                console.log(chalk.red(err));
            });
        }
    },
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