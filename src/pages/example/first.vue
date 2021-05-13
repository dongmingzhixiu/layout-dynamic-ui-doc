<template>
  <div class="box-b p10 h ld-doc">
    <el-card class="doc w h">
      <!-- 页面内容 -->
      <ld-doc :doc="doc" class="w h">

      </ld-doc>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        doc: [{
          title: '创建项目和完善项目结构',
          h1:'效果图',
          tip_i:'在准备好前期准备工作后，只需要简单的几步配置即可实现如下功能',
          md: `![效果图](./static/result.gif)`
        },{
          h1: '一.使用vue-cli创建项目',
          h2: '1.准备',
          tip_p: '首先必须具备`nodejs`环境和安装`npm`',
          H2: '2.创建vue项目',
          tip: '详情参考这边博客<a target="_black" href="https://www.jianshu.com/p/32beaca25c0d">Vue2全家桶之一：vue-cli（vue脚手架）超详细教程</a>',
        }, {
          H1: '二.安装`Element-ui`和`layout-dyanmic-ui`',
          h2: '3.安装`Element-ui`',
          tip: '使用`npm i element-ui -S`安装',
          bash: `npm i element-ui -S`,
        }, {
          h2: '4.安装`layout-dyanmic-ui`',
          tip: '使用`npm i layout-dynamic-ui`安装',
          bash: `npm i layout-dynamic-ui`,
          p: '安装完成后，参考`package.json`文件,会有如下信息',
          javascript: `
          //package.json文件
          "dependencies": {
            "element-ui": "^2.15.1",
            "layout-dynamic-ui": "^1.4.1",
            "vue": "^2.5.2",
            "vue-router": "^3.5.1"
          },`.replace(/^     /gm, ''),
        },
        {
          h1:'三.开始准备工作'
        },
        {
          h2: '5.创建目录结构和文件',
          md:`效果如下
          ![程序结构](./static/mulujiegou.jpg)
          `.replace(/^     /gm, ''),
        },
        {
          h2:'6.在`main.js`中创建如下代码',
          javascript:`
          import Vue from 'vue'
          import app from './app' //注意这里的app.vue文件是修改后的名称，不是App.vue
          import router from './router'
          import ElementUI from 'element-ui';
          import 'element-ui/lib/theme-chalk/index.css';

          import layoutDynamicUI from 'layout-dynamic-ui';
          import 'layout-dynamic-ui/lib/index.css';

          Vue.use(ElementUI);

          Vue.use(layoutDynamicUI);

          import pageImport from './page-import.js';

          Vue.use(pageImport);

          import './mock-file.js';

          Vue.config.productionTip = false

          /* eslint-disable no-new */
          new Vue({
          	el: '#app',
          	router,
          	components: {
          		app
          	},
          	template: '<app/>'
          })
          `.replace(/^     /gm, ''),
        }, {
          h2:'7.创建业务文件',
          md:`
          ![业务文件](./static/yewuwenjian.jpg)
          `.replace(/^     /gm, ''),
        },
        {
          h2:'8.创建菜单',
          tip_d:'在`layout.js`中填入以下内容',
          javascript:`
          const layout = {
            menuTree: [
              {icon: 'el-icon-s-platform',label: '工作台',prop:'work-list',page:'work-list',showClose:false,},
              {icon:'el-icon-user-solid',label:'教师管理',prop:'teacher',page:'normal'},
              {icon:'el-icon-user',label:'学生管理',prop:'student',page:'normal'},
              {icon:'el-icon-s-help',label:'班级管理',prop:'class',page:'normal'},
              {
                icon: 'el-icon-data-analysis',label: '系统管理',
                children: [
                  { label:'学校管理',
          				children:[
          					{ label:'园所简介',prop:'schoolDescription',page:'normal'},
          					{ label:'园所简介2',prop:'scanner',page:'normal'},
          				]},
                  { label:'学校管理2',prop:'classDrive',page:'normal'},
                  { label:'学校管理3',prop:'AttendancePublicity',page:'normal'},
                ],
              },
            ],
          }
          export default layout;
          `.replace(/^        /gm, ''),
        },
        {
          h2:'9.让`mock`文件生效',
          tip:'在`mock-file.js`中使用`require`包含mock文件夹下的文件',
          javascript: `
          require("@/mock/login.js")
          require("@/mock/teacher.js")
          require("@/mock/student.js")
          require("@/mock/clzss.js")
          `.replace(/^        /gm, ''),
        },
        {
          h2:'10.在`page-import.js`中注册关键页面为组件',
          tip:'注册通用模板(`normial`,`normail-editor`)和工作台(`work-list`)模板',
          javascript: `

          import workList from '@/pages/work/work-list.vue'
          import normal from '@/pages/window/normal.vue'
          import normalEditor from '@/pages/window/normal-editor.vue'

          const install = (Vue, opts = {}) => {

            //这里的名称和layout.js中的page对应
          	Vue.component('work-list', workList);
          	Vue.component('normal', normal);
          	Vue.component('normal-editor', normalEditor);
          }
          export default {
          	install
          }
          `.replace(/^        /gm, ''),
        },
        {
          h2:'11.在`app.vue`文件中添加如下代码',
          vue:unescape("%0A%3Ctemplate%3E%0A%09%3Cdiv%20id%3D%22app%22%20class%3D%22w%20h-vh%20box-b%22%3E%0A%09%09%3Crouter-view%20class%3D%22wh%20box-b%20over-a-y%22%20/%3E%0A%09%3C/div%3E%0A%3C/template%3E%0A%0A%3Cscript%3E%0A%09export%20default%20%7B%0A%09%09name%3A%20%27app%27%2C%0A%09%7D%0A%3C/script%3E%0A%0A%3Cstyle%3E%0A%3C/style%3E%0A"),
        },
        {
          h2:'12.在`home.vue`文件中添加如下代码',
          vue:unescape("%0A%3Ctemplate%3E%0A%09%3Cld-frame%20ref%3D%22frame%22%20class%3D%22h-vh%20w%22%20%3Amenu-tree%3D%22menuTree%22%20%3Aleft-head-info%3D%22leftHeadInfo%22%20@openTabs%3D%22openTabs%22%0A%09%09@closeTabs%3D%22closeTabs%22%20@refreshTabs%3D%22refreshTabs%22%20%3Apass-event-up%3D%22false%22%3E%0A%09%09%3Ctemplate%20v-slot%3Alogo%3D%22e%22%3E%0A%09%09%09%3Cdiv%20class%3D%22logo%20f-c%20a-i-c%20b-i2%22%20style%3D%22height%3A%2060px%3B%22%3E%0A%09%09%09%09%3Cimg%20class%3D%22w-40%20h-40%20b-t%20m4%22%20%3Asrc%3D%22leftHeadInfo.image%22%0A%09%09%09%09%09%3Atitle%3D%22%60%24%7BleftHeadInfo.label%7D%20%5Cr%5Cn%20%24%7BleftHeadInfo.text%7D%60%22%3E%3C/img%3E%0A%09%09%09%09%3Cdiv%20v-if%3D%22e.item.collapse%22%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22fs14%20c-f%20fs-w-b%20c-f%22%20style%3D%22text-shadow%3A%201px%201px%20%23f3f3f373%3Bcolor%3A%20%23fefefe%3B%22%3E%0A%09%09%09%09%09%09%7B%7BleftHeadInfo.label%7D%7D%0A%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22fs%20f-s%20a-i-c%20c-f%20m-t2%22%3E%7B%7BleftHeadInfo.text%7D%7D%3C/div%3E%0A%09%09%09%09%3C/div%3E%0A%09%09%09%3C/div%3E%0A%09%09%3C/template%3E%0A%09%3C/ld-frame%3E%0A%3C/template%3E%0A%0A%3Cscript%3E%0A%09import%20layout%20from%20%27./pages/layout.js%27%3B%0A%09export%20default%20%7B%0A%09%09name%3A%20%27home%27%2C%0A%09%09data%28%29%20%7B%0A%09%09%09return%20%7B%0A%09%09%09%09leftHeadInfo%3A%20%7B%0A%09%09%09%09%09image%3A%20%27http%3A/xxx/logo.png%27%2C%0A%09%09%09%09%09label%3A%20%27%u5E7C%u80B2%u5B9D%u7BA1%u7406%u7CFB%u7EDF%27%2C%0A%09%09%09%09%09text%3A%20%27%u8212%u5FC3%u5468%u5230%u7684%u670D%u52A1%27%0A%09%09%09%09%7D%2C%0A%09%09%09%09menuTree%3A%20layout.menuTree%2C%0A%09%09%09%7D%0A%09%09%7D%2C%0A%09%09beforeCreate%28%29%20%7B%0A%0A%09%09%09//%20%u5F00%u53D1%u9636%u6BB5%u8BBE%u7F6E%u6210%20mockjs%u6A21%u5F0F%2C%u5982%u679C%u4E3A%u540E%u7AEF%u6362%u8FDB%uFF0C%u5219%u8BBE%u4E3Afalse%u6216%u8005%u6CE8%u91CA%uFF0C%u5E76%u8BBE%u7F6E%u4E0B%u65B9%u7684%u8BF7%u6C42%u5730%u5740%0A%09%09%09this.%24ld.requestSetting.config.isMock%20%3D%20true%3B%0A%09%09%09%0A%09%09%09//%u8BF7%u6C42%u5730%u5740%uFF0C%u5728this.%24ld.requestSetting.config.isMock%20%3D%20false%3B%u65F6%u751F%u6548%0A%09%09%09this.%24ld.requestSetting.serverPath.set%28%27http%3A//localhost%3A18085/xxx/%27%29%3B%0A%0A%09%09%09//%u914D%u7F6E%u5168%u5C40%u53C2%u6570%0A%09%09%09this.%24ld.component.loadingPage%20%3D%20%7B%0A%09%09%09%09loadingType%3A%20%27line-scale%27%0A%09%09%09%7D%0A%09%09%09this.%24ld.requestSetting.init%20%3D%20%28axios%29%20%3D%3E%20%7B%0A%09%09%09%09axios.defaults.withCredentials%20%3D%20true%3B%0A%09%09%09%09return%20axios%3B%0A%09%09%09%7D%0A%0A%09%09%09this.%24ld.requestSetting.config.timeout%20%3D%2010000%3B%0A%09%09%09let%20that%20%3D%20this%3B%0A%09%09%09//%u91CD%u5199%u8BF7%u6C42%u62E6%u622A%u5668%0A%09%09%09this.%24ld.requestSetting.interceptor%20%3D%20%7B%0A%09%09%09%09/**%0A%09%09%09%09%20*%20%u8BF7%u6C42%u524D%u62E6%u622A%0A%09%09%09%09%20*/%0A%09%09%09%09before%3A%20%28event%29%20%3D%3E%20%7B%0A%09%09%09%09%09//%u83B7%u53D6%u7528%u6237%u4FE1%u606F%uFF0C%u5224%u65AD%u7528%u6237%u662F%u5426%u767B%u9646%0A%09%09%09%09%09//%20let%20user%20%3D%20that.%24ld.util.cookie.get%28%27user%27%29%20%7C%7C%20null%3B%0A%09%09%09%09%09//%20if%20%28%21user%29%20%7B%0A%09%09%09%09%09//%20%09window.location.href%20%3D%20%22%23login%22%3B%0A%09%09%09%09%09//%20%09return%3B%0A%09%09%09%09%09//%20%7D%0A%09%09%09%09%09if%20%28%21this.loginCheck%28%29%29%20%7B%0A%09%09%09%09%09%09return%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%09/**%0A%09%09%09%09%09%20*%20%u8FD9%u91CC%u4F7F%u7528%20Promise.resolve%20%u8FD4%u56DE%u7ED3%u679C%uFF0C%u7ED3%u679C%u4E3A%20true%u6216false%0A%09%09%09%09%09%20*%20%u5982%uFF1A%20Promise.resolve%28true%29%3B%20%20//%u7EE7%u7EED%u6267%u884C%u8BF7%u6C42%u65B9%u6CD5%0A%09%09%09%09%09%20*%20%20%20%20%20%20Promise.resolve%28false%29%3B%20//%u4E0D%u5728%u6267%u884C%u8BF7%u6C42%u65B9%u6CD5%0A%09%09%09%09%09%20*/%0A%09%09%09%09%09if%20%28%5B%27get%27%2C%20%27post%27%5D.includes%28event.options.method.toLocaleLowerCase%28%29%29%29%20%7B%0A%09%09%09%09%09%09return%20true%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%09let%20msg%20%3D%20event.options.method.toLocaleLowerCase%28%29%20%3D%3D%20%27delete%27%20%3F%20%27%u786E%u5B9A%u5220%u9664%u6570%u636E%u5417%uFF0C%u5220%u9664%u540E%u4E0D%u53EF%u6062%u590D%27%20%3A%20%27%u786E%u5B9A%u4FDD%u5B58%u6570%u636E%u5417%27%3B%0A%09%09%09%09%09return%20this.%24confirm%28msg%2C%20%27%u63D0%u793A%27%2C%20%7B%0A%09%09%09%09%09%09confirmButtonText%3A%20%27%u786E%u5B9A%27%2C%0A%09%09%09%09%09%09cancelButtonText%3A%20%27%u53D6%u6D88%27%2C%0A%09%09%09%09%09%09type%3A%20event.options.method.toLocaleLowerCase%28%29%20%3D%3D%20%27delete%27%20%3F%20%27danger%27%20%3A%20%27warning%27%0A%09%09%09%09%09%7D%29.then%28%28%29%20%3D%3E%20%7B%0A%09%09%09%09%09%09//%u4F7F%u7528%20true%20%u548Cfalse%20%2C%u63A7%u5236%u662F%u5426%u7EE7%u7EED%u6267%u884C%u8BF7%u6C42%u65B9%u6CD5%0A%09%09%09%09%09%09return%20Promise.resolve%28true%29%3B%0A%09%09%09%09%09%7D%29.catch%28%28%29%20%3D%3E%20%7B%0A%09%09%09%09%09%09//%u4F7F%u7528%20true%20%u548Cfalse%20%2C%u63A7%u5236%u662F%u5426%u7EE7%u7EED%u6267%u884C%u8BF7%u6C42%u65B9%u6CD5%0A%09%09%09%09%09%09return%20Promise.resolve%28false%29%3B%0A%09%09%09%09%09%7D%29%3B%0A%09%09%09%09%7D%2C%0A%09%09%09%09/**%0A%09%09%09%09%20*%20%u8BF7%u6C42%u540E%u62E6%u622A%u88C5%u9970%0A%09%09%09%09%20*/%0A%09%09%09%09after%3A%20%28event%29%20%3D%3E%20%7B%0A%09%09%09%09%09if%20%28event.data.msg%20%3D%3D%20%27noLogin%27%29%20%7B%0A%09%09%09%09%09%09window.location.href%20%3D%20%22%23login%22%3B%0A%09%09%09%09%09%09window.location.reload%28%29%3B%0A%09%09%09%09%09%09return%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%09/**%0A%09%09%09%09%09%20*%20%u8FD9%u91CC%u4F7F%u7528%20Promise.resolve%20%u8FD4%u56DE%u7ED3%u679C%uFF0C%u7ED3%u679C%u4E3A%u88C5%u9970%u540E%u7684%u6570%u636E%0A%09%09%09%09%09%20*%20%u5982%uFF1A%20Promise.resolve%28event%29%3B%20%20//%u4E3A%u7A0B%u5E8F%u8FD4%u56DE%u6700%u7EC8%u88C5%u9970%u540E%u7684%u6570%u636E%0A%09%09%09%09%09%20*/%0A%09%09%09%09%09return%20Promise.resolve%28event.data%29%3B%0A%09%09%09%09%7D%2C%0A%09%09%09%09timeout%3A%20%28error%29%20%3D%3E%20%7B%0A%09%09%09%09%09this.%24message.error%28%22%u670D%u52A1%u5668%u5FD9%u788C%uFF0C%u8BF7%u7A0D%u540E%u518D%u8BD5%uFF01%22%29%0A%09%09%09%09%7D%0A%09%09%09%7D%0A%09%09%7D%2C%0A%09%09methods%3A%20%7B%0A%09%09%09loginCheck%28%29%20%7B%0A%09%09%09%09let%20user%20%3D%20this.%24ld.util.cookie.get%28%27user%27%29%20%7C%7C%20null%3B%0A%09%09%09%09if%20%28%21user%29%20%7B%0A%09%09%09%09%09window.location.href%20%3D%20%22%23login%22%3B%0A%09%09%09%09%09return%20false%3B%0A%09%09%09%09%7D%0A%09%09%09%09return%20true%3B%0A%09%09%09%7D%2C%0A%09%09%09/**%0A%09%09%09%20*%20%u6253%u5F00tab%0A%09%09%09%20*%20@param%20%7BObject%7D%20e%0A%09%09%09%20*/%0A%09%09%09openTabs%28e%29%20%7B%0A%09%09%09%09this.%24refs.frame.menuClick%28e%29%3B%0A%09%09%09%7D%2C%0A%09%09%09/**%0A%09%09%09%20*%20%u5173%u95EDtab%0A%09%09%09%20*%20@param%20%7BObject%7D%20e%0A%09%09%09%20*/%0A%09%09%09closeTabs%28item%29%20%7B%0A%09%09%09%09if%20%28typeof%20item%5B%27showConfirm%27%5D%20%3D%3D%3D%20%27boolean%27%20%26%26%20item%5B%27showConfirm%27%5D%20%3D%3D%20false%29%20%7B%09%0A%09%09%09%09%09this.%24refs.frame.closeTabPageByProp%28item%5B%27prop%27%5D%29%3B%0A%09%09%09%09%09return%3B%0A%09%09%09%09%7D%0A%09%09%09%09this.%24confirm%28%60%u786E%u5B9A%u5173%u95ED%u3010%24%7Bitem%5B%27label%27%5D%7D%u3011%u7A97%u53E3%u5417%uFF1F%60%2C%20%27%u63D0%u793A%27%2C%20%7B%0A%09%09%09%09%09confirmButtonText%3A%20%27%u786E%u5B9A%27%2C%0A%09%09%09%09%09cancelButtonText%3A%20%27%u53D6%u6D88%27%2C%0A%09%09%09%09%09type%3A%20%27warning%27%0A%09%09%09%09%7D%29.then%28%28%29%20%3D%3E%20%7B%0A%09%09%09%09%09this.%24refs.frame.closeTabPageByProp%28item%5B%27prop%27%5D%29%3B%0A%09%09%09%09%7D%29.catch%28%28%29%20%3D%3E%20%7B%7D%29%3B%0A%09%09%09%09return%3B%0A%09%09%09%7D%2C%0A%09%09%09/**%0A%09%09%09%20*%20%u5237%u65B0%u9875%u9762%0A%09%09%09%20*%20@param%20%7BObject%7D%20item%0A%09%09%09%20*/%0A%09%09%09refreshTabs%28item%29%20%7B%0A%09%09%09%09this.%24refs.frame.refreshTabByProp%28item%5B%27prop%27%5D%29%3B%0A%09%09%09%7D%0A%0A%0A%09%09%7D%2C%0A%09%09created%28%29%20%7B%0A%09%09%09this.loginCheck%28%29%3B%0A%09%09%7D%0A%09%7D%0A%3C/script%3E%0A%0A%3Cstyle%20lang%3D%22scss%22%3E%0A%09.doc%20%7B%0A%09%09box-sizing%3A%20border-box%3B%0A%09%09padding%3A%2020px%3B%0A%09%09background%3A%20white%3B%0A%0A%09%09h1%20%7B%0A%09%09%09color%3A%20%231f2f3d%3B%0A%09%09%09font-size%3A%2028px%3B%0A%09%09%09font-weight%3A%20400%3B%0A%09%09%09line-height%3A%2040px%3B%0A%09%09%7D%0A%0A%09%09h2%20%7B%0A%09%09%09font-weight%3A%20400%3B%0A%09%09%09font-size%3A%2022px%3B%0A%09%09%09color%3A%20%231f2f3d%3B%0A%09%09%09line-height%3A%2030px%3B%0A%09%09%7D%0A%0A%09%09h3%20%7B%0A%09%09%09font-weight%3A%20400%3B%0A%09%09%09font-size%3A%2020px%3B%0A%09%09%09color%3A%20%231f2f3d%3B%0A%09%09%7D%0A%0A%09%09p%20%7B%0A%09%09%09font-size%3A%2014px%3B%0A%09%09%09color%3A%20%235e6d82%3B%0A%09%09%09line-height%3A%201.5em%3B%0A%09%09%7D%0A%0A%09%09.code%5Blang%3Dshell%5D%20%7B%0A%09%09%09background%3A%20rgba%28255%2C%20253%2C%20248%2C%201.0%29%3B%0A%09%09%09padding%3A%2010px%3B%0A%09%09%09margin-top%3A%205px%3B%0A%09%09%09line-height%3A%2040px%3B%0A%09%09%09border%3A%201px%20solid%20%23ececec%3B%0A%09%09%7D%0A%0A%09%09.el-card__body%20%7B%0A%09%09%09padding%3A%200%20%21important%3B%0A%09%09%09height%3A%20100%25%3B%0A%09%09%7D%0A%09%7D%0A%0A%09.m-r10.box-shadow.over-a-y.h.p10.box-b%20%7B%0A%09%09max-width%3A%20300px%20%21important%3B%0A%09%09min-width%3A%20300px%20%21important%3B%0A%09%7D%0A%3C/style%3E%0A"),
        },
        {
          h2:'13.在`work-list.vue`中添加如下代码',
          vue:`
          <template>
            <div class="box-b p10 h ld-doc">
              <el-card class="doc w h">
                工作台
              </el-card>
            </div>
          </template>`.replace(/^       /gm, ''),
        },
        {
          h1:'四.开始业务功能准备'
        },
        {
          h2:'14.创建数据展示模板`normal.vue`，代码如下',
          vue:unescape("%0A%3Ctemplate%3E%0A%09%3C%21--%20%u4F7F%u7528%u4E00%u4E2A%u9875%u9762%uFF0C%u5B8C%u6210%u7CFB%u7EDF%u7ECF%u5178%u5E03%u5C40%uFF0C%u5E38%u7528%u7684%u589E%u5220%u6539%u67E5%u7B49%u3002%20--%3E%0A%09%3C%21--%20%u7CFB%u7EDF%u7EDF%u4E00%u6A21%u677F%20--%3E%0A%09%3Cdiv%20class%3D%22box-b%20p10%20h%20ld-doc%22%3E%0A%09%09%3Cel-card%20class%3D%22doc%20w%20h%22%3E%0A%09%09%09%3C%21--%20%u9875%u9762%u5185%u5BB9%20--%3E%0A%0A%09%09%09%3C%21--%201.%u7ECF%u5178%u5E03%u5C40%uFF0C%u67E5%u8BE2%u6761%u4EF6%09%20--%3E%0A%09%09%09%3Cld-forms%20v-if%3D%22whereLayout%26%26whereLayout.length%3E0%22%20%3Aform%3D%22forms%22%20%3Alayout%3D%22whereLayout%22%20%3Ais-row%3D%22true%22%20class%3D%22m-b10%22%3E%0A%09%09%09%09%0A%09%09%09%09%3Ctemplate%20v-slot%3Abuttons%3D%22e%22%3E%0A%09%09%09%09%09%3Cel-button%20class%3D%22m-l10%22%20v-for%3D%22%28item%2Ci%29%20in%20whereButton%22%20%3Akey%3D%22i%22%20%3Atype%3D%22item%5B%27type%27%5D%7C%7C%27%27%22%0A%09%09%09%09%09%09%3Aicon%3D%22item%5B%27icon%27%5D%7C%7C%27%27%22%20@click%3D%22clickMethod%28item%5B%27methodName%27%5D%2Cnull%29%22%3E%0A%09%09%09%09%09%09%7B%7Bitem%5B%27label%27%5D%7D%7D%0A%09%09%09%09%09%3C/el-button%3E%0A%09%09%09%09%3C/template%3E%0A%0A%09%09%09%3C/ld-forms%3E%0A%09%09%09%3C%21--%202.%u7ECF%u5178%u5E03%u5C40%uFF0C%u67E5%u8BE2%u6570%u636Etable%09%20--%3E%0A%09%09%09%3Cld-table%20v-if%3D%22tableLayout%26%26tableLayout.length%3E0%22%20%20%3Aref%3D%22%60%24%7Bquery%5B%27prop%27%5D%7D_table%60%22%20%3Aauto-load-data-api%3D%22autoLoadDataApi%22%20%3Alayout%3D%22tableLayout%22%0A%09%09%09%09%3Ashow-page-helper%3D%22showPageHelper%22%20%3Ael-pagination%3D%22elPagination%22%20style%3D%22height%3A%20calc%28100%25%20-%2030px%29%3B%22%3E%0A%0A%09%09%09%09%3Ctemplate%20v-slot%3AtoolsHeader%3D%22e%22%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22w%20t-c%22%3E%u64CD%u4F5C%3C/div%3E%0A%09%09%09%09%3C/template%3E%0A%09%09%09%09%3Ctemplate%20v-slot%3Atools%3D%22e%22%3E%0A%09%09%09%09%09%3Cdiv%20class%3D%22f-c%22%3E%0A%09%09%09%09%09%09%3Cel-button%20type%3D%22text%22%20class%3D%22m-l10%22%20v-for%3D%22%28item%2Ci%29%20in%20tableTools%22%20%3Akey%3D%22i%22%0A%09%09%09%09%09%09%09%3Aclass%3D%22textButtonClass%5Bitem%5B%27type%27%5D%5D%22%20%3Aicon%3D%22item%5B%27icon%27%5D%7C%7C%27%27%22%0A%09%09%09%09%09%09%09@click%3D%22clickMethod%28item%5B%27methodName%27%5D%2Ce%5B%27item%27%5D%29%22%3E%0A%09%09%09%09%09%09%09%7B%7Bitem%5B%27label%27%5D%7D%7D%0A%09%09%09%09%09%09%3C/el-button%3E%0A%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%3C/template%3E%0A%0A%09%09%09%3C/ld-table%3E%0A%09%09%09%0A%09%09%09%3Ctemplate%20v-if%3D%22%28%21tableLayout%7C%7CtableLayout.length%3C%3D0%29%26%26%28%21whereLayout%7C%7CwhereLayout.length%3C%3D0%29%22%3E%0A%09%09%09%09%3Cdiv%20class%3D%22c8%20w%20h%20f-c%20a-i-c%22%3E%0A%09%09%09%09%09%u8FD8%u6CA1%u6709%u914D%u7F6E%u76F8%u5173%u4FE1%u606F%uFF0C%u8BF7%u8BBE%u7F6E%uFF01%0A%09%09%09%09%3C/div%3E%0A%09%09%09%3C/template%3E%0A%0A%09%09%3C/el-card%3E%0A%09%3C/div%3E%0A%3C/template%3E%0A%0A%3Cscript%3E%0A%09export%20default%20%7B%0A%09%09name%3A%20%27teacher%27%2C%0A%09%09props%3A%20%7B%0A%09%09%09query%3A%20%7B%0A%09%09%09%09type%3A%20Object%2C%0A%09%09%09%09default%3A%20%28%29%20%3D%3E%20%7B%0A%09%09%09%09%09return%20%7B%7D%0A%09%09%09%09%7D%0A%09%09%09%7D%0A%09%09%7D%2C%0A%09%09data%28%29%20%7B%0A%09%09%09let%20_dres%20%3D%20require%28%60@/pages/window/layout/default.js%60%29.default.table%3B%0A%09%09%09let%20_fres%20%3D%20null%3B%0A%09%09%09try%20%7B%0A%09%09%09%09_fres%20%3D%20require%28%60@/pages/window/layout/%24%7Bthis.query%5B%27prop%27%5D%7D.js%60%29.default.table%3B%0A%09%09%09%7D%20catch%20%28e%29%20%7B%0A%09%09%09%09console.log%28%22%u52A0%u8F7D%u8D44%u6E90%u51FA%u9519%uFF1A%22%2C%60@/pages/window/layout/%24%7Bthis.query%5B%27prop%27%5D%7D.js%60%29%3B%0A%09%09%09%09_fres%3D%20_dres%3B%0A%09%09%09%7D%0A%09%09%09return%20%7B%0A%09%09%09%09/**%0A%09%09%09%09%20*%20%u83B7%u53D6%u5E03%u5C40%u4FE1%u606F%0A%09%09%09%09%20*/%0A%09%09%09%09forms%3A%20_fres.forms%20%7C%7C%20_dres.forms%2C%0A%09%09%09%09whereLayout%3A%20_fres.whereLayout%20%7C%7C%20_dres.whereLayout%2C%0A%09%09%09%09tableLayout%3A%20_fres.tableLayout%20%7C%7C%20_dres.tableLayout%2C%0A%09%09%09%09autoLoadDataApi%3A%20_fres.autoLoadDataApi%20%7C%7C%20_dres.autoLoadDataApi%2C%0A%09%09%09%09showPageHelper%3A%20_fres.showPageHelper%20%7C%7C%20_dres.showPageHelper%20%7C%7C%20true%2C%0A%09%09%09%09elPagination%3A%20_fres.elPagination%20%7C%7C%20_dres.elPagination%2C%0A%09%09%09%09whereButton%3A%20_fres.whereButton%20%7C%7C%20_dres.whereButton%2C%0A%09%09%09%09tableTools%3A%20_fres.tableTools%20%7C%7C%20_dres.tableTools%2C%0A%09%09%09%09deleteApi%3A%20_fres.deleteApi%20%7C%7C%20_dres.deleteApi%2C%0A%0A%0A%09%09%09%09textButtonClass%3A%20%7B%0A%09%09%09%09%09%27danger%27%3A%20%27c-d%27%2C%0A%09%09%09%09%09%27primary%27%3A%20%27c-p%27%2C%0A%09%09%09%09%09%27warning%27%3A%20%27c-w%27%2C%0A%09%09%09%09%09%27info%27%3A%20%27c-i%27%2C%0A%09%09%09%09%09%27success%27%3A%20%27c-s%27%2C%0A%09%09%09%09%7D%0A%09%09%09%09/**%0A%09%09%09%09%20*%20%0A%09%09%09%09%20*/%0A%0A%09%09%09%7D%3B%0A%09%09%7D%2C%0A%09%09methods%3A%20%7B%0A%09%09%09clickMethod%28type%2C%20e%29%20%7B%0A%09%09%09%09switch%20%28type%29%20%7B%0A%09%09%09%09%09case%20%27search%27%3A%0A%09%09%09%09%09%09//%u5C06%u6240%u641C%u6846%u7684%u6570%u636E%u63D2%u5165%u5230%u6761%u4EF6%u4E2D%0A%09%09%09%09%09%09this.autoLoadDataApi%5B%27remoteParam%27%5D%20%3D%20%7B%7D%3B%0A%09%09%09%09%09%09Object.keys%28this.forms%29.map%28key%20%3D%3E%20%7B%0A%09%09%09%09%09%09%09if%20%28this.forms%5Bkey%5D%29%20%7B%0A%09%09%09%09%09%09%09%09this.%24set%28this.autoLoadDataApi%5B%27remoteParam%27%5D%2C%20key%2C%20this.forms%5Bkey%5D%29%3B%0A%09%09%09%09%09%09%09%7D%0A%09%09%09%09%09%09%7D%29%3B%0A%09%09%09%09%09%09this.%24refs%5Bthis.query%5B%27prop%27%5D%20+%20%60_table%60%5D.getPageData%28%29%3B%0A%09%09%09%09%09%09break%3B%0A%0A%09%09%09%09%09case%20%27add%27%3A%0A%09%09%09%09%09%09this.openTabs%28%7B%0A%09%09%09%09%09%09%09page%3A%20%27normal-editor%27%2C%0A%09%09%09%09%09%09%09label%3A%20%60%24%7Bthis.query%5B%27label%27%5D%7D_%u65B0%u589E%60%2C%0A%09%09%09%09%09%09%09prop%3A%20%60%24%7Bthis.query%5B%27prop%27%5D%7D_add%60%2C%0A%09%09%09%09%09%09%09parentProp%3Athis.query%5B%27prop%27%5D%2C%0A%09%09%09%09%09%09%09parentLabel%3Athis.query%5B%27label%27%5D%2C%0A%09%09%09%09%09%09%09icon%3A%20%27el-icon-plus%27%2C%0A%09%09%09%09%09%09%09editorId%3A%20%27%27%2C%0A%09%09%09%09%09%09%7D%29%3B%0A%09%09%09%09%09%09break%3B%0A%0A%09%09%09%09%09case%20%27editor%27%3A%0A%09%09%09%09%09%09this.openTabs%28%7B%0A%09%09%09%09%09%09%09page%3A%20%27normal-editor%27%2C%0A%09%09%09%09%09%09%09label%3A%20%60%24%7Bthis.query%5B%27label%27%5D%7D_%u7F16%u8F91%60%2C%0A%09%09%09%09%09%09%09prop%3A%20%60%24%7Bthis.query%5B%27prop%27%5D%7D_editor_%24%7B%20e%5B%27id%27%5D%7D%60%2C%0A%09%09%09%09%09%09%09parentProp%3Athis.query%5B%27prop%27%5D%2C%0A%09%09%09%09%09%09%09parentLabel%3Athis.query%5B%27label%27%5D%2C%0A%09%09%09%09%09%09%09icon%3A%20%27el-icon-edit%27%2C%0A%09%09%09%09%09%09%09editorId%3A%20e%5B%27id%27%5D%2C%0A%09%09%09%09%09%09%7D%29%3B%0A%09%09%09%09%09%09break%3B%0A%09%09%09%09%09case%20%27delete%27%3A%0A%09%09%09%09%09%09this.%24confirm%28%60%u786E%u5B9A%u5220%u9664%u8BE5%u6570%u636E%u5417%uFF0C%u5220%u9664%u540E%u4E0D%u80FD%u6062%u590D%uFF1F%60%2C%20%27%u63D0%u793A%27%2C%20%7B%0A%09%09%09%09%09%09%09confirmButtonText%3A%20%27%u786E%u5B9A%27%2C%0A%09%09%09%09%09%09%09cancelButtonText%3A%20%27%u53D6%u6D88%27%2C%0A%09%09%09%09%09%09%09type%3A%20%27warning%27%0A%09%09%09%09%09%09%7D%29.then%28%28%29%20%3D%3E%20%7B%0A%09%09%09%09%09%09%09this.deleteByItem%28e%29%3B%0A%09%09%09%09%09%09%7D%29.catch%28%28%29%20%3D%3E%20%7B%7D%29%3B%0A%09%09%09%09%09%09break%3B%0A%09%09%09%09%09default%3A%0A%09%09%09%09%09%09break%3B%0A%09%09%09%09%7D%0A%09%09%09%7D%2C%0A%09%09%09%0A%09%09%09deleteByItem%28item%29%7B%0A%09%09%09%09let%20param%3Dthis.deleteApi%5B%27remoteParam%27%5D%7C%7C%7B%7D%3B%0A%09%09%09%09param%5B%27id%27%5D%3Ditem%5B%27id%27%5D%3B%0A%09%09%09%09this.%24ld.request%28this.deleteApi%5B%27remotePath%27%5D%2Cthis.deleteApi%5B%27remoteMethodType%27%5D%2Cparam%29.then%28res%3D%3E%7B%0A%09%09%09%09%09%20res%3Dres%5B%27data%27%5D%7C%7Cres%3B%0A%09%09%09%09%09if%28res.code%3D%3D0%29%7B%0A%09%09%09%09%09%09this.%24message.success%28%22%u5220%u9664%u6210%u529F%uFF01%22%29%3B%0A%09%09%09%09%09%09this.refreshTabs%28%29%3B%0A%09%09%09%09%09%09return%20%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%09this.%24message.error%28res.msg%7C%7C%22%u5220%u9664%u5931%u8D25%uFF0C%u8BF7%u7A0D%u540E%u518D%u8BD5%uFF01%22%29%3B%0A%09%09%09%09%7D%29%3B%0A%09%09%09%7D%2C%0A%09%09%09refreshTabs%28%29%20%7B%0A%09%09%09%09this.%24emit%28%22events%22%2C%20%7B%0A%09%09%09%09%09eventMethod%3A%20%27refreshTabs%27%2C%0A%09%09%09%09%09eventParam%3A%20%7B%0A%09%09%09%09%09%09prop%3A%20this.query%5B%27prop%27%5D%0A%09%09%09%09%09%7D%0A%09%09%09%09%7D%29%3B%0A%09%09%09%7D%2C%0A%09%09%09openTabs%28e%29%20%7B%0A%09%09%09%09this.%24emit%28%27events%27%2C%20%7B%0A%09%09%09%09%09eventMethod%3A%20%27openTabs%27%2C%0A%09%09%09%09%09eventParam%3A%20e%0A%09%09%09%09%7D%29%3B%0A%09%09%09%7D%2C%0A%09%09%09closeTabs%28e%29%20%7B%0A%09%09%09%09this.%24emit%28%22events%22%2C%20%7B%0A%09%09%09%09%09eventMethod%3A%20%27closeTabs%27%2C%0A%09%09%09%09%09eventParam%3A%20this.query%0A%09%09%09%09%7D%29%3B%0A%09%09%09%7D%0A%09%09%7D%2C%0A%09%09created%28%29%20%7B%7D%0A%09%7D%0A%3C/script%3E%0A%0A%3Cstyle%3E%0A%3C/style%3E%0A")
        },
        {
          h2:'15.创建数据编辑模板`normal-editor.vue`，代码如下',
          vue:unescape("%0A%3Ctemplate%3E%0A%09%3Cdiv%20class%3D%22box-b%20p10%20h%20ld-doc%22%3E%0A%09%09%3Cel-card%20class%3D%22doc%20w%20h%22%3E%0A%09%09%09%3Cdiv%20class%3D%22m10%20c8%20fs22%20w%22%3E%0A%09%09%09%09%3Cspan%20class%3D%22el-icon-arrow-left%20fs-w-b%22%3E%3C/span%3E%20%0A%09%09%09%09%3Cspan%20class%3D%22c-p%20cur-p%22%20@click%3D%22clickMethod%28%27cancel%27%2Cnull%29%22%3E%7B%7Bquery%5B%27parentLabel%27%5D%7D%7D%3C/span%3E%0A%09%09%09%09%3Cspan%3E%7C%3C/span%3E%0A%09%09%09%09%3Cspan%3E%7B%7B%21query%5B%27editorId%27%5D%3F%27%u6DFB%u52A0%27%3A%27%u7F16%u8F91%27%7D%7D%3C/span%3E%0A%09%09%09%3C/div%3E%0A%09%09%09%3Cdiv%20class%3D%22w%20f-c%20over-a-y%22%20style%3D%22height%3A%20calc%28100%25%20-%20100px%29%3B%22%3E%0A%09%09%09%09%3C%21--%201.%u7ECF%u5178%u5E03%u5C40%uFF0C%u67E5%u8BE2%u6761%u4EF6%09%20--%3E%0A%09%09%09%09%3Cld-forms%20%3Aref%3D%22%60%24%7Bquery%5B%27prop%27%5D%7D_form%60%22%20%3Aauto-save-api%3D%22autoSaveApi%22%20%3Aeditor-forms-init-api%3D%22editorFormsInitApis%22%0A%09%09%09%09%09v-if%3D%22editorLayout%26%26editorLayout.length%3E0%22%20%3Aform%3D%22forms%22%20%3Alayout%3D%22editorLayout%22%20%3Acols%3D%22cols%22%0A%09%09%09%09%09class%3D%22m-b10%22%20%3Astyle%3D%22%7B%27width%27%3A%60%24%7BmaxWidth%7Dpx%60%7D%22%3E%0A%0A%09%09%09%09%09%3Ctemplate%20v-slot%3Abuttons%3D%22e%22%3E%0A%09%09%09%09%09%09%3Cdiv%20class%3D%22f-b%20w%20a-i-c%20m-t10%22%3E%0A%09%09%09%09%09%09%09%3Cel-checkbox%20v-model%3D%22close%22%3E%u4FDD%u5B58%u540E%u5173%u95ED%u8BE5%u9875%u9762%3C/el-checkbox%3E%0A%09%09%09%09%09%09%09%3Cdiv%3E%0A%09%09%09%09%09%09%09%09%3Cel-button%20class%3D%22m-l10%22%20v-for%3D%22%28item%2Ci%29%20in%20buttons%22%20%3Akey%3D%22i%22%20%3Atype%3D%22item%5B%27type%27%5D%7C%7C%27%27%22%0A%09%09%09%09%09%09%09%09%09%3Aicon%3D%22item%5B%27icon%27%5D%7C%7C%27%27%22%20@click%3D%22clickMethod%28item%5B%27methodName%27%5D%2Cnull%29%22%3E%0A%09%09%09%09%09%09%09%09%09%7B%7Bitem%5B%27label%27%5D%7D%7D%0A%09%09%09%09%09%09%09%09%3C/el-button%3E%0A%09%09%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%09%09%3C/div%3E%0A%09%09%09%09%09%3C/template%3E%0A%0A%09%09%09%09%3C/ld-forms%3E%0A%09%09%09%3C/div%3E%0A%09%09%3C/el-card%3E%0A%09%3C/div%3E%0A%3C/template%3E%0A%0A%3Cscript%3E%0A%09export%20default%20%7B%0A%09%09name%3A%20%27editor%27%2C%0A%09%09props%3A%20%7B%0A%09%09%09query%3A%20%7B%0A%09%09%09%09type%3A%20Object%2C%0A%09%09%09%09default%3A%20%28%29%20%3D%3E%20%7B%0A%09%09%09%09%09return%20%7B%7D%3B%0A%09%09%09%09%7D%0A%09%09%09%7D%0A%09%09%7D%2C%0A%09%09data%28%29%20%7B%0A%09%09%09let%20_dres%20%3D%20require%28%60@/pages/window/layout/default.js%60%29.default.editor%3B%0A%09%09%09let%20_fres%20%3D%20null%3B%0A%09%09%09try%20%7B%0A%09%09%09%09_fres%20%3D%20require%28%60@/pages/window/layout/%24%7Bthis.query%5B%27parentProp%27%5D%7D.js%60%29.default.editor%3B%0A%09%09%09%7D%20catch%20%28e%29%20%7B%0A%09%09%09%09_fres%20%3D%20_dres%3B%0A%09%09%09%7D%0A%09%09%09const%20cols%20%3D%20_fres.cols%20%7C%7C%20_dres.cols%20%7C%7C%201%3B%0A%09%09%09const%20autoSaveApi%20%3D%20_fres.autoSaveApi%20%7C%7C%20_dres.autoSaveApi%3B%0A%09%09%09const%20editorFormsInitApis%20%3D%20_fres.editorFormsInitApis%20%7C%7C%20_dres.editorFormsInitApis%3B%0A%09%09%09if%20%28this.query%5B%27editorId%27%5D%29%20%7B%0A%09%09%09%09autoSaveApi%5B%27remoteParam%27%5D%20%3D%20%7B%7D%3B%0A%09%09%09%09autoSaveApi%5B%27remoteParam%27%5D%5B%27id%27%5D%20%3D%20this.query%5B%27editorId%27%5D%3B%0A%09%09%09%09editorFormsInitApis%5B%27remoteParam%27%5D%20%3D%20%7B%7D%3B%0A%09%09%09%09editorFormsInitApis%5B%27remoteParam%27%5D%5B%27id%27%5D%20%3D%20this.query%5B%27editorId%27%5D%3B%0A%09%09%09%7D%0A%0A%09%09%09return%20%7B%0A%09%09%09%09close%3A%20_fres.saveClose%20%7C%7C%20_dres.saveClose%20%7C%7C%20true%2C%0A%09%09%09%09forms%3A%20%7B%7D%2C%0A%09%09%09%09editorLayout%3A%20_fres.layout%20%7C%7C%20_dres.layout%2C%0A%09%09%09%09buttons%3A%20_fres.button%20%7C%7C%20_dres.button%2C%0A%09%09%09%09cols%3A%20cols%2C%0A%09%09%09%09maxWidth%3A%20%28_fres.oneColsWidth%20%7C%7C%20_dres.oneColsWidth%29%5Bcols%20%3E%202%20%3F%202%20%3A%20cols%5D%2C%0A%09%09%09%09autoSaveApi%3A%20autoSaveApi%2C%0A%09%09%09%09editorFormsInitApis%3AeditorFormsInitApis%09%0A%09%09%09%7D%3B%0A%09%09%7D%2C%0A%09%09methods%3A%20%7B%0A%09%09%09saveData%28%29%20%7B%0A%09%09%09%09this.%24refs%5B%60%24%7Bthis.query%5B%27prop%27%5D%7D_form%60%5D.formSave%28res%20%3D%3E%20%7B%0A%09%09%09%09%09if%20%28/%5E%3C%21DOCTYPE%20html%3E/.test%28res%29%29%20%7B%0A%09%09%09%09%09%09this.%24message.error%28%27%u672A%u77E5%u9519%u8BEF%uFF0C%u8BF7%u7A0D%u540E%u518D%u8BD5%uFF01%27%29%3B%0A%09%09%09%09%09%09return%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%09if%20%28res.code%20%3D%3D%200%29%20%7B%0A%09%09%09%09%09%09this.%24message.success%28%22%u4FDD%u5B58%u6210%u529F%uFF01%22%29%3B%0A%09%09%09%09%09%09if%20%28this.close%29%20%7B%0A%09%09%09%09%09%09%09//%u5173%u95ED%u5F53%u524D%u7A97%u53E3%uFF0C%u5E76%u4E14%u5237%u65B0%u7236%u7A97%u53E3%0A%09%09%09%09%09%09%09this.closeThisTab%28false%29%3B%0A%09%09%09%09%09%09%09//TODO%20%u5237%u65B0%0A%09%09%09%09%09%09%09this.refreshTabs%28%29%3B%0A%09%09%09%09%09%09%7D%0A%09%09%09%09%09%09return%3B%0A%09%09%09%09%09%7D%0A%09%09%09%09%09this.%24message.error%28res.msg%29%3B%0A%09%09%09%09%7D%2C%20checkError%20%3D%3E%20%7B%0A%0A%09%09%09%09%7D%29%3B%0A%09%09%09%7D%2C%0A%09%09%09resetData%28%29%20%7B%0A%09%09%09%09try%20%7B%0A%09%09%09%09%09this.forms%20%3D%20%7B%7D%3B%0A%09%09%09%09%09this.%24refs%5B%60%24%7Bthis.query%5B%27prop%27%5D%7D_form%60%5D.formReset%28%29%3B%0A%09%09%09%09%7D%20catch%20%28e%29%20%7B%0A%09%09%09%09%09//TODO%20handle%20the%20exception%0A%09%09%09%09%7D%0A%09%09%09%7D%2C%0A%09%09%09closeThisTab%28isShowConfirm%29%20%7B%0A%09%09%09%09this.query%5B%27showConfirm%27%5D%20%3D%20isShowConfirm%3B%0A%09%09%09%09this.%24emit%28%22events%22%2C%20%7B%0A%09%09%09%09%09eventMethod%3A%20%27closeTabs%27%2C%0A%09%09%09%09%09eventParam%3A%20this.query%0A%09%09%09%09%7D%29%3B%0A%09%09%09%7D%2C%0A%09%09%09refreshTabs%28%29%20%7B%0A%09%09%09%09this.%24emit%28%22events%22%2C%20%7B%0A%09%09%09%09%09eventMethod%3A%20%27refreshTabs%27%2C%0A%09%09%09%09%09eventParam%3A%20%7B%0A%09%09%09%09%09%09prop%3A%20this.query%5B%27parentProp%27%5D%0A%09%09%09%09%09%7D%0A%09%09%09%09%7D%29%3B%0A%09%09%09%7D%2C%0A%09%09%09clickMethod%28type%2C%20e%29%20%7B%0A%09%09%09%09switch%20%28type%29%20%7B%0A%09%09%09%09%09case%20%27save%27%3A%0A%09%09%09%09%09%09this.saveData%28%29%3B%0A%09%09%09%09%09%09break%3B%0A%09%09%09%09%09case%20%27reset%27%3A%0A%09%09%09%09%09%09this.resetData%28%29%3B%0A%09%09%09%09%09%09break%3B%0A%09%09%09%09%09case%20%27cancel%27%3A%0A%09%09%09%09%09%09this.closeThisTab%28true%29%3B%0A%09%09%09%09%09%09break%3B%0A%09%09%09%09%09default%3A%0A%09%09%09%09%09%09break%3B%0A%09%09%09%09%7D%0A%09%09%09%7D%0A%09%09%7D%2C%0A%09%09created%28%29%20%7B%0A%09%09%09if%28%21this.query%5B%27editorId%27%5D%29%7B%0A%09%09%09%09this.editorFormsInitApis%3D%7B%7D%2C%0A%09%09%09%09this.resetData%28%29%20%3B%0A%09%09%09%7D%0A%09%09%7D%0A%09%7D%0A%3C/script%3E%0A%0A%3Cstyle%3E%0A%3C/style%3E%0A%0A")
        },
        {
          h2:'16.配置默认布局配置`default.js`文件',
          tip_d:'布局配置文件在当前项目中起着至关重要的位置，TA决定了页面展示的数据和展示的形式',
          javascript:`
          //pages/window/layout/default.js文件
          const layout = {
            /**
             * 展示模板所用参数
             */
          	table: {
              //展示布局查询条件表单，可以设置查询条件默认值
          		forms: {},
              //查询条件布局
          		whereLayout: [],
              //显示表格布局
          		tableLayout: [],
              //是否显示分页
          		showPageHelper: true,
              //自动加载表格数据的 api接口
          		autoLoadDataApi: {
          			remotePath: '/test/getUserInfo',
          			remoteParam: {},
          			remoteMethodType: "get",
          			remoteTimeout: null,
          		},
              //设置可选择的分页条数
          		elPagination: {
          			pageSizes: [15, 20, 30, 40, 50, 80]
          		},
              //查询条件按钮
          		whereButton: [
                {label: '搜索',icon: 'el-icon-search',methodName: 'search',type: 'primary'},
          			{label: '新增',icon: 'el-icon-plus',methodName: 'add',type: 'danger'},
          		],
              //删除的api接口
          		deleteApi:{
          			remotePath: '/delete/byId',
          			remoteParam: {d:false},
          			remoteMethodType: "post",
          			remoteTimeout: null,
          		}
          	},
            /**
             * 编辑模板所用参数
             */
          	editor: {
          		/**
          		 * 编辑布局
          		 */
          		layout: [],
          		/**
          		 * 编辑按钮
          		 */
          		button: [
                {label: '保存',icon: 'el-icon-s-order',methodName: 'save',type: 'danger'},
          			{label: '重置',icon: 'el-icon-s-release',methodName: 'reset',type: 'warning'},
          			{label: '关闭',methodName: 'cancel'},
          		],
          		/**
          		 * 编辑布局列数
          		 */
          		cols: 1,
          		/**
          		 * 编辑页面列数的宽度
          		 */
          		oneColsWidth: {
          			1: 600,
          			2: 800,
          			3: 900,
          			4: 1200
          		},
          		/**
          		 * 是否保存后关闭该页面
          		 */
          		saveClose: true,
          		/**
          		 * 自动保存api
          		 */
          		autoSaveApi: {
          			//请求路径
          			remotePath: 'test/getUserById',
          			//请求参数
          			remoteParam: {
          				//id: 3 //形如id
          			},
          			//请求方法
          			remoteMethodType: "post",
          			//得到数据后对数据的预处理
          			// getDataAfter: (data) => {
          			// 	return data.data;
          			// }
          		},
              //在修改数据时，默认拉去修改数据的api接口
          		editorFormsInitApis: {
          			//请求路径
          			remotePath: '/teacher/getById',
          			//请求参数
          			remoteParam: {},
          			//请求方法
          			remoteMethodType: "get",
          			//得到数据后对数据的预处理
          			// getDataAfter: (data) => {
          			// 	return data.data;
          			// }
          		},
          	},
          }
          export default layout;
          `.replace(/^       /gm, ''),
        },
        {
          h1:'五.实现业务',
        },
        {
          h2:'17.学生管理',
          h3:'17.1.创建`student.js`布局文件',
          tip_d:"注意该文件路径为`pages/window/layout/student.js`<br/>文件内容是对default.js的重新和完善。",
          javascript:`
          import ld from 'layout-dynamic-ui'
          const layout= {
          	table:{
          		forms: {},
          		whereLayout: [
          			{prop:'names',label:'姓名',type:'text'},
          			{prop:'clzss',label:'班级',type:'select',
          				getOptions:{
          					remotePath: '/clzss/get', //请求方法
          					remoteMethodType: "get",//请求类型
          					remoteParam:{},//参数
          					label:'\${names}',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
          					value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
          				},
          			},
          		],
          		tableLayout: [
          			{prop:'names',label:'姓名'},
          			{prop:'sex',label:'性别',html: (val) => { return \`<div class="\${val==1?'c-d':'c-s'}">\${val==1?'男':'女'}</div>\`}},
          			{prop:'clzssId',label:'班级',
          			 replace:{
          				 remotePath: '/clzss/getById',
          				 remoteMethodType: "get",
          				 label:'names', //不支持 \${xx}模式
          				 value:'id' //不支持 \${xx}模式
          			 },
          			},
          			{prop:'birthday',label:'年龄',format: (val) => { return !val ? '' : ld.util.getYearDiff(new Date(),val)}},
          			{prop:'birthday',label:'出生日期',format: (val) => { return !val ? '未填写' : ld.util.getDate(0, new Date(val));}},
          			{prop:'bandCode',label:'绑定码',format: (val) => { return new Date().getFullYear()}},
          		],
          		showPageHelper: true,
          		autoLoadDataApi:{
          			remotePath: '/student/get',
          			remoteParam: {},
          			remoteMethodType: "get",
          			remoteTimeout: null,
          		},
          		elPagination:{
          			pageSizes: [15, 20, 30, 40, 50, 80]
          		},

          		tableTools:[
          			{label:'编辑',methodName:'editor',type:'warning'},
          			{label:'删除',methodName:'delete',type:'danger'},
          		],

          		deleteApi:{
          			remotePath: '/delete/byId',
          			remoteParam: {},
          			remoteMethodType: "post",
          			remoteTimeout: null,
          		}
          	},
          	editor:{
          		layout:[
          			{prop:'names',label:'姓名',type:'text',require:true},
          			{prop:'clzssId',label:'所在班级',type:'select',require:true,
          				getOptions:{
          					remotePath: '/clzss/get', //请求方法
          					remoteMethodType: "get",//请求类型
          					remoteParam:{},//参数
          					label:'\${names}(\${id})',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
          					value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
          				},
          			},
          			{prop:'bandCode',label:'绑定码',type:'text',require:true},
          			{prop:'birthday',label:'出生日期',type:'date',dateType:'date'},
          			{prop:'sex',label:'性别',type:'radio',options:[{label:'男',value:'1'},{label:'女',value:'0'}],value:'0'},
          			{prop:'photo',label:'头像',type:'image'},
          			{prop:'remake',label:'备注',type:'textarea',rows:6},
          		],
          		cols:1,
          		autoSaveApi:{
          			//请求路径
          			remotePath: '/student/save',
          			//请求参数
          			remoteParam: {},
          			//请求方法
          			remoteMethodType: "post",
          			//得到数据后对数据的预处理
          			// getDataAfter: (data) => {
          			// 	return data.data;
          			// }
          		},
          		editorFormsInitApis:{
          			//请求路径
          			remotePath: '/student/getById',
          			//请求参数
          			remoteParam: {},
          			//请求方法
          			remoteMethodType: "get",
          			//得到数据后对数据的预处理
          			// getDataAfter: (data) => {
          			// 	return data.data;
          			// }
          		},
          	},
          }
          export default layout;
          `.replace(/^       /gm, ''),
        },
        {
          h3:'17.2.创建`student.js`mock测试文件',
          tip_d:"注意该文件路径为`mock/student.js`<br/>用来处理请求时，返回对应的数据。",
          javascript:`
          import ld from 'layout-dynamic-ui';
          import tools from '@/mock/tools.js';
          //引入mockjs
          const Mock = require('mockjs')
          // 获取 mock.Random 对象
          const Random = Mock.Random;
          //使用mockjs模拟数据
          Mock.mock(new RegExp('/student/get[?].*'), 'get', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
          	let request = ld.util.urlToObj(req['url']);
          	let list = [];
          	let pageSize = parseInt(request['pageSize']) || 10;
          	for (let i = 0; i < pageSize; i++) {
          		let clzss=[\`大\${Random.integer(1, 10)}班\`,\`中\${Random.integer(1, 10)}班\`,\`小\${Random.integer(1, 10)}班\`];
          		let listObject = {
          			names: Random.cname(), //随机生成一段中文文本。
          			// clzssId:clzss[Random.integer(0, 2)] ,
          			clzssId:Random.integer(1000, 1030)+"" ,
          			id:1000+i*pageSize, //返回一个随机的整数。
          			birthday: Random.date(),
          			sex:Random.integer(0, 2),
          			updatedTime: Random.date(),
          			createdTime: Random.date(),
          		}
          		list.push(listObject);
          	}
          	return request['isPageHelper'] + '' == 'true' ? {
          		data: {
          			list: tools.filterDataByRequest(request, list),
          			currentPage: request['pageNum'],
          			pageSize: pageSize,
          			total: 100
          		}
          	} : {
          		data: tools.filterDataByRequest(request, list)
          	}
          })

          //使用mockjs模拟数据
          Mock.mock('/student/save', 'post', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
          	let request = JSON.parse(req.body);
          	// let request = ld.util.urlToObj(req['url']);
          	return {
          		code: 0,
          		msg: '保存成功！'
          	}
          })
          //使用mockjs模拟数据
          Mock.mock(new RegExp('/student/getById.*'), 'get', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
          	let id = 1001
          	try {
          		id = ld.util.urlToObj(req['url'])['id'] || 1001;
          	} catch (e) {
          		//TODO handle the exception
          	}
          	return {
          		code: 0,
          		data: {
          			names: Random.cname(), //随机生成一段中文文本。
          			clzssId:Random.integer(1000, 1030)+"" ,
          			id: id, //返回一个随机的整数。
          			birthday: Random.date(),
          			updatedTime: Random.date(),
          			createdTime: Random.date(),
          		},
          		msg: '保存成功！'
          	}
          })

          `.replace(/^       /gm, ''),
          tip_s:'以上两个完成后，已经完成了学生管理的业务，此时点击左侧树形菜单可以看到，如下效果',
          H3:'17.3.效果图',
          md:`![学生管理](./static/student.gif)`
        },
        {
          h2:'18.老师管理',
          tip_i:'因为老师管理和学生管理流程相同，不同的只是布局配置文件`teacher.js`和mock测试文件`teacher.js`文件不同，如下直接提供连个文件',
          h3:'18.1.布局配置文件`teacher.js`',
          tip_d:"注意该文件路径为`pages/window/layout/teacher.js`<br/>文件内容是对default.js的重新和完善。",
          javascript:`
          import ld from 'layout-dynamic-ui'
          const layout= {
          	table:{
          		forms: {},
          		whereLayout: [{prop:'names',label:'姓名',type:'text'},{prop:'phone',label:'手机号码',type:'text'}],
          		tableLayout: [
          			{prop:'names',label:'姓名'},
          			{prop:'phone',label:'电话号码'},
          			{prop:'sex',label:'性别',html: (val) => { return \`<div class="$\{val==1?'c-d':'c-s'}">\${val==1?'男':'女'}</div>\`}},
          			{prop:'birthday',label:'年龄',format: (val) => { return !val ? '' : ld.util.getYearDiff(new Date(),val)}},
          			{prop:'birthday',label:'出生日期',format: (val) => { return !val ? '未填写' : ld.util.getDate(0, new Date(val));}},
          			{prop:'bandCode',label:'绑定码',format: (val) => { return new Date().getFullYear()}},
          		],
          		showPageHelper: true,
          		autoLoadDataApi:{
          			remotePath: '/teacher/get',
          			remoteParam: {},
          			remoteMethodType: "get",
          			remoteTimeout: null,
          		},
          		elPagination:{
          			pageSizes: [15, 20, 30, 40, 50, 80]
          		},

          		tableTools:[
          			{label:'编辑',methodName:'editor',type:'warning'},
          			{label:'删除',methodName:'delete',type:'danger'},
          		]
          	},
          	editor:{
          		layout:[
          			{prop:'names',label:'姓名',type:'text',require:true},
          			{prop:'bandCode',label:'绑定码',type:'text',require:true},
          			{prop:'phone',label:'手机号码',type:'text',regex:/^[1][0-9]{10}$/},
          			{prop:'birthday',label:'出生日期',type:'date',dateType:'date'},
          			{prop:'sex',label:'性别',type:'radio',options:[{label:'男',value:'1'},{label:'女',value:'0'}],value:'0'},
          			{prop:'isTitle',label:'是否为校长',type:'radio',options:[{label:'校长',value:'1'},{label:'教师',value:'0'},{label:'后勤',value:'2'}],value:'0'},
          			{prop:'teaching',label:'教学特点',type:'textarea',rows:10},
          		],
          		cols:1,
          		autoSaveApi:{
          			//请求路径
          			remotePath: '/teacher/save',
          			//请求参数
          			remoteParam: {},
          			//请求方法
          			remoteMethodType: "post",
          			//得到数据后对数据的预处理
          			// getDataAfter: (data) => {
          			// 	return data.data;
          			// }
          		},
          		editorFormsInitApis:{
          			//请求路径
          			remotePath: '/teacher/getById',
          			//请求参数
          			remoteParam: {},
          			//请求方法
          			remoteMethodType: "get",
          			//得到数据后对数据的预处理
          			// getDataAfter: (data) => {
          			// 	return data.data;
          			// }
          		},
          	},
          }
          export default layout;
          `.replace(/^       /gm, ''),
        },
        {
         h3:'18.2.mock测试`teacher.js`文件',
         tip_d:"注意该文件路径为`mock/teacher.js`<br/>用来处理请求时，返回对应的数据。",
         javascript:`
         import ld from 'layout-dynamic-ui';
         import tools from '@/mock/tools.js';
         //引入mockjs
         const Mock = require('mockjs')
         // 获取 mock.Random 对象
         const Random = Mock.Random;
         //使用mockjs模拟数据
         Mock.mock(new RegExp('/teacher/get[?].*'), 'get', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
         	let request = ld.util.urlToObj(req['url']);
         	let list = [];
         	let pageSize = parseInt(request['pageSize']) || 10;
         	for (let i = 0; i < pageSize; i++) {
         		let listObject = {
         			names: Random.cname(), //随机生成一段中文文本。
         			phone: Random.integer(10000000000, 19999999999),
         			id: 1000 + i * pageSize, //返回一个随机的整数。
         			sex: Random.integer(0, 2),
         			birthday: Random.date(),
         			updatedTime: Random.date(),
         			createdTime: Random.date(),
         		}
         		list.push(listObject);
         	}
         	return request['isPageHelper'] + '' == 'true' ? {
         		data: {
         			list: tools.filterDataByRequest(request, list),
         			currentPage: request['pageNum'],
         			pageSize: pageSize,
         			total: 100
         		}
         	} : {
         		data: tools.filterDataByRequest(request, list)
         	}
         })

         //使用mockjs模拟数据
         Mock.mock('/teacher/save', 'post', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
         	let request = JSON.parse(req.body);
         	// let request = ld.util.urlToObj(req['url']);
         	return {
         		code: 0,
         		msg: '保存成功！'
         	}
         })
         //使用mockjs模拟数据
         Mock.mock(new RegExp('/teacher/getById.*'), 'get', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
         	let id = 1001
         	try {
         		id = ld.util.urlToObj(req['url'])['id'] || 1001;
         	} catch (e) {
         		//TODO handle the exception
         	}

         	return {
         		code: 0,
         		data: {
         			names: Random.cname(), //随机生成一段中文文本。
         			phone: Random.integer(10000000000, 19999999999),
         			id: id, //返回一个随机的整数。。
         			sex: Random.integer(0, 2),
         			birthday: Random.date(),
         			updatedTime: Random.date(),
         			createdTime: Random.date(),
         		},
         		msg: '保存成功！'
         	}
         })
         `.replace(/^       /gm, ''),
        },
        {
          h2:'19.班级管理',
          tip_i:'班级管理流程也相同，不同的只是布局配置文件`class.js`和mock测试文件`class.js`文件不同，如下直接提供连个文件',
          h3:'19.1.布局配置文件`class.js`',
          tip_d:"注意该文件路径为`pages/window/layout/class.js`<br/>文件内容是对default.js的重新和完善。",
          javascript:`
          import ld from 'layout-dynamic-ui'
          window.ld=ld;
          const layout= {
          	table:{
          		forms: {},
          		whereLayout: [
          			{prop:'names',label:'名称',type:'text'},
          			{prop:'teacherId',label:'老师名称',type:'select',
          				getOptions:{
          					remotePath: '/teacher/get', //请求方法
          					remoteMethodType: "get",//请求类型
          					remoteParam:{pageSize:100,pageNum:1},//参数
          					label:'\${names}',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
          					value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
          				},
          			},
          			{prop:'clzss',label:'年级',type:'select',options:[{label:'小班',value:'0'},{label:'中班',value:'1'},{label:'大班',value:'2'}]},
          		],
          		tableLayout: [
          			{prop:'names',label:'班级名称'},
          			{
          				prop:'gradeId',label:'年级',
          				format:(val)=>{
          					return val<=10?'小班':val>10&&val<=20?'中班':'大班'
          				}
          			},
          			{
          				prop:'headId',label:'班主任',
          				replace:{
          					 remotePath: '/teacher/getById',
          					 remoteMethodType: "get",
          					 label:'names', //不支持 \${xx}模式
          					 value:'headId' //不支持 \${xx}模式
          				},
          			},
          			{prop:'teachersId',label:'任教老师'},
          		],
          		showPageHelper: true,
          		autoLoadDataApi:{
          			remotePath: '/clzss/getPage',
          			remoteParam: {},
          			remoteMethodType: "get",
          			remoteTimeout: null,
          		},
          		elPagination:{
          			pageSizes: [15, 20, 30, 40, 50, 80]
          		},

          		tableTools:[
          			{label:'编辑',methodName:'editor',type:'warning'},
          			{label:'删除',methodName:'delete',type:'danger'},
          		]
          	},
          	editor:{
          		layout:[
          			{prop:'names',label:'班级名称',type:'text',require:true},
          			{prop:'gradeId',label:'所在年级',type:'select',require:true,options:[{label:'小班',value:'0'},{label:'中班',value:'1'},{label:'大班',value:'2'}]},
          			{prop:'headId',label:'班主任',type:'select',require:true,
          				getOptions:{
          					remotePath: '/teacher/get', //请求方法
          					remoteMethodType: "get",//请求类型
          					remoteParam:{pageSize:100,pageNum:1},//参数
          					label:'\${names}',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
          					value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
          				}
          			},
          			{prop:'teacherId',label:'任教老师',type:'checkbox',
          				getOptions:{
          					remotePath: '/teacher/get', //请求方法
          					remoteMethodType: "get",//请求类型
          					remoteParam:{pageSize:100,pageNum:1},//参数
          					label:'\${names}',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
          					value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
          				},
          				parseType: 'split',
          			},
          			{prop:'remake',label:'备注',type:'textarea',rows:6},
          		],
          		cols:1,
          		autoSaveApi:{
          			//请求路径
          			remotePath: '/student/save',
          			//请求参数
          			remoteParam: {},
          			//请求方法
          			remoteMethodType: "post",
          			//得到数据后对数据的预处理
          			// getDataAfter: (data) => {
          			// 	return data.data;
          			// }
          		},
          		editorFormsInitApis:{
          			//请求路径
          			remotePath: '/student/getById',
          			//请求参数
          			remoteParam: {},
          			//请求方法
          			remoteMethodType: "get",
          			//得到数据后对数据的预处理
          			// getDataAfter: (data) => {
          			// 	return data.data;
          			// }
          		},
          	},
          }
          export default layout;
          `.replace(/^       /gm, ''),
        },
        {
         h3:'19.2.mock测试`class.js`文件',
         tip_d:"注意该文件路径为`mock/class.js`<br/>用来处理请求时，返回对应的数据。",
         javascript:`
         import ld from 'layout-dynamic-ui';
         import tools from '@/mock/tools.js';
         //引入mockjs
         const Mock = require('mockjs')
         // 获取 mock.Random 对象
         const Random = Mock.Random;
         //使用mockjs模拟数据
         Mock.mock(new RegExp('/clzss/getById.*'), 'get', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
         	let request = ld.util.urlToObj(req['url']);
         	let i=parseInt(request['clzssId']||1001)-1000;
         	return {
         		code: 0,
         		data: {
         			names: (i / 10 < 1 ? '小' : i / 10 < 2 && i / 10 >= 1 ? '中' : '大') + ((i % 20 >= 0 ? i % 20 : i %
         				10 >= 0 ? i % 10 : i) + 1) + '班', //随机生成一段中文文本。
         			id: 1000 + i+"", //返回一个随机的整数。
         		},
         		msg: '保存成功！'
         	}
         })
         //使用mockjs模拟数据
         Mock.mock(new RegExp('/clzss/get$'), 'get', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
         	let list = [];
         	for (let i = 0; i < 30; i++) {
         		let listObject = {
         			names: (i / 10 < 1 ? '小' : i / 10 < 2 && i / 10 >= 1 ? '中' : '大') + ((i % 20 >= 0 ? i % 20 : i %
         				10 >= 0 ? i % 10 : i) + 1) + '班', //随机生成一段中文文本。
         			id: 1000 + i, //返回一个随机的整数。
         		}
         		list.push(listObject);
         	}
         	return {
         		data: list
         	}
         })
         //使用mockjs模拟数据
         Mock.mock(new RegExp('/clzss/getPage.*'), 'get', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
         	let list = [];
         	for (let i = 0; i < 30; i++) {
         		let listObject = {
         			names: (i / 10 < 1 ? '小' : i / 10 < 2 && i / 10 >= 1 ? '中' : '大') + ((i % 20 >= 0 ? i % 20 : i %
         				10 >= 0 ? i % 10 : i) + 1) + '班', //随机生成一段中文文本。
         			id: 1000 + i, //返回一个随机的整数
         			gradeId:i,
         			headId:1000+Random.integer(0,30),
         			teachersId:\`\${Random.cname()},\${Random.cname()},\${Random.cname()}\`
         		}
         		list.push(listObject);
         	}
         	return {
         		data: list
         	}
         })


         //使用mockjs模拟数据
         Mock.mock('/clzss/save', 'post', (req, res) => { //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据.
         	let request = JSON.parse(req.body);
         	// let request = ld.util.urlToObj(req['url']);
         	return {
         		code: 0,
         		msg: '保存成功！'
         	}
         })

         `.replace(/^       /gm, ''),
        },
        {
          p:'也就是说，只要具备足够多的模板，即可通过配置实现任何想要的业务。'
        },
        {
          h1:'六.效果图',
          md: `![效果图](./static/result.gif)`
        }],

      };
    }
  }
</script>

<style>
</style>
