<template>
  <!-- 表单 -->
  <div class="box-b p10 h ld-doc">
    <el-card class="doc w h">
      <ld-doc :doc="doc" class="w h" doc-width="100%">
        <template v-slot:first="e">
          <el-card class="w over-a-x p10 box-b" style="height: 440px;">
            <ld-forms ref="form1" :cols="2" :form="forms" :layout="formLayout1" class="w"
              style="height: 420px;min-width: 800px;">
              <template v-slot:buttons="e">
                <div class="w f-s box-b" style="padding-left: 100px;">
                  <el-button type="primary" @click="createTest1">立即创建</el-button>
                  <el-button>取消</el-button>
                </div>
              </template>
            </ld-forms>
          </el-card>
        </template>

        <!-- <template v-slot:second="e">
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
        </template> -->

        <template v-slot:foot="e">
          <foot></foot>
        </template>
      </ld-doc>
    </el-card>
  </div>
</template>

<script>
  import res from './forms-res.js'

  export default {
    name: 'form',
    data() {
      return {
        forms: {},
        formLayout1: res.layout,


        doc: [{
            title: '`ld-forms`表单组件'
          },
          {
            h1: '一.简单示例',
            slot: 'first',
            html:`
            <ld-forms ref="form1" :cols="2" :form="forms" :layout="formLayout1" class="w"
              style="height: 420px;min-width: 800px;">
              <template v-slot:buttons="e">
                <div class="w f-s box-b" style="padding-left: 100px;">
                  <el-button type="primary" @click="createTest1">立即创建</el-button>
                  <el-button>取消</el-button>
                </div>
              </template>
            </ld-forms>
            `.replace(/^          /gm, ''),
            javascript:''
          },
          {
            h1:'二.参数说明',
            h2:'1.`ld-forms`参数说明',
            md:`|关键字|类型|解释|默认值|是否必须|说明|
            |-|-|-|-|-|-|
            |form|Object|布局参数的数据值|{}|√|在编辑等情况下，需要打开页面就显示组件相关数据值，此时需要通过form来初始化表单数据值|
            |layout|Array[Object]|布局参数|[]|√|整个表单需要显示的布局参数。是数组包含一组对象的集合，形如[{...},{...}...]。详情见下文|
            |is-overflow-y|Boolean|是否显示纵向(y)滚动条|false|-|form表单的主体是否显示纵向(y)滚动条|
            |show-tip-button|Boolean|是否显示提示按钮|false|-|位于表单的右上角提示按钮|
            |show-default-tip|Boolean|是否显示默认tip文字|false|-|是否显示位于每个表单子元素组件上的解释说明文字信息|
            |label-position|String|左侧文字位置|right|-|组件文字的位置；可选址为：left,right,top|
            |label-width|String|左侧文字大小|100px||左侧文字大小|
            |is-row|Boolean|是否是行模式|false||true:行模式，通常组件数量较少，且开启后会忽略label-position的值，通常用作布局界面的查询条件|
            |cols|Number|form表单的列数|1||可选址为：1,2,3,4|
            |save-forms-data-before|Function(data)|保存数据之前的修饰方法|||也可以通过全局配置。优先使用参数，如果该参数为空，则会使用全局配置函数|
            |save-forms-data-after|Function(data)|保存数据之后的处理方法|||也可以通过全局配置。优先使用参数，如果该参数为空，则会使用全局配置函数|
            |editor-forms-init-api|Object|编辑数据时配置参数|||详情见下文章|
            |auto-save|Boolean|【待定】是否自动保存|true||【待定】该参数暂时无效，相关功能，正在开发中.|
            |is-more-level-update-el-date|Boolean|【待定】是否强制刷新Date组件|false||【待定】当前组件封装层数过多时，element-date日期控件会出现不能及时刷新的问题，此时需要设置该属性为 true|
            `
          },
          {
            h2:'2.`ld-forms`的`layout`参数的通用参数说明',
            md:`|关键字|类型|解释|默认值|是否必须|说明|
            |-|-|-|-|-|-|
            |prop				|String|数据字段					|				| √			|关键字，将会成为获取组件值的key,通常和数据库表中的字段名相同|
            |label			|String|左侧文字					|				| √			|显示在表单组件左侧的说明文字|
            |type				|String|类型							|				| √			|组件类型；当前支持21中组件\`tip\`,\`datakey\`,\`slot\`,\`text\`,\`textarea\`,\`select\`,\`radio\`,<br/>\`checkbox\`,\`date\`,\`icon\`,\`tag\`,\`address\`,\`sysdate\`,\`image\`,<br/>\`number\`,\`switch\`,\`slider\`,\`rate\`,\`color\`,\`transfer\`,\`param\`|
            |require		|Boolean|是否不为空				|false	|					|是否为空。true:不为空，false:可为空|
            |placeholder|String|输入提示文字			|				|					|组组件输入提示文字。不设置，则会根据配置类型和\`label\`设置相关的值。如:'请输入xxx'和'请选择xxx'等|
            |msg				|String|错误提示文字			|				|					|组件校验错误提示文字。当非空校验通过时，不满足其他校验条件时显示|
            |visabled		|Boolean|是否显示					|true		|					|是否显示;true:显示，false:隐藏|
            |readonly		|Boolean|是否只读					|false	|					|是否只读;true:只读，false:可操作|
            |disabled		|Boolean|是否禁用					|false	|					|是否禁用;true:禁用，false:可操作；作用和readonly作用相同，通常只需设置一个属性即可|
            |regex			|RegExp,String,function	|数据校验					|				|					|校验当前组件值；RegExp:如\`/^[1][0-9]{10}$/\`校验手机号码；<br/>String:如\`"/^[1][0-9]{10}$/"\`会被断定为正则表达式，"abc"会被断定为字符串，进行值比较；<br/>function:如\`function(val){  return true  }\`设置函数，在函数中会获得当前组件的值\`val\`，需要返回一个true或者false	|
            |tip				|String|辅助提示文字			|				|					|显示在当前组件顶部的辅助解释内容，可以使html字符串|
            |tipClass		|String|辅助提示文字样式	|				|					|通常配置\`tip\`使用，多个class名称，中间用空格隔开|
            |css				|String|class样式				|				|					|设置当前组件的class样式|
            |style			|String|style样式				|				|					|设置当前组件的style样式|
            |prepend		|String|前缀|				|					|设置输入数据的前缀，长度不宜过长，控制在1-3个字符。如果字符过多则推荐使用插槽处理|
            |append			|String|后缀|				|					|设置输入的单位等，长度不宜过长，控制在1-3个字符。如果字符过多则推荐使用插槽处理|
            |width			|String|宽度|				|					|组件的宽度|
            `
          },
          {
            h1:'三.`layout`参数不同`type`值的使用和说明',
            tip_d:'`ld-forms`的`layout`参数组成多彩的表单输入组件，组件的不同通过其中的`type`来进行控制。首先`layout`数据格式如下：',
            javascript:`
            export default {
              //格式
              data(){
                  return {
                    layout:[
                      {},//组件属性
                      {},//组件属性
                      // ...
                    ]
                };
              }
            }`.replace(/^          /gm, ''),
          },
          {
            h2:'1.`type="text"`',
            javascript:`
            `
          },
          {
            slot: 'foot'
          }
        ]
      };
    },
    methods: {
      createTest1() {
        let res = this.$refs.form1.checkForm();
        if (res['error'] === true) {
          this.$message.error(res['msg']);
          return;
        }
        this.$message.success('验证通过！');
      }

    },
    created() {
      this.$set(this.doc[1],'javascript',res.testJavascript1);
    }
  }
</script>

<style>
</style>
