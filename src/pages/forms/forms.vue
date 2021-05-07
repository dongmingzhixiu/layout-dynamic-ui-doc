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
            |auto-save|Boolean|【待定】是否自动保存|true||【待定】该参数暂时无效，相关功能，正在开发中.|
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
