import { createWebHistory, createRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import HelloJupiter from "./components/HelloJupiter.vue";
//import Home from "./components/Home.vue";
//import Ingredients from "./components/Ingredients.vue";
//import Recipes from "./components/Recipes.vue";
const history = createWebHistory();
const routes = [
    { path: "/", component: HelloWorld },
    { path: "/jupiter", component: HelloJupiter },
    { path: "/world", component: HelloWorld },
];
const router = createRouter({ history, routes });
export default router;