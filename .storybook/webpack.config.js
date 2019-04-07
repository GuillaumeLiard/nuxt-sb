const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [
								'./assets/vars/*.scss',
								'./assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
							]
						},
					},
				],
				include: [
					path.resolve(__dirname, '../'),
					path.resolve(__dirname, '../assets'),
				]
			},
			// {  test: /\.css$/,
			// 	loader: 'style-loader!css-loader',
			// 	include: __dirname
			// },
			// {
			// 	test: /\.(woff|woff2)$/,
			// 	use: {
			// 		loader: 'url-loader',
			// 		options: {
			// 			name: 'fonts/[hash].[ext]',
			// 			limit: 5000,
			// 			mimetype: 'application/font-woff'
			// 		}
			// 	}
			// },
			// {
			// 	test: /\.(ttf|eot|svg|png)$/,
			// 	use: {
			// 		loader: 'file-loader',
			// 		options: {
			// 			name: 'fonts/[hash].[ext]'
			// 		}
			// 	}
			// }
		]
	}
}
