import { createWebHistory, createRouter } from "vue-router";
import CardComponent from "@/components/CardComponent";
import ProductsComponent from "@/components/ProductsComponent";

const routes = [
    {
        path: "/CardComponent",
        name: "CardComponent",
        component: CardComponent,
    },
    {
        path: "/ProductsComponent",
        name: "ProductsComponent",
        component: ProductsComponent,
    }
];

const router = createRouter({
    mode:history,
    history: createWebHistory(),
    routes: routes,
});

export default router;