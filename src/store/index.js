import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);

//创建一个新的store实例
export default new Vuex.Store({
    state:{
            count:0
        },
    mutations:{
        increment (state){
            state.count++
        }
    }
})


 