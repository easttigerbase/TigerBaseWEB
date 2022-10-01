import VueRouter from "vue-router";
import BoardView from "@/views/BoardView";
import TiptapDefault from "@/components/editor/TiptapDefault";
export default new VueRouter({
    mode:'history', //해쉬값 제거 방식
    routes: [{
        path: '/',
        redirect: '/home'
    }, {
        path: '/tech',
        component:BoardView,
    },
        {
            path: '/edit',
            component:TiptapDefault,
        },

        {
            path: '*',
            component: BoardView,
        },
    ]
});