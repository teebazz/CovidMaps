import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store = new Vuex.Store({
    state : {
        sideBarActive  : false,
    },
    getters : { //computed
        sideBarActive: (state) => {
            return state.sideBarActive;
        },
    },
    actions : { 
        chnageSidebarState :  (context,params) => {
            context.commit('chngneSidebarState',params);
        }
    },
    mutations :{
        chngneSidebarState : (state,payload) =>{
            state.sideBarActive = payload;
        }
    }
});