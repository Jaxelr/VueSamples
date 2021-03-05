import OidcService from './components/OidcService.vue';
import OidcPlugin from './components/OidcPlugin.vue';
import OidcMixin from './components/OidcMixin.vue';

const routes = [
    { path: '/', component: OidcService },
    { path: '/plugin', component: OidcPlugin },
    { path: '/mixin', component: OidcMixin },
];

export default routes;