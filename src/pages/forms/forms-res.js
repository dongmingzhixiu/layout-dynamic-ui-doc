export default {
  layout: [{
      prop: 'activityName',
      type: 'text',
      label: '活动名称',
      require:true,
      regex:/^[\u4e00-\u9fa5]{2,14}$/,
      msg:'活动名称为2-14个汉字',
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
      placeholder:'请选择活动时间',
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
      require:true
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
  testJavascript1:`
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
  }`.replace(/^  /gm,'')
}
