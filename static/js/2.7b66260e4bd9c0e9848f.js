webpackJsonp([2],{eerB:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("ZYmg"),s={name:"Index",data:function(){return{blogs:[],page:0,total:0}},created:function(){var t=this;this.page=Number(this.$route.query.page)||1,n.a.getIndexBlogs({page:this.page}).then(function(e){t.blogs=e.data,t.page=e.page,t.total=e.total})},methods:{onPageChange:function(t){var e=this;n.a.getIndexBlogs({page:t}).then(function(a){e.blogs=a.data,e.page=a.page,e.total=a.total,e.$router.push({path:"/",query:{page:t}})})}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"index"}},[a("section",{staticClass:"blog-posts"},t._l(t.blogs,function(e){return a("router-link",{key:e.id,staticClass:"item",attrs:{to:"/detail/"+e.id}},[a("figure",{staticClass:"avatar"},[a("img",{staticClass:"avatar",attrs:{src:e.user.avatar,alt:e.user.username}}),t._v(" "),a("figcaption",[t._v(t._s(e.user.username))])]),t._v(" "),a("h3",[t._v("\n        "+t._s(e.title)+" "),a("span",[t._v(t._s(t.friendlyDate(e.createdAt)))])]),t._v(" "),a("p",[t._v("\n        "+t._s(e.description)+"\n      ")])])}),1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-size":20,layout:"prev, pager, next",total:t.total,"current-page":t.page},on:{"update:currentPage":function(e){t.page=e},"update:current-page":function(e){t.page=e},"current-change":t.onPageChange}})],1)])},staticRenderFns:[]};var i=a("VU/8")(s,r,!1,function(t){a("hXMY")},"data-v-b05bc230",null);e.default=i.exports},hXMY:function(t,e){}});
//# sourceMappingURL=2.7b66260e4bd9c0e9848f.js.map