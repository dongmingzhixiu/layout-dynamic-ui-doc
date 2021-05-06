export default {
  layout: [{
      prop: 'showClose',
      label: '所有显示关闭按钮',
      type: 'select',
      options: [{
        label: '是',
        value: true
      }, {
        label: '否',
        value: false
      }]
    },
    {
      prop: 'showRefresh',
      label: '所有显示刷新按钮',
      type: 'select',
      options: [{
        label: '是',
        value: true
      }, {
        label: '否',
        value: false
      }]
    },
    {
      prop: 'showConfirm',
      label: '关闭时显示提示框',
      type: 'select',
      options: [{
        label: '是',
        value: true
      }, {
        label: '否',
        value: false
      }]
    },
  ]
}
