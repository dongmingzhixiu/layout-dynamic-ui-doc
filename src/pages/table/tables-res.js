export default {
  firstLayout: (that) => {
    return [{
      label: {
        label: '用户信息',
        children: [{
            prop: 'nickName',
            label: '用户昵称'
          },
          {
            prop: 'phone',
            label: '电话号码'
          },
          {
            prop: 'sex',
            label: '性别',
            html: (val) => {
              return `<div class="${val==1?'c-d':'c-s'}">${val==1?'男':'女'}</div>`
            }
          },
          {
            prop: 'userType',
            label: '用户类别',
            format: (val) => {
              return val == 1 ? '普通用户' : '超级管理员'
            }
          },
          {
            prop: 'birthday',
            label: '出生日期',
            format: (val) => {
              return !val ? '未填写出生日期' : that.$ld.util.getDate(0, new Date(val));
            }
          },
          {
            prop: 'createdTime',
            label: '创建时间',
            format: (val) => {
              return !val ? '' : that.$ld.util.getDate(0, new Date(val));
            }
          },
          {
            prop: 'updatedTime',
            label: '修改时间',
            format: (val) => {
              return !val ? '' : that.$ld.util.getDate(0, new Date(val));
            }
          },
        ]
      },
    }]
  },
  firstAutoLoadDataApi: {
    remotePath: '/test/getUserInfo',
    remoteParam: {},
    remoteMethodType: "get",
    remoteTimeout: null,
  },
  elPagination: {
    pageSizes: [5, 10, 15, 20]
  },
  normalLayout: [{
      prop: 'nickName',
      label: '昵称'
    },
    {
      prop: 'phone',
      label: '电话'
    },
    {
      prop: 'sex',
      label: '性别',
      html: (val) => {
        return `<div class="${val==1?'c-d':'c-s'}">${val==1?'男':'女'}</div>`
      }
    },
    {
      prop: 'userType',
      label: '用户类别',
      format: (val) => {
        return val == 1 ? '普通用户' : '超级管理员'
      }
    },
  ],
  twoLayout: [ {
      label: {
        label: '用户信息',
        children: [{
            prop: 'nickName',
            label: '姓名'
          },
          {
            prop: 'phone',
            label: '电话'
          },
          {
            prop: 'sex',
            label: '性别',
            html: (val) => {
              return `<div class="${val==1?'c-d':'c-s'}">${val==1?'男':'女'}</div>`
            }
          },

        ]
      }
    },{
      label: {
        label: '职务',
        children: [{
          prop: 'userType',
          label: '用户类别',
          format: (val) => {
            return val == 1 ? '普通用户' : '超级管理员'
          }
        }]
      }
    },

  ],
  moreLayout:[{
  	label: {
  		label: 'xxx系统普通用户',
  		children:[
  			{
          label:{
            label:'用户信息基础信息一览表',
            children:[
              {prop: 'nickName',label: '用户名称' },
              {prop: 'phone',label: '电话号码' },
              {prop: 'sex',label: '性别',html:(val)=>{return `<div class="${val==1?'c-d':'c-s'}">${val==1?'男':'女'}</div>`}},
            ]
          }},
        {
          label:{
            label:'职务',
            children:[
              {prop:'userType',label:'用户类别',format: (val) => { return val == 1 ? '普通用户' : '超级管理员';}}
            ]
          }
        }
  		]
  	}
  }]
}
