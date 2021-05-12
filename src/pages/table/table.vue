<template>
  <div class="box-b p10 h ld-doc">
    <el-card class="doc w h">
      <ld-doc :doc="doc" class="w h">

        <template v-slot:first="e">
          <div class="w" style="height: 500px;">
            <ld-table :layout="first" :list="list" :auto-load-data-api="autoLoadDataApi"
              :show-page-helper="showPageHelper" :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
        </template>

        <template v-slot:hidePageHelper="e">
          <div class="w" style="height: 500px;">
            <ld-table :layout="first" :list="list" :auto-load-data-api="autoLoadDataApi" :show-page-helper="false"
              :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
        </template>


        <template v-slot:showPageHelper="e">
          <div class="w" style="height: 500px;">
            <ld-table :layout="first" :list="list" :auto-load-data-api="autoLoadDataApi" :show-page-helper="true"
              :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
        </template>

        <template v-slot:normalLayout="e">
          <div class="w" style="height: 500px;">
            <ld-table :layout="normalLayout" :list="list" :auto-load-data-api="autoLoadDataApi" :show-page-helper="true"
              :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
        </template>


        <template v-slot:twoLayout="e">
          <div class="w" style="height: 500px;">
            <ld-table :layout="twoLayout" :list="list" :auto-load-data-api="autoLoadDataApi" :show-page-helper="true"
              :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
        </template>

        <template v-slot:moreLayout="e">
          <div class="w" style="height: 500px;">
            <ld-table :layout="moreLayout" :list="list" :auto-load-data-api="autoLoadDataApi" :show-page-helper="true"
              :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
        </template>

        <template v-slot:enabledCheckBox="e">
          <div class="w" style="height: 500px;">
            <ld-table :layout="moreLayout" :list="list" :is-enabled-check-box="true"
              :auto-load-data-api="autoLoadDataApi" :show-page-helper="true" :el-pagination="elPagination"
              @checkbox="getCheckBox">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
          <div>选中的数据有：<span class="c-d p-r10 m-r10" v-for="(item,i) in enabledCheckList"
              :key="i">{{item['nickName']}}</span></div>
        </template>


        <template v-slot:tableExpand="e">
          <div class="w" style="height: 500px;">
            <ld-table ref="tableExpand" :layout="moreLayout" :list="list" :elTableProperty="{defaultExpandAll:false}"
              :auto-load-data-api="autoLoadDataApi" :show-page-helper="true" :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>

              <!-- 展开行 -->
              <template v-slot:expand="{item}">
                <div class="f-s box-b p-l10 p-r10 tip-d b-d1">
                  <div class="f-s m-r10">
                    <span class="m-r4 c8">姓名：</span>
                    <span class="c6">{{item['nickName']}}</span>
                  </div>
                  <div class="f-s m-l10 p-l10">
                    <span class="m-r4 c8">电话：</span>
                    <span class="c6">{{item['phone']}}</span>
                  </div>
                </div>
                <div class="f-s box-b p-l10 p-r10  tip-d b-d1">
                  <span class="m-r4 c8">地址：</span>
                  <span class="c6">{{item['address']}}</span>
                </div>
              </template>

            </ld-table>
          </div>
        </template>

        <template v-slot:treeTable="e">
          <div class="w" style="height: 500px;">
            <ld-table ref="tableExpand" :layout="moreLayout" :list="list" row-key="id"
              :el-table-property="{defaultExpandAll:true}" :auto-load-data-api="autoLoadDataApi"
              :get-table-remote-data-after="getTreeData" :show-page-helper="false">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
        </template>

        <template v-slot:sumTable="e">
          <div class="w" style="height: 500px;">
            <ld-table ref="tableExpand" :layout="moreLayout" :list="list" row-key="id" :auto-load-data-api="autoLoadDataApi"
              :show-page-helper="false" :el-table-property="{defaultExpandAll:false,showSummary:true,sumText:'合计'}" >
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
        </template>

        <template v-slot:spenMethodTable="e">
          <div class="w" style="height: 500px;">
            <ld-table ref="tableExpand" :layout="moreLayout" :list="list" row-key="id" :auto-load-data-api="autoLoadDataApi"
              :show-page-helper="false" :el-table-property="{spanMethod:objectSpanMethod}" >
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
          </div>
        </template>


      </ld-doc>
    </el-card>
  </div>
