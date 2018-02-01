const path=require('path')

const isDev=process.env.NODE_ENV==='development'
const HTMLPlugin=require("html-webpack-plugin")
const webpack=require("webpack")

const config={
    target:'web',//webpack编译目标是web
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.js',
        path:path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                
//   "#":"演示vue的render方法 vue支持jsx的代码",
//   "#anzhuang":"npm i babel-preset-env babel-plugin-transform-vue-jsx",
//   "#anzhuang2":"npm i babel-helper-vue-jsx-merge-props babel-plugin-syntax-jsx",

                test:/\.jsx$/,
                loader:"babel-loader"
            },
            {
                test:/\.css$/,
                // loader:"css-loader"
                use:[                    
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test:/\.styl/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader', 
                        options:{
                            sourceMap:true,//2.设置此处会直接使用stylus-loader的处理器生成的sourceMap  
                        }
                    },
                    'stylus-loader'//1.它会生成sourceMap
                ]
            },
            {
                test:/\.(gif|jpg|jpeg|png|svg)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:1024,
                            name:'[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env':{
                NODE_ENV:isDev?'"development"':'"production"'
            }    
        }),
        new HTMLPlugin()//
    ]
}

//npm i cross-env

if(isDev){
    config.devtool='#cheap-module-eval-source-map'//调试，非编译的那种
    config.devServer={
        port:8000,
        host:'0.0.0.0',
        overlay:{//在webpack编译的时候出现的任何错误，都显示在网页上
            errors:true,
        },
        hot:true//刷新页面时不要全部刷新，只更新更改的部分
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    )
}

module.exports=config;

