let HtmlWebpackPlugin = require("html-webpack-plugin");
let path = require('path');

let HtmlWebpackPluginConfig =  new HtmlWebpackPlugin({
	filename: 'index.html',
	template: 'index.html'
});

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.scss$/,
				use: [
					"style-loader",
					'css-loader',
					'sass-loader'
				]
			},
		],
	},
	// resolve: {
	// 	extensions: ['.js', '.jsx', '.scss']
	// },
	plugins: [HtmlWebpackPluginConfig]

};