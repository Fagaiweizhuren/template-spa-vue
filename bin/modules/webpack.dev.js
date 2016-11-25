import path         from 'path';
import webpack      from 'webpack';
import merge        from 'webpack-merge';
import HtmlPlugin   from 'html-webpack-plugin';
import * as CONFIG  from './config';
import webpackBase  from './webpack.base';

// set entry
const entry             = {
  apps               : [ 'webpack-hot-middleware/client?reload=true' ]   // hot loading
};

// set output
const output            = {
    path            : CONFIG.PATH_DEVELOP,
    publicPath      : '/'
};

// set plugins
const plugins           = [
    new HtmlPlugin({
        filename: 'index.html',
        template: CONFIG.PATH_HTML_TEMPLATE
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
];
export default merge( webpackBase, { entry, output, plugins });
