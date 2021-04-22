import { createRouter, createWebHistory } from 'vue-router';
import Home from "../components/Home.vue"
import Details from "../components/Details.vue"

const routes = [
    {
        path: "/",
        component: Home,
        name: "Home"
    },
    {
        path: "/posts/:id",
        component: Details,
        name: "Details",
        props: true
    }
]


const Router = createRouter({
    history: createWebHistory(),
    routes,
})


export default Router;