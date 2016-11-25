import webpack              from 'webpack';
import express              from 'express';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import WebpackHotMiddleware from  'webpack-hot-middleware';

import * as CONFIG          from './modules/config';
import webpackDev           from './modules/webpack.dev';

// set compiler build
const compiler              = webpack( webpackDev );
// create server of express
const app                   = express();

const devConfig             = {
    publicPath          : webpackDev.output.publicPath,
    stats               : { colors : true }
};
// create hot middleware and dev middleware
const hotMiddleware         = WebpackHotMiddleware( compiler );
const devMiddleware         = WebpackDevMiddleware( compiler, devConfig );

// add event
compiler.plugin('compilation', ( compilation ) => {
    compilation.plugin( 'html-webpack-plugin-after-emit', ( data, cb ) => {
        hotMiddleware.publish({ action : 'reload' });
        cb();
    });
});

// http use dev and hot loading
app.use( devMiddleware );
app.use( hotMiddleware );

// listen port
app.listen( CONFIG.PORT_DEVELOP, () => {
    console.log( `Listening on ${CONFIG.PORT_DEVELOP}` );
});
