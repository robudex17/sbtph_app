import getters from './getters.js'
import mutations from './mutations.js'
import actions from './actions.js'


const agentcdr = {
    namespaced: true,
    state(){
        return {
            csdInBoundSummaries:[],
            csdInBoundAgentDetails:[],
            csdOutBoundSummaries:[],
            csdOutBoundAgentDetails:[],
            collectionOutBoundSummaries:[],
            collectionOutBoundAgentDetails:[],
            salesOutBoundSummaries:[],
            salesOutBoundAgentDetails:[],
            missedCallsSummaries:[],
            missedCallsDetails:[],
            parkedCalls:[],
            voiceMails:[],
        }
    },
    getters,
    mutations,
    actions
}

export default agentcdr