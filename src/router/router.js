import { createRouter, createWebHistory } from 'vue-router';
import Details from "../views/Details.vue"


const routes = [
    {
        path: "/posts/:id",
        name: "Details",
        component: Details,
        props: true
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})


export default router;