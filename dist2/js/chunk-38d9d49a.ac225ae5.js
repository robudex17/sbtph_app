(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38d9d49a"],{"1e25":function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").end,s=a("c8d2"),c=s("trimEnd"),i=c?function(){return r(this)}:"".trimEnd;n({target:"String",proto:!0,name:"trimEnd",forced:c},{trimEnd:i,trimRight:i})},3151:function(t,e,a){"use strict";var n=a("7a23"),r=["id"],s={class:"modal-dialog"},c={class:"modal-content"},i={class:"modal-header"},o={class:"modal-title"},l={class:"modal-body"},u=["method","id"],d={class:"mb-3"},m=Object(n["h"])("label",{for:"Add Tag",class:"mb-3"},"Add Comment",-1),b=["value"],g={key:0,class:"mb-3"},h=Object(n["h"])("label",{for:"TagType",class:"mb-2"},"Select Tag:",-1),f=["value"],j=["value"],O=Object(n["h"])("hr",null,null,-1),p=Object(n["h"])("div",{class:"row justify-content-end"},[Object(n["h"])("div",{class:"col-5"},[Object(n["h"])("button",{type:"button ",class:"btn btn-primary ml-auto m-1","data-bs-dismiss":"modal",id:"addbtn"},"Submit"),Object(n["h"])("button",{type:"button",class:"btn btn-danger ml-auto","data-bs-dismiss":"modal"},"Close")])],-1);function C(t,e,a,C,v,P){return Object(n["B"])(),Object(n["g"])("div",{class:"modal fade",id:a.modalId,role:"dialog"},[Object(n["h"])("div",s,[Object(n["h"])("div",c,[Object(n["h"])("div",i,[Object(n["h"])("h4",o,Object(n["M"])(a.modalTitle),1)]),Object(n["h"])("div",l,[Object(n["h"])("form",{method:a.formMethod,id:a.formId,onSubmit:e[2]||(e[2]=Object(n["W"])((function(){return P.submitFromData&&P.submitFromData.apply(P,arguments)}),["prevent"]))},["commentTag"==a.formId&&"modalCommentTag"==a.modalId?(Object(n["B"])(),Object(n["g"])(n["a"],{key:0},[Object(n["h"])("div",d,[m,Object(n["h"])("textarea",{class:"form-control",cols:"62",placeholder:"Put Your Comment Here.",value:a.currentComment,onInput:e[0]||(e[0]=function(){return P.setNewComment&&P.setNewComment.apply(P,arguments)})},null,40,b)]),"tagandcomment"==a.mode?(Object(n["B"])(),Object(n["g"])("div",g,[h,Object(n["h"])("select",{class:"form-select",value:a.currentTag,onChange:e[1]||(e[1]=function(){return P.setNewTag&&P.setNewTag.apply(P,arguments)})},[(Object(n["B"])(!0),Object(n["g"])(n["a"],null,Object(n["H"])(a.tags,(function(t){return Object(n["B"])(),Object(n["g"])("option",{key:t,value:t},Object(n["M"])(t),9,j)})),128))],40,f)])):Object(n["f"])("",!0)],64)):Object(n["f"])("",!0),O,p],40,u)])])])],8,r)}a("b0c0");var v={props:["modalId","modalTitle","formId","formMethod","mode","tags","currentComment","currentTag","callDetails"],data:function(){return{newTag:null,newComment:null,formIsValid:!0}},methods:{setNewTag:function(t){this.newTag=t.target.value},setNewComment:function(t){this.newComment=t.target.value},formValidation:function(){return this.formIsValid},submitFromData:function(){if(this.formValidation()){var t=this.$store.getters["getLoggedinUserData"].name,e={};e.starttimestamp=this.callDetails.starttimestamp,e.getdate=this.callDetails.getDate,e.whoansweredcall=this.callDetails.extension,e.caller=this.callDetails.caller,e.commentby=t,null!=this.newComment?(e.comment=this.newComment,this.newComment=null):(e.comment=this.currentComment,this.newComment=null),"tagandcomment"==this.mode&&(null!=this.newTag?(e.tag=this.newTag,this.newTag=null):e.tag=this.currentTag),this.$emit("emittedData",e)}}},created:function(){}},P=a("6b0d"),D=a.n(P);const y=D()(v,[["render",C]]);e["a"]=y},6109:function(t,e,a){},a15b:function(t,e,a){"use strict";var n=a("23e7"),r=a("44ad"),s=a("fc6a"),c=a("a640"),i=[].join,o=r!=Object,l=c("join",",");n({target:"Array",proto:!0,forced:o||!l},{join:function(t){return i.call(s(this),void 0===t?",":t)}})},a398:function(t,e,a){"use strict";a.r(e);var n=a("7a23"),r=Object(n["h"])("p",null,"Fetching Data From the Database Please Wait....",-1),s={class:"text-center font-weight-bold text-primary"},c=Object(n["h"])("span",{class:"text-danger"}," MISSED-CALLS DETAILS ",-1),i={key:1};function o(t,e,a,o,l,u){var d=Object(n["J"])("base-dialog"),m=Object(n["J"])("base-spinner"),b=Object(n["J"])("base-container"),g=Object(n["J"])("missed-calls-details-data-list"),h=Object(n["J"])("base-table"),f=Object(n["J"])("the-pagination");return Object(n["B"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(d,{show:!!l.error,onClose:u.handleError},{default:Object(n["T"])((function(){return[Object(n["h"])("p",null,Object(n["M"])(l.error),1)]})),_:1},8,["show","onClose"]),l.isLoading?(Object(n["B"])(),Object(n["e"])(d,{key:0,show:l.isLoading},{default:Object(n["T"])((function(){return[Object(n["k"])(m,null,{default:Object(n["T"])((function(){return[r]})),_:1})]})),_:1},8,["show"])):(Object(n["B"])(),Object(n["g"])(n["a"],{key:1},[Object(n["k"])(b,null,{default:Object(n["T"])((function(){return[Object(n["h"])("h2",s,[c,Object(n["h"])("button",{class:"btn btn-secondary btn-sm",onClick:e[0]||(e[0]=function(){return u.exportMissedCallsDetails&&u.exportMissedCallsDetails.apply(u,arguments)})}," EXPORT ")])]})),_:1}),Object(n["k"])(h,{theader:"detailedmissedcalls",tableclass:"cdr",onEmittedData:u.searchResult},{default:Object(n["T"])((function(){return[0!==u.missedCallsDetais.length?(Object(n["B"])(),Object(n["e"])(g,{key:0,tdata:u.missedCallsDetais,onEmittedData:u.putCommentTag},null,8,["tdata","onEmittedData"])):(Object(n["B"])(),Object(n["g"])("p",i,"Result Not Found"))]})),_:1},8,["onEmittedData"]),0!==u.missedCallsDetais.length?(Object(n["B"])(),Object(n["e"])(f,{key:0,numberOfPages:u.getTotalPages(),onEmittedData:u.getCurrentPage},null,8,["numberOfPages","onEmittedData"])):Object(n["f"])("",!0)],64))],64)}var l=a("1da1"),u=(a("96cf"),a("ac1f"),a("841c"),a("eee7"),a("1e25"),a("fb6a"),a("5319"),["data-bs-target","onClick"]),d=["data-bs-target","onClick"];function m(t,e,a,r,s,c){var i=Object(n["J"])("cdr-modal-form");return Object(n["B"])(),Object(n["g"])(n["a"],null,[(Object(n["B"])(!0),Object(n["g"])(n["a"],null,Object(n["H"])(a.tdata,(function(t,e){return Object(n["B"])(),Object(n["g"])("tr",{key:e},[Object(n["h"])("td",null,Object(n["M"])(e+1),1),Object(n["h"])("td",null,Object(n["M"])(t.startime),1),Object(n["h"])("td",null,Object(n["M"])(t.endtime),1),Object(n["h"])("td",null,Object(n["M"])(t.caller),1),Object(n["h"])("td",null,Object(n["M"])(t.callStatus),1),Object(n["h"])("td",null,[""!=t.comment?(Object(n["B"])(),Object(n["g"])("button",{key:0,type:"button",class:"btn btn-info btn-sm text-justify text-white","data-bs-toggle":"modal","data-bs-target":s.dataBsTarget,"dataset-backdrop":"static","dataset-keyboard":"false",onClick:function(e){return c.getCallsDetails(t)}},Object(n["M"])(c.limitCommentTitle(t.comment)),9,u)):(Object(n["B"])(),Object(n["g"])("button",{key:1,class:"btn btn-outline-info btn-sm text-justify",type:"button","data-bs-toggle":"modal","data-bs-target":s.dataBsTarget,"dataset-backdrop":"static","dataset-keyboard":"false",id:"comment_tag",onClick:function(e){return c.getCallsDetails(t)}},"No Comment",8,d))]),Object(n["h"])("td",null,Object(n["M"])(t.commentby),1),Object(n["h"])("td",null,Object(n["M"])(t.getdate),1)])})),128)),(Object(n["B"])(),Object(n["e"])(n["b"],{to:"body"},[Object(n["k"])(i,{modalId:"modalCommentTag",modalTitle:"Add Comment",formId:"commentTag",formMethod:"POST",mode:"commentonly",callDetails:s.callDetails,currentComment:s.comment,tag:t.tag,onEmittedData:c.putCommentTag},null,8,["callDetails","currentComment","tag","onEmittedData"])]))],64)}a("1276"),a("a15b");var b=a("3151"),g={props:["tdata"],components:{CdrModalForm:b["a"]},data:function(){return{dataBsTarget:"#modalCommentTag",comment:null,callDetails:null}},methods:{limitCommentTitle:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30,a=[];return t.length>e?(t.split(" ").reduce((function(t,n){return t+n.length<=e&&a.push(n),t+n.length}),0),"".concat(a.join(" ")," ...")):t},getCallsDetails:function(t){this.comment=t.comment,this.callDetails=t},putCommentTag:function(t){this.$emit("emittedData",t)}},computed:{buttonText:function(t){return""==t.comment?"No Comment":t.comment}}},h=a("6b0d"),f=a.n(h);const j=f()(g,[["render",m]]);var O=j,p=a("fb3e"),C={emits:["emittedData"],components:{MissedCallsDetailsDataList:O,ThePagination:p["a"]},data:function(){return{error:null,isLoading:!1,numberPerPage:5,currentItemList:null,currentPage:1,currentTags:[],trimStart:0,trimEnd:5,appName:this.$store.getters.getAppName}},methods:{searchResult:function(t,e,a){this.$router.push({path:this.$route.path,query:{startdate:t,enddate:e,tagname:a}})},fetcthMissedCallsDetails:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a="&option=details",n=window.location.search.substring(1)+a,t.isLoading=!0,e.next=6,t.$store.dispatch("agentcdr/fetchMissedCallsDetails",{querystring:n});case 6:t.isLoading=!1,e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),t.error=e.t0.message,t.isLoading=!1;case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},putCommentTag:function(t){try{this.$store.dispatch("agentcdr/putCommentTag",{data:t,calltype:"missedcalls"})}catch(e){this.error=e.message}},getTotalPages:function(){var t=this.$store.getters["agentcdr/getMissedCallsDetails"];return Math.ceil(t.length/this.numberPerPage)},getCurrentPage:function(t){t=parseInt(t),this.currentPage=t,this.trimStart=(this.currentPage-1)*this.numberPerPage,this.trimEnd=this.trimStart+this.numberPerPage},exportMissedCallsDetails:function(){var t;t=this.$store.getters["agentcdr/getMissedCallsDetailsExport"],window.Jhxlsx.export(t.tableData,t.options)},handleError:function(){this.error=null}},computed:{missedCallsDetais:function(){var t=this.$store.getters["agentcdr/getMissedCallsDetails"];return 0==t.length?[]:t.slice(this.trimStart,this.trimEnd)},getAutoLogoutStatus:function(){return this.$store.getters["getAutoLogoutStatus"]}},created:function(){this.$store.dispatch("checkIfCurrentLogin"),this.fetcthMissedCallsDetails()},watch:{$route:function(){this.fetcthMissedCallsDetails()},getAutoLogoutStatus:function(t,e){t&&t!==e&&this.$router.replace("/"+this.appName+"/login")}}};const v=f()(C,[["render",o]]);e["default"]=v},c8d2:function(t,e,a){var n=a("5e77").PROPER,r=a("d039"),s=a("5899"),c="​᠎";t.exports=function(t){return r((function(){return!!s[t]()||c[t]()!==c||n&&s[t].name!==t}))}},e5e1:function(t,e,a){"use strict";a("6109")},eee7:function(t,e,a){"use strict";var n=a("23e7"),r=a("58a8").start,s=a("c8d2"),c=s("trimStart"),i=c?function(){return r(this)}:"".trimStart;n({target:"String",proto:!0,name:"trimStart",forced:c},{trimStart:i,trimLeft:i})},fb3e:function(t,e,a){"use strict";var n=a("7a23"),r=function(t){return Object(n["E"])("data-v-0316f01a"),t=t(),Object(n["C"])(),t},s={class:"row justify-content-center"},c=r((function(){return Object(n["h"])("div",{class:"col-4"},null,-1)})),i={key:0,class:"col-4 mb-3"},o={key:1,class:"col-4 align-self-center mb-3"},l=["disabled"],u=["id"],d=["disabled"],m=r((function(){return Object(n["h"])("div",{class:"col-4"},null,-1)}));function b(t,e,a,r,b,g){var h=Object(n["J"])("base-container");return Object(n["B"])(),Object(n["e"])(h,null,{default:Object(n["T"])((function(){return[Object(n["h"])("div",s,[c,2==a.numberOfPages?(Object(n["B"])(),Object(n["g"])("div",i,[Object(n["h"])("button",{onClick:e[0]||(e[0]=function(){return g.getCurrentPage&&g.getCurrentPage.apply(g,arguments)}),id:"1",class:Object(n["u"])({activebtn:b.activePage})},"1",2),Object(n["h"])("button",{onClick:e[1]||(e[1]=function(){return g.getCurrentPage&&g.getCurrentPage.apply(g,arguments)}),id:"2",class:Object(n["u"])({activebtn:!b.activePage})},"2",2)])):(Object(n["B"])(),Object(n["g"])("div",o,[Object(n["h"])("button",{disabled:g.disabledPrevBtn,onClick:e[2]||(e[2]=function(){return g.prevbtn&&g.prevbtn.apply(g,arguments)}),class:"btn btn-outline-primary me-1"}," <<prev("+Object(n["M"])(b.currentPage-1)+") ",9,l),Object(n["h"])("button",{onClick:e[3]||(e[3]=function(){return g.getCurrentPage&&g.getCurrentPage.apply(g,arguments)}),id:b.currentPage,class:"btn btn-success"},Object(n["M"])(b.currentPage),9,u),Object(n["h"])("button",{disabled:g.disabledNextBtn,onClick:e[4]||(e[4]=function(){return g.nextbtn&&g.nextbtn.apply(g,arguments)}),class:"btn btn-outline-primary ms-1"},"next ("+Object(n["M"])(b.currentPage+1)+")>>",9,d)])),m])]})),_:1})}var g=a("5fc3"),h={components:{BaseContainer:g["a"]},props:["numberOfPages"],data:function(){return{numberPerPage:5,currentPage:1,activePage:!0}},methods:{getCurrentPage:function(t){this.activePage=!this.activePage,this.$emit("emittedData",t.target.id)},nextbtn:function(){this.currentPage++,this.$emit("emittedData",this.currentPage)},prevbtn:function(){this.currentPage--,this.$emit("emittedData",this.currentPage)}},computed:{disabledPrevBtn:function(){return 1==this.currentPage?"disabled":0},disabledNextBtn:function(){return this.currentPage>=parseInt(this.numberOfPages)?"disabled":0}}},f=(a("e5e1"),a("6b0d")),j=a.n(f);const O=j()(h,[["render",b],["__scopeId","data-v-0316f01a"]]);e["a"]=O}}]);
//# sourceMappingURL=chunk-38d9d49a.ac225ae5.js.map