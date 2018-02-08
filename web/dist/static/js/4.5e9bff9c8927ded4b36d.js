webpackJsonp([4],{Jr8N:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a("aA9S"),i=a.n(r),o=a("VsLd"),n={data:function(){return{topSearchContent:"",userLoading:!1,addEditLoading:!1,tableData:[],dialogFormVisible:!1,isUpdate:1,index:1,title:"",currentPage:1,pageSize:10,total:0,ruleForm2:{username:"",password:"",mobile:"",email:""},rules2:{username:[{required:!0,validator:o.validateUsername,trigger:"blur"}],password:[{required:!0,validator:o.validatePassword,trigger:"blur"}],mobile:[{required:!0,validator:o.validateMobile,trigger:"blur"}],email:[{required:!0,validator:o.validateEmail,trigger:"blur"}]}}},computed:{tableH:function(){return document.documentElement.clientHeight-300}},methods:{onSubmit:function(){1==this.currentPage?this.loadData(this.topSearchContent,this.currentPage,this.pageSize):this.currentPage=1},handleSizeChange:function(e){this.loadData(this.topSearchContent,e,this.pageSize)},handleCurrentChange:function(e){this.loadData(this.topSearchContent,e,this.pageSize)},handleDelete:function(e,t,a){var r=this;this.$confirm("确定要删除这条记录吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){r.$http.post("/user/delUser",{id:t.id}).then(function(e){200===e.data.code?(r.loadData(r.topSearchContent,r.currentPage,r.pageSize),r.$message.success(e.data.message)):r.$message.error(e.data.message)}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})},addUser:function(){var e=this;this.title="添加用户",this.dialogFormVisible=!0,this.isUpdate=1,this.ruleForm2={username:"",mobile:"",password:"",email:""},this.$nextTick(function(){e.$refs.ruleForm2.clearValidate()})},editUser:function(e,t){var a=this;this.title="修改用户",this.isUpdate=2,this.index=t.id,this.ruleForm2={username:t.username,mobile:t.mobile,password:"",email:t.email},this.$nextTick(function(){a.$refs.ruleForm2.clearValidate()}),this.dialogFormVisible=!0},submitForm:function(e,t,a){var r=this,o="";this.addEditLoading=!0,this.$refs[e].validate(function(a){if(!a)return r.addEditLoading=!1,!1;var n=i()(r.ruleForm2);1===t?(o="/user/addUser","post"):(n.id=r.index,o="/user/editUser","post"),r.$http.post(o,n).then(function(e){r.addEditLoading=!1,200===e.data.code?(r.$message.success(e.data.message),r.dialogFormVisible=!1,r.loadData(r.topSearchContent,r.currentPage,r.pageSize)):r.$message.info(e.data.message)}).catch(function(t){r.$refs[e].resetFields(),r.addEditLoading=!1})})},loadData:function(e,t,a){var r=this;this.userLoading=!0,this.$http.post("/user/list",{pageSize:a,pageNum:t,search:e}).then(function(e){200===e.data.code?(r.tableData=e.data.data.list,r.total=e.data.data.total):(r.total=0,r.tableData=[],r.$message.info(e.data.message)),r.userLoading=!1}).catch(function(e){console.log(e),r.userLoading=!1})}},mounted:function(){this.loadData(this.topSearchContent,this.currentPage,this.pageSize)}},l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.userLoading,expression:"userLoading"}],staticClass:"userManagement"},[a("el-form",{staticClass:"demo-form-inline",staticStyle:{height:"30px","margin-bottom":"10px"},attrs:{inline:!0,size:"small"}},[a("el-input",{staticStyle:{width:"300px",float:"right"},attrs:{size:"small",placeholder:"搜索用户","prefix-icon":"el-icon-search"},on:{change:e.onSubmit},model:{value:e.topSearchContent,callback:function(t){e.topSearchContent=t},expression:"topSearchContent"}}),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.addUser}},[e._v("添加")])],1)],1),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:e.tableH,size:"mini",border:""}},[a("el-table-column",{attrs:{label:"ID",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.id))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"账号","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.username))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"电话"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-phone"}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.mobile))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"邮箱","show-overflow-tooltip":""},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-message"}),e._v(" "),a("span",{staticStyle:{"margin-left":"10px"}},[e._v(e._s(t.row.email))])]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small",type:"success",icon:"el-icon-edit-outline",title:"修改用户"},nativeOn:{click:function(a){a.preventDefault(),e.editUser(t.$index,t.row)}}}),e._v(" "),a("el-button",{attrs:{type:"danger",size:"small",icon:"el-icon-delete",title:"删除用户"},nativeOn:{click:function(a){a.preventDefault(),e.handleDelete(t.$index,t.row,e.tableData)}}})]}}])})],1),e._v(" "),a("el-pagination",{staticStyle:{float:"right","margin-right":"5%","margin-top":"10px"},attrs:{"current-page":e.currentPage,"page-size":e.pageSize,layout:"total, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t}}}),e._v(" "),a("el-dialog",{attrs:{title:e.title,visible:e.dialogFormVisible,"close-on-click-modal":!1,top:"8vh","close-on-press-escape":!1,center:""},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm2,"status-icon":"",rules:e.rules2,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"账号",prop:"username"}},[a("el-input",{attrs:{type:"text","auto-complete":"off"},model:{value:e.ruleForm2.username,callback:function(t){e.$set(e.ruleForm2,"username",t)},expression:"ruleForm2.username"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"密码",prop:"password"}},[a("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.ruleForm2.password,callback:function(t){e.$set(e.ruleForm2,"password",t)},expression:"ruleForm2.password"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"电话",prop:"mobile"}},[a("el-input",{attrs:{type:"mobile","auto-complete":"off"},model:{value:e.ruleForm2.mobile,callback:function(t){e.$set(e.ruleForm2,"mobile",t)},expression:"ruleForm2.mobile"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"邮箱",prop:"email"}},[a("el-input",{attrs:{type:"mobile","auto-complete":"off"},model:{value:e.ruleForm2.email,callback:function(t){e.$set(e.ruleForm2,"email",t)},expression:"ruleForm2.email"}})],1)],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.addEditLoading,expression:"addEditLoading"}],staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"warning"},on:{click:function(t){e.dialogFormVisible=!e.dialogFormVisible}}},[e._v("取消编辑")]),e._v(" "),1==e.isUpdate?a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2",1)}}},[e._v("保存数据")]):a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("ruleForm2",2,e.ruleForm2.id)}}},[e._v("修改数据")])],1)],1)],1)},staticRenderFns:[]};var s=a("X4nt")(n,l,!1,function(e){a("Ze//")},"data-v-091ec7be",null);t.default=s.exports},VsLd:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),a.d(t,"validateUsername",function(){return r}),a.d(t,"validateCaptcha",function(){return i}),a.d(t,"validateCaptchaSix",function(){return o}),a.d(t,"validateName",function(){return n}),a.d(t,"validateMobile",function(){return l}),a.d(t,"validatePassword",function(){return s}),a.d(t,"validateEmail",function(){return u});var r=function(e,t,a){""===t?a(new Error("用户名不能为空")):/^([a-zA-Z\u4e00-\u9fa5\.]){4,16}$/.test(t)?a():a(new Error("只能输入4-16个中文、英文、.等字符"))},i=function(e,t,a){""===t?a(new Error("验证码不能为空!")):/^\d{4}$/.test(t)?a():a(new Error("请输入正确的验证码!"))},o=function(e,t,a){""===t?a(new Error("验证码不能为空!")):/^\d{6}$/.test(t)?a():a(new Error("请输入正确的验证码!"))},n=function(e,t,a){""===t?a(new Error("姓名不能为空")):/^[a-zA-Z\u4e00-\u9fa5]{2,20}$/.test(t)?a():a(new Error("只能2-20个汉字或者英文"))},l=function(e,t,a){""===t?a(new Error("手机不能为空")):/^1[34578]\d{9}$/.test(t)?a():a(new Error("请正确填写您的手机号码"))},s=function(e,t,a){""===t?a(new Error("密码不能为空")):/^.{6,12}$/.test(t)?a():a(new Error("6-12位密码"))},u=function(e,t,a){""===t?a(new Error("邮箱不能为空")):/^([\w\.\-]+)@([\w\.\-]+)\.([\w]{2,4})$/.test(t)?a():a(new Error("邮箱格式不正确"))}},"Ze//":function(e,t){}});
//# sourceMappingURL=4.5e9bff9c8927ded4b36d.js.map