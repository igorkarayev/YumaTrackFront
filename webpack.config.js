const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetWebpackPlugin =require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev;

const cssLoaders = extra => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      },
    },
    'css-loader'
  ]

  if (extra) {
    loaders.push(extra)
  }

  return loaders
}

const babelOptions = preset => {
  const opts = {
    presets: [
      '@babel/preset-env'
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ]
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}

const jsLoaders = preset => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions(preset)
  }]

  if (isDev) {
    loaders.push('eslint-loader')
  }

  return loaders
}

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      new TerserWebpackPlugin()
    ]
  }

  return config
}

const filename = ext => isDev ? `[name].${(ext)}` : `[name].[hash].${(ext)}`

  module.exports = {

    mode: isProd ? 'production' : 'development',
    context: path.resolve(__dirname, 'src'), // чтобы не указывать в путях src
    entry: {
      main: ['@babel/polyfill', './index.jsx'],
    },
    output: {  // куда и как складываются результаты сборки
      filename: filename('js'),
      path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],// чтобы в импортах не прописывать расширение файла
      // alias: против относительных путей к абсолютным
    },
    optimization: optimization(),
    plugins: [
      new HTMLWebpackPlugin({ // сам создает index.html в папке dist и подсовывет нужные скрипты
        template: './index.html',
        minify: {
          collapseWhitespace: isProd
        }
      }),
      new CleanWebpackPlugin(), // чистит файл от результата прошлых сборок
      new MiniCssExtractPlugin({
        filename: '[name].[hash].css'
      })
    ],
    module: { //лоадеры для работы webpack с иными расширениями файлов, а не только js/json
      rules: [
        {
          test: /\.css$/,       //лоадер для css
          use: cssLoaders()
        },
        {
          test: /\.s[ac]ss$/,    //лоадер для scss/sass
          use: cssLoaders('sass-loader')
        },
        {
          test: /\.(js)$/,
          exclude: /node_modules/,
          use: jsLoaders()
        },
        {
          test: /\.(ts)$/,
          exclude: /node_modules/,
          // use: jsLoaders('@babel/preset-typescript')
          loader: {
            loader: 'babel-loader',
            options: babelOptions('@babel/preset-typescript')
          }
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: {
            loader: 'babel-loader',
            options: babelOptions('@babel/preset-react')
          }
        },
        {
          test: /\.tsx$/,
          exclude: /node_modules/,
          // use: jsLoaders('@babel/preset-typescript')
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              "@babel/preset-react"
            ],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread"
            ]
          }
        },
      ]
    },
    devtool: isDev ? 'source-map' : '',
    devServer: {
      port:4000,
      open: true,
      hot: isDev
    }
  }
