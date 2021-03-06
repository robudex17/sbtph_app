import { createStore } from 'vuex'

import authModules from './auth/index.js'
import csdPhoneModules from './csdphone/index.js'
import agentCdrModules from './agentcdr/index.js'
import agentInfoModules  from './management/agents/index.js'
import tagModules from './management/tags/index.js'
import metricsModules from './management/metrics/index.js'


const store = createStore({
    modules: {
        auth: authModules,
        csdphone: csdPhoneModules,
        agentcdr: agentCdrModules,
        agentinfo: agentInfoModules,
        tags: tagModules,
        metrics: metricsModules,
    },
    state(){
        return {
             AppAdmin: 'Rogmer Bulaclac',
             AppDeveloper: 'Rogmer Bulaclac',
             AppName:'sbtph_app'
        }
    },
    getters:{
        getAppAdmin(state){
            return state.AppAdmin
        },
        getAppDeveloper(state){
            return state.AppDeveloper
        },
        getAppName(state){
            return state.AppName
        }
    }
})

export default store