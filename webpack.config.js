const path = require('path');

const serverConfig = () => {
  return {
    entry: {
      arcana: path.resolve(__dirname, 'src', 'index.ts'),
    },
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
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
      fallback: {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
      },
    },
    output: {
      filename: (x) => x.chunk.name + '.js',
      library: '[name]',
      path: path.resolve(__dirname, 'dist'),
    },
  };
};

module.exports = serverConfig;
