import path from 'path';
/**
 * config of webpack build
 */

// config of directory name
export const DIRECTORY_OUTPUT               = 'dis';        // directory name of output file
export const DIRECTORY_OUTPUT_STATIC        = 'static';     // directory name of output static resource
export const DIRECTORY_OUTPUT_RESOURCE      = 'resource';   // directory name of output resource
export const DIRECTORY_SOURCE               = 'src';        // directory name of source code
export const DIRECTORY_DEVELOP              = 'test';       // directory name of debug develop

// config of file
export const FILE_SOURCE_MAIN               = 'main.js';    // main file of build
export const FILE_HTML_TEMPLATE             = 'index.html'; // template file of html

// config of path
export const PATH_OUTPUT_PUBLIC             = `.${path.sep}`;
export const PATH_ROOT_ABSOLUTE             = path.join( __dirname, '..', '..');
export const PATH_OUTPUT                    = path.join( PATH_ROOT_ABSOLUTE, DIRECTORY_OUTPUT );
export const PATH_DEVELOP                   = path.join( PATH_ROOT_ABSOLUTE, DIRECTORY_DEVELOP );
export const PATH_HTML_TEMPLATE             = path.join( DIRECTORY_SOURCE, FILE_HTML_TEMPLATE );
export const PATH_SOURCE_MAIN               = path.join( DIRECTORY_SOURCE, FILE_SOURCE_MAIN );
export const PATH_RESOURCE_OUTPUT           = `${DIRECTORY_OUTPUT_STATIC}/${DIRECTORY_OUTPUT_RESOURCE}`;

// config of port
export const PORT_DEVELOP                   = '6060';
