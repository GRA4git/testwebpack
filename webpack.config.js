const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.js",
    output: {
path: path.resolve(__dirname, 'dist'),
filename: "build.js"
    },
    plugins: [new HtmlWebpackPlugin({
        filename: 'index.html',
      template: 'src/index.html'
    })],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
          {
            test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
          }
        ],
      },
      resolve: {
            extensions: ['.js', '.json', '.wasm'],
          },
          devServer: {
              port: 3000
          } 
}
