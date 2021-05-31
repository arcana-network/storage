const path = require('path');
// const InlineEnvironmentVariablesPlugin = require('inline-environment-variables-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const serverConfig = ({ convergence, k, n, happy, privateKey, actor, userName, appid }) => {
    return {
        entry: {
            "tus": path.resolve(__dirname, "src", "index.ts")
        },
        mode: 'production',
        module: {
            rules: [{
                test: /\.(ts|js)x?$/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        configFile: 'tsconfig.json'
                    }
                },
                exclude: /node_modules/,
            }]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js']
        },
        output: {
            filename: x => x.chunk.name + '.js',
            library: '[name]',
            path: path.resolve(__dirname, 'dist'),
        }
    }
};

module.exports = serverConfig;