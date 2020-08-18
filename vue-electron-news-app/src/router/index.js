import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import TopNews from "../views/TopNews.vue";
import CategoryNews from "../views/CategoryNews.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/home",
        name: "landing",
        component: Home,
    },
    {
        path: "/top-news",
        name: "top news",
        component: TopNews,
    },
    {
        path: "/news-by-category",
        name: "News by category",
        component: CategoryNews,
    },
];

const router = new VueRouter({
    mode: process.env.IS_ELECTRON ? "hash" : "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
});

export default router;