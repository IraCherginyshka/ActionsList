const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); 


module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: './index.js', 

  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'public') 
  },

  watch: true, 

  devtool: 'source-map', 

  module: { 
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'] 
          }
        }
      },
      {
        test: /\.scss$/, 

        use:
          ExtractTextPlugin.extract({
          use: [
            'css-loader', 
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          'sass-loader'
        ],
          fallback: 'style-loader' 
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};