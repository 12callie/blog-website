webpackJsonp([4],{"7vA3":function(t,e){},zwgt:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("ZYmg"),i={name:"Create",data:function(){return{title:"",description:"",content:"",atIndex:!1}},methods:{onCreate:function(){var t=this;a.a.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"create"}},[n("h2",[t._v("创建文章")]),t._v(" "),n("h4",[t._v("文章标题")]),t._v(" "),n("el-input",{attrs:{type:"text",maxlength:"30"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("h4",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6},maxlength:"200"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限200个字")]),t._v(" "),n("h4",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:30},maxlength:"10000"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限10000个字")]),t._v(" "),n("p",[n("label",[t._v("是否展示到首页")]),t._v(" "),n("el-switch",{attrs:{"active-color":"rgb(0, 153, 0)","inactive-color":"rgb(215,215,215)"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),n("el-button",{on:{click:t.onCreate}},[t._v("立即创建")])],1)},staticRenderFns:[]};var o=n("VU/8")(i,s,!1,function(t){n("7vA3")},"data-v-61009bae",null);e.default=o.exports}});
//# sourceMappingURL=4.690cc56369ee42266673.js.map