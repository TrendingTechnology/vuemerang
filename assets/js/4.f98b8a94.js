(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{360:function(t,e,n){},447:function(t,e,n){"use strict";var s=n(360);n.n(s).a},542:function(t,e,n){"use strict";n.r(e);n(26),n(5);var s={components:{Footer:n(90).a},data:function(){return{users:[],request:{},state:1,awwards:[{title:"Contribution",medals:[{name:"c100",description:"Have 100 points of contribution to Vuemerang"},{name:"c1k",description:"Have 1k points of contribution to Vuemerang"},{name:"c10k",description:"Have 10k points of contribution to Vuemerang"},{name:"c30k",description:"Have 30k points of contribution to Vuemerang"}]},{title:"Pull Request",medals:[{name:"pull1",description:"Have 1 Pull Request on github for Vuemerang"},{name:"pull5",description:"Have 5 Pull Request on github for Vuemerang"},{name:"pull20",description:"Have 20 Pull Request on github for Vuemerang"},{name:"pull50",description:"Have 50 Pull Request on github for Vuemerang"}]}]}},mounted:function(){this.consultContributors(),this.consultarPulls()},methods:{weeks:function(t){var e=0;return t.forEach(function(t){e+=t.a}),e},consultContributors:function(){var t=this;fetch("https://api.github.com/repos/controlla/Vuemerang/stats/contributors").then(function(t){return t.json()}).then(function(e){e.forEach(function(e){e.weeks=t.weeks(e.weeks)}),t.users=e.sort(function(t,e){return t.weeks>e.weeks?-1:t.weeks<e.weeks?1:0})})},consultarPulls:function(){var t=this;fetch("https://api.github.com/repos/controlla/Vuemerang/pulls?state=all").then(function(t){return t.json()}).then(function(e){var n=[];e.map(function(t){n.push(t.user.login)});var s={};n.forEach(function(t){s.hasOwnProperty(t)?s[t]++:s[t]=1}),console.log(s),t.request=s})}}},o=(n(447),n(1)),a=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"con-contributors"},[n("ul",{staticClass:"menu"},[n("li",{class:{"estas-contribucion":1==t.state},on:{click:function(e){t.state=1}}},[t._v("\n      Rank\n    ")]),t._v(" "),n("li",{class:{"estas-contribucion":2==t.state},on:{click:function(e){t.state=2}}},[t._v("\n      Awards\n    ")])]),t._v(" "),n("div",{staticClass:"con-contenedores"},[1==t.state?n("div",{staticClass:"con-rank"},[n("table",[t._m(0),t._v(" "),n("tbody",t._l(t.users,function(e,s){return n("tr",[n("td",[t._v(t._s(s+1))]),t._v(" "),n("td",[n("img",{attrs:{src:e.author.avatar_url,alt:""}})]),t._v(" "),n("td",[t._v(t._s(e.author.login))]),t._v(" "),n("td",{staticClass:"medals"},[e.weeks>100?n("c100"):t._e(),t._v(" "),e.weeks>1e3?n("c1k"):t._e(),t._v(" "),e.weeks>1e4?n("c10k"):t._e(),t._v(" "),e.weeks>3e4?n("c30k"):t._e()],1),t._v(" "),n("td",{staticClass:"medals-pull"},[t.request[e.author.login]>=1?n("pull1"):t._e(),t._v(" "),t.request[e.author.login]>=5?n("pull5"):t._e(),t._v(" "),t.request[e.author.login]>=20?n("pull20"):t._e(),t._v(" "),t.request[e.author.login]>=50?n("pull50"):t._e()],1),t._v(" "),n("td",[t._v(t._s(e.total))]),t._v(" "),n("td",[t._v(t._s(e.weeks))]),t._v(" "),n("td",{staticClass:"iconx-github"},[n("a",{staticClass:"flaticon-github ",attrs:{href:e.author.html_url}})])])}),0)])]):n("div",{staticClass:"con-awwards"},t._l(t.awwards,function(e){return n("div",{staticClass:"con-awward"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("ul",t._l(e.medals,function(e){return n("li",[n("div",{staticClass:"con-card-awward"},[n(e.name,{tag:"div"}),t._v(" "),n("p",[t._v("\n                "+t._s(e.description)+"\n              ")])],1)])}),0)])}),0)]),t._v(" "),n("footer-contributors"),t._v(" "),n("Footer")],1)},[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Pos")]),t._v(" "),n("th",[t._v("User")]),t._v(" "),n("th",[t._v("Name")]),t._v(" "),n("th",[t._v("Contribution")]),t._v(" "),n("th",[t._v("Pull Request")]),t._v(" "),n("th",[t._v("Commits")]),t._v(" "),n("th",[t._v("Points")]),t._v(" "),n("th",[t._v("GitHub")])])])}],!1,null,null,null);e.default=a.exports}}]);