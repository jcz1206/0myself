const path=require('path')

const isDev=process.env.NODE_ENV==='development'
const HTMLPlugin=require("html-webpack-plugin")
const webpack=require("webpack")
const ExtractPlugin=require("extract-text-webpack-plugin")//将非javascript代码打包到单独文件，做缓存

const config={
    target:'web',//webpack编译目标是web
    entry:path.join(__dirname,'src/index.js'),
    output:{
        filename:'bundle.[hash:8].js',
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
            //npm i extract-text-webpack-plugin
            // {
            //     test:/\.css$/,
            //     // loader:"css-loader"
            //     use:[                    
            //         "style-loader",
            //         "css-loader"
            //     ]
            // },
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
    config.module.rules.push(        
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
    )
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
}else{
    //类库代码要缓存，就要和业务代码分开打包，config.entry 修改
    config.entry={
        app:path.join(__dirname,'src/index.js'),
        vendor:['vue'] //类库代码,'vue-router'
    }
    config.output.filename='[name].[chunkHash:8].js'  //vue中的js会被单独打包到一起，和webpack的js代码分开
    config.module.rules.push(      //引入的styl会被单独打包  
        {
            test:/\.styl/,
            use:ExtractPlugin.extract({
                fallback:'style-loader',
                use:[
                    // 'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader', 
                        options:{
                            sourceMap:true,//2.设置此处会直接使用stylus-loader的处理器生成的sourceMap  
                        }
                    },
                    'stylus-loader'//1.它会生成sourceMap
                ]
            })
        },
    )
    config.plugins.push(
        new ExtractPlugin('style.[contentHash:8].css'),
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name:'runtime' //app.js中的webpack代码单独打包
        })
    )
    //vue框架代码和业务代码分开
}

module.exports=config;

