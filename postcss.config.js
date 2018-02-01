//给一些兼容的样式 增加浏览器前缀  -webkit -mos-
//npm i post-css-loader autoprefixer babel-loader babel-core

const autoprefixer=require('autoprefixer')

module.exports={
  plugins:[
    autoprefixer()
  ]
}