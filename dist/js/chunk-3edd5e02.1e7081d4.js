(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3edd5e02"],{"0d04":function(e,t,a){},"55aa":function(e,t,a){"use strict";a.r(t);var l=a("7a23"),n={key:0},s=Object(l["h"])("p",null,"Fetching Data From the Database Please Wait....",-1),d={key:1},i=["data-bs-target"];function r(e,t,a,r,o,c){var u=Object(l["J"])("base-dialog"),m=Object(l["J"])("base-spinner"),b=Object(l["J"])("base-dialoag"),h=Object(l["J"])("agents-data-list"),g=Object(l["J"])("base-table"),f=Object(l["J"])("management-modal-form"),p=Object(l["J"])("base-container");return Object(l["B"])(),Object(l["g"])(l["a"],null,[Object(l["k"])(u,{show:!!o.error,onClose:c.handleError},{default:Object(l["T"])((function(){return[Object(l["h"])("p",null,Object(l["M"])(o.error),1)]})),_:1},8,["show","onClose"]),Object(l["k"])(p,null,{default:Object(l["T"])((function(){return[o.isLoading?(Object(l["B"])(),Object(l["g"])("div",n,[Object(l["k"])(b,{show:o.isLoading},{default:Object(l["T"])((function(){return[Object(l["k"])(m,null,{default:Object(l["T"])((function(){return[s]})),_:1})]})),_:1},8,["show"])])):(Object(l["B"])(),Object(l["g"])("div",d,[Object(l["k"])(g,{theader:"agent",tableclass:"agent"},{default:Object(l["T"])((function(){return[Object(l["k"])(h,{tdata:c.allAgents,onClick:c.deleteAgent,agent:a.agent,onEmittedData:c.updateAgent},null,8,["tdata","onClick","agent","onEmittedData"])]})),_:1}),Object(l["k"])(f,{modalId:"modalAgent",modalTitle:"Add Agent",formId:"addAgent",formMethod:"POST",agent:a.agent,onEmittedData:c.addAgent},null,8,["agent","onEmittedData"]),Object(l["h"])("button",{type:"button",class:"btn btn-dark","data-bs-toggle":"modal","data-bs-target":o.dataBsTarget,"dataset-backdrop":"static","dataset-keyboard":"false",id:"add_tag"}," ADD AGENT ",8,i)]))]})),_:1})],64)}var o=a("1da1"),c=(a("ac1f"),a("5319"),a("96cf"),a("b0c0"),{class:"lead text-justify"}),u={class:"lead text-justify"},m={class:"text-primary lead text-justify"},b=["data-bs-target","onClick"],h=["onClick"];function g(e,t,a,n,s,d){var i=Object(l["J"])("management-modal-form");return Object(l["B"])(),Object(l["g"])(l["a"],null,[(Object(l["B"])(!0),Object(l["g"])(l["a"],null,Object(l["H"])(a.tdata,(function(e,t){return Object(l["B"])(),Object(l["g"])("tr",{key:t},[Object(l["h"])("td",null,Object(l["M"])(t+1),1),Object(l["h"])("td",c,Object(l["M"])(e.extension),1),Object(l["h"])("td",u,Object(l["M"])(e.name),1),Object(l["h"])("td",m,Object(l["M"])(e.email),1),Object(l["h"])("td",null,[Object(l["h"])("button",{type:"button",class:"btn btn-primary btn-sm font-weight-normal lead","data-bs-toggle":"modal","data-bs-target":s.dataBsTarget,"dataset-backdrop":"static","dataset-keyboard":"false",onClick:function(t){return d.getAgentInfo(e)}},"UPDATE ",8,b),Object(l["h"])("button",{class:"btn btn-danger btn-sm font-weight-normal lead",onClick:function(t){return d.deleteAgent(e.extension)}},"DELETE",8,h)])])})),128)),Object(l["k"])(i,{modalId:"updatemodalAgent",modalTitle:"Update Agent",formId:"updateAgent",formMethod:"POST",item:s.item,agent:a.agent,extension:s.extension,currentName:s.name,currentEmail:s.email,currentTeamLeader:s.teamlead,onEmittedData:d.updateAgent},null,8,["item","agent","extension","currentName","currentEmail","currentTeamLeader","onEmittedData"])],64)}var f=a("86df"),p={props:["tdata","agent"],data:function(){return{dataBsTarget:"#updatemodalAgent",item:"test",name:null,email:null,extension:null,teamlead:null}},components:{ManagementModalForm:f["a"]},methods:{deleteAgent:function(e){this.$emit("click",e)},getAgentInfo:function(e){this.name=e.name,this.email=e.email,this.extension=e.extension,this.teamlead=e.teamlead},updateAgent:function(e){this.$emit("emittedData",e)}}},O=a("6b0d"),j=a.n(O);const v=j()(p,[["render",g]]);var T=v,A={props:["agent"],emits:["emittedData"],data:function(){return{dataBsTarget:"#modalAgent",isLoading:!1,error:null,appName:this.$store.getters.getAppName}},components:{AgentsDataList:T,ManagementModalForm:f["a"]},methods:{fetchAllAgents:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.isLoading=!0,t.next=4,e.$store.dispatch("agentinfo/fetchAllAgents",{agent:e.agent});case 4:e.isLoading=!1,t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),e.error=t.t0.message;case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},addAgent:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$store.dispatch("agentinfo/createAgent",{data:e,agent:t.agent});case 3:alert(t.agent.toUpperCase()+"Agent was successfully added"),a.next=10;break;case 6:a.prev=6,a.t0=a["catch"](0),t.error=a.t0.message,alert(t.error+" Please Check if the extension was already used");case 10:case"end":return a.stop()}}),a,null,[[0,6]])})))()},updateAgent:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,t.$store.dispatch("agentinfo/updateAgent",{data:e,agent:t.agent});case 3:alert(t.agent.toUpperCase()+"Agent was successfully updateAgent"),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),t.error=a.t0.message;case 9:case"end":return a.stop()}}),a,null,[[0,6]])})))()},deleteAgent:function(e){var t=confirm("Are you sure you want delete ".concat(e," Agent? Deleting Agent will automatically delete Agent Records as well"));if(t)try{this.$store.dispatch("agentinfo/deleteAgent",{extension:e,agent:this.agent}),alert("Selected  "+this.agent.toUpperCase()+" agent with "+e+" was successfully deleted")}catch(a){this.error=a.message}},handleError:function(){this.error=null}},computed:{allAgents:function(){var e;return e="csd"==this.agent?this.$store.getters["agentinfo/getCsdAgents"]:"collection"==this.agent?this.$store.getters["agentinfo/getCollectionAgents"]:"sales"==this.agent?this.$store.getters["agentinfo/getSalesAgents"]:"No Agent Found",e},getAutoLogoutStatus:function(){return this.$store.getters["getAutoLogoutStatus"]}},created:function(){this.$store.dispatch("checkIfCurrentLogin"),this.fetchAllAgents()},watch:{agent:function(){this.fetchAllAgents()},getAutoLogoutStatus:function(e,t){e&&e!==t&&this.$router.replace("/"+this.appName+"/login")}}};const y=j()(A,[["render",r]]);t["default"]=y},"800d":function(e,t,a){"use strict";a("0d04")},"86df":function(e,t,a){"use strict";var l=a("7a23"),n=function(e){return Object(l["E"])("data-v-5c108f6f"),e=e(),Object(l["C"])(),e},s=["id"],d={class:"modal-dialog"},i={class:"modal-content"},r={class:"modal-header"},o={class:"modal-title"},c={class:"modal-body"},u=["method","id"],m={key:0,class:"errorP"},b={class:"mb-3"},h=n((function(){return Object(l["h"])("label",{for:"Add Tag",class:"mb-3"},"Add Tag",-1)})),g=n((function(){return Object(l["h"])("div",{id:"tagdesc",class:"form-text"},"All tag must be unique.",-1)})),f={class:"mb-3"},p=n((function(){return Object(l["h"])("label",{for:"TagType",class:"mb-2"},"Select TagType:",-1)})),O=n((function(){return Object(l["h"])("option",{value:"CSDINBOUND"},"CSD-INBOUND",-1)})),j=n((function(){return Object(l["h"])("option",{value:"CSDOUTBOUND"},"CSD-OUTBOUND",-1)})),v=n((function(){return Object(l["h"])("option",{value:"COLLECTION"},"COLLECTION",-1)})),T=[O,j,v],A={key:0,class:"errorP"},y={class:"mb-3"},E=n((function(){return Object(l["h"])("label",{for:"Name",class:"mb-3"},"Name",-1)})),k={class:"mb-3"},I=n((function(){return Object(l["h"])("label",{for:"Email Address",class:"mb-3"},"Email Address",-1)})),x={class:"mb-3"},N=n((function(){return Object(l["h"])("label",{for:"extension",class:"mb-3"},"Extension",-1)})),L={key:1,class:"mb-3"},D=n((function(){return Object(l["h"])("label",{for:"TagType",class:"mb-2"},"Select Team Leader:",-1)})),w=["value"],B={key:0,class:"errorP"},V={key:1,class:"errorP"},C={class:"mb-3"},U=n((function(){return Object(l["h"])("label",{for:"Name",class:"mb-3"},"Name",-1)})),F=["value"],M={class:"mb-3"},S=n((function(){return Object(l["h"])("label",{for:"Email Address",class:"mb-3"},"Email Address",-1)})),P=["value"],$={class:"mb-3"},J=n((function(){return Object(l["h"])("label",{for:"extension",class:"mb-3"},"Extension",-1)})),R=["value"],_={key:2,class:"mb-3"},q=n((function(){return Object(l["h"])("label",{for:"TagType",class:"mb-2"},"Select Team Leader:",-1)})),H=["value"],Q=["value"],W=n((function(){return Object(l["h"])("hr",null,null,-1)})),G={class:"row justify-content-end"},Y={class:"col-5"},z=n((function(){return Object(l["h"])("button",{type:"button ",class:"btn btn-primary ml-auto m-1",id:"addbtn"},"Submit",-1)}));function K(e,t,a,n,O,j){var v=Object(l["J"])("opttion");return Object(l["B"])(),Object(l["g"])("div",{class:"modal fade",id:a.modalId,role:"dialog"},[Object(l["h"])("div",d,[Object(l["h"])("div",i,[Object(l["h"])("div",r,[Object(l["h"])("h4",o,Object(l["M"])(a.modalTitle),1)]),Object(l["h"])("div",c,[Object(l["h"])("form",{method:a.formMethod,id:a.formId,onSubmit:t[10]||(t[10]=Object(l["W"])((function(){return j.submitFromData&&j.submitFromData.apply(j,arguments)}),["prevent"]))},["addTag"==a.formId&&"modalTag"==a.modalId?(Object(l["B"])(),Object(l["g"])("div",{key:0,class:Object(l["u"])(j.errorDiv)},[O.mdlIsValid?Object(l["f"])("",!0):(Object(l["B"])(),Object(l["g"])("p",m,"Please Make Sure That Dont Leave Blank on the Input Fields")),Object(l["h"])("div",b,[h,Object(l["U"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"tag","aria-describedby":"tag","onUpdate:modelValue":t[0]||(t[0]=function(e){return O.mdlTag.val=e})},null,512),[[l["R"],O.mdlTag.val]]),g]),Object(l["h"])("div",f,[p,Object(l["U"])(Object(l["h"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[1]||(t[1]=function(e){return O.mdlTagType.val=e})},T,512),[[l["Q"],O.mdlTagType.val]])])],2)):Object(l["f"])("",!0),"addAgent"==a.formId&&"modalAgent"==a.modalId?(Object(l["B"])(),Object(l["g"])("div",{key:1,class:Object(l["u"])(j.errorDiv)},[O.mdlIsValid?Object(l["f"])("",!0):(Object(l["B"])(),Object(l["g"])("p",A,"Please Make Sure That Dont Leave Blank on the Input Fields")),Object(l["h"])("div",y,[E,Object(l["U"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"name","aria-describedby":"name",placeholder:"Agent Name","onUpdate:modelValue":t[2]||(t[2]=function(e){return O.mdlName.val=e})},null,512),[[l["R"],O.mdlName.val]])]),Object(l["h"])("div",k,[I,Object(l["U"])(Object(l["h"])("input",{type:"email",class:"form-control",id:"email","aria-describedby":"email",placeholder:"Enter Valid Email","onUpdate:modelValue":t[3]||(t[3]=function(e){return O.mdlEmail.val=e})},null,512),[[l["R"],O.mdlEmail.val]])]),Object(l["h"])("div",x,[N,Object(l["U"])(Object(l["h"])("input",{type:"text",class:"form-control",id:"extension","aria-describedby":"extension",placeholder:"Enter Unique Ext.","onUpdate:modelValue":t[4]||(t[4]=function(e){return O.mdlExt.val=e})},null,512),[[l["R"],O.mdlExt.val]])]),"sales"==a.agent?(Object(l["B"])(),Object(l["g"])("div",L,[D,Object(l["U"])(Object(l["h"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[5]||(t[5]=function(e){return O.selectedTeamLeader.val=e})},[(Object(l["B"])(!0),Object(l["g"])(l["a"],null,Object(l["H"])(j.salesTeamLeaders,(function(e){return Object(l["B"])(),Object(l["g"])("option",{key:e,value:e},Object(l["M"])(e),9,w)})),128))],512),[[l["Q"],O.selectedTeamLeader.val]])])):Object(l["f"])("",!0)],2)):Object(l["f"])("",!0),"updateAgent"==a.formId&&"updatemodalAgent"==a.modalId?(Object(l["B"])(),Object(l["g"])("div",{key:2,class:Object(l["u"])(j.errorDiv)},[!O.mdlIsValid&&j.noUpdate?(Object(l["B"])(),Object(l["g"])("p",B,"No Found Changes ")):Object(l["f"])("",!0),!O.mdlIsValid&&j.blankFields?(Object(l["B"])(),Object(l["g"])("p",V,"Please Make Sure That Dont Leave Blank on the Input Fields")):Object(l["f"])("",!0),Object(l["h"])("div",C,[U,Object(l["h"])("input",{type:"text",class:"form-control",id:"updatename","aria-describedby":"name",placeholder:"Agent Name",value:a.currentName,onInput:t[6]||(t[6]=function(){return j.setName&&j.setName.apply(j,arguments)})},null,40,F)]),Object(l["h"])("div",M,[S,Object(l["h"])("input",{type:"email",class:"form-control",id:"updateemail","aria-describedby":"email",placeholder:"Enter Valid Email",value:a.currentEmail,onInput:t[7]||(t[7]=function(){return j.setEmail&&j.setEmail.apply(j,arguments)})},null,40,P)]),Object(l["h"])("div",$,[J,Object(l["h"])("input",{type:"text",class:"form-control",id:"updateextension","aria-describedby":"extension",placeholder:"Enter Unique Ext.",value:a.extension,disabled:""},null,8,R)]),"sales"==a.agent?(Object(l["B"])(),Object(l["g"])("div",_,[q,Object(l["h"])("select",{class:"form-select","aria-label":"Default select example",value:a.currentTeamLeader,onChange:t[8]||(t[8]=function(){return j.setTeamLeader&&j.setTeamLeader.apply(j,arguments)})},[Object(l["k"])(v,{value:a.currentTeamLeader,selected:""},{default:Object(l["T"])((function(){return[Object(l["j"])(Object(l["M"])(a.currentTeamLeader),1)]})),_:1},8,["value"]),(Object(l["B"])(!0),Object(l["g"])(l["a"],null,Object(l["H"])(j.salesTeamLeaders,(function(e){return Object(l["B"])(),Object(l["g"])("option",{key:e,value:e},Object(l["M"])(e),9,Q)})),128))],40,H)])):Object(l["f"])("",!0)],2)):Object(l["f"])("",!0),W,Object(l["h"])("div",G,[Object(l["h"])("div",Y,[z,Object(l["h"])("button",{type:"button",class:"btn btn-danger ml-auto","data-bs-dismiss":"modal",onClick:t[9]||(t[9]=function(){return j.resetInputs&&j.resetInputs.apply(j,arguments)})},"Close")])])],40,u)])])])],8,s)}a("99af");var X={emits:["emittedData"],props:["modalId","modalTitle","formId","formMethod","agent","currentName","currentEmail","extension","currentTeamLeader"],data:function(){return{mdlIsValid:!0,mdlName:{val:null,isValid:!0},mdlEmail:{val:null,isValid:!0},mdlExt:{val:null,isValid:!0},mdlTag:{val:null,isValid:!0},mdlTagType:{val:null,isValid:!0},selectedTeamLeader:{val:null,isValid:!0},updateName:null,updateEmail:null,updateTeamLeader:null}},computed:{salesTeamLeaders:function(){return this.$store.getters["agentinfo/getSalesTeamLeaders"]},errorDiv:function(){return this.mdlIsValid?"":"errorDiv"},noUpdate:function(){return null==this.updateName&&null==this.updateEmail},blankFields:function(){return""==this.updateName||""==this.updateEmail}},methods:{setName:function(e){this.updateName=e.target.value,this.mdlIsValid=!0},setEmail:function(e){this.updateEmail=e.target.value,this.mdlIsValid=!0},setTeamLeader:function(e){this.updateTeamLeader=e.target.value,this.mdlIsValid=!0},formValidation:function(){return this.mdlIsValid=!0,"modalTag"==this.modalId&&"addTag"==this.formId?null!=this.mdlTag.val&&""!=this.mdlTag.val&&null!=this.mdlTagType.val&&""!=this.mdlTagType.val||(alert("Blank Fields are not allowed.Please dont leave any blank fields before submitting the form"),this.mdlIsValid=!1):"modalAgent"==this.modalId&&"addAgent"==this.formId?"sales"==this.agent?null!=this.mdlName.val&&""!=this.mdlName.val&&null!=this.mdlEmail.val&&""!=this.mdlEmail.val&&null!=this.mdlExt.val&&""!=this.mdlExt.val&&null!=this.selectedTeamLeader.val&&""!=this.selectedTeamLeader.val||(alert("Blank Fields are not allowed.Please dont leave any blank fields before submitting the form"),this.mdlIsValid=!1):null!=this.mdlName.val&&""!=this.mdlName.val&&null!=this.mdlEmail.val&&""!=this.mdlEmail.val&&null!=this.mdlExt.val&&""!=this.mdlExt.val||(alert("Blank Fields are not allowed.Please dont leave any blank fields before submitting the form"),this.mdlIsValid=!1):"updateAgent"==this.formId&&"updatemodalAgent"==this.modalId&&("sales"==this.agent?null==this.updateTeamLeader&&null==this.updateName&&null==this.updateEmail?(alert("No Found Changes"),this.mdlIsValid=!1):""!=this.updateTeamLeader&&""!=this.updateName&&""!=this.updateEmail||(alert("Blank Fields are not allowed.Please dont leave any blank fields before submitting the form"),this.mdlIsValid=!1):null==this.updateName&&null==this.updateEmail?(alert("No Found Changes"),this.mdlIsValid=!1):""!=this.updateName&&""!=this.updateEmail||(alert("Blank Fields are not allowed.Please dont leave any blank fields before submitting the form"),this.mdlIsValid=!1)),this.mdlIsValid},resetInputs:function(){this.mdlExt.val=null,this.mdlName.val=null,this.mdlEmail.val=null,this.selectedTeamLeader.val=null,this.updateName=null,this.updateEmail=null,this.updateTeamLeader=null,this.mdlIsValid=!0},submitFromData:function(){if(this.formValidation()){var e;if("modalTag"==this.modalId&&"addTag"==this.formId){var t=new Date,a=t.getMonth()+1,l=t.getFullYear(),n=t.getDate(),s="".concat(l,"-").concat(a,"-").concat(n);e={createdby:this.$store.getters.getUserName,createddate:s,tagname:this.mdlTag.val,tagtype:this.mdlTagType.val}}else if("modalAgent"==this.modalId&&"addAgent"==this.formId)e={name:this.mdlName.val,email:this.mdlEmail.val,extension:this.mdlExt.val},"sales"==this.agent&&(e.teamlead=this.selectedTeamLeader.val);else if("updateAgent"==this.formId&&"updatemodalAgent"==this.modalId){var d,i;d=null!==this.updateName?this.updateName:this.currentName,i=null!==this.updateEmail?this.updateEmail:this.currentEmail,e={name:d,email:i,extension:this.extension},"sales"==this.agent&&(null!==this.updateTeamLeader?(e.teamlead=this.updateTeamLeader,this.updateTeamLeader=null):(e.teamlead=this.currentTeamLeader,this.updateTeamLeader=null))}this.$emit("emittedData",e),this.resetInputs()}}}},Z=(a("800d"),a("6b0d")),ee=a.n(Z);const te=ee()(X,[["render",K],["__scopeId","data-v-5c108f6f"]]);t["a"]=te}}]);
//# sourceMappingURL=chunk-3edd5e02.1e7081d4.js.map