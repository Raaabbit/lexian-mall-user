const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: ['./src/common/js/myzepto.js','./src/works/js/index.js'],
    goodlist : ['./src/common/js/myzepto.js','./src/works/js/goodList.js'],
    bill:['./src/common/js/myzepto.js','./src/works/js/bill.js'],
    cart:['./src/common/js/myzepto.js','./src/works/js/cart.js'],
    goodListLike:['./src/common/js/myzepto.js','./src/works/js/likegoods.js'],
    goodsSearch:['./src/common/js/myzepto.js','./src/works/js/searchgood.js'],
    like:['./src/common/js/myzepto.js','./src/works/js/like.js'],
    msg:['./src/common/js/myzepto.js','./src/works/js/msg.js'],
    person:['./src/common/js/myzepto.js','./src/works/js/person.js'],
    search:['./src/common/js/myzepto.js','./src/works/js/like.js'],
    shop:['./src/common/js/myzepto.js','./src/works/js/shop.js'],
    shopListLike:['./src/common/js/myzepto.js','./src/works/js/likeshops.js'],
    shopSearch:['./src/common/js/myzepto.js','./src/works/js/searchshop.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devServer: {
    contentBase: "./dist",
    inline:true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg)$/,
        use: 'file-loader?name=./res/static/[name].[ext]'
      },
      {
        test: /\.svg$/,
        use: 'file-loader?name=./res/icon_user/[name].[ext]'
      },
      {
        test: /\.html$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback:"style-loader",
          use:[{
            loader:'css-loader',
            options:{
              minimize:true
            }
          }],
          publicPath:"../"
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('./css/[name].css'),
    new HtmlWebpackPlugin({
      template:"./src/index.html",
      filename:"index.html",
      title:"lexian-mall",
      chunks:['index']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/goodsList.html",
      filename:"./pages/goodsList.html",
      title:"lexian-mall goodlist",
      chunks:['goodlist']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/bill.html",
      filename:"./pages/bill.html",
      title:"lexian-mall bill",
      chunks:['bill']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/cart.html",
      filename:"./pages/cart.html",
      title:"lexian-mall cart",
      chunks:['cart']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/like.html",
      filename:"./pages/like.html",
      title:"lexian-mall like",
      chunks:['like']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/msg.html",
      filename:"./pages/msg.html",
      title:"lexian-mall msg",
      chunks:['msg']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/person.html",
      filename:"./pages/person.html",
      title:"lexian-mall person",
      chunks:['person']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/goodListLike.html",
      filename:"./pages/goodListLike.html",
      title:"lexian-mall goodListLike",
      chunks:['goodListLike']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/goodsSearch.html",
      filename:"./pages/goodsSearch.html",
      title:"lexian-mall goodsSearch",
      chunks:['goodsSearch']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/search.html",
      filename:"./pages/search.html",
      title:"lexian-mall search",
      chunks:['search']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/shop.html",
      filename:"./pages/shop.html",
      title:"lexian-mall shop",
      chunks:['shop']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/shopListLike.html",
      filename:"./pages/shopListLike.html",
      title:"lexian-mall shopListLike",
      chunks:['shopListLike']
    }),
    new HtmlWebpackPlugin({
      template:"./src/pages/shopSearch.html",
      filename:"./pages/shopSearch.html",
      title:"lexian-mall shopSearch",
      chunks:['shopSearch']
    })
  ]
};

