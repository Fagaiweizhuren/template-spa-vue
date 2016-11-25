import merge        from 'webpack-merge';

import webpackBuild from './modules/webpack.build';
import utils        from './modules/utils';

//add plugin
const plugins       = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
];

utils.build( merge( webpackBuild, { plugins }) );
