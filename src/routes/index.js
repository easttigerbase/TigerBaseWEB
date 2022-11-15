import VueRouter from "vue-router";
import TechView from "@/views/TechView";
import DevView from "@/views/DevView";
import TiptapDefault from "@/components/editor/TiptapDefault";
import BoardViewer from "@/components/board/BoardViewer";

export default new VueRouter({
    mode:'history', //해쉬값 제거 방식
    routes: [{
        path: '/',
        redirect: '/tech'
    }, {
        path: '/tech',
        component:TechView,
    },
    {
        path: '/dev',
        component:DevView,
    },

    {
        path:'/tech/:boardId',
        component:BoardViewer,
        props:true,
    },
    {
        path: '/edit',
        component:TiptapDefault,
    },

    {
        path: '*',
        component: TechView,
    },
    ]
});