import {createWebHistory,createRouter} from 'vue-router'
import FirstPage from './components/FirstPage.vue';
import MyProfile from './components/MyProfile.vue';
import SignUp from './components/SignUp.vue';
const routes=[
    {
        name:'FirstPage',
        path:'/',
        component: FirstPage
    },
    {
        name:'MyProfile',
        path:'/MyProfile',
        component: MyProfile
    },
    {
        name:'SignUp',
        path:'/SignUp',
        component: SignUp
    }
];
const router=createRouter({
    history:createWebHistory(),
    routes
});
export default router;