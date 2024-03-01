import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import FaviconsWebpackPlugin from "favicons-webpack-plugin";
import HtmlWebpackTagsPlugin from "html-webpack-tags-plugin";
import remarkGfm from "remark-gfm";
import remarkMdxImages from "remark-mdx-images";
import rehypePrism from "rehype-prism-plus";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('webpack').Configuration} */

const webpackConfig = {
  mode: "development",
  entry: "./app/index.tsx",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
    port: 5454,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/plugin-transform-object-rest-spread"],
            },
          },
          {
            loader: "@mdx-js/loader",
            /** @type {import('@mdx-js/loader').Options} */
            options: {
              providerImportSource: "@mdx-js/react",
              remarkPlugins: [remarkGfm, remarkMdxImages],
              rehypePlugins: [rehypePrism],
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".css", ".md", ".mdx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Home",
      filename: "index.html",
      template: "./app/assets/templates/index.html",
    }),
    new MiniCssExtractPlugin(),
    new FaviconsWebpackPlugin("./app/assets/favicons/favicon.ico"),
    new HtmlWebpackTagsPlugin({
      links: [
        './app/assets/favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32"',
        './app/assets/favicons/apple-touch-icon.png" rel="icon" type="image/png" sizes="180x180"',
        './app/assets/favicons/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16"',
        './app/assets/favicons/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32"',
        './app/assets/favicons/android-chrome-192x192.png" rel="icon" type="image/png" sizes="192x192"',
        './app/assets/favicons/android-chrome-512x512.png" rel="icon" type="image/png" sizes="512x512"',
      ],
      tags: {},
    }),
  ],
};

export default webpackConfig;
