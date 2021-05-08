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
      isButton: true,
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
      prop: 'radio3', //[String]
      label: '按钮样式', //[String]
      type: 'radio',
      isButton: true,
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
  checkboxLayout: [{
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
  dateLayout: [{
      prop: 'date',
      label: 'date',
      type: 'date',
      dateType: 'date',
    },
    {
      prop: 'date2',
      label: 'datetime',
      type: 'date',
      dateType: 'datetime',
    },
    {
      prop: 'date3',
      type: 'date',
      label: 'year',
      dateType: 'year',
    },
    {
      prop: 'date4',
      type: 'date',
      label: 'month',
      dateType: 'month',
    },
    {
      prop: 'date5',
      type: 'date',
      label: 'week',
      dateType: 'week',
    },
    {
      prop: 'date6',
      type: 'date',
      label: 'dates',
      dateType: 'dates',
    },
    {
      prop: 'date7',
      type: 'date',
      label: 'daterange',
      dateType: 'daterange',
    },
    {
      prop: 'date8',
      type: 'date',
      label: 'monthrange',
      dateType: 'monthrange',
    },
    {
      prop: 'date9',
      type: 'date',
      label: 'datetimerange',
      dateType: 'datetimerange',
    }
  ],


  changePropertyLayout: [{
      prop: 'testRadio',
      type: 'radio',
      label: '特殊资源',
      options: [{
          label: '线下场地免费',
          value: '1'
        },
        {
          label: '线上品牌商赞助',
          value: '0'
        }
      ],
      //联动事件
      change: (val, event) => {
        return {
          //prop:{元素具备的属性}
          addressName: {
            visabled: val == 1 //当 val==1时，将组件prop='addressName'组件的visabled(可见)设为true(显示)
          },
          sponsorship: {
            visabled: val == 0 //当 val==0时，将组件prop='sponsorship'组件的visabled(可见)设为true(显示)
          },
        }
      },
      value: '1'
    },
    {
      prop: 'addressName',
      type: 'textarea',
      label: '场地名称',
      visabled: true,
    },
    {
      prop: 'sponsorship',
      type: 'text',
      label: '赞助商名称',
      visabled: false,
    },
  ],

  changeFormsLayout: [{
      prop: 'testRadio',
      type: 'radio',
      label: '特殊资源',
      options: [{
          label: '线下场地免费',
          value: '1'
        },
        {
          label: '线上品牌商赞助',
          value: '0'
        }
      ],
      //联动事件
      change: (val, event) => {
        return {
          /**
           * 通过form关键字进行操作
           * 可使用Function(value,event)函数  或者  Object对象进行操作
           *
           */
          // 方式1： 通过Object进行设置
          form: {
            //prop:value
            textInfo: val == 1 ? '123456' : 'abcde',
            testRadio: val,
          },
          //方式2；使用function(value,event)函数设置元素的值
          // form:(value,event)=>{
          //   let form=event['form'];
          //   form['textInfo']=val==1 ? '123456' : 'abcde';
          //   return form;
          // }
        }
      }
    },
    {
      prop: 'textInfo',
      type: 'text',
      label: '场地名称',
      visabled: true,
    },
  ],

  changeLayoutLayout: [{
      prop: 'testRadio',
      type: 'radio',
      label: '特殊资源',
      options: [{
          label: '线下场地免费',
          value: '1'
        },
        {
          label: '线上品牌商赞助',
          value: '0'
        }
      ],
      //联动事件
      change: (val, event) => {
        return {
          /**
           * 通过layout关键字进行操作
           * 与from相似，同样可使用Function(value,event)函数  或者  Array对象进行操作
           *
           */
          // //方式1： 通过Object进行设置
          // layout:[
          //   //{}
          //   {prop:'textInfo',type:'select',options:[{label:'测试1',value:'1'},{label:'测试2',value:'2'}],label:'修改为select'}
          //  ],

          //方式2；使用function(value,event)函数设置元素的值
          layout: (value, event) => {
            let layout = event['layout'];
            let item = layout.filter(item => item.prop == 'textInfo');
            if (item.length <= 0) {
              return layout;
            }
            let index = layout.indexOf(item[0]);
            item = item[0];
            //重新修改textInfo结构
            item['type'] = val != 1 ? 'text' : 'select';
            item['label'] = val != 1 ? '文本框' : '修改为select';
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
    {
      prop: 'textInfo',
      type: 'text',
      label: '场地名称',
      visabled: true,
    },
  ],
  changeTestLayout: [{
      prop: 'textInfo',
      type: 'text',
      tip: '这是被操纵的悲惨组件',
      label: '文本框',
      readonly: true,
      visabled: true,
    }, {
      //必填属性
      prop: 'select',
      tip: '控制属性和验证规则',
      label: '属性验证联动',
      type: 'select',
      options: [{
          label: '修改提示名称',
          value: '1'
        },
        {
          label: '修改为只读',
          value: '2'
        },
        {
          label: '设置为必填项',
          value: '3'
        },
        {
          label: '隐藏文本框',
          value: '4'
        },
        {
          label: '使用函数验证4-6为数字',
          value: '5'
        },
        {
          label: '使用正则验证4-6为汉字',
          value: '6'
        },
        {
          label: '修改为密码框',
          value: '7'
        },
      ],
      change: (val, event) => {
        return {
          textInfo: {
            label: val == '1' ? '修改后的名称' : '文本框',
            readonly: val == '2',
            require: val == '3' || val == '7',
            visabled: val != '4',
            password: val == '7',
            //使用正则和 函数混合使用
            regex: val == '6' ? /^[\u4e00-\u9fa5]{4,6}$/ : (textVal) => {
              return function(textVal) {
                if (val != "5" && val != '7') {
                  return true;
                }
                return /^[0-9]{4,6}$/.test(textVal);
              }
            },
            msg: val == '6' ? '名称必须为汉字' : '',
          },
        }
      }
    },

    {
      //必填属性
      prop: 'changeType',
      tip: `通过<span class='c-d p2'>form</span><span class='c-d p2'>layout</span>控制表单布局和数据`,
      label: '数据布局联动',
      type: 'select',
      options: [{
        label: '修改为select',
        value: '1'
      }, {
        label: '修改为text',
        value: '2'
      }],
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
            form['textInfo'] = val == 2 ? '123456' : '';
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
            item = item[0];
            //重新修改textInfo结构
            item['type'] = val != 1 ? 'text' : 'select';
            item['label'] = val != 1 ? '文本框' : '修改为select';
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
