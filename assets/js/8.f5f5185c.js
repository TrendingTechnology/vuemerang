(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{374:function(t,e,a){},460:function(t,e,a){"use strict";var l=a(374);a.n(l).a},593:function(t,e,a){"use strict";a.r(e);var l={data:function(){return{activePrompt:!1,activePrompt2:!1,activePrompt3:!1,val:"",valMultipe:{value1:"",value2:""}}},computed:{validName:function(){return this.valMultipe.value1.length>0&&this.valMultipe.value2.length>0}},methods:{acceptAlert:function(t){this.$vm.notify({color:"success",title:"Accept Selected",text:"Lorem ipsum dolor sit amet, consectetur"})},close:function(){this.$vm.notify({color:"danger",title:"Closed",text:"You close a dialog!"})},action:function(){this.$vm.notify({color:"primary",title:"Action",text:"Lorem ipsum dolor sit amet, consectetur"})}}},v=(a(460),a(1)),i=Object(v.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"centerx con-exemple-prompt"},[a("div",{staticClass:"modelx"},[t._v("\n    "+t._s(null==t.val?"null":t.val)+"\n  ")]),t._v(" "),a("vm-button",{attrs:{color:"primary",type:"border"},on:{click:function(e){t.activePrompt=!0}}},[t._v("Run prompt")]),t._v(" "),a("div",{staticClass:"modelx"},[t._v("\n     "+t._s(t.valMultipe.value1)+"\n     "+t._s(t.valMultipe.value2)+"\n   ")]),t._v(" "),a("vm-button",{attrs:{color:"primary",type:"border"},on:{click:function(e){t.activePrompt2=!0}}},[t._v("Run prompt inputs")]),t._v(" "),a("div",{staticClass:"modelx"},[t._v("\n     "+t._s(t.valMultipe.value1)+"\n     "+t._s(t.valMultipe.value2)+"\n   ")]),t._v(" "),a("vm-button",{attrs:{color:"primary",type:"border"},on:{click:function(e){t.activePrompt3=!0}}},[t._v("Run prompt inputs with actions")]),t._v(" "),a("vm-prompt",{attrs:{"vm-active":t.activePrompt},on:{"vm-cancel":function(e){t.val=""},"vm-accept":t.acceptAlert,"vm-close":t.close,"update:vmActive":function(e){t.activePrompt=e},"update:vm-active":function(e){t.activePrompt=e}}},[a("div",{staticClass:"con-exemple-prompt"},[t._v("\n        Enter the security code\n       "),a("vm-input",{attrs:{placeholder:"Code","vm-placeholder":"Code"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)]),t._v(" "),a("vm-prompt",{attrs:{"vm-is-valid":t.validName,"vm-active":t.activePrompt2},on:{"vm-cancel":function(e){t.valMultipe.value1="",t.valMultipe.value2=""},"vm-accept":t.acceptAlert,"vm-close":t.close,"update:vmActive":function(e){t.activePrompt2=e},"update:vm-active":function(e){t.activePrompt2=e}}},[a("div",{staticClass:"con-exemple-prompt"},[t._v("\n     Enter your first and last name to "),a("b",[t._v("continue")]),t._v(".\n       "),a("vm-input",{attrs:{placeholder:"Name"},model:{value:t.valMultipe.value1,callback:function(e){t.$set(t.valMultipe,"value1",e)},expression:"valMultipe.value1"}}),t._v(" "),a("vm-input",{attrs:{placeholder:"Last Name"},model:{value:t.valMultipe.value2,callback:function(e){t.$set(t.valMultipe,"value2",e)},expression:"valMultipe.value2"}}),t._v(" "),a("vm-alert",{attrs:{"vm-active":!t.validName,color:"danger","vm-icon":"new_releases"}},[t._v("\n         Fields can not be empty please enter the data\n       ")])],1)]),t._v(" "),a("vm-prompt",{attrs:{"vm-action":!0,"vm-action-text":"Eliminar","vm-buttons-hidden":!0,"vm-is-valid":t.validName,"vm-active":t.activePrompt3},on:{"vm-cancel":function(e){t.valMultipe.value1="",t.valMultipe.value2=""},"vm-accept":t.acceptAlert,"vm-close":t.close,"vm-action":t.action,"update:vmActive":function(e){t.activePrompt3=e},"update:vm-active":function(e){t.activePrompt3=e}}},[a("div",{staticClass:"con-exemple-prompt"},[t._v("\n     Enter your first and last name to "),a("b",[t._v("continue")]),t._v(".\n       "),a("vm-input",{attrs:{placeholder:"Name"},model:{value:t.valMultipe.value1,callback:function(e){t.$set(t.valMultipe,"value1",e)},expression:"valMultipe.value1"}}),t._v(" "),a("vm-input",{attrs:{placeholder:"Last Name"},model:{value:t.valMultipe.value2,callback:function(e){t.$set(t.valMultipe,"value2",e)},expression:"valMultipe.value2"}}),t._v(" "),a("vm-alert",{attrs:{"vm-active":!t.validName,color:"danger","vm-icon":"new_releases"}},[t._v("\n         Fields can not be empty please enter the data\n       ")])],1)])],1)},[],!1,null,null,null);e.default=i.exports}}]);