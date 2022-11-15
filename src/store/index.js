
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export const store = new Vuex.Store({

    state:{
        user:{

        }
    },
    mutations: {
        login() {
            sessionStorage.setItem("isLogin", "true");
        },
        logout() {
            sessionStorage.setItem("isLogin", "false");
        },

    },
    actions: {
        doLogin(context,payload) {

            if( context.state.user.username ===payload.username && context.state.user.password === payload.password){
                alert(sessionStorage.getItem("isLogin"));
                context.commit("login");
            }
        },
        doLogout(context) {
            context.commit("logout");
        },

    },
    getters:{
        isLogin(){
            return sessionStorage.getItem("isLogin");
        }
    }

});