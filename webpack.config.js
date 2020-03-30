const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all"
    }
  };

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetsPlugin(),
      new TerserWebpackPlugin()
    ];
  }

  return config;
};

const filename = ext => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      }
    },
    {
      loader: "css-loader",
      options: {
        url: false
      }
    },
    "postcss-loader"
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const babelOptions = preset => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"]
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

// const jsLoaders = () => {
//   const loaders = [
//     {
//       loader: "babel-loader",
//       options: babelOptions()
//     }
//   ];

//   if (isDev) {
//     loaders.push("eslint-loader");
//   }

//   return loaders;
// };

const plugins = () => {
  const base = [
    new HTMLWebpackPlugin({
      template: "./index.html",
      minify: {
        collapseWhitespace: isProd
      },
      title: "Need For Drive",
      filename: "index.html"
    }),
    new HTMLWebpackPlugin({
      template: "./order_page.html",
      minify: {
        collapseWhitespace: isProd
      },
      title: "Need For Drive | Order page",
      filename: "order_page.html"
    }),
    new HTMLWebpackPlugin({
      template: "./admin_auth.html",
      minify: {
        collapseWhitespace: isProd
      },
      title: "Need For Drive | Admin Auth",
      filename: "admin_auth.html"
    }),
    new HTMLWebpackPlugin({
      template: "./admin_car_setting.html",
      minify: {
        collapseWhitespace: isProd
      },
      title: "Need For Drive | Admin Car Setting",
      filename: "admin_car_setting.html"
    }),
    new HTMLWebpackPlugin({
      template: "./admin_order_list.html",
      minify: {
        collapseWhitespace: isProd
      },
      title: "Need For Drive | Admin Order List",
      filename: "admin_order_list.html"
    }),
    new HTMLWebpackPlugin({
      template: "./admin_error.html",
      minify: {
        collapseWhitespace: isProd
      },
      title: "Need For Drive | Admin Error",
      filename: "admin_error.html"
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, "./src/images/**/*"),
        to: path.resolve(__dirname, "dist")
      },
      {
        from: path.resolve(__dirname, "./src/fonts/*"),
        to: path.resolve(__dirname, "dist")
      }
    ]),
    new MiniCssExtractPlugin({
      filename: filename("css")
    })
  ];

  // if (isProd) {
  //   base.push(new BundleAnalyzerPlugin());
  // }

  return base;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./scripts/index.jsx"]
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist")
  },
  resolve: {
    extensions: [".scss", ".css", ".js"],
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },
  optimization: optimization(),
  devServer: {
    port: 8000,
    hot: isDev
  },
  devtool: isDev ? "source-map" : "",
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders()
      },
      {
        test: /\.less$/,
        use: cssLoaders("less-loader")
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders("sass-loader")
      },
      // {
      //   test: /\.(png|jpg|svg|gif)$/,
      //   use: ["file-loader"]
      // },
      {
        test: /\.(ttf|woff|woff2|eot|svg)$/,
        use: ["file-loader"]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelOptions()
        }
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-typescript")
        }
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-react")
        }
      }
    ]
  }
};