</template>

<script>
  import res from './tables-res.js';
  export default {
    data() {
      return {
        first: res.firstLayout(this),
        autoLoadDataApi: res.firstAutoLoadDataApi,
        elPagination: res.elPagination,
        showPageHelper: true,
        normalLayout: res.normalLayout,
        twoLayout: res.twoLayout,
        moreLayout: res.moreLayout,
        enabledCheckList: [],


        list: [],
        getTreeData: (data) => {
          return this.getTreeDataMethod(data);
        },
        objectSpanMethod: ({
					row,
					column,
					rowIndex,
					columnIndex
				}) => {
					if (columnIndex === 1) {
						return {
							rowspan: rowIndex % 2 == 0 ? 2 : 0,
							colspan: rowIndex % 2 == 0 ? 1 : 0
						};
					}
				},


        doc: [{
            title: '`ld-table`表格使用',
            h1: '一.简单示例',
          },
          {
            slot: 'first',
            html: `
            <ld-table :layout="layout" :list="list" :auto-load-data-api="autoLoadDataApi"  :show-page-helper="showPageHelper" :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
            `.replace(/^            /gm, ''),
            javascript: `
            export default {
              data(){
                return {
                  layout:[
                    {
                      label:
                      { label: '用户信息',
                        //通过childern实现多级表头
                        children:[
                          {prop: 'nickName',label: '用户昵称'},
                          {prop: 'phone',label: '电话号码'},
                          {prop: 'sex',label: '性别',html: (val) => {return \`<div class="\${val==1?'c-d':'c-s'}">\${val==1?'男':'女'}</div>\`}},
                          {prop: 'userType',label: '用户类别',format: (val) => {return val == 1 ? '普通用户' : '超级管理员'}},
                          {prop: 'birthday',label: '出生日期',format: (val) => {return !val ? '未填写出生日期' : this.$ld.util.getDate(0, new Date(val));}},
                          {prop: 'createdTime',label: '创建时间',format: (val) => {return !val ? '' : this.$ld.util.getDate(0, new Date(val));}},
                          {prop: 'updatedTime',label: '修改时间',format: (val) => {return !val ? '' : this.$ld.util.getDate(0, new Date(val));}},
                        ]
                      }
                    }
                 ],
                 autoLoadDataApi: {
                    remotePath: '/test/getUserInfo',
                    remoteParam: {},
                    remoteMethodType: "get",
                    remoteTimeout: null,
                  }
                },
                showPageHelper:true, //可不设置，默认为true
                elPagination:{pageSizes: [5, 10, 15, 20]} //可不设置，默认为{pageSizes: [10, 20, 30, 50, 80, 100]}
              }
            }
            `.replace(/^            /gm, ''),

          },
          {
            h1: '二.分页',
            tip_p: '分页通过`show-page-helper`参数控制；`true`显示，`false`不显示',
            h2: '1.`show-page-helper=false`不显示分页',
            tip_i: '不显示分页，要就请求接口后获取到的数据为Array',
            slot: 'hidePageHelper',
            html: `
            //只需修改show-page-helper=false;即可
            <ld-table :layout="first" :list="list" :auto-load-data-api="autoLoadDataApi"  :show-page-helper="false" :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>`.replace(/^            /gm, ''),
            tipd: '此时的返回数据需要Array,其数据格式如下',
            javascript: `
              [
                {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
                {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
                {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
                {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
                {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
              ]
            `.replace(/^            /gm, ''),
          }, {
            h2: '2.`show-page-helper=true`显示分页',
            tip_i: '显示分页，要就请求接口后获取到的数据为Object。<br/>必须具备几个基本参数total(总条数) pageSize(每页条数) currentPage(当前页) list(每页的数据集合) ',
            slot: 'showPageHelper',
            html: `
            <template v-slot:showPageHelper="e">
              <div class="w" style="height: 500px;">
                <ld-table :layout="first" :list="list" :auto-load-data-api="autoLoadDataApi"  :show-page-helper="true" :el-pagination="elPagination">
                  <template #tools="e">
                    <el-button size="mini" type="text">按钮</el-button>
                  </template>
                  <template #toolsHeader="e">
                    操作
                  </template>
                </ld-table>
              </div>
            </template>`.replace(/^            /gm, ''),
            tipd: '此时的返回数据需要Object,并且具备分页参数,其数据格式如下',
            javascript: `
              {
                total:100,
                pageSize:5,
                currentPage:1,
                list:[
                  {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
                  {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
                  {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
                  {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
                  {nickName: '张三', phone:'18888888888', id:'1000',userType:0,birthday:'2021-5-10 11:57:21', updatedTime:'2021-5-10 11:57:21',createdTime:'2021-5-10 11:57:21'},
                ]
              }
            `.replace(/^            /gm, ''),
          },
          {
            h1: '三.多级表头',
            tip_p: '多级表头，可使用`label`字段进行嵌套,使用`children`关键字设置层级，`label`类型可以为`String`|`Object`',
          },
          {
            h2: '1.普通表头',
            slot: 'normalLayout',
            javascript: `
            layout:[
              {prop:'name',label:'姓名'},
              {prop:'age',label:'年龄'},
              {prop:'sex',label:'性别'},
              {prop:'useType',label:'类型'},
            ]
            `.replace(/^            /gm, ''),
          },
          {
            h2: '2.二级表头',
            slot: 'twoLayout',
            javascript: `
            layout:[
              {
                label:{
                  label:'用户信息',
                  children:[
                    {prop:'name',label:'姓名'},
                    {prop:'age',label:'年龄'},
                    {prop:'sex',label:'性别'},
                  ]
                }
              },
              {
                label:{
                  label:'职务',
                  children:[
                    {prop:'useType',label:'类型'},
                  ]
                }
              }
            ]
            `.replace(/^            /gm, ''),
          },
          {
            h2: '3.多级表头',
            slot: 'moreLayout',
            tip_p: "多级表头，为`label`设置对象属性，对象属性包含`children`嵌套,理论上来说，可以无限嵌套，但为了性能考虑，请谨慎使用！",
            javascript: `
            layout:[{
              label: {
                label: 'xxx系统普通用户',
                children:[
                  {label:{
                    label:'用户信息基础信息一览表',
                    children:[
                      {prop: 'nickName',label: '用户名称' },
                      {prop: 'phone',label: '电话号码' },
                      {prop: 'sex',label: '性别',html:(val)=>{return \`<div class="\${val==1?'c-d':'c-s'}">\${val==1?'男':'女'}</div>\`}},
                    ]
                  }},
                  {
                    label:{
                      label:'职务',
                      children:[
                        {prop:'userType',label:'类型',format: (val) => { return val == 1 ? '普通用户' : '超级管理员'}}
                      ]
                    }
                  }
                ]
              }
            }]`.replace(/^            /gm, ''),
          },
          {
            h1: '四.多选',
            tip_p: '`is-enabled-check-box=true`启用复选框进行多选。通过`checkbox(e)`方法得到选中的数据！',
            slot: 'enabledCheckBox',
            html: `
            <ld-table :layout="moreLayout" :list="list" :is-enabled-check-box="true"
              :auto-load-data-api="autoLoadDataApi" :show-page-helper="true" :el-pagination="elPagination"
              @checkbox="getCheckBox">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
            `.replace(/^          /gm, ""),
            javascript: `
            export default {
              data(){
                return {
                  layout:[
                    {
                      label:
                      { label: '用户信息',
                        //通过childern实现多级表头
                        children:[
                          {prop: 'nickName',label: '用户昵称'},
                          {prop: 'phone',label: '电话号码'},
                          {prop: 'sex',label: '性别',html: (val) => {return \`<div class="\${val==1?'c-d':'c-s'}">\${val==1?'男':'女'}</div>\`}},
                          {prop: 'userType',label: '用户类别',format: (val) => {return val == 1 ? '普通用户' : '超级管理员'}},
                          {prop: 'birthday',label: '出生日期',format: (val) => {return !val ? '未填写出生日期' : this.$ld.util.getDate(0, new Date(val));}},
                          {prop: 'createdTime',label: '创建时间',format: (val) => {return !val ? '' : this.$ld.util.getDate(0, new Date(val));}},
                          {prop: 'updatedTime',label: '修改时间',format: (val) => {return !val ? '' : this.$ld.util.getDate(0, new Date(val));}},
                        ]
                      }
                    }
                 ],
                 autoLoadDataApi: {
                    remotePath: '/test/getUserInfo',
                    remoteParam: {},
                    remoteMethodType: "get",
                    remoteTimeout: null,
                  }
                },
                showPageHelper:true, //可不设置，默认为true
                elPagination:{pageSizes: [5, 10, 15, 20]} //可不设置，默认为{pageSizes: [10, 20, 30, 50, 80, 100]},
                /**
                 * 保存被选中的行
                 */
                enabledCheckList:[],
              },
              methods:{
                //通过选中行事件获取选中数据
                getCheckBox(e) {
                  this.enabledCheckList = e;
                }
              }
            }
            `.replace(/^          /gm, ""),
          },
          {
            h1: '五.展开行',
            tip_p: '通过插槽`expand`来实现展示行，通过`:elTableProperty="{defaultExpandAll:false}"`控制默认不展开',
            slot: 'tableExpand',
            html: `
            <ld-table ref="tableExpand" :layout="moreLayout" :list="list" :elTableProperty="{defaultExpandAll:false}"
              :auto-load-data-api="autoLoadDataApi" :show-page-helper="true" :el-pagination="elPagination">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>

              <!-- 展开行 -->
              <template v-slot:expand="{item}">
                <div class="f-s box-b p-l10 p-r10 tip-d b-d1">
                  <div class="f-s m-r10">
                    <span class="m-r4 c8">姓名：</span>
                    <span class="c6">{{item['nickName']}}</span>
                  </div>
                  <div class="f-s m-l10 p-l10">
                    <span class="m-r4 c8">电话：</span>
                    <span class="c6">{{item['phone']}}</span>
                  </div>
                </div>
                 <div class="f-s box-b p-l10 p-r10  tip-d b-d1">
                  <span class="m-r4 c8">地址：</span>
                  <span class="c6">{{item['address']}}</span>
                </div>
              </template>
            </ld-table>
            `.replace(/^          /gm, ""),
          },
          {
            h1: '六.树形数据',
            tip_d: '在使用树形数据时，必须设置 `row-key`属性，比如`row-key="id"`，组件会使用`row-key`的值作为循环迭代的唯一键。<br/>当数据中包含`children`结构时会自动显示成树形表格。',
            javascript: `
            //数据结构形如
            list:[
              { names:'张三',
                children:[
                  {name:'李四'},
                  {name:'王五'},
                  {name:'赵六'},
                ]
              },
              {name:'天气'},
              {name:'羊八'},
            ]
             `.replace(/^          /gm, ""),
          }, {
            slot: 'treeTable',
            html: `
            <!--get-table-remote-data-after参数整理数据包含children便于识别出为树形数据-->
            <ld-table :layout="moreLayout" :list="list" row-key="id"
              :elTableProperty="{defaultExpandAll:false}" :auto-load-data-api="autoLoadDataApi"
              :get-table-remote-data-after="getTreeData" :show-page-helper="false">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
            `.replace(/^          /gm, ""),
            javascript: `
            export default{
              data(){
                return {
                  //...ld-table其他参数

                  //整理数据参数方法 仅供参考
                  getTreeData:(_data)=> {

                    // let data =_data['data']['list'];//分页
                    let data = _data['data'];//无分页
                    function getChildren(data, pid) {
                      let d = data.filter(item => item.parentId == pid) || [];
                      if (d.length > 0) {
                        d.map(_item => {
                          let _pid = _item['id'];
                          let _d = getChildren(data, _pid);
                          _item['children'] = _d;
                          _item['children'].map(_citem => {
                            let _cpid = _citem['id'];
                            let _cd = getChildren(data, _cpid);
                            _citem['children'] = _cd;
                          })
                        });
                      }
                      return d;
                    }
                    let d = data.filter(item => !item.parentId || item.parentId == '0');
                    if (d.length > 0) {
                      d=getChildren(data,'0')
                    }

                    //  _data['data']['list']=d;//分页
                    _data['data'] = d;//无分页
                    return _data;
                  }
                }
              }
            }
            `.replace(/^          /gm, ""),
          },
          {
            h1: '七.表尾合计行',
            tip_p:'合计行:1.需要设置参数 `:el-table-property`的`showSummary=true`；<br/>2.设置 `:el-table-property`的`sumText="合计"`设置合计行第一列的文本；',
            slot: 'sumTable',
            html: `
            <!--合计行:1.需要设置参数\`showSummary=true\`；<br/>2.设置\`sumText="合计"\`设置合计行第一列的文本；-->
            <ld-table :layout="moreLayout" :list="list" row-key="id"
              :elTableProperty="{defaultExpandAll:false}" :auto-load-data-api="autoLoadDataApi"
              :get-table-remote-data-after="getTreeData" :show-page-helper="false">
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>
            `.replace(/^          /gm, ""),

          },
          {
            h1: '八.合并行或列',
            tip_p:'使用 `:el-table-property`的`spanMethod`参数设置合并列的规则方法,详情参考<a class="c-p" href="https://element.eleme.cn/#/zh-CN/component/table">Element-ui`table`合并行或列</a>',
            slot:'spenMethodTable',
            html:`
            <ld-table :layout="moreLayout" :list="list" row-key="id" :auto-load-data-api="autoLoadDataApi"
              :show-page-helper="false" :el-table-property="{spanMethod:objectSpanMethod}" >
              <template #tools="e">
                <el-button size="mini" type="text">按钮</el-button>
              </template>
              <template #toolsHeader="e">
                操作
              </template>
            </ld-table>`.replace(/^          /gm, ""),
            javascript:`
            export default{
              data(){
                return {
                  //...ld-table其他参数
                  //合并列方法 仅供参考
                  objectSpanMethod: ({
                    row,
                    column,
                    rowIndex,
                    columnIndex
                  }) => {
                    if (columnIndex === 1) {
                      return {
                        rowspan: rowIndex % 2 == 0 ? 2 : 0,
                        colspan: rowIndex % 2 == 0 ? 1 : 0
                      };
                    }
                  },
                }
              }
            }
            `.replace(/^          /gm, ""),
          },
          {
            h1: '九.属性和参数',
            h2: '`ld-table`属性',
            md: `|关键字|类型|解释|默认值|是否必须|说明|
            |-|-|-|-|-|-|
            |layout|Array[Object]|布局显示参数||√|一组可配置的对象集合[{visabled:true,width:'',replace:{},aligin:'',prop:'',label:'',format:(val)=>{},html:(val)=>{}}]。[layout参数说明](#h2_layout参数说明)|
            |is-auto-load-data|true|是否自动加载数据|true|√|当true时，必须配置[\`auto-load-data-api\`](#h2_auto-load-data-api参数说明)有效|
            |auto-load-data-api|{}|自动加载数据，请求参数信息|{}|√|\`auto-load-data-api\`详情查看[auto-load-data-api参数说明](#h2_auto-load-data-api参数说明)|
            |list|Array|布局数据值|||通常情况下，推荐使用自动装载数据;|
            |is-enabled-check-box|Boolean|是否显示复选框|false|-|当使用复选框时。如需获取选择状态，需要实现\`checkbox(e)\`方法|
            |row-key|String|行数据的key|id||行数据的 Key，用来优化 Table 的渲染；在使用树形数据时，该属性是必填的。|
            |el-table-property|Object|Element-ui表格参数|||Element-ui表格参数,详情查看[el-table-property](#h2_el-table-property参数说明)|
            |get-table-remote-data-after|Function(data)|获取表单数据之后，装载数据之前，调用的装饰函数|||获取表单数据之后，装载数据之前，调用的装饰函数|
            |show-page-helper|Boolean|是否使用分页显示数据|true|-|当使用分页时，每页的数据会通过，分页的方式，发送请求加载数据|
            |page-size|Number|每页条数|30||当\`showPageHelper\`为true时有效，且该参数会受分页组件中的条数进行更改|
            |total|Number|总条数|0||在不适用自动加载数据时使用|
            |currentPage|Number|当前页|1||当前页|
            |el-pagination|Object|分页组件的参数|\`{pageSizes: [10, 20, 30, 50, 80, 100]}\`||分页组件的参数，其他更多参数，设计中...|
            `
          },
          {
            h2: '`layout`参数说明',
            md: `|关键字|类型|解释|是否必须|补充|
            |-|-|-|-|-|
            |prop|String|关健字|√|-|
            |label|String\\|Object|显示文字|√|如需要多级表头时，此处需要配置为Object,[多级表头](#h1_三_多级表头)|
            |format|Function(val)|格式化值函数||具体详见[format](#h2_format显示格式化)注意：replace、format、html，多个存在时，按照以上顺序只有一个会生效|
            |html|Function(val)|使用hetml处理显示内容||具体详见[html](#h2_html显示美化)；注意：replace、format、html，多个存在时，按照以上顺序只有一个会生效|
            |replace|Object|需要替换的请求方法参数||在加载表格式，有时需要将外键关联的另一张表数据中的字符显示到表格中。<br/>这时需要该参数。</br>比如：需要显示创建人名称，而该字段所对应的值为人员表的编号</br>，此时可以通过该参数配置。具体详见[replace](#h2_replace数据值替换)；</br>注意：replace、format、html，多个存在时，按照以上<br/>顺序只有一个会生效|
            |visabled|Boolean|是否显示||默认值为true；false不显示|
            |sortable|Boolean|是否排序列||默认为false|
            |width|String|宽度||形如\`100px\` \`80%\` \`calc(100% - 100px)\`等,默认值为\'auto\'|`
          },
          {
            h2: '`auto-load-data-api`参数说明',
            md: `|关键字|类型|解释|可选值|是否必须|默认值|
            |-|-|-|-|-|-|
            |remotePath|String|请求方法地址，如\`test/getPage\`;当使用第三方请求时，\`remotePath\`为完整的请求路径,如：\`http://localhost:8081/test4/getPage\`||√||
            |remoteParam|Object|是否为斑马纹 table||√|{}|
            |remoteMethodType|String|请求方式\`get\` \`post\` \`delete\` \`post\` \`put\` \`patch\` \`head\`||√|get|
            |remoteTimeout|Number|请求超时时间,超时时间可通过\`this.$ld.requestSetting.config.timeout = 2000;\`进行全局设置|2000ms|√|-|`
          },
          {
            h2: '`el-table-property`参数说明',
            md: `|关键字|类型|解释|可选值|是否必须|默认值|
            |-|-|-|-|-|-|
            |border|Boolean|是否带有纵向边框|||true|
            |stripe|Boolean|是否为斑马纹 table|||true|
            |indent|Number|展示树形数据时，树节点的缩进|||20|
            |tooltipEffect|String|tooltip effect 属性|dark/light||-|
            |fit|Boolean|列的宽度是否自撑开|||true|
            |highlightCurrentRow|Boolean|是否要高亮当前行|||true|
            |defaultExpandAll|Boolean|是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效|||false|
            |defaultSort|Object|默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序|\`order\`: ascending, descending||如果只指定了prop, 没有指定order, 则默认顺序是ascending|
            |showSummary|Boolean|是否在表尾显示合计行|||false|
            |sumText|String|合计行第一列的文本|||合计|
            |summaryMethod|Function({ columns, data })|自定义的合计计算方法||||
            |spanMethod|Function({ row, column, rowIndex, columnIndex })|	合并行或列的计算方法||||`
          },
          {
            h2: '`format`显示格式化',
            javascript: `
            //当数据为字典值，但需要显示在页面的为可阅读字符串时，其形如下
            layout:[
            	{
            		prop:'sex',
            		label:'性别',
            		format:(val)=>{
            			return val==1?'男':'女'
            		}
            	}
            ]

            //当数据为日期不便阅读的结构式，其形如下
            layout:[
            	{
            		prop:'birthday',
            		label:'生日',
            		format:(val)=>{
            			return !val?'未填写出生日期':this.$ld.util.getDate(0,new Date(val)); //该函数详情见https://github.com/dongmingzhixiu/layout-dynamic-ui/blob/main/doc/ld-util.md#getDate
            		}
            	}
            ]
            `.replace(/^          /gm, ""),
          },
          {
            h2: '`html`显示美化',
            javascript: `
            //当数据为字典值，但需要显示在页面的美化后可阅读字符串时，其形如下
            layout:[
            	{
            		prop:'sex',
            		label:'性别',
            		html:(val)=>{
            			return \`<div style="\${val==1?'color:red':'color:green'}">\${val==1?'男':'女'}</div>\`;
            		}
            	}
            ]

            // 当数据为图片地址时，我们希望显示一张图片
            layout:[
            	{
            		prop:'birthday',
            		label:'生日',
            		html:(val)=>{
            			return \`<img src="\${val}"/>\` //图片样式和图片的地址需要进行处理
            		}
            	}
            ]
            `.replace(/^          /gm, ""),
          },
          {
            h2: '`replace`数据值替换',
            tip_p: `配置一组请求参数，通过自动请求的方式，显示另一张表对应的数据。<br/>
            比如在数据中，只包含\`创建人编号\`，而\`创建人信息\`在另一张表，此时即可使用该参数，动态替换创建人编号<br/>
            <span class="c8">该方式加载数据目前已使用局部缓存(只在当前组件内部缓存，当组件整体刷新时，会重新获取！后期根据使用反馈进行调整全局缓存等方式)</span>`,
            md: `|关键字|类型|解释|是否必须|补充|
            |-|-|-|-|-|
            |remotePath|String|请求路径|√|形如:\`test/getUserById\`,当为第三方请求时，请填写完整请求路径|
            |remoteMethodType|String|请求方式|√|请求方式\`get\` \`post\` \`delete\` \`post\` \`put\` \`patch\` \`head\`|
            |label|String|显示到界面上的数据关键字|√|比如：'createdName'|
            |id|String|查询数据的字段|√|当前数据中关联其他数据的关联键；比如'id'|
`
          },
          {
            h1: '十.插槽',
            md: `|slot name|类型|说明|插槽值|
            |-|-|-|-|
            |expand|作用域插槽|展开行|-|
            |tools|作用域插槽|整个表格最后一列|-|
            |toolsHeader|作用域插槽|整个表格最后一列显示在表格头的内容|-|
            |append|具名插槽|插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，<br/>可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。||
            `
          }

        ]
      }
    },
    methods: {
      getCheckBox(e) {
        this.enabledCheckList = e;
      },
      /**
       * 对获取的到数据进行整理
       * @param {Object} data
       */
      getTreeDataMethod(_data) {
        //分页
        // let data =_data['data']['list']
        //无分页
        let data = _data['data'];

        function getChildren(data, pid) {
          let d = data.filter(item => item.parentId == pid) || [];
          if (d.length > 0) {
            d.map(_item => {
              let _pid = _item['id'];
              let _d = getChildren(data, _pid);
              _item['children'] = _d;
              _item['children'].map(_citem => {
                let _cpid = _citem['id'];
                let _cd = getChildren(data, _cpid);
                _citem['children'] = _cd;
              })
            });
          }
          return d;
        }
        let d = data.filter(item => !item.parentId || item.parentId == '0');
        if (d.length > 0) {
          d=getChildren(data,'0')
        }
        //分页
        //  _data['data']['list']=d;
        //无分页
        _data['data'] = d;
        return _data;
      }
    }
  }
</script>

<style>
</style>
