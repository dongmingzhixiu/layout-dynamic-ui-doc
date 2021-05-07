export default {
  layout: [{
      prop: 'activityName',
      type: 'text',
      label: '活动名称',
      require: true,
      regex: /^[\u4e00-\u9fa5]{2,14}$/,
      msg: '活动名称为2-14个汉字',
    }, {
      prop: 'activityArea',
      type: 'select',
      label: '活动区域',
      options: [{
          label: '区域一',
          value: '1'
        },
        {
          label: '区域二',
          value: '2'
        },
      ]
    },
    {
      prop: 'activityTime',
      type: 'date',
      dateType: 'datetime',
      placeholder: '请选择活动时间',
      label: '活动时间',
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
    },
    {
      prop: 'activityPeople',
      label: '发起人',
      type: 'select',
      options: [{
          label: '张三',
          value: '1'
        },
        {
          label: '李四',
          value: '2'
        },
      ],
      require: true
    },
    {
      prop: 'activityType',
      type: 'switch',
      label: '配送方式',
    },
    {
      prop: 'slots',
      type: 'slot',
      //站位
    },
    {
      prop: 'activityNature',
      type: 'checkbox',
      label: '活动性质',
      options: [{
          label: '美食/餐厅线上活动',
          value: '1'
        },
        {
          label: '地推活动',
          value: '2'
        },
        {
          label: '线下主题活动',
          value: '3'
        },
      ],
      parseType: 'split',
    },
    {
      prop: 'activityResources',
      type: 'radio',
      label: '特殊资源',
      isButton:true,
      options: [{
        label: '线上品牌商赞助',
        value: '1'
      }, {
        label: '线下场地免费',
        value: '3'
      }, ],
      parseType: 'split',
    },
    {
      prop: 'activityForm',
      type: 'textarea',
      label: '活动形式',
      rows: 5,
    }


  ],
  textLayout: [{
    //必填属性
    prop: 'userName', //[String]
    label: '姓名', //[String]
    type: 'text'
  }, {
    //必填属性
    prop: 'password',
    label: '密码',
    type: 'text',
    password: true,
    //其他更多功能可使用上文的通用属性
  }],
  textareaLayout: [{
    //必填属性
    prop: 'textareaInfo',
    label: '文本信息',
    type: 'textarea',
    //文本域的行数
    rows: 5,
    //其他更多功能可使用上文的通用属性
  }],
  selectLayout: [{
      //必填属性
      prop: 'select', //[String]
      label: '静态数据', //[String]
      type: 'select',
      //方式一
      options: [{
          label: '文本一',
          value: '1'
        },
        {
          label: '文本二',
          value: '2'
        },
        {
          label: '文本三',
          value: '3'
        },
        {
          label: '文本四',
          value: '4'
        },
      ],
      //其他更多功能可使用上文的通用属性
    },
    {
      //必填属性
      prop: 'select2', //[String]
      label: '动态用户数据', //[String]
      type: 'select',
      getOptions: {
        remotePath: '/api/select', //请求方法，同样支持第三方请求
        remoteMethodType: "get", //请求类型
        remoteParam: {}, //参数
        label: '\${name}(\${phone})', //下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
        value: '\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
        //获取数据后处理函数
        getDataAfter: (res) => {
          return res.data;
        }
      }
    }
  ],
  radioLayout: [{
      //必填属性
      prop: 'radio', //[String]
      label: '静态数据', //[String]
      type: 'radio',
      //方式一
      options: [{
          label: '文本一',
          value: '1'
        },
        {
          label: '文本二',
          value: '2'
        },
        {
          label: '文本三',
          value: '3'
        },
        {
          label: '文本四',
          value: '4'
        },
      ],
      //其他更多功能可使用上文的通用属性
    },
    {
      //必填属性
      prop: 'radio2', //[String]
      label: '动态用户数据', //[String]
      type: 'radio',
      getOptions: {
        remotePath: '/api/select', //请求方法，同样支持第三方请求
        remoteMethodType: "get", //请求类型
        remoteParam: {}, //参数
        label: '\${name}(\${phone})', //下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
        value: '\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
        //获取数据后处理函数
        getDataAfter: (res) => {
          return res.data;
        }
      }
    },
    {
        //必填属性
        prop:'radio3', //[String]
        label:'按钮样式',//[String]
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
    }
  ],
  checkboxLayout:[{
      //必填属性
      prop: 'checkbox', //[String]
      label: '静态数据', //[String]
      type: 'checkbox',
      parseType: 'split',
      //方式一
      options: [{
          label: '文本一',
          value: '1'
        },
        {
          label: '文本二',
          value: '2'
        },
        {
          label: '文本三',
          value: '3'
        },
        {
          label: '文本四',
          value: '4'
        },
      ],
      //其他更多功能可使用上文的通用属性
    },
    {
      //必填属性
      prop: 'checkbox2', //[String]
      label: '动态用户数据', //[String]
      type: 'checkbox',
      parseType: 'split',
      getOptions: {
        remotePath: '/api/select', //请求方法，同样支持第三方请求
        remoteMethodType: "get", //请求类型
        remoteParam: {}, //参数
        label: '\${name}(\${phone})', //下拉框显示文字；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '张三(18888888888)'
        value: '\${id}', //此处的'\${id}'<=>'id' 下拉框选项值；比如有数据[{id:1,nickName:'张三',phone:'18888888888'}] => '1'
        //获取数据后处理函数
        getDataAfter: (res) => {
          return res.data;
        }
      }
    },
  ],
  dateLayout:[
    {
      prop:'date',
      label:'date',
      type:'date',
      dateType:'date',
    },
    {
      prop:'date2',
      label:'datetime',
      type:'date',
      dateType:'datetime',
    },
    {
      prop:'date3',
      type:'date',
      label:'year',
      dateType:'year',
    },
    {
      prop:'date4',
      type:'date',
      label:'month',
      dateType:'month',
    },
    {
      prop:'date5',
      type:'date',
      label:'week',
      dateType:'week',
    },
    {
      prop:'date6',
      type:'date',
      label:'dates',
      dateType:'dates',
    },
    {
      prop:'date7',
      type:'date',
      label:'daterange',
      dateType:'daterange',
    },
    {
      prop:'date8',
      type:'date',
      label:'monthrange',
      dateType:'monthrange',
    },
    {
      prop:'date9',
      type:'date',
      label:'datetimerange',
      dateType:'datetimerange',
    }
  ],





  testJavascript1: `
  export default {
    data(){
      return {
        //表单数据
        forms:{},
        //布局参数
        formLayout1:[
          {prop: 'activityName',type: 'text',label: '活动名称', require:true, regex:/^[\u4e00-\u9fa5]{2,14}$/,msg:'活动名称为2-14个汉字',},
          {prop: 'activityArea',type: 'select',label: '活动区域',
            options: [
              {label: '区域一',value: '1'},
              {label: '区域二',value: '2'},
            ]
          },
          {prop: 'activityTime',type: 'date',dateType: 'datetime',placeholder:'请选择活动时间',label: '活动时间',
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
          },
          {prop: 'activityPeople',label: '发起人',type: 'select',
            options: [
              {label: '张三',value: '1'},
              {label: '李四',value: '2'},
            ],
            require:true
          },
          {prop: 'activityType',type: 'switch',label: '配送方式',},
          //占位
          {prop: 'slots',type: 'slot'},
          {prop: 'activityNature',type: 'checkbox',label: '活动性质',
            options: [
              {label: '美食/餐厅线上活动',value: '1'},
              {label: '地推活动',value: '2'},
              {label: '线下主题活动',value: '3'},
            ],
            parseType: 'split',
          },
          {prop: 'activityResources',type: 'radio',label: '特殊资源',
            options: [
              {label: '线上品牌商赞助',value: '1'},
              {label: '线下场地免费',value: '3'},
            ],
            parseType: 'split',
          },
          {prop: 'activityForm',type: 'textarea',label: '活动形式',rows: 5,}
        ]
      }
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
   }
  }`.replace(/^  /gm, '')
}
