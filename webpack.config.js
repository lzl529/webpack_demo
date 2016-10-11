var webpack = require('webpack');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
	"devtool": 'source-map', // 生成sourcemap
	"entry": __dirname + "/app/main.js",//已多次提及的唯一入口文件
	"output": {
		path: __dirname + "/public",//打包后的文件存放的地方
		filename: "bundle.js"//打包后输出文件的文件名
	},
	"module": {
		"loaders": [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				loader: 'style!css!sass!postcss'//添加对样式表的处理
			}
		]
	},
	devServer: {
		contentBase: './public',
		port: '8001',
		historyApiFallback: true,
		inline: true,
		colors: true,
		hot: true
	},
	postcss: [
		require('autoprefixer')
	],
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:8001' })
	]
}