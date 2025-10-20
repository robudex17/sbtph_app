<template>
    <!-- <div>{{ tdata }}</div> -->
     <tr v-for="(item, index) in tdata" :key="index">
       <td >{{index+1}}</td>
       <td class="lead text-justify">{{item.extension}}</td>
       <td class="lead text-justify">{{item.name}}</td>
       <td class="text-primary lead text-justify">{{item.email}}</td>
        <td>
           <button type="button" class="btn btn-primary btn-sm font-weight-normal lead mx-1" data-bs-toggle="modal" :data-bs-target="dataBsTarget" dataset-backdrop="static" dataset-keyboard="false" @click="getAgentInfo(item)" >UPDATE </button>
           <button class="btn btn-danger btn-sm font-weight-normal lead mx-1" @click="deleteAgent(item.extension)"  >DELETE</button>
            <button
            class="btn btn-sm font-weight-bold lead mx-1"
            :class="item.employee_status == '1' ? 'btn-success' : 'btn-secondary'"
            :disabled="item.employee_status == '0'"
            @click="resignedAgent(item.extension)"
            >
            {{ item.employee_status == '1' ? 'ACTIVE' : 'RESIGNED' }}
            </button>

        </td>
     </tr>
     
    <management-modal-form
      modalId="updatemodalAgent"
      modalTitle="Update Agent"
      formId="updateAgent"
      formMethod="POST"
      :item="item"
      :agent="agent"
      :extension="extension"
      :currentName="name"
      :currentEmail="email"
      :currentTeamLeader="teamlead"
       @emittedData="updateAgent"
       @resignedAgent="resignedAgent"

    ></management-modal-form>
</template>

<script>
    import ManagementModalForm from '../modal/ManagementModalForm.vue'
    
    export default {
        
        props:['tdata','agent'],
        data(){
            return{ 
                dataBsTarget: '#updatemodalAgent',
                item: 'test',
                name: null,
                email: null,
                extension: null,
                teamlead: null
            }
        },
        components: {
            ManagementModalForm
        },
        methods:{
            deleteAgent(extension){
                this.$emit('click', extension)
            },
            getAgentInfo(item){
                this.name = item.name
                this.email = item.email
                this.extension = item.extension
                this.teamlead = item.teamlead
              
                
            },
            updateAgent(data){
                this.$emit('emittedData', data)
            },
            resignedAgent(extension){
                this.$emit('resignedAgent', extension)
            }
            
        },
        
     
    }
    
</script>