import OidcService from './components/OidcService.vue';
import OidcPlugin from './components/OidcPlugin.vue';

const routes = [
    { path: '/', component: OidcService },
    { path: '/oidc', component: OidcPlugin },
];

export default routes;