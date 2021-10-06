import getters from './getters.js'
import mutations from './mutation.js'
import actions from './actions.js'

export default {
    namespaced: true,
    state(){
        return {
            generatedMetics: []
        }
    },
    getters,
    mutations,
    actions
}