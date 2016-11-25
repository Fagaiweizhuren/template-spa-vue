import path         from 'path';
import merge        from 'webpack-merge';
import HtmlPlugin   from 'html-webpack-plugin';
import * as CONFIG  from './config';
import webpackBase  from './webpack.base';

const plugins           = [
    new HtmlPlugin({
        filename: 'index.html',
        template: CONFIG.PATH_HTML_TEMPLATE
    })
];
export default merge( webpackBase, { plugins });
