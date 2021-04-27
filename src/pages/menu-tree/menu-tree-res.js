export default {
  layout: [{
      prop: 'mode',
      label: '类型',
      type: 'select',
      options: [{
        label: 'vertical',
        value: 'vertical'
      }, {
        label: 'horizontal',
        value: 'horizontal'
      }]
    },
    {
      prop: 'collapse',
      label: '展开还是折叠',
      type: 'select',
      options: [{
        label: '折叠',
        value: true
      }, {
        label: '展开',
        value: false
      }]
    },
    {
      prop: 'backgroundColor',
      label: '背景色',
      type:'color',
      value: '#ffffff'
    },
    {
      prop: 'textColor',
      label: '文字颜色',
      type:'color',
      value: '#303133'
    },
    {
      prop: 'activeTextColor',
      label: '访问字体色',
      type:'color',
      value: '#409EFF'
    },
    {
      prop: 'uniqueOpened',
      label: '保持一个子菜单',
      type: 'select', 
      options: [{
        label: '是',
        value: true
      }, {
        label: '否',
        value: false
      }]
    }
  ]
}
