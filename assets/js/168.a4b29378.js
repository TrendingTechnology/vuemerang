(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{590:function(e,t,s){"use strict";s.r(t);var l=s(430),n=s.n(l),a={data:function(){return{select1:1,select2:1,select3:1,select4:1,users:[]}},methods:{query:function(e){var t=this;n.a.get("https://api.github.com/search/users?".concat(e)).then(function(e){t.users=e.data.items}).catch(function(e){t.users=[]})}}},i=s(1),c=Object(i.a)(a,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vm-dialog"},[s("vm-typeahead",{staticClass:"selectExample",attrs:{placeholder:"Select",label:"Countries",data:e.users,serializer:function(e){return e.login},filter:function(e){return"q="+e},success:"","success-text":"This field is valid"},on:{"input-change":e.query},model:{value:e.select1,callback:function(t){e.select1=t},expression:"select1"}}),e._v(" "),s("vm-typeahead",{staticClass:"selectExample",attrs:{placeholder:"Select",label:"Countries",data:e.users,serializer:function(e){return e.login},filter:function(e){return"q="+e},serializerResponse:function(e){return e.items},danger:"","danger-text":"This field is invalid"},on:{"input-change":e.query},model:{value:e.select2,callback:function(t){e.select2=t},expression:"select2"}}),e._v(" "),s("vm-typeahead",{staticClass:"selectExample",attrs:{placeholder:"Select",label:"Countries",data:e.users,serializer:function(e){return e.login},filter:function(e){return"q="+e},warning:"","warning-text":"This field is invalid"},on:{"input-change":e.query},model:{value:e.select3,callback:function(t){e.select3=t},expression:"select3"}}),e._v(" "),s("vm-typeahead",{staticClass:"selectExample",attrs:{placeholder:"Select",label:"Countries",data:e.users,serializer:function(e){return e.login},filter:function(e){return"q="+e},"description-text":"Simple info for multiple select"},on:{"input-change":e.query},model:{value:e.select4,callback:function(t){e.select4=t},expression:"select4"}})],1)},[],!1,null,null,null);t.default=c.exports}}]);