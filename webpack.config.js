const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, 'public', 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: { presets: ['env', 'react'] }
				}
			}
		]
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		publicPath: '/dist/'
	}
};