import { createRouter, createWebHistory } from "vue-router";
import LoginForm from '@/components/LoginForm.vue'
import UserFeeds from "@/components/UserFeeds.vue"
import AboutPage from "@/components/AboutPage.vue"
import ProfilePage from "@/components/ProfilePage.vue"
import AvailableFeeds from "@/components/AvailableFeeds.vue"


const routes =  [
    {
        path: "/",
        name: "Index",
        component: LoginForm
    },

    {
        path: "/signin",
        name: "SignIn",
        component: () => import('@/components/SignIn.vue')
    },

    {
        path: "/userfeeds",
        name: "UserFeeds",
        component: UserFeeds
    },

    {
        path: "/about",
        name: "AboutPage",
        component: AboutPage
    },

    {
        path: "/profile",
        name: "ProfilePage",
        component: ProfilePage
    },

    {
        path: "/feeds",
        name: "AvailableFeeds",
        component: AvailableFeeds
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;