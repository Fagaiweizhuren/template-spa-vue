import webpack      from 'webpack';
import * as CONFIG  from './config';
/**
 * some function of webpack use
 */
class Util {
    constructor() {

    }

    /**
     * build config
     * @param webpackConfig
     */
    build( webpackConfig ) {
        // build
        webpack( webpackConfig, ( error, stats ) => {
            // error
            if( error ) throw error;
            // config of output style
            const outputCfg         = {
                colors          : true,
                modules         : false,
                chunks          : false,
                chunkModules    : false
            };
            // output stats
            process.stdout.write( `${stats.toString( outputCfg )}\n` );
            // exit node
            process.exit();
        });
    }
}

export default new Util();
