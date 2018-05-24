webpackJsonp([0],{"3Mur":function(t,e){},"67mR":function(t,e){},N7ZY:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=s("VU/8")({name:"App"},r,!1,function(t){s("R41M")},null,null).exports,n=s("/ocq"),o={name:"AddPaymentForm",props:{users:{type:Array,default:function(){return[]}}},data:function(){return{debt:[],paidBy:"",paidTo:[],paidSum:"",debtors:{},description:"Новая платежка"}},computed:{allSelected:{get:function(){return!this.users||this.paidTo.length===this.users.length},set:function(t){var e=[];t&&this.users.forEach(function(t){e.push(t)}),this.paidTo=e}}},created:function(){this.allSelected=!0,this.paidBy=this.users[0]},methods:{toggleCheckbox:function(t){this.paidTo.includes(t)?this.paidTo.splice(this.paidTo.findIndex(function(e){return e===t}),1):this.paidTo.push(t)},calcDebt:function(t){return this.paidTo.length&&this.paidTo.includes(t)&&(this.paidTo[this.paidTo.indexOf(t)].debt=this.paidSum/this.paidTo.length),Math.round10(this.paidSum/this.paidTo.length,-2)},isSelected:function(t){return this.paidTo.includes(t)},addPayment:function(){this.calculateBalance(),this.calculateDebtors(),this.$emit("history",this.description,this.paidBy,this.paidTo,this.paidSum)},calculateBalance:function(){this.paidBy.balance+=this.paidSum,this.paidTo.forEach(function(t){t.balance-=t.debt})},calculateDebtors:function(){var t=this;this.paidTo.forEach(function(e){t.paidTo.forEach(function(t){e.debtors[t.name]=0})});var e=0,s=0,a=void 0,r=void 0,i=void 0;this.paidTo.forEach(function(){t.paidTo.forEach(function(t){(i=t.balance)>0?e<i&&(e=i,a=t):s<-i&&(s=-i,r=t)}),0!==s&&0!==e&&(a.balance+=r.balance,a.debtors[r.name]=s,r.debtors[a.name]=-s,r.balance=0,e=0,s=0)}),this.paidTo.forEach(function(t){for(var e in t.debtors)t.balance+=t.debtors[e]})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("h1",{staticClass:"display-4 center"},[t._v("Add Payment")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Description")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Description"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"paidby"}},[t._v("Paid by")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.paidBy,expression:"paidBy"}],staticClass:"form-control",attrs:{id:"paidby"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.paidBy=e.target.multiple?s:s[0]}}},[s("option",{attrs:{disabled:"",value:""}},[t._v("\n        Выберите один из вариантов\n      ")]),t._v(" "),t._l(t.users,function(e){return s("option",{key:e.id,domProps:{value:e}},[t._v("\n        "+t._s(e.name)+"\n      ")])})],2)]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Summa")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model.number",value:t.paidSum,expression:"paidSum",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",placeholder:"Введите сумму"},domProps:{value:t.paidSum},on:{input:function(e){e.target.composing||(t.paidSum=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Paid to")]),t._v(" "),t._l(t.users,function(e,a){return s("div",{key:e.id,staticClass:"user-item",on:{click:function(s){t.toggleCheckbox(e)}}},[s("div",{staticClass:"user-item__checkbox"},[s("label",{staticClass:"form-check-label",attrs:{for:"paidto-"+a}},[s("input",{attrs:{id:"paidto-"+a,type:"checkbox"},domProps:{value:e,checked:t.isSelected(e)}})])]),t._v(" "),s("div",{staticClass:"user-item__img"},[s("img",{attrs:{src:e.picture}})]),t._v(" "),s("div",{staticClass:"user-item__name"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),s("input",{directives:[{name:"show",rawName:"v-show",value:t.isSelected(e),expression:"isSelected(user)"}],staticClass:"user-item__debt-input",attrs:{type:"number",placeholder:""},domProps:{value:t.calcDebt(e)},on:{click:function(t){t.stopPropagation()}}})])})],2),t._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.addPayment}},[t._v("\n    Add\n  ")])])},staticRenderFns:[]};var u=s("VU/8")(o,c,!1,function(t){s("N7ZY")},"data-v-5bffc5b0",null).exports,d={name:"UsersForm",props:{users:{type:Array,default:function(){return[]}}},data:function(){return{name:""}},computed:{},methods:{addUser:function(){var t=this;this.getUserPicture().then(function(t){return t.json()}).then(function(e){var s=e.results;t.$emit("addUser",t.name,s[0].picture.thumbnail)}).catch(alert)},getUserPicture:function(){return fetch("https://api.randomuser.me/?lego")}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("h1",{staticClass:"display-4 center"},[t._v("Add User")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"form-group"},[s("label",[t._v("Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("hr"),t._v(" "),s("button",{staticClass:"btn btn-success",attrs:{type:"button"},on:{click:t.addUser}},[t._v("\n    Add\n  ")])])},staticRenderFns:[]};var p=s("VU/8")(d,l,!1,function(t){s("67mR")},"data-v-0fce11f6",null).exports,m={props:{users:{type:Array,default:function(){return{}}}},data:function(){return{}},methods:{showUsersModal:function(){this.$emit("showUsersModal",!0)}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card_header"},[s("h3",[t._v("Список пользователей")]),t._v(" "),s("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.showUsersModal}},[t._v("Add user\n    ")])]),t._v(" "),s("div",{staticClass:"card_body"},t._l(t.users,function(e){return s("div",{key:e.id,staticClass:"alert",class:e.balance>=0?"alert-success":"alert-danger"},[s("img",{attrs:{src:e.picture}}),t._v("\n      "+t._s(e.name)+" : "+t._s(e.balance)+"\n    ")])}))])},staticRenderFns:[]};var v=s("VU/8")(m,h,!1,function(t){s("TN4m")},null,null).exports,f={props:{groups:{type:Array,default:function(){return{}}}},data:function(){return{}},computed:{}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card_body"},t._l(t.groups,function(e){return s("div",{key:e.id,staticClass:"alert alert-secondary group"},[s("div",{staticClass:"group-name"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),s("div",{staticClass:"group-members"},t._l(e.members,function(t){return s("img",{attrs:{src:t.picture}})}))])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card_header"},[e("h3",[this._v("Группы")])])}]};var b=s("VU/8")(f,_,!1,function(t){s("f0Z2")},null,null).exports,y={props:{owesUsers:{type:Array,default:function(){return[]}}},data:function(){return{}}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[t._m(0),t._v(" "),s("div",{staticClass:"card_body"},t._l(t.owesUsers,function(e){return s("div",{key:e.id,staticClass:"alert alert-warning",attrs:{role:"alert"}},[s("img",{attrs:{src:e.who.picture}}),t._v(" "),s("b",[t._v(t._s(e.who.name))]),t._v("\n      owes\n      "),s("img",{attrs:{src:e.whom.picture}}),t._v(" "),s("b",[t._v(t._s(e.whom.name))]),t._v(" "),s("span",{staticClass:"sum"},[t._v(t._s(Math.round10(e.sum,-2)))])])}))])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card_header"},[e("h3",[this._v("Кто кому должен")])])}]};var C=s("VU/8")(y,g,!1,function(t){s("S29H")},"data-v-3909fe94",null).exports,U={props:{historyItem:{type:Object,default:function(){return{}}}},data:function(){return{}},methods:{paidToUsers:function(t,e){var s="";return s+=t.name,e+1!==this.historyItem.paidTo.length?s+=", ":s+="",s}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"history-item alert alert-info"},[s("div",{staticClass:"history-item__description"},[t._v("\n    "+t._s(t.historyItem.description)+"\n  ")]),t._v(" "),s("div",{staticClass:"history-item__message"},[t._v("\n    Paid by "+t._s(t.historyItem.paidBy.name)+" for\n    "),t._l(t.historyItem.paidTo,function(e,a){return s("span",{key:e.id},[t._v("\n      "+t._s(t.paidToUsers(e,a))+"\n    ")])})],2),t._v(" "),s("div",{staticClass:"history-item__count"},[t._v("\n    "+t._s(t.historyItem.paidSum)+"\n  ")])])},staticRenderFns:[]};var T={components:{HistoryCardItem:s("VU/8")(U,w,!1,function(t){s("Psxs")},null,null).exports},props:{paymentsHistory:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{showPaymentModal:function(){this.$emit("showPaymentModal",!0)}}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card"},[e("div",{staticClass:"card_header"},[e("h3",[this._v("История платежей")]),this._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:this.showPaymentModal}},[this._v("Add payment\n    ")])]),this._v(" "),this._l(this.paymentsHistory,function(t){return e("history-card-item",{key:t.id,staticClass:"card_body",attrs:{"history-item":t}})})],2)},staticRenderFns:[]};var S={components:{UsersForm:p,PaymentForm:u,UsersCard:v,GroupsCard:b,DebtorsCard:C,HistoryCard:s("VU/8")(T,P,!1,function(t){s("3Mur")},"data-v-7d5e6f52",null).exports},data:function(){return{isUsersFormVisible:!1,isPaymentFormVisible:!1,users:[{id:1,name:"vasya",balance:0,picture:"https://randomuser.me/api/portraits/thumb/lego/1.jpg",debtors:{}},{id:2,name:"petya",balance:0,picture:"https://randomuser.me/api/portraits/thumb/lego/2.jpg",debtors:{}},{id:3,name:"masha",balance:0,picture:"https://randomuser.me/api/portraits/thumb/lego/3.jpg",debtors:{}}],groups:[{id:1,name:"Hatchery",members:[{id:1,name:"vasya",balance:0,picture:"https://randomuser.me/api/portraits/thumb/lego/1.jpg",debtors:{}},{id:2,name:"petya",balance:0,picture:"https://randomuser.me/api/portraits/thumb/lego/2.jpg",debtors:{}},{id:3,name:"masha",balance:0,picture:"https://randomuser.me/api/portraits/thumb/lego/3.jpg",debtors:{}}]}],owesUsers:[],paymentsHistory:[]}},computed:{},methods:{addUser:function(t,e){this.users.push({id:this.users.length+1,name:t,picture:e,balance:0,debtors:{}}),this.isUsersFormVisible=!1},addHistory:function(t,e,s,a){this.calculateDebts(),this.paymentsHistory.push({description:t,paidBy:e,paidTo:s,paidSum:a}),this.isPaymentFormVisible=!1},calculateDebts:function(){this.owesUsers.splice(0,this.owesUsers.length);var t=this.users,e=this;t.forEach(function(s,a){var r=function(a){s.debtors[a]<0&&e.owesUsers.push({who:{name:s.name,picture:s.picture},whom:{name:t.filter(function(t){return t.name===a})[0].name,picture:t.filter(function(t){return t.name===a})[0].picture},sum:s.debtors[a]})};for(var i in s.debtors)r(i)})}}},x={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("div",{staticClass:"main-row"},[s("groups-card",{attrs:{groups:t.groups}}),t._v(" "),s("history-card",{attrs:{users:t.users,paymentsHistory:t.paymentsHistory},on:{showPaymentModal:function(e){t.isPaymentFormVisible=e}}})],1),t._v(" "),s("div",{staticClass:"main-row"},[s("users-card",{attrs:{users:t.users},on:{showUsersModal:function(e){t.isUsersFormVisible=e}}}),t._v(" "),s("debtors-card",{attrs:{"owes-users":t.owesUsers}})],1),t._v(" "),t.isUsersFormVisible?s("users-form",{on:{addUser:t.addUser}}):t._e(),t._v(" "),t.isPaymentFormVisible?s("payment-form",{attrs:{users:t.users},on:{history:t.addHistory}}):t._e()],1)},staticRenderFns:[]};var E=s("VU/8")(S,x,!1,function(t){s("SE2X")},null,null).exports;a.a.use(n.a);var F=new n.a({routes:[{path:"/",name:"StartScreen",component:E}]});Math.round10||(Math.round10=function(t,e){return function(t,e,s){return void 0===s||0==+s?Math[t](e):(e=+e,s=+s,isNaN(e)||"number"!=typeof s||s%1!=0?NaN:(e=e.toString().split("e"),+((e=(e=Math[t](+(e[0]+"e"+(e[1]?+e[1]-s:-s)))).toString().split("e"))[0]+"e"+(e[1]?+e[1]+s:s))))}("round",t,e)}),a.a.config.productionTip=!1,new a.a({el:"#app",router:F,components:{App:i},template:"<App/>"})},Psxs:function(t,e){},R41M:function(t,e){},S29H:function(t,e){},SE2X:function(t,e){},TN4m:function(t,e){},f0Z2:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7e4ebbceae5bf1d4f06b.js.map