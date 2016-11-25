/**
 * project config
 *
 * */
import page1    from '../stores/page1';
import Page1    from '../containers/page1';

// default path
export const defaultPath    = '/page1';

// config of routers
export const routes        = [
    {
        path        : '/page1',
        component   : Page1
    }
];

// config of modules
export const modules        = {
    page1
};
