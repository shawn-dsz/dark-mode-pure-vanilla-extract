const SkuWebpackPlugin = require('sku/webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  components: './src/components.ts',
  outputPath: './dist/playroom',
  title: 'Yum UI',
  typeScriptFiles: ['src/**/*.{ts,tsx}', '!**/node_modules'],
  frameComponent: './src/playroom/FrameComponent.tsx',
  widths: [320, 820, 1400],
  webpackConfig: () => ({
    plugins: [
      new MiniCssExtractPlugin({
        ignoreOrder: true,
      }),
      new SkuWebpackPlugin({
        include: ['src'].map((dir) => path.join(__dirname, dir)),
        target: 'browser',
        browserslist: [
          'Edge >= 16',
          'Safari >= 10.1',
          'iOS >= 10.3',
          'Samsung >= 6',
        ],
        mode: process.env.NODE_ENV ? process.env.NODE_ENV : 'development',
        displayNamesProd: true,
        removeAssertionsInProduction: false,
        MiniCssExtractPlugin,
      }),
    ],
  }),
};
