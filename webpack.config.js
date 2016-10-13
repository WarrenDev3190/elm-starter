var webpack = require('webpack'),
	path 	= require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	validate = require('webpack-validator');

module.exports = validate({
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		path.resolve(__dirname, 'src/index.js')
	],
	resolve: {
		modulesDirectories: ['node_modules'],
		extensions: ['','.js','.elm'], 
	},
	output: {
		path: path.resolve(__dirname, 'dist/js/'),
		filename: '[name].js',
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('./index.html'),
			filename: 'index.html'
		})
	],
	module: {
		loaders: 
			[
				{
					test: /\.elm$/,
					loader: 'elm-webpack',
					exclude: [
						/node_modules/,
						/elm-stuff/
					]
				},
				{
					test: /\.scss$/,
					loader: "style-loader!raw-loader!sass-loader?includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib")
	            }
        	]
    }
});