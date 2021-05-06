<template>
  <!-- 加载 -->
  <div class="box-b p10 h ld-doc">
    <el-card class="doc w h">
      <ld-doc :doc="doc" class="w h" doc-width="100%">
        <template v-slot:first="e">
          <ld-page-tabs :tabs="tabs" class="w" style="height: 400px;"></ld-page-tabs>
        </template>

        <template v-slot:second="e">
          <ld-forms class="m-t10 m-b10" :form="forms" :layout="formLayout" :is-row="true">
            <template v-slot:buttons="e">
              <div style="position: relative;">
                <el-button type="primary m-l10" @click="copy()">复制代码</el-button>
                <div id="customCode" class="o0" style="position: absolute;">
                  {{forms}}
                </div>
              </div>
            </template>
          </ld-forms>
          <ld-page-tabs :show-close="forms['showClose']" :show-refresh="forms['showRefresh']"
            :show-confirm="forms['showConfirm']" :tabs="tabs" class="w" style="height: 400px;"></ld-page-tabs>
        </template>

        <template v-slot:foot="e">
          <foot></foot>
        </template>
      </ld-doc>
    </el-card>
  </div>
</template>

<script>
  import res from './page-tabs-res.js'
  export default {
    name: 'pageTabs',
    data() {
      return {
        forms: {},
        formLayout: res.layout,

        tabs: [{
            icon: 'el-icon-c-scale-to-original',
            prop: 'loading',
            label: 'loadingPage说明',
            page: 'loading',
            showClose: false
          },
          {
            prop: 'index',
            label: '快速开始',
            page: 'install'
          },
          {
            prop: 'baidu',
            label: '百度一下',
            page: 'https://www.baidu.com',
            showRefresh: false
          }
        ],


        doc: [{
            title: '`ld-page-tabs`标签页的使用',
            h1: '一.简单示例',
            tip: '可以为`tabs`参数的每个子项单独设置是否显示关闭(`showClose`)和是否刷新(`showRefresh`)按钮`',
            slot: 'first',
            html: `
          <ld-page-tabs :tabs="tabs" class="w" style="height: 400px;"></ld-page-tabs>
          `.replace(/^        /gm, ''),
            javascript: `
          export default {
            data() {
              return {
                tabs: [
                  //不显示关闭按钮
                  {icon: 'el-icon-c-scale-to-original',prop: 'loading',label: 'loadingPage说明',page: 'loading',showClose: false},
                  {prop: 'index',label: '快速开始',page: 'install'},
                  //不显示刷新按钮 链接网页
                  {prop: 'baidu',label: '百度一下',page: 'https://www.baidu.com',showRefresh: false}
                ]
              }
            }
          }`.replace(/^        /gm, ''),
          },
          {
            h1: '二.自定义设置',
            tip_d: '当为`ld-page-tabs`组件设置`showClose`、`showRefresh`属性时，TA的值将受限于为`tabs`子项设置`showClose`、`showRefresh`的属性值；也就是说当`ld-page-tabs`组件和`tabs`属性中都设置`showClose`、`showRefresh`属性时，优先使用`tabs`设置的相关属性值。',
            slot: 'second',
          },
          {
            h1: '二.page参数说明',
            tip_d: '`page`参数可以使`网站`，也可以是`vue程序页面`',
          },
          {
            h2: '网站页面',
            javascript: `{prop:'baidu',label:'百度一下','https://www.baidu.com'}`,
          },
          {
            h2: 'vue程序页面',
            tip: '当为vue程序页面时，此时需要将程序页面注册成组件',
            h3: '注册组件',
            javascript: `
            //在xxx.js文件中引入程序页面
            import loading from '@/pages/loading/loading'
            const install = (Vue, opts = {}) => {
              //注册成组件
            	Vue.component('loading', loading);
              //..... 注册其他页面
            }
            //使用install函数导出
            export default {
            	install
            }


            //在main.js页面中进行使用
            import pageImport from './xxxx.js';
            Vue.use(pageImport);
            `.replace(/^        /gm, ''),
          }, {
            javascript: `{prop: 'loading',label: 'loadingPage说明',page: 'loading'},`,
            slot: 'second',
          },
          {
            h1: '三.参数和其他说明',
            h2: '`ld-page-tabs` 参数',
            md: `|关键字|类型|解释|默认值|是否必须|说明|
                |-|-|-|-|-|-|
                |tabs|Array[Object]|关键字||√|tab页面参数,详细说明见下文|
                |showClose|Boolean|是否显示关闭按钮|true|√||
                |showRefresh|Boolean|是否显示刷新按钮|true|√||
                |selected|String\\|Number|选中的tab|||为tab下标时必须是Number,不是下标则需要设置为要显示的tab的prop值|
                |showConfirm|Boolean|标签页关闭时，是否显示提示框|true|||
                |closeBefore|Function(item)|标签关闭之前事件，true,false控制是否继续执行！||||
                |refreshTabBefore|Function(item)|标签关闭之前事件，true,false控制是否继续执行！||||
                |passEventUp|Boolean|是否向上传递事件|true||详细说明见下文|
`
          },
          {
            h2: ' `tabs`属性参数',
            tip_i: 'ld-page-tabs tabs 是一组对象的集合，其中对象属性如下',
            md: `|关键字|类型|解释|默认值|是否必须|说明|
            |-|-|-|-|-|-|
            |prop|String|关键字||√||
            |label|String|标签页显示文字||√||
            |page|String|组件代码(vue程序页面)\\|网页地址(网页地址必须具备http://或https://)||√|详情见上文|
            |showRefresh|Boolean|是否显示刷新按钮|||通过参数控制，实现特殊需求|
            |showClose|Boolean|是否显示关闭按钮|||通过参数控制，实现特殊需求|
            |icon|String|页面图标|||可以使element-ui的icon图标，也可以是图片|
            `
          },
          {
            h2: 'Event 事件',
            md: `|名称|类型|返回值|解释|说明|
            |-|-|-|-|-|
            |click|Function(item)||标签页点击事件|当点击标签页时，触发事件。|
            |close|Function(item)||关闭标签页后发生事件|当关闭标签页后，触发事件。|
            |refresh|Function(item)||更新标签页后击事件|更新标签页后，触发事件。|
            `
          },
          {
            h2: 'Slot 插槽（作用域插槽）',
            md: `|名称|类型|插槽入参|说明|
            |-|-|-|-|
            |page|作用域插槽|item {} 一个tab元素对象值|使用此插槽意味着你需要自己完成页面相关的显示和操作|
            `
          },
          {
            h2: '`passEventUp`页面事件向上传递约定',
            tip_d: '在将页面作为组件进行标签页操作时，有时需要在将页面内部操作传递到标签页外部以便进行其他关操作，此时便需要使用固定的格式进行事件传递'
          },
          {
            tip_i: '假如在页面中需要将某个按钮点击事件传递到外部处理，此时需要如下操作：',
            javascript: `
            	//使用指定的方式触发事件
            	this.$emit('events',{eventMethod:'click',eventParam:{}});
            `.replace(/^            /gm, ''),
          },
          {
            h3: '1.`passEventUp=true` 向上传递',
            tip_i: '此时在`ld-page-tabs`页面中处理函数需要使用`@events`(`events`为固定值)来接收函数,具体如下',
            html: `
            <ld-page-tabs @events="getEvent"></ld-page-tabs>
            `.replace(/^            /gm, ''),
          },
          {
            h3: '2.`passEventUp=false` 不向上传递，散播事件',
            tip_i: '此时在`ld-page-tabs`页面中处理函需要使用`@click`(`click`为上文定义的`eventMethod`的值)来接收函数,具体如下',
            html: `
           <ld-page-tabs @click="getEvent"></ld-page-tabs>
           `.replace(/^          /gm, ''),
          },
          {
            tip_d: '注意：两者的区别在`ld-page-tabs`中对于事件的处理方式，上方分别是`@events`、`@click`,取决于`passEventUp=true`和`eventMethod`',
            javascript: `
            export default {
              methods:{
                getEvent(event){
                  //处理 相关事件
                }
              }
            }`.replace(/^           /gm, ''),
          },


          {
            slot:'foot'
          }
        ]
      }
    },
    methods: {
      copy() {
        let flg = this.$ld.util.copyToClipboard(JSON.stringify(this.forms));
        this.$message[flg ? 'success' : 'error'](flg ? "复制成功！" : "复制失败，请选中代码使用Ctrl+C进行复制,Ctrl+V进行黏贴！");
      }
    }
  }
</script>

<style>
  .m-r10.box-shadow.over-a-y.h.p10.box-b {
    max-width: 300px !important;
    min-width: 300px !important;
  }
</style>
