const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js/,
        loaders: ["babel-loader"]
      },
      {
        test: /\.vue$/,
        loaders: ["vue-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "styles.css"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "css-loader?-url"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },

  plugins: [new VueLoaderPlugin()],

  resolve: {
    extensions: [".js", ".vue"]
  },

  context: __dirname,

  entry: ["./src/index.js", "./src/assets/styles.scss"],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    library: {
      root: "VueGrid",
      amd: "vue-grid",
      commonjs: "vue-grid"
    },
    libraryTarget: "umd"
  },

  externals: {
    vue: "vue"
  }
};
