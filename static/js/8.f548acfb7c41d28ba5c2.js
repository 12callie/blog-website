webpackJsonp([8],{"7A5/":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("ZYmg"),i={name:"Edit",data:function(){return{title:"",description:"",content:"",atIndex:!1,blogId:null}},created:function(){var t=this;this.blogId=this.$route.params.blogId,a.a.getDetail({blogId:this.blogId}).then(function(e){t.title=e.data.title,t.content=e.data.content,t.description=e.data.description,t.atIndex=e.data.atIndex})},methods:{onSave:function(){var t=this;a.a.updateBlog({blogId:this.blogId},{title:this.title,content:this.content,description:this.description,atIndex:this.atIndex}).then(function(e){console.log("更改成功",e),t.$message.success(e.msg),t.$router.push({path:"/detail/"+e.data.id})})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"edit"}},[n("h2",[t._v("编辑文章")]),t._v(" "),n("h4",[t._v("文章标题")]),t._v(" "),n("el-input",{attrs:{type:"text",maxlength:"30"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限30个字")]),t._v(" "),n("h4",[t._v("内容简介")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:6},maxlength:"200"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限200个字")]),t._v(" "),n("h4",[t._v("文章内容")]),t._v(" "),n("el-input",{attrs:{type:"textarea",autosize:{minRows:4,maxRows:30},maxlength:"10000"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}}),t._v(" "),n("p",{staticClass:"msg"},[t._v("限10000个字")]),t._v(" "),n("p",[n("label",[t._v("是否展示到首页")]),t._v(" "),n("el-switch",{attrs:{"active-color":"rgb(0, 153, 0)","inactive-color":"rgb(215,215,215)"},model:{value:t.atIndex,callback:function(e){t.atIndex=e},expression:"atIndex"}})],1),t._v(" "),n("el-button",{on:{click:t.onSave}},[t._v("保存")])],1)},staticRenderFns:[]};var s=n("VU/8")(i,o,!1,function(t){n("BG7q")},"data-v-01fa1f43",null);e.default=s.exports},BG7q:function(t,e){}});
//# sourceMappingURL=8.f548acfb7c41d28ba5c2.js.map