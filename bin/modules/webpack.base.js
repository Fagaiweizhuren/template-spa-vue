import path         from 'path';
// module of lading config list
import * as CONFIG  from './config';
/**
 * config of webpack base
 */

// config entry
const entry             = {
    app             : [
        `.${path.sep}${CONFIG.PATH_SOURCE_MAIN}`  // config build main file
    ]
};

// config output
const output            = {
    publicPath      : CONFIG.PATH_OUTPUT_PUBLIC,
    path            : CONFIG.PATH_OUTPUT,
    filename        : path.join( CONFIG.DIRECTORY_OUTPUT_STATIC, 'js', '[name]-[hash:5].js' )
};

// config module
const module            = {
    loaders         : [
        // config of vue loader
        {
            test    : /\.vue$/,
            loader  : 'vue'
        },
        // config of style loader
        {
            test    : /\.(css|less)$/,
            loader  : 'style!css!autoprefixer!less!stylelint'
        },
        // config of js
        {
            test    : /\.js/,
            loader  : 'babel!eslint',
            exclude : /node_modules/
        },
        // config of ttf font
        {
            test    : /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader  : `file?name=${CONFIG.PATH_RESOURCE_OUTPUT}/[name]-[hash:5].[ext]`
        },
        // config of images
        {
            test    : /\.(png|jpg|gif)$/,
            loader  : `file?name=${CONFIG.PATH_RESOURCE_OUTPUT}/[name]-[hash:5].[ext]`
        }
    ],
    exports         : {
        eslint      : {
            configFile : '.eslintrc'
        },
        stylelint      : {
            configFile : '.stylelintrc'
        }
    }
};

// config plugins
const plugins           = [];

// config resolve
const resolve           = {
    extensions       : [ '', '.js', '.vue', '.less' ]
};
// config export
export default { entry, output, module, plugins, resolve };
