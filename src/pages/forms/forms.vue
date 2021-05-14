<template>
  <!-- 表单 -->
  <div class="box-b p10 h ld-doc">
    <el-card class="doc w h">
      <ld-doc :doc="doc" class="w h" doc-width="100%">
        <template v-slot:first="e">
          <el-card class="w over-a-x p10 box-b" style="height: 480px;">
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

     <template v-slot:text="e">
          <el-card class="w over-a-x p10 box-b w-400 p-r10">
            <ld-forms ref="text1" :form="{}" :layout="text"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:textarea="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="textarea1" :form="{}" :layout="textarea"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:select="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="select1" :cols="2" :form="{}" :layout="select"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:radio="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="select1" :form="{}" :layout="radio"> </ld-forms>
          </el-card>
        </template>

        <template v-slot:checkbox="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="select1" :form="{}" :layout="checkbox"> </ld-forms>
          </el-card>
        </template>

        <template v-slot:date="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms :cols="2" ref="date1" :form="dateForm" :layout="date"> </ld-forms>
          </el-card>
        </template>

        <template v-slot:icon="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms :cols="2" ref="icon1" :form="{}" :layout="[{prop:'icon',label:'图标',type:'icon'}]"> </ld-forms>
          </el-card>
        </template>

        <template v-slot:tag="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="tag1" :form="{}"
              :layout="[{prop:'tag1',label:'姓氏',type:'tag',value:'张|王|李|赵',parseType:'array'},{prop:'tag2',label:'名称',type:'tag',value:['毛毛','婷婷','吉吉'],parseType:'array'}]">
            </ld-forms>
          </el-card>
        </template>

         <template v-slot:address="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="address1" :form="{}"
              :layout="[{prop:'address1',label:'地址',type:'address',value:'甘肃省,兰州市,城关区'},{prop:'town',label:'详细地址',type:'textarea',rows:5}]">
            </ld-forms>
          </el-card>
        </template>

        <template v-slot:sysdate="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="sysdate1" :form="{}"
              :layout="[{prop:'sysdate1',label:'创建日期',type:'sysdate',update:false,value:'2021-05-07 16:37:00'},{prop:'sysdate2',label:'修改日期',type:'sysdate',update:true}]">
            </ld-forms>
          </el-card>
        </template>

        <template v-slot:image="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="image" :form="{}" :layout="[{prop:'image1',label:'头像',type:'image',limit:2}]"> </ld-forms>
          </el-card>
        </template>

        <template v-slot:number="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="number" :form="{}" :layout="[{prop:'number1',label:'头像',type:'number',min:1}]"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:switch="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="switch" :form="{}"
              :layout="[{prop:'switch1',label:'开关1',type:'switch'}, {prop:'switch2',label:'开关2',type:'switch',activeText:'开启',inactiveText:'关闭'}]">
            </ld-forms>
          </el-card>
        </template>

        <template v-slot:slider="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="slider" :form="{}"
              :layout="[{prop:'slider1',label:'滑块1',type:'slider',showStops:false,value: 30},{prop:'slider2',label:'滑块2',type:'slider',showStops:true,formatTooltip:(val)=>{return val+'%'},value: 50},{prop:'slider3',label:'滑块2',type:'slider',showStops:true,marks:{20:'20',50:'50',80:'80'},value: 80}]">
            </ld-forms>
          </el-card>
        </template>

        <template v-slot:rate="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="rate" :form="{}"
              :layout="[{prop:'rate1',label:'评分2',type:'rate'},{prop:'rate2',label:'评分3',type:'rate',showText:true},{prop:'rate4',label:'评分4',type:'rate',showScore:true},{prop:'rate5',label:'评分5',type:'rate',showText:true,texts:['一星','二星','三星','四星','五星']},{prop:'rate3',label:'评分1',type:'rate',showText:true,colors:['green','blue','orange']}]">
            </ld-forms>
          </el-card>
        </template>

      <template v-slot:color="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="color" :form="{}"
              :layout="[{prop:'color1',label:'颜色1',type:'color',value:'red'},{prop:'color2',label:'颜色2',type:'color',showAlpha:false,value:'rgba(30, 144, 255, 1)'},{prop:'color3',label:'颜色3',type:'color',predefine:['#ff4500','#ff8c00','#ffd700','#90ee90','#00ced1','#1e90ff','#c71585','rgba(255, 69, 0, 0.68)','rgb(255, 120, 0)','hsv(51, 100, 98)','hsva(120, 40, 94, 0.5)','hsl(181, 100%, 37%)','hsla(209, 100%, 56%, 0.73)','#c7158577']}]">
            </ld-forms>
          </el-card>
        </template>

        <template v-slot:transfer="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="transfer" :form="{}"
              :layout="[{ prop: 'transferTest', type: 'transfer',label: '穿梭框',parseType: 'split', options: [ {label: '菜单辑',value: '1'},{label: '菜单修改',value: '2'},{label:'菜单新增',value: '3'}],splitChart: ','},]">
            </ld-forms>
          </el-card>
        </template>

         <template v-slot:param="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="param" :form="{}"
              :layout="[{prop: 'likeys',type: 'param',label: '数组',dataType: 'array',parseType: 'json',value: JSON.stringify(['参数。。。', '参数1']) }, {prop: 'likeys2',type: 'param',label: '对象',dataType: 'object',parseType: 'json',value: JSON.stringify({a:1,b:2,c:'张三'}) }]">
            </ld-forms>
          </el-card>
        </template>

        <template v-slot:datakey="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="datakey" :form="{}"
              :layout="[{prop: 'datakey1', type: 'datakey',label: '数据键',value: 'EC62246E-876A-436C-AACF-4C8E57BB290EB'}]">
            </ld-forms>
          </el-card>
        </template>

        <template v-slot:tip="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms :show-default-tip="true" ref="tip" :form="{}" :layout="tip"> </ld-forms>
          </el-card>
        </template>

        <template v-slot:slots="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="slots" :form="{}" :layout="[{prop:'customSlot', label:'自定义插槽',type:'slot'}]">
              <!-- 这里的插槽名称由 prop的值决定 -->
              <template #customSlot="e">
                <div>插槽数据：{{e}} </div>
                 <!-- 可以通过作用域插槽获取到的值，进行自由设置布局 -->
              </template>
            </ld-forms>
          </el-card>
        </template>


        <template v-slot:regexString="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms :show-default-tip="true" ref="regexString" :form="{}" :layout="[{prop:'stringRegex1',label:'字符串比对',type:'text',regex:'张三',require:true,tip:'比较值只能为张三',tipClass:'tip-p b-p1'},{prop:'stringRegex2',label:'字符正则',type:'text',regex:'/^[a-z].*[0-9]$/i',require:true,tip:'字母开头，数字结尾，忽略大小写',tipClass:'tip-p b-p1'}]"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:regexRegExp="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="regexRegExp" :form="{}" :layout="regexRegExp"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:regexFunction="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="regexFunction" :form="{}" :layout="regexFunction"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:require="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms ref="require" :form="{}" :layout="[{prop:'require',label:'可为空',type:'text',require:false},{prop:'require2',label:'不能为空',type:'text',require:true}]"> </ld-forms>
          </el-card>
        </template>



        <template v-slot:changeProperty="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms :clos="2" ref="changeProperty" :form="{}" :layout="changeProperty"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:changeForms="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms :clos="2" ref="changeForms" :form="{}" :layout="changeForms"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:changeLayout="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms :clos="2" ref="changeLayout" :form="{}" :layout="changeLayout"> </ld-forms>
          </el-card>
        </template>


        <template v-slot:changeTest="e">
          <el-card class="w over-a-x p10 box-b p-r10">
            <ld-forms :show-default-tip="true" :clos="2" ref="changeTest" :form="{}" :layout="changeTest"> </ld-forms>
          </el-card>
        </template>



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
        dateForm: {},
        formLayout1: res.layout,
        text: res.textLayout,
        textarea: res.textareaLayout,
        select: res.selectLayout,
        radio: res.radioLayout,
        checkbox: res.checkboxLayout,
        date: res.dateLayout,
        changeProperty:res.changePropertyLayout,
        changeForms:res.changeFormsLayout,
        changeLayout:res.changeLayoutLayout,
        changeTest:res.changeTestLayout,

        regexRegExp:[
          {prop:'regexRegExp',label:'手机号码',type:'text',regex:/^1[0-9]{10}$/,msg:'必须以数字1开头的11位数字！'},
          {prop:'regexRegExp2',label:'用户密码',type:'text',password:true,regex:/^[^.'"\/#!%]{6,12}$/,msg:'不包含特殊符号的6-12为字符'},
        ],
        regexFunction:
        [
          {prop:'regexFunction',label:'只能输入奇数',type:'text',regex:(val)=>{return val%2!=0},msg:'只能输入奇数！'},
          {prop:'regexFunction2',label:'范围数字',type:'text',regex:(val)=>{return [1,3,5,7,9].includes(val)},msg:'不是包含在1,3,5,7,9中的数字'}
        ],


        tip: [
          {
            prop: 'tip',
            label: '提示文字',
            type: 'tip',
            tip: `<div style="color:red">这是一段测试文字</div>`,
            tipClass: 'tip-p b-p1'
          },
          {prop:'tip2',label:'头部文字',type:'text',tip:`这是文本框顶部的提示文字`,tipClass:'tip-p b-p1'}
        ],
        doc: [{
            title: '`ld-forms`表单组件'
          },
          {
            h1: '一.基础示例（包含数据校验）',
            slot: 'first',
            html: `
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
            javascript: ''
          },
          {
            h1: '二.参数说明',
            h2: '1.`ld-forms`参数说明',
            md: `|关键字|类型|解释|默认值|是否必须|说明|
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
            |auto-save|Boolean|是否自动保存|true|||
            |auto-save-api|Object|自动保存时配置参数||||
            |is-more-level-update-el-date|Boolean|【待定】是否强制刷新Date组件|false||【待定】当前组件封装层数过多时，element-date日期控件会出现不能及时刷新的问题，此时需要设置该属性为 true|
            `
          },
          {
            h2: '2.`ld-forms`的`layout`参数的通用参数说明',
            md: `|关键字|类型|解释|默认值|是否必须|说明|
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
            h1: '三.`layout`参数不同`type`值的使用和说明',
            tip_d: '`ld-forms`的`layout`参数组成多彩的表单输入组件，组件的不同通过其中的`type`来进行控制。首先`layout`数据格式如下：',
            javascript: `
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
            h2: '1.`type="text"`文本输入框；',
            h3: '1.1示例',
            slot: 'text',
            tip_d: '密码框也是文本输入框的一种，只需要添加 password=true即可',
            javascript: `
            //创建一个基础的文本输入框，只需要如下几个简单的属性配置即可
            layout: [{
               //必填属性
               prop:'userName',
               label:'姓名',
               type:'text',
               //其他更多功能可使用上文的通用属性
             },
             {
                //必填属性
                prop:'password',
                label:'密码',
                type:'text',
                password:true,
                //其他更多功能可使用上文的通用属性
              }]
            `.replace(/^          /gm, ''),
            'H3': '1.2特有属性',
            md: `|关键字|类型|解释|默认值|是否必须|说明|
             |-|-|-|-|-|-|
             |password|Boolean|是否密码输入框|false|||`
          },
          {
            h2: '2.`type="textarea"`文本域；',
            h3: '2.1示例',
            slot: 'textarea',
            javascript: `
            //创建一个基础的文本输入框，只需要如下几个简单的属性配置即可
            layout: [{
               //必填属性
               prop:'textareaInfo',
               label:'文本信息',
               type:'textarea',

               //文本域的行数
               rows:5,
               //其他更多功能可使用上文的通用属性
             }]
            `.replace(/^          /gm, ''),
            'H3': '2.2特有属性',
            md: `|关键字|类型|解释|默认值|是否必须|说明|
            |-|-|-|-|-|-|
            |rows|Number|文本域行数|4||文本域显示的行数,只是显示在界面上的可输入的行数，当超过设定的行数后会出现滚动条|`
          },
          {
            h2: '3.`type="select"`下拉框；',
            h3: '3.1示例',
            tip_d: '下拉框，可以选择使用静态数据和远程加载数据两种方式，',
            tip_p: '使用静态地址和动态地址两个示例',
            slot: 'select',
            javascript: `
            layout:[{
                //必填属性
                prop:'select', //[String]
                label:'静态数据',//[String]
                type:'select',
                //方式一
                options:[
                 {label:'文本一',value:'1'},
                 {label:'文本二',value:'2'},
                 {label:'文本三',value:'3'},
                 {label:'文本四',value:'4'},
                ],
              //其他更多功能可使用上文的通用属性
            },
            {
              //必填属性
              prop:'select2', //String
              label:'动态用户数据',//String
              type:'select',
              //方式二
              getOptions:{
                remotePath: '/api/select', //请求方法，同样支持第三方请求
                remoteMethodType: "get",//请求类型
                remoteParam:{},//参数
                label:'\${name}(\${phone})',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
                value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
                //获取数据后处理函数
                getDataAfter:(res)=>{
                   return res.data;
                }
              }
            }]`.replace(/^          /gm, ''),
            'H3': '3.2特有属性',
            md: `|关键字|类型|解释|默认值|是否必须|说明|
            |-|-|-|-|-|-|
            |options|Array[Object]|下拉框选项值|||下拉框options的选项值，object:{label:'',value:''},label:是现实出现的文字，value:是选择后获取到的值|
            |getOptions|Object|远程加载下拉框选项值|||下拉框options的选项值[详情查看select的getOptions的示例代码](##select)|
            |allowCreate   |Boolean|是否允许用户创建新条目，需配合 filterable 使用|false||详情参考[Element-UI select的相关属性](https://element.eleme.cn/#/zh-CN/component/select)|
            |filterable    |Boolean|是否可搜索|false||详情参考[Element-UI select的相关属性](https://element.eleme.cn/#/zh-CN/component/select)|
            |multiple      |Boolean|是否多选|false||详情参考[Element-UI select的相关属性](https://element.eleme.cn/#/zh-CN/component/select)|`
          },
          {
            h2: '4.`type="radio"`单选框；',
            h3: '4.1示例',
            tip_d: '单选框，可以选择使用静态数据和远程加载数据两种方式，',
            tip_p: '使用静态地址和动态地址两个示例',
            slot: 'radio',
            javascript: `
           layout:[{
               //必填属性
               prop:'radio', //String
               label:'静态数据',//String
               type:'radio',
               //方式一
               options:[
                {label:'文本一',value:'1'},
                {label:'文本二',value:'2'},
                {label:'文本三',value:'3'},
                {label:'文本四',value:'4'},
               ],
             //其他更多功能可使用上文的通用属性
           },
           {
             //必填属性
             prop:'radio2', //String
             label:'动态用户数据',//String
             type:'radio',
             //方式二
             getOptions:{
               remotePath: '/api/select', //请求方法，同样支持第三方请求
               remoteMethodType: "get",//请求类型
               remoteParam:{},//参数
               label:'\${name}(\${phone})',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
               value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
               //获取数据后处理函数
               getDataAfter:(res)=>{
                  return res.data;
               }
             },
             {
               //必填属性
               prop:'radio3', //String
               label:'按钮样式',//String
               type:'radio',
               isButton:true,
               getOptions:{
                 remotePath: '/api/select', //请求方法，同样支持第三方请求
                 remoteMethodType: "get",//请求类型
                 remoteParam:{},//参数
                 label:'\${name}(\${phone})',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
                 value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
                 //获取数据后处理函数
                 getDataAfter:(res)=>{
                    return res.data;
                 }
               }
           }]`.replace(/^          /gm, ''),
            H3: '4.2特有属性',
            md: `|关键字|解释|类型|默认值|是否必须|说明|
            |-|-|-|-|-|-|
            |options|Array[Object]|选项值|||options的选项值，object:{label:'',value:''},label:是现实出现的文字，value:是选择后获取到的值|
            |getOptions|Object|远程加载选项值|||options的选项值，options的选项值与select值配置方式一致。[详情查看select的getOptions的示例代码](##select)|
            |isButton   |Boolean|是否按钮样式|false|||`
          },
          {
            h2: '5.`type="checkbox"`复选框；',
            h3: '5.1示例',
            tip_d: '复选框，可以选择使用静态数据和远程加载数据两种方式，',
            tip_p: '使用静态地址和动态地址两个示例',
            slot: 'checkbox',
            javascript: `
            layout:[{
                //必填属性
                prop:'checkbox', //String
                label:'静态数据',//String
                type:'checkbox',
                parseType:'split',
                //方式一
                options:[
                 {label:'文本一',value:'1'},
                 {label:'文本二',value:'2'},
                 {label:'文本三',value:'3'},
                 {label:'文本四',value:'4'},
                ],
              //其他更多功能可使用上文的通用属性
            },
            {
              //必填属性
              prop:'checkbox2', //String
              label:'动态用户数据',//String
              type:'checkbox',
              parseType:'split',
              //方式二
              getOptions:{
                remotePath: '/api/select', //请求方法，同样支持第三方请求
                remoteMethodType: "get",//请求类型
                remoteParam:{},//参数
                label:'\${name}(\${phone})',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
                value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
                //获取数据后处理函数
                getDataAfter:(res)=>{
                   return res.data;
                }
            }]`.replace(/^          /gm, ''),
            H3: '5.2特有属性',
            md: `|关键字|解释|类型|默认值|是否必须|说明|
            |-|-|-|-|-|-|
            |parseType|String|数据处理方式||√|\`split\`,\`json\`,使用不同的策略处理数据。<br/>比如有属性value:'1\\|2\\|3'，此时使用\`split\`;<br/>又有数据value:['1','2','3'],此时使用\`json\`|
            |options|Array[Object]|选项值|||options的选项值，object:{label:'',value:''},label:是现实出现的文字，value:是选择后获取到的值|
            |getOptions|Object|远程加载框选项值|||options的选项值与select值配置方式一致。[详情查看select的getOptions的示例代码](##select)|
            `
          },
          {
            h2: '6.`type="date"`日期；',
            h3: '6.1示例',
            tip_d: '日期由`dateType`决定日期类型，支持Element-ui中常见的数据类型,支持`year/month/date/dates/week/datetime/datetimerange/daterange/monthrange`等格式',
            slot: 'date',
            javascript: `
            layout:[
              {prop:'date', type:'date',label:'date',dateType:'date'},
              {prop:'date2',type:'date',label:'datetime',dateType:'datetime'},
              {prop:'date3',type:'date',label:'year',dateType:'year'},
              {prop:'date4',type:'date',label:'month',dateType:'month'},
              {prop:'date5',type:'date',label:'week',dateType:'week'},
              {prop:'date6',type:'date',label:'dates',dateType:'dates'},
              {prop:'date7',type:'date',label:'daterange',dateType:'daterange'},
              {prop:'date8',type:'date',label:'monthrange',dateType:'monthrange'},
              {prop:'date9',type:'date',label:'datetimerange',dateType:'datetimerange'}
            ]`.replace(/^          /gm, ''),
          },
          {
            h3: '6.2日期范围类型的提示文字设置(有默认值，可不设置)',
            tip_d: '范围类型的日期有：`datetimerange/daterange/monthrange`,只需添加如下属性即可：`startPlaceholder`(开始文字)`endPlaceholder`(结束文字)`rangeSeparator`(分割文字)',
            javascript: `
            layout:[
             {prop:'date7',type:'date',label:'daterange',dateType:'daterange',startPlaceholder:'开始日期',endPlaceholder:'结束日期',rangeSeparator:'至'},
             {prop:'date8',type:'date',label:'monthrange',dateType:'monthrange',startPlaceholder:'开始月份',endPlaceholder:'结束月份',rangeSeparator:'至'},
             {prop:'date9',type:'date',label:'datetimerange',dateType:'datetimerange',startPlaceholder:'开始时间',endPlaceholder:'结束时间',rangeSeparator:'至'}
            ]`.replace(/^          /gm, ''),
          },
          {
            h3: '6.3带快捷选项的日期选择`pickerOptions`',
            tip_d: '日期快捷键(具体参考Element-ui中的https://element.eleme.cn/#/zh-CN/component/date-picker的`picker-options`)',
            javascript: `
            layout:[
             {
               prop: 'activityTime',type: 'date',dateType: 'datetime',label: '活动时间',
               //通过pickerOptions设置日期快捷键；具体参考Element-ui中的https://element.eleme.cn/#/zh-CN/component/date-picker
               pickerOptions: {
                 shortcuts: [{
                   text: '去年',
                   onClick(picker) {
                     const start = new Date();
                     start.setFullYear(start.getFullYear() - 1);
                     picker.$emit('pick', start);
                   }
                 }, {
                   text: '今年',
                   onClick(picker) {
                     const date = new Date();
                     picker.$emit('pick', date);
                   }
                 }, {
                   text: '最近六个月',
                   onClick(picker) {
                     const start = new Date();
                     start.setMonth(start.getMonth() - 6);
                     picker.$emit('pick', start);
                   }
                 }]
               },
             }
            ]`.replace(/^          /gm, ''),
          },
          {
            H3: '6.4特有属性',
            md: `|关键字|类型|解释|可选址|默认值|是否必须|说明|
            |-|-|-|-|-|-|-|
            |align|String|对齐方式|left, center, right|left||对齐方式|
            |dateType|String|日期类型|year/month/date<br/>/dates/week/datetime<br/>/datetimerange/daterange<br/>/monthrange|date||日期类型|
            |pickerOptions|Object|日期快捷键||||详情参考[Element-UI的日期选择器picker-options](https://element.eleme.cn/#/zh-CN/component/date-picker)|
            |startPlaceholder|String|范围日期的<br/>开始提示文字|||datetimerange:开始时间,<br/>monthrange:开始月份,<br/>datetimerange:开始日期|当\`dateType='datetimerange'\`\\|\`dateType='monthrange'\`\\|\`dateType='daterange'\`时有效|
            |endPlaceholder|String|范围日期的<br/>结束提示文字|||datetimerange:结束时间,<br/>monthrange:结束月份,<br/>datetimerange:结束日期|当\`dateType='datetimerange'\`\\|\`dateType='monthrange'\`\\|\`dateType='daterange'\`时有效|
            |rangeSeparator|String|范围日期的<br/>间隔提示文字|||至|当\`dateType='datetimerange'\`\\|\`dateType='monthrange'\`\\|\`dateType='daterange'\`时有效|
            `,
          },
          {
            h2: '7.`type="icon"`图标；',
            tip_d: '仅支持通用属性',
            h3: '7.1示例',
            slot: 'icon',
            javascript: `
            layout:[
              {prop:'icon',label:'图标',type:'icon'}
            ]`.replace(/^          /gm, ''),
          },
          {
            h2: '8.`type="tag"`标签；',
            h3: '8.1示例',
            slot: 'tag',
            javascript: `
            layout:[
              {prop:'tag1',label:'姓氏',type:'tag',value:'张|王|李|赵',parseType:'array'},
              {prop:'tag2',label:'名称',type:'tag',value:['毛毛','婷婷','吉吉'],parseType:'array'}
            ]`.replace(/^          /gm, ''),
            tip_d: '注意：此处的`parseType`表示需要将value值转换成`array`类型的数据'
          },
          {
            h2: '9.`type="address"`地址；',
            h3: '9.1示例',
            slot: 'address',
            javascript: `
            layout:[
              {prop:'address1',label:'地址',type:'address',value:'甘肃省,兰州市,城关区'},
              {prop:'town',label:'详细地址',type:'textarea',rows:5}
            ]`.replace(/^          /gm, ''),
          },
          {
            h2: '10.`type="sysdate"`系统时间(只读)；',
            tipd: '系统日期；在使用创建日期和修改日期时非常有用；',
            h3: '10.1示例',
            slot: 'sysdate',
            javascript: `
           layout:[
             {prop:'sysdate1',label:'创建日期',type:'sysdate',update:false,value:'2021-05-07 16:37:00'},
             {prop:'sysdate2',label:'修改日期',type:'sysdate',update:true},
           ]`.replace(/^         /gm, ''),
            H3: '10.2特有属性',
            md: `|参数|说明	|类型|可选值|默认值|
           |-|-|-|-|-|
           |update|是否更新，true:会动态更新，false:只会在没有值得情况下获取数据|Boolean|	true,false|	—|
           |dateType|日期类型 ，date:yyy-MM-dd ; time:HH:mm:ss ; datetime:yyyy-MM-dd HH:mm:ss |string|	date,time,datetime|	datetime|
           `
          },
          {
            h2: '11.`type="image"`图片；',
            h3: '11.1示例',
            slot: 'image',
            javascript: `
           layout:[
             {prop:'image1',label:'头像',type:'image',limit:2},
           ]`.replace(/^         /gm, ''),
            H3: '11.2特有属性',
            md: `|参数|说明	|类型|可选值|默认值|
          |-|-|-|-|-|
          |limit|图片最大选择数量|Number||1|
           `
          },
          {
            h2: '12.`type="number"`计数器；',
            h3: '12.1示例',
            slot: 'number',
            javascript: `
            layout:[
              {prop:'number1',label:'数量',type:'number',min:1},
            ]`.replace(/^         /gm, ''),
            H3: '12.2特有属性',
            md: `|参数|说明	|类型|可选值|默认值|
            |-|-|-|-|-|
            |max|最大值|Number||	1000|
            |min|最小值|Number||	0|
            |precision|精度，小数点后保留位数|Number||	0|
            |step|步长|Number||1|
            |stepStrictly|是否只能输入 step 的倍数[Element-UI计数器的step-strictly](https://element.eleme.cn/#/zh-CN/component/input-number)|Boolean||faslse|`
          },
          {
            h2: '13.`type="switch"`开关；',
            h3: '13.1示例',
            slot: 'switch',
            javascript: `
            layout:[
              {prop:'switch1',label:'开关1',type:'switch'},
              {prop:'switch2',label:'开关2',type:'switch',activeText:'开启',inactiveText:'关闭'},
            ]`.replace(/^         /gm, ''),
            H3: '13.2特有属性',
            md: `|参数|说明	|类型|可选值|默认值|是否必须|
            |-|-|-|-|-|-|
            |activeText|switch 打开时的文字描述|string|-|-|可为空|
            |inactiveText|switch 关闭时的文字描述|string|-|-|可为空||`
          },
          {
            h2: '14.`type="slider"`滑块；',
            h3: '14.1示例',
            slot: 'slider',
            javascript: `
            layout:[
              {prop:'slider1',label:'滑块1',type:'slider',showStops:false,value:30},
              {prop:'slider2',label:'滑块2',type:'slider',showStops:true,value:50,formatTooltip:(val)=>{return val+'%'}},
              {prop:'slider2',label:'滑块2',type:'slider',showStops:true,value:80,marks:{20:'20',50:'50',80:'80'}},
            ]`.replace(/^         /gm, ''),
            H3: '14.2特有属性',
            md: `|参数|说明	|类型|可选值|默认值|
            |-|-|-|-|-|
            |max|最大值|Number||	1000|
            |min|最小值|Number||	0|
            |showStops|显示间断点|Boolean||true|
            |formatTooltip|	格式化 tooltip message|function(value)|-|-|
            |marks|标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式[Element-UI滑块的marks](https://element.eleme.cn/#/zh-CN/component/slider)|object|-|-|`
          },
          {
            h2: '15.`type="rate"`评分；',
            h3: '15.1示例',
            slot: 'rate',
            javascript: `
            layout:[
              {prop:'rate1',label:'评分1',type:'rate'},
              {prop:'rate2',label:'评分1',type:'rate',showText:true},
              {prop:'rate3',label:'评分1',type:'rate',showScore:true},
              {prop:'rate4',label:'评分1',type:'rate',showText:true,texts:['一星','二星','三星','四星','五星']},
              {prop:'rate5',label:'评分1',type:'rate',showText:true,colors:['green','blue','orange']}
            ]`.replace(/^         /gm, ''),
            H3: '15.2特有属性',
            md: `|参数|说明	|类型|可选值|默认值|
            |-|-|-|-|-|
            |showText|是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容|boolean||	false|
            |showScore|是否显示当前分数，show-score 和 show-text 不能同时为真|boolean||	false|
            |texts|辅助文字数组|array||['极差', '失望', '一般', '满意', '惊喜']|
            |colors|icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色|array/object||['#F7BA2A', '#F7BA2A', '#F7BA2A']|`
          },
          {
            h2: '16.`type="color"`颜色选择器；',
            h3: '16.1示例',
            slot: 'color',
            javascript: `
          layout:[
            {prop:'color1',label:'颜色1',type:'color',value:'red'},
            {prop:'color2',label:'颜色2',type:'color',showAlpha:false,value:'blue'},
            {prop:'color3',label:'颜色3',type:'color',predefine:['#ff4500','#ff8c00','#ffd700','#90ee90','#00ced1','#1e90ff','#c71585','rgba(255, 69, 0, 0.68)','rgb(255, 120, 0)','hsv(51, 100, 98)','hsva(120, 40, 94, 0.5)','hsl(181, 100%, 37%)','hsla(209, 100%, 56%, 0.73)','#c7158577']},
          ]`.replace(/^         /gm, ''),
            H3: '16.2特有属性',
            md: `|参数|说明	|类型|可选值|默认值|
          |-|-|-|-|-|
          |showAlpha|是否支持透明度|boolean||true|
          |predefine|预定义颜色|Array||['#ff4500','#ff8c00','#ffd700','#90ee90','#00ced1','#1e90ff','#c71585','rgba(255, 69, 0, 0.68)','rgb(255, 120, 0)','hsv(51, 100, 98)','hsva(120, 40, 94, 0.5)','hsl(181, 100%, 37%)','hsla(209, 100%, 56%, 0.73)','#c7158577']|
          `
          },
          {
            h2: '17.`type="transfer"`穿梭框；',
            h3: '17.1示例',
            slot: 'transfer',
            javascript: `
           layout:[
             {
               prop: 'transferTest', type: 'transfer',label: '穿梭框',parseType: 'split',
               options: [
                 {label: '菜单编辑',value: '1'},
                 {label: '菜单修改',value: '2'},
                 {label: '菜单新增',value: '3'},
               ],
               splitChart: ','
             },
           ]`.replace(/^         /gm, ''),
            H3: '17.2特有属性',
            md: `|参数|说明	|类型|可选值|默认值|
          |-|-|-|-|-|
          |title|标题,字符串是需要根据配置的分隔字符隔开|String,Array||['原数据','设置数据']或者'原数据\|设置数据'|
          |options|预定义值|Array|||
          |title|标题,字符串是需要根据配置的分隔字符隔开|String,Array||['原数据','设置数据']或者'原数据\|设置数据'|
          |leftDefaultChecked|初始状态下左侧列表的已勾选项的 key 数组|array||[]|
          |rightDefaultChecked|初始状态下右侧列表的已勾选项的 key 数组|array||[]|
          `
          },
          {
            h2: '18.`type="param "`数据组件；',
            h3: '18.1示例',
            slot: 'param',
            javascript: `
           layout:[
             {
               prop: 'likeys',
               type: 'param',
               label: '数组',
               dataType: 'array',
               parseType: 'json',
               value: JSON.stringify(["参数。。。", "参数1"])
             },
             {
               prop: 'likeys2',
               type: 'param',
               label: '对象',
               dataType: 'object',
               parseType: 'json',
               value: JSON.stringify({a:1,b:2,c:'张三'})
             },
           ]`.replace(/^         /gm, ''),
            H3: '18.2特有属性',
            md: `|参数|说明	|类型|可选值|默认值|
          |-|-|-|-|-|
          |dataType|数据类型,注意是\`dataType\`,不是\`dateType\`和日期没有关系|String|object,array|-|
          `
          },
          {
            h2: '19.`type="datakey "`数据键；',
            tip_d: '只用来展示数据',
            h3: '19.1示例',
            slot: 'datakey',
            javascript: `
           layout:[
             {prop: 'datakey1', type: 'datakey',label: '数据键',value: 'EC62246E-876A-436C-AACF-4C8E57BB290EB'},
           ]`.replace(/^         /gm, ''),
          },
          {
            h2: '20.`type="tip "`标注文字；',
            tip_d: '文字提示内容；可以在from表单中独居一个form子元素，也可用来说明某一个元素相关信息；',
            h3: '20.1示例',
            slot: 'tip',
            javascript: `
           layout:[
             {prop:'tip',label:'提示文字',type:'tip',tip:\`<div style="color:red">这是一段测试文字</div>\`,tipClass:'tip-p b-p1'},
             {prop:'tip2',label:'头部文字',type:'text',tip:'这是文本框顶部的提示文字',tipClass:'tip-p b-p1'}
           ]`.replace(/^         /gm, ''),
          },
          {
            h2: '21.`type="slot "`插槽；',
            tip_d: '`slot`可以让你自由的指定其他类型的组件',
            h3: '21.1示例',
            tip_i:'这里只做一个简单的获取插槽数据的示例。',
            slot: 'slots',
            javascript: `
            layout:[
              {prop:'customSlot', label:'自定义插槽',type:'slot'}
            ]`.replace(/^         /gm, ''),
            tipd:'需要在`ld-forms`组件中实现插槽',
            html:`
            <ld-forms ref="slots" :form="{}" :layout="[{prop:'customSlot', label:'自定义插槽',type:'slot'}]">
              <!-- 这里的插槽名称由 prop的值决定 -->
              <template #customSlot="e">
                <div>插槽数据：{{e}} </div>
                 <!-- 可以通过作用域插槽获取到的值，进行自由设置布局 -->
              </template>
            </ld-forms>
            `.replace(/^         /gm, ''),
          },
          {
            h1:'四.`layout`参数数据校验(`regex`关键字)',
            tip:'在表单使用过程中，通常需要对数据进行校验，此时可以通过`regex`关键字进行配置',
            tip_d:'`regex`关键字的类型有【String,Regex,function】',
            h2:'1.String:`regex`',
            tipd:'当`regex`值为字符串时，此时会有两种情况；1.纯字符串，2.字符串类型的正则表达式，形如 `"/abc/i"`、`"/abc/igms"`、`"/abc/"`等',
            slot:'regexString',
            javascript:`
            layout:[
              //纯字符串，会进行数据相等操作；也就是说，只有在输入的值和regex值相同时才会验证通过。这种使用场景较少
              {prop:'stringRegex1',label:'字符串比对',type:'text',regex:'张三',require:true,tip:'比较值只能为张三',tipClass:'tip-p b-p1'},
              //字符串类型的正则表达式, 以 / 开头，以 / 结尾。 并结尾使用 igms修饰的，会判定为正则表达式，并转换成正则对象RegExp,之后进行正则验证。
              {prop:'stringRegex2',label:'字符正则',type:'text',regex:'/^[a-z].*[0-9]$/i',require:true,tip:'字母开头，数字结尾，忽略大小写',tipClass:'tip-p b-p1'},
            ]`.replace(/^         /gm, ''),
          },{
            h2:'2.RegExp:`regex`',
            tipd:'当值为正则表达式时，会通过正则进行校验数据是否通过！【推荐使用】',
            slot:'regexRegExp',
            javascript:`
            layout:[
              {prop:'regexRegExp',label:'手机号码',type:'text',regex:/^1[0-9]{10}$/,msg:'必须以数字1开头的11位数字！'},
              {prop:'regexRegExp2',label:'用户密码',type:'text',password:true,regex:/^[^.'"\\/#!%]{6,12}$/,msg:'不包含特殊符号的6-12为字符'},
            ]`.replace(/^         /gm, ''),
          },
          {
            h2:'3.Function:`regex`',
            tipd:'当值为函数时，会将当前值作为入参，并调用验证函数，函数需要返回true和false，表示是否验证通过',
            slot:'regexFunction',
            javascript:`
            layout:[
              {prop:'regexFunction',label:'只能输入奇数',type:'text',regex:(val)=>{return val%2!=0},msg:'只能输入奇数！'},
              {prop:'regexFunction2',label:'范围数字',type:'text',regex:(val)=>{return [1,3,5,7,9].includes(val)},msg:'不是包含在1,3,5,7,9中的数字'},
            ]`.replace(/^         /gm, ''),
          },
          {
            h1:'五.`layout`的非空验证，`require`',
            tipd:'当`require="true"`时表示，不能为空;`require="false"`或者不设置时可为空',
            slot:'require',
            javascript:`
            layout:[
              //当require不设置时，默认可为空
              {prop:'require',label:'可为空',type:'text',require:false},
              {prop:'require2',label:'不能为空',type:'text',require:true},
            ]`.replace(/^         /gm, ''),
          },
          {
            h1:'六.`layout`通过`change`设置组件联动和联动后的数据更改',
            tip_d:'通常在使用过程中，需要通过数据联动。此时需要通过`Function:change`进行设置',
          },
          {
            h2:'1.联动修改组件属性',
            slot:'changeProperty',
            javascript:`
            layout:[
              { prop: 'testRadio',type: 'radio',label: '特殊资源',
                options: [
                  {label: '线下场地免费',value: '1'},
                  {label: '线上品牌商赞助',value: '0'}
                ],
                //联动事件
                change:(val,event)=>{
                  return {
                        //prop:{元素具备的属性}
                    addressName:{
                      visabled:val==1, //当 val==1时，将组件prop='addressName'组件的visabled(可见)设为true(显示)
                      //也可以修复其他 目标组件所具备的属性 如：visabled require regex msg type value 等
                    },
                    sponsorship:{
                      visabled:val==0, //当 val==0时，将组件prop='sponsorship'组件的visabled(可见)设为true(显示)
                      //也可以修复其他 目标组件所具备的属性 如：visabled require regex msg type value 等
                    },
                  }
                },
                value:'1'
              },
              //被联动组件
              { prop: 'addressName',type: 'textarea',label: '场地名称',visabled:true,},
              //被联动组件
              { prop: 'sponsorship',type: 'text',label: '赞助商名称',visabled:false,},
            ]`.replace(/^         /gm, ''),
          },
          {
            h2:'2.联动控制整个表单的数据',
            slot:'changeForms',
            javascript:`
            layout:[
              { prop: 'testRadio',type: 'radio',label: '特殊资源',
                options: [
                  {label: '线下场地免费',value: '1'},
                  {label: '线上品牌商赞助',value: '0'}
                ],
                //联动事件
                change:(val,event)=>{
                  return {
                    /**
                     * 通过form关键字进行操作
                     * 可使用Function(value,event)函数  或者  Object对象进行操作
                     *
                     */
                    //方式1： 通过Object进行设置
                    form:{
                        //prop:value
                       textInfo:val==1 ? '123456' : 'abcde',
                       //你需要手动为发起联动的组件赋值
                       testRadio:val,
                     },
                     //方式2；使用function(value,event)函数设置元素的值
                     form:(value,event)=>{
                       let form=event['form'];
                       form['textInfo']=val==1 ? '123456' : 'abcde';
                       return form;
                     }
                  }
                }
              },
              //被联动组件
              {prop: 'textInfo',type: 'text',label: '场地名称',visabled:true},
            ]`.replace(/^         /gm, ''),
          },
          {
            h2:'3.联动控制整个表单的布局【不推荐】',
            tip_d:'联动控制整个表单布局，不建议使用该方式，该方式的使用相当于整个布局的修改，你可以通过两个布局参数进行切换。',
            slot:'changeLayout',
            javascript:`
            layout:[
              {prop: 'testRadio',type: 'radio',label: '特殊资源',
                options: [
                  {label: '线下场地免费',value: '1'},
                  {label: '线上品牌商赞助',value: '0'}
                ],
                //联动事件
                change:(val,event)=>{
                  return {
                    /**
                     * 通过layout关键字进行操作
                     * 与from相似，同样可使用Function(value,event)函数  或者  Array对象进行操作
                     *
                     */
                    //方式1： 通过Object进行设置
                    layout:[
                      //{}
                      //此时会将联动发起组件也替换掉
                      {prop:'textInfo',type:'select',options:[{label:'测试1',value:'1'},{label:'测试2',value:'2'}],label:'修改为select'}
                     ],

                    //方式2；使用function(value,event)函数设置元素的值
                    layout: (value, event) => {
                      let layout = event['layout'];
                      let item = layout.filter(item => item.prop == 'textInfo');
                      if (item.length <= 0) {
                        return layout;
                      }
                      let index = layout.indexOf(item[0]);
                      item=item[0];
                      //重新修改textInfo结构
                      item['type'] = val != 1 ? 'text' : 'select';
                      item['label'] = val != 1 ? '文本框': '修改为select';
                      item['readonly'] = false;
                      item['options'] = val != 1 ? [] : [{
                        label: '测试1',
                        value: '1'
                      }, {
                        label: '测试2',
                        value: '2'
                      }];
                      layout[index] = item;
                      return layout;
                    }
                  }
                }
              },
              {prop: 'textInfo',type: 'text',label: '场地名称',visabled:true},
            ]`.replace(/^         /gm, ''),
          },
          {
            h2:'4.联动示例',
            slot:'changeTest',
            javascript:`
            layout: [
              {prop: 'textInfo',type: 'text',tip:'这是被操纵的悲惨组件',label: '文本框',readonly: true,visabled: true,},
              {prop: 'select',tip:'控制属性和验证规则',label: '属性验证联动',type: 'select',options:
                [
                  {label: '修改提示名称',value: '1'},
                  {label: '修改为只读',value: '2'},
                  {label: '设置为必填项',value: '3'},
                  {label: '隐藏文本框',value: '4'},
                  {label: '使用函数验证4-6为数字',value: '5'},
                  {label: '使用正则验证4-6为汉字',value: '6'},
                  {label: '修改为密码框',value: '7'},
                ],
                change: (val, event) => {
                  return {
                    textInfo: {
                      label: val == '1' ? '修改后的名称' : '文本框',
                      readonly: val == '2',
                      require: val == '3'||val=='7',
                      visabled: val != '4',
                      password:val=='7',
                      //使用正则和 函数混合使用
                      regex: val=='6' ? /^[\u4e00-\u9fa5]{4,6}$/ : (textVal) => {
                        return function(textVal) {
                          if (val != "5"&&val!='7') {
                            return true;
                          }
                          return /^[0-9]{4,6}$/.test(textVal);
                        }
                      },
                      msg: val=='6' ? '名称必须为汉字' : '',
                    },
                  }
                }
              },
              {prop: 'changeType',label: '数据布局联动',type: 'select',tip:\`通过<span class='c-d p2'>form</span><span class='c-d p2'>layout</span>控制表单布局和数据\`,
                options: [
                  {label: '修改为select',value: '1'},
                  {label: '修改为text',value: '2'}
                ],
                change: (val, event) => {
                  return {
                    /**
                     * 通过form关键字进行操作
                     * 可使用Function(value,event)函数  或者  Object对象进行操作
                     *
                     */

                    //方式1： 通过Object进行设置
                    // form: {
                    //   textInfo: ['7', '8', '9'].includes(val) ? '123456' : ''
                    // },
                    //方式2；使用function(value,event)函数设置元素的值
                    form: (value, event) => {
                      let form = event['form'];
                      form['textInfo'] =val==2 ? '123456' : '';
                      return form;
                    },
                    /**
                     * 通过layout关键字进行操作
                     * 与from相似，同样可使用Function(value,event)函数  或者  Array对象进行操作
                     *
                     */
                    //方式1： 通过Object进行设置
                    // layout: [
                    //   {
                    //     prop: 'textInfo',
                    //     type: 'select',
                    //     options: [{
                    //       label: '测试1',
                    //       value: '1'
                    //     }, {
                    //       label: '测试2',
                    //       value: '2'
                    //     }],
                    //     label: '修改为select'
                    //   }
                    // ],

                    //方式2；使用function(value,event)函数设置元素的值
                    layout: (value, event) => {
                      let layout = event['layout'];
                      let item = layout.filter(item => item.prop == 'textInfo');
                      if (item.length <= 0) {
                        return layout;
                      }
                      let index = layout.indexOf(item[0]);
                      item=item[0];
                      //重新修改textInfo结构
                      item['type'] = val != 1 ? 'text' : 'select';
                      item['label'] = val != 1 ? '文本框': '修改为select';
                      item['readonly'] = false;
                      item['options'] = val != 1 ? [] : [{
                        label: '测试1',
                        value: '1'
                      }, {
                        label: '测试2',
                        value: '2'
                      }];
                      layout[index] = item;
                      return layout;
                    }
                  }
                }

              }
            ]`.replace(/^         /gm, ''),
          },
          {
            h1: "七.`ld-forms`自动保存装饰函数",
            tip:'当时用自动保存时，我们只需要设置参数和请求方法，即可实现整个表单的数据保存',
          },
          {
            h2:'1.`saveFormsDataBefore` 保存数据之前修饰数据的方法',
            tipd:'保存数据之前修饰数据的方法,可以通过两种方式进行处理；1.全局处理；2.当前表单处理；<br/>注意：两者具备优先级；优先使用`ld-forms`的`save-forms-data-before`参数设置，后使用全局处理。两者只选其一。',
            h3:'1.1全局处理',
            javascript:`
            this.$ld.saveFormsDataBefore=function(data){
            	data['createBy']="1";//为所有的保存数据添加创建人
            	return data;
            }`.replace(/^         /gm, ''),
            H3:'1.2当前表单处理',
            html:`
            <ld-forms :save-forms-data-before="saveBefore" :clos="2" ref="changeForms" :form="{}" :layout="changeForms"> </ld-forms>
            `.replace(/^         /gm, ''),
          },
          {
            javascript:`
            export default{
              data(){
                return {
                  //使用属性处理
                  saveBefore:function(data){
                    data['updateTime']=new Date();//为当前表单添加修改日期
                    return data;
                  }
                }
              }
            }
            `.replace(/^         /gm, ''),
          },
          {
            h2:'2.`saveFormsDataAfter` 保存完数据之后处理数据的方法',
            tipd:'保存数据之后修饰数据的方法,可以通过两种方式进行处理；1.全局处理；2.当前表单处理；<br/>注意：两者具备优先级；优先使用`ld-forms`的`save-forms-data-after`参数设置，后使用全局处理。两者只选其一。',
            h3:'2.1全局处理',
            javascript:`
            this.$ld.saveFormsDataAfter=function(data){
            	if(result.code==0){
            			this.$message.success("保存成功！");
            			return;
            		}
            		this.$message.error("保存失败！");
            		return;
            }`.replace(/^         /gm, ''),
            H3:'2.2当前表单处理',
            html:`
            <ld-forms :save-forms-data-after="saveAfter" :clos="2" ref="changeForms" :form="{}" :layout="changeForms"> </ld-forms>
            `.replace(/^         /gm, ''),
          },
          {
            javascript:`
            export default{
              data(){
                return {
                  //使用属性处理
                  saveAfter:function(data){
                    if(result.code==0){
                        this.$message.success("保存成功！");
                        return;
                      }
                      this.$message.error("保存失败！");
                      return;
                  }
                }
              }
            }
            `.replace(/^         /gm, ''),
          },
          {
            h1:"八.补充",
            h2:'联动参数动态注入',
            tip:'当有一个远程加载数据和当前联动值相关时。需要改方法。',
            tip_d:'比如有如下场景。动态加载`学生信息`，且`学生信息`和`用户`选择的`班级`息息相关，即：只能动态加载用户选择班级的学生信息。此时可以通过如下配置进行',
            javascript:`
            layout:[
              //班级下拉框
              {
                prop:'classId',label:'班级',type:'select',
                 //班级数据动态获取
                getOptions:{
                  remotePath: '/clzss/get', //请求方法
                  remoteMethodType: "get",//请求类型
                  remoteParam:{},//参数
                  label:'\${names}(\${id})',//下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
                  value:'\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
                },
                //联动事件
                change:(val)=>{
                  return {
                    //当班级改变时，联动调用远程加载数据，加载 studentId的数据
                    changeOptions:{
                      prop:'studentId'
                    }
                  }
                }
              },
              //学生下拉框
              {
                prop:'studentId',label:'学生名称',type:'select',
                //学生数据动态获取
                getOptions:{
                	remotePath: '/clzss/get',
                	remoteMethodType: "get",
                  //此时需要在这里指定需要注入的参数名称'\${classId}',使用\${xxx}来让系统识别是需要注入的内容，而注入的值则会从this.forms对象中获取
                	remoteParam:{
                    '\${classId}':''
                  },//参数
                	label:'\${names}',
                	value:'\${id}',
                },
              }
            ]
            `.replace(/^         /gm, ''),
          },
          {
            slot: 'foot',

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
      this.$set(this.doc[1], 'javascript', res.testJavascript1);
    }
  }
</script>

<style>
  .w-400 {
    width: 400px;
  }
</style>
