var V=Object.defineProperty;var B=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable;var S=(t,e,s)=>e in t?V(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,D=(t,e)=>{for(var s in e||(e={}))I.call(e,s)&&S(t,s,e[s]);if(B)for(var s of B(e))L.call(e,s)&&S(t,s,e[s]);return t};import{a as R,l as P,o as l,c as d,b as r,t as m,n as M,w as A,d as h,r as b,F as w,e as x,f as y,v as _,g as k,h as C,i as N,j as U,k as $,m as O}from"./vendor.76a1aad2.js";const F=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&u(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}};F();console.log("production");const W="/api/task";var q=R.create({withCredentials:!0});const f={get(t,e){return v(t,"GET",e)},post(t,e){return v(t,"POST",e)},put(t,e){return v(t,"PUT",e)},delete(t,e){return v(t,"DELETE",e)}};async function v(t,e="GET",s=null){try{return(await q({url:`${W}${t}`,method:e,data:s,params:e==="GET"?s:null})).data}catch(u){throw console.log(`Had Issues ${e}ing to the backend, endpoint: ${t}, with data:`,s),console.dir(u),u.response&&u.response.status,u}}const p={getTasks:G,getById:j,remove:z,save:X,startTask:Y,generateTasks:J,clearTasks:Q,toggleWorker:Z,getWorkerStatus:tt,getEmptyTask:et};async function G(t={sortTxt:"title",sortDir:1}){return f.get("/",t)}async function j(t){return f.get(`/${t}`).data}async function z(t){return f.delete(`/${t}`)}async function H(t){return f.put(`/${t._id}`,t)}async function K(t){return f.post("/",t)}async function J(){return f.get("/generate")}async function Q(){return f.delete("/")}function X(t){return t._id?H(t):K(t)}async function Y(t){return f.post(`/${t._id}/start`)}function Z(){return f.post("/toggle")}function tt(){return f.get("/workerStatus")}function et(){return{title:"",importance:1}}const st="ws://",nt={getSocket:rt,emit:ot};function rt(){return P(`${st}`,{withCredentials:!0,transports:["websocket","polling"]})}function ot(t,e,s){t.emit(e,s)}var g=(t,e)=>{const s=t.__vccOpts||t;for(const[u,o]of e)s[u]=o;return s};const at={done:"Done",fail:"Fail",running:"Running"},it={props:{task:Object},computed:{status(){return at[this.task.status]},statusClass(){return this.status&&this.status.toLocaleLowerCase()},actionTxt(){var t=this.task.status;return t==="fail"?"Retry":"Start"},showBtn(){return this.task.status!=="done"&&this.task.status!=="running"}},methods:{performTask(t){this.$emit("performTask",t)},removeTask(t){this.$emit("removeTask",t)}}},lt={class:"importance-td"},dt={class:"tries-td"},ut={class:"action-td"};function ct(t,e,s,u,o,n){return l(),d("tr",null,[r("td",null,m(s.task.title),1),r("td",lt,m(s.task.importance),1),r("td",{class:M([n.statusClass,"status-td"])},m(n.status),3),r("td",dt,m(s.task.triesCount),1),r("td",ut,[n.showBtn?(l(),d("button",{key:0,class:"btn action",onClick:e[0]||(e[0]=A(i=>n.performTask(s.task),["stop"]))},m(n.actionTxt),1)):h("",!0),s.task.status==="done"?(l(),d("button",{key:1,class:"btn delete",onClick:e[1]||(e[1]=A(i=>n.removeTask(s.task._id),["stop"]))},"Delete")):h("",!0)])])}var kt=g(it,[["render",ct]]);const mt={components:{taskTableRow:kt},props:{tasks:{type:Array,required:!0},sortTxt:{type:String,default:"title"},sortDir:{type:Number,default:1}},data(){return{newTask:p.getEmptyTask(),opened:[]}},computed:{sortDirArrow(){return this.sortDir===1?"\u2193":"\u2191"}},methods:{descriptionChanged(t,e){const s=this.tasks.find(u=>u._id===t);s.description!==e&&(s.description=e,this.$emit("updateTask",s))},toggleDescription(t){const e=this.opened.indexOf(t);e>-1?this.opened.splice(e,1):this.opened.push(t)},performTask(t){this.$emit("performTask",t)},removeTask(t){this.$emit("removeTask",t)},addTask(){if(!this.newTask.title){alert("Title can not be empty");return}this.$emit("addTask",D({},this.newTask)),this.newTask=p.getEmptyTask()}}},pt={class:"task-table"},ht=k(" Title "),ft={key:0,class:"sort-icon"},Tt=k(" Importance "),yt={key:0,class:"sort-icon"},_t=k(" Status "),gt={key:0,class:"sort-icon"},vt=k(" Tries Count "),bt={key:0,class:"sort-icon"},wt=r("th",null,"Actions",-1),Ct={key:0},xt={colspan:"5"},Bt=r("h4",null,"Description:",-1),St=["onBlur"],Dt={key:0},At=r("h4",null,"Errors:",-1),Ut={key:0},Et={class:"more-info"},Vt=["onClick"],It=k("Task title: "),Lt={colspan:"3"},Rt=k("Importance: ");function Pt(t,e,s,u,o,n){const i=b("task-table-row");return l(),d("table",pt,[r("thead",null,[r("tr",null,[r("th",{onClick:e[0]||(e[0]=a=>t.$emit("sortChanged","title"))},[ht,s.sortTxt==="title"?(l(),d("span",ft,m(n.sortDirArrow),1)):h("",!0)]),r("th",{onClick:e[1]||(e[1]=a=>t.$emit("sortChanged","importance"))},[Tt,s.sortTxt==="importance"?(l(),d("span",yt,m(n.sortDirArrow),1)):h("",!0)]),r("th",{onClick:e[2]||(e[2]=a=>t.$emit("sortChanged","status"))},[_t,s.sortTxt==="status"?(l(),d("span",gt,m(n.sortDirArrow),1)):h("",!0)]),r("th",{onClick:e[3]||(e[3]=a=>t.$emit("sortChanged","triesCount"))},[vt,s.sortTxt==="triesCount"?(l(),d("span",bt,m(n.sortDirArrow),1)):h("",!0)]),wt])]),s.tasks?(l(),d("tbody",Ct,[(l(!0),d(w,null,x(s.tasks,a=>(l(),d(w,{key:a._id},[C(i,{task:a,onPerformTask:n.performTask,onClick:T=>n.toggleDescription(a._id),onRemoveTask:n.removeTask},null,8,["task","onPerformTask","onClick","onRemoveTask"]),o.opened.includes(a._id)?(l(),d("tr",{class:"opened-tr",key:a._id+"1"},[r("td",xt,[r("div",null,[Bt,r("p",{contenteditable:"",onBlur:T=>n.descriptionChanged(a._id,T.target.innerText)},m(a.description),41,St)]),a.errors.length?(l(),d("div",Dt,[At,(l(!0),d(w,null,x(a.errors,(T,c)=>(l(),d("span",{key:c},[k(m(T)+" ",1),c<a.errors.length-1?(l(),d("span",Ut,",")):h("",!0)]))),128))])):h("",!0),r("div",Et," Last tried at: "+m(a.updatedAt||"N/A")+" | Created at: "+m(a.createdAt)+" | Done at: "+m(a.doneAt||"N/A"),1),a.doneAt?h("",!0):(l(),d("button",{key:1,class:"btn delete details",onClick:T=>n.removeTask(a._id)}," Delete ",8,Vt))])])):h("",!0)],64))),128)),r("tr",null,[r("td",null,[r("label",null,[It,y(r("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=a=>o.newTask.title=a)},null,512),[[_,o.newTask.title]])])]),r("td",Lt,[r("label",null,[Rt,y(r("input",{"onUpdate:modelValue":e[5]||(e[5]=a=>o.newTask.importance=a),type:"number",min:"1",max:"4"},null,512),[[_,o.newTask.importance]])])]),r("td",null,[r("button",{class:"btn save",onClick:e[6]||(e[6]=(...a)=>n.addTask&&n.addTask(...a))},"Save")])])])):h("",!0)])}var Mt=g(mt,[["render",Pt]]);const Nt={props:{options:{type:Array,default:[]},name:{type:String,required:!0},value:{type:Array,default:[]}},emits:["change","input","importance"],methods:{onChange(t,e){let s;console.log("im changed",e,t),e?(s=this.value.map(u=>u),s.push(t)):s=this.value.filter(u=>u!==t),this.$emit("input",[...s]),this.$emit("importance",[...s]),this.$emit("change")},capitalize(t){return t?(t=t.toString(),t.charAt(0).toUpperCase()+t.slice(1)):""}}},$t=["name"],Ot={class:"multi-checkbox-title"},Ft=["checked","name","onInput"];function Wt(t,e,s,u,o,n){return l(),d("div",{class:"multi-checkbox",name:s.name},[r("span",Ot,[N(t.$slots,"default")]),(l(!0),d(w,null,x(s.options,i=>(l(),d("label",{key:i},[r("input",{type:"checkbox",checked:s.value.includes(i),name:s.name,onInput:a=>n.onChange(i,a.target.checked)},null,40,Ft),k(" "+m(n.capitalize(i)),1)]))),128))],8,$t)}var qt=g(Nt,[["render",Wt]]);const Gt={data(){return{task:p.getEmptyTask()}}},jt={class:"add-task-modal"},zt=r("h4",null,"New Task",-1),Ht=k(" Task Title: "),Kt=k(" Task Description: "),Jt=k(" Task Importance: ");function Qt(t,e,s,u,o,n){return l(),d("div",jt,[r("button",{class:"close-btn",onClick:e[0]||(e[0]=i=>t.$emit("close"))},"\u2716"),zt,r("label",null,[Ht,y(r("input",{type:"text",placeholder:"Task name","onUpdate:modelValue":e[1]||(e[1]=i=>o.task.title=i)},null,512),[[_,o.task.title]])]),r("label",null,[Kt,y(r("input",{type:"text",placeholder:"Task description","onUpdate:modelValue":e[2]||(e[2]=i=>o.task.description=i)},null,512),[[_,o.task.description]])]),r("label",null,[Jt,y(r("input",{type:"number",min:"1",max:"4",placeholder:"importance","onUpdate:modelValue":e[3]||(e[3]=i=>o.task.importance=i)},null,512),[[_,o.task.importance]])]),r("button",{class:"btn",onClick:e[4]||(e[4]=i=>t.$emit("save",o.task))},"Add")])}var Xt=g(Gt,[["render",Qt]]);const E=nt.getSocket(),Yt={name:"App",data(){return{filterBy:{importance:[],status:[],title:"",sortTxt:"title",sortDir:1},showModal:!1,isRunning:!1,tasks:[]}},components:{taskTable:Mt,multiCheckbox:qt,AddTaskModal:Xt},async created(){E.on("taskUpdated",t=>{this.tasks=this.tasks.map(e=>e._id===t._id?t:e)}),E.on("setToggleWorker",({isRunning:t})=>{this.isRunning=t});try{this.loadFilters(),this.loadTasks()}catch{console.error("Couldn't load tasks")}},methods:{async loadTasks(){try{this.tasks=await p.getTasks(this.filterBy)}catch{console.error("Couldn't load tasks")}},updateSort(t){this.filterBy.sortTxt===t?this.filterBy.sortDir=this.filterBy.sortDir*-1:(this.filterBy.sortTxt=t,this.filterBy.sortDir=1),this.filtersUpdated()},filtersUpdated(){const t=new URLSearchParams(this.filterBy);window.history.replaceState(null,null,"?"+t.toString()),this.loadTasks()},addStatus(t){this.filterBy.status=t},addImportance(t){this.filterBy.importance=t},async addTask(t){const e=await p.save(t);this.tasks.push(e),this.showModal=!1},async clearTasks(){try{await p.clearTasks(),this.tasks=await p.getTasks()}catch{console.error("Couldn't clear tasks")}},async toggleWorker(){p.toggleWorker()},isEmpty(t){return typeof t=="array"?t.length===0:!!t},async generateTasks(){try{var t=await p.generateTasks();t&&(this.tasks=await p.getTasks())}catch{console.error("Couldn't generate new tasks")}},async removeTask(t){try{await p.remove(t),this.tasks=this.tasks.filter(e=>e._id!==t)}catch(e){console.error(`could not remove task id ${t}`,e)}},performTask(t){p.startTask(t)},loadFilters(){new URLSearchParams(window.location.search).forEach((e,s)=>{if(!!this.isEmpty(e)){if(e.includes(",")){this.filterBy[s]=e.split(",");return}s==="importance"||s==="status"?this.filterBy[s]=[e]:s==="sortDir"?this.filterBy[s]=parseInt(e):this.filterBy[s]=e}})},updateTask(t){p.save(t)}}},Zt={id:"app"},te=r("header",{class:"title"},"Mister Tasker",-1),ee={class:"btns-container"},se=k(" task worker "),ne={class:"filters-container"},re=k(" Importance "),oe=k(" | "),ae=k(" Filter by text: "),ie=k(" | "),le=k(" Status ");function de(t,e,s,u,o,n){const i=b("multi-checkbox"),a=b("task-table"),T=b("add-task-modal");return l(),d("div",Zt,[te,r("div",ee,[r("button",{class:"btn",onClick:e[0]||(e[0]=(...c)=>n.generateTasks&&n.generateTasks(...c))},"Generate Tasks"),r("button",{class:"btn",onClick:e[1]||(e[1]=(...c)=>n.clearTasks&&n.clearTasks(...c))},"Clear Tasks"),r("button",{class:"btn",onClick:e[2]||(e[2]=c=>o.showModal=!0)},"Create new task"),r("button",{onClick:e[3]||(e[3]=(...c)=>n.toggleWorker&&n.toggleWorker(...c)),class:"btn toggle"},[r("span",null,m(o.isRunning?"stop":"start"),1),se])]),r("div",ne,[C(i,{options:["1","2","3","4"],onImportance:n.addImportance,onChange:n.filtersUpdated,modelValue:o.filterBy.importance,"onUpdate:modelValue":e[4]||(e[4]=c=>o.filterBy.importance=c),"is-multi":!0,name:"importance"},{default:U(()=>[re]),_:1},8,["onImportance","onChange","modelValue"]),oe,r("label",null,[ae,y(r("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=c=>o.filterBy.title=c),onChange:e[6]||(e[6]=(...c)=>n.filtersUpdated&&n.filtersUpdated(...c)),placeholder:"search for a title"},null,544),[[_,o.filterBy.title]])]),ie,C(i,{options:["new","done","fail"],onChange:n.filtersUpdated,onInput:n.addStatus,modelValue:o.filterBy.status,"onUpdate:modelValue":e[7]||(e[7]=c=>o.filterBy.status=c),"is-multi":!0,name:"status"},{default:U(()=>[le]),_:1},8,["onChange","onInput","modelValue"])]),C(a,{tasks:o.tasks,sortTxt:o.filterBy.sortTxt,sortDir:o.filterBy.sortDir,onPerformTask:n.performTask,onRemoveTask:n.removeTask,onAddTask:n.addTask,onUpdateTask:n.updateTask,onSortChanged:n.updateSort},null,8,["tasks","sortTxt","sortDir","onPerformTask","onRemoveTask","onAddTask","onUpdateTask","onSortChanged"]),o.showModal?(l(),$(T,{key:0,onSave:n.addTask,onClose:e[8]||(e[8]=c=>o.showModal=!1)},null,8,["onSave"])):h("",!0)])}var ue=g(Yt,[["render",de]]);const ce=O(ue);ce.mount("#app");