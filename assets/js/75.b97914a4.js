(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{432:function(e,t,a){},533:function(e,t,a){"use strict";var s=a(432);a.n(s).a},591:function(e,t,a){"use strict";a.r(t);var s=a(430),r=a.n(s),n={data:function(){return{selectedUser:{},users:[]}},methods:{query:function(e,t){var a=this;r.a.get("".concat(t).concat(e)).then(function(e){a.users=e.data.items}).catch(function(e){a.users=[]})}}},l=(a(533),a(1)),c=Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"con-typeahead-example"},[a("vm-typeahead",{staticClass:"typeaheadExample",attrs:{label:"Github Users",placeholder:"Select a User",optional:"",url:"https://api.github.com/search/users?",data:e.users,serializer:function(e){return e.login},filter:function(e){return"q="+e}},on:{"update:data":function(t){e.users=t},"input-change":e.query},scopedSlots:e._u([{key:"default",fn:function(t){var s=t.data;return e._l(s,function(e,t){return a("vm-typeahead-item",{key:t,tag:"vm-typeahead-item",attrs:{value:e.id,text:e.text}})})}}]),model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}}),e._v(" "),a("vm-typeahead",{staticClass:"typeaheadExample",attrs:{label:"Github Users",placeholder:"Select a User",url:"https://api.github.com/search/users?",data:e.users,serializer:function(e){return e.login},filter:function(e){return"q="+e},loadingType:"point"},on:{"input-change":e.query},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}}),e._v(" "),a("vm-typeahead",{staticClass:"typeaheadExample",attrs:{label:"Github Users",placeholder:"Select a User",url:"https://api.github.com/search/users?",data:e.users,serializer:function(e){return e.login},filter:function(e){return"q="+e},loadingType:"radius"},on:{"input-change":e.query},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}}),e._v(" "),a("vm-typeahead",{staticClass:"typeaheadExample",attrs:{label:"Github Users",placeholder:"Select a User",url:"https://api.github.com/search/users?",data:e.users,serializer:function(e){return e.login},filter:function(e){return"q="+e},loadingType:"sound"},on:{"input-change":e.query},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}}),e._v(" "),a("vm-typeahead",{staticClass:"typeaheadExample",attrs:{label:"Github Users",placeholder:"Select a User",url:"https://api.github.com/search/users?",data:e.users,serializer:function(e){return e.login},filter:function(e){return"q="+e},loadingType:"material"},on:{"input-change":e.query},model:{value:e.selectedUser,callback:function(t){e.selectedUser=t},expression:"selectedUser"}})],1)},[],!1,null,null,null);t.default=c.exports}}]);