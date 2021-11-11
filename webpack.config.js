const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');

const commonConfig = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: 'tsconfig.json',
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  output: {
    filename: 'storage.umd.js',
    library: 'arcana',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
  target: 'web',
};

const standaloneConfig = {
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
      stream: require.resolve('stream-browserify'),
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist/standalone'),
  },
};

const moduleConfig = {
  resolve: {
    fallback: {
      crypto: false,
      stream: false,
    },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = [merge(commonConfig, standaloneConfig), merge(commonConfig, moduleConfig)];
