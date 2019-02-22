const path=require('path');
const webpack=require('webpack');
const HtmlPlugin=require('html-webpack-plugin');
const ETWP=require("extract-text-webpack-plugin");
module.exports={
    mode:"development",
    entry:{
        "zhuye":'./src/index.js'
    },
    output:{
        
        path:path.resolve(__dirname,'dist'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ETWP.extract({
                    fallback:"style-loader",
                    use:"css-loader"
                })
            },
            {
                test:/\.(jpg|png|gif)$/,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            limit:500000000,
                            outputPath:'img/'
                        }
                    }
                ]
            },
            {
                test:/\.html$/i,
                loader:'html-withimg-loader',
            },
            {
                test:/\.scss$/,
                // use:['style.loader','css-loader','sass-loader']
                use:ETWP.extract({
                    fallback:"style-loader",
                    use:["css-loader",'sass-loader']
                })

            },
            {
                test:/\.css$/,
                // use:['style-loader','css-loader']
                use:ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use:[{
                        loader:"css-loader",
                        options:{
                            importLoaders:1
                        }
                    },'postcss-loader']
                })
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            minify:{
                removeAttributeQuotes:true
            },
            template:'./src/index.html',
            hash:true,  //避免缓存
        }),
        new ETWP('./index.css')
    ],
    devServer:{
        contentBase:path.resolve(__dirname,'dist'),
        host:'localhost',
        compress:true,
        port:8081,
        open:true,
        hot:true
    }

}