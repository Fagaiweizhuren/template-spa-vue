import Vue          from 'vue';
import Vuex         from 'vuex';
import VueRouter    from 'vue-router';
import VueResource  from 'vue-resource';

import 'babel-polyfill';

import Core         from './modules/core';
import App          from './App';
import { routes, modules, defaultPath } from './config/config';

Vue.use( Vuex );
Vue.use( VueRouter );
Vue.use( VueResource );
Vue.use( Core );

//  config of router
const router        = new VueRouter( { routes } );

//  config of store
const store         = new Vuex.Store({
    modules     : Object.assign( {}, modules )
});

const app           = new Vue({
    store,
    router,
    render      : h => h( App )
});

router.push( defaultPath );

app.$mount('#app');

