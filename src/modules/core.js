import * as CONFIG from '../config/config';

/**
 * supply to functions of vue
 */
class Core {
    constructor( Vue, options ) { }

    /**
     * open to alert pop box
     * @param text <String> content of pop box
     */
    openPopAlert( text = '' ) { }

    /**
     * send to ajax data
     * @param option <Object>
     */
    sendAjaxData( option = {} ) { }
}

export default ( Vue, options ) => {
    // add to vue
    Vue.prototype.$core         = new Core( Vue, options );
};
