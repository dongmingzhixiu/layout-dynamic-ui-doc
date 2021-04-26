export default {
  layout: [{
      prop: 'skin',
      label: '皮肤',
      type: 'select',
      options: [{
        label: '深色',
        value: 'dark'
      }, {
        label: '浅色',
        value: 'light'
      }],
      width:'160px'
    }, {
      prop: 'showOutline',
      label: '是否显示大纲',
      type: 'select',
      options: [{
        label: '是',
        value: true
      }, {
        label: '否',
        value: false
      }],
      width:'200px'
    },
    {
      prop: 'aligns',
      label: '大纲位置',
     type: 'select',
     options: [{
       label: '居左',
       value: 'left'
     }, {
       label: '居中',
       value: 'center'
     },
     {
       label: '居右',
       value: 'right'
     }],
     width:'160px'
    },
    {
      prop: 'docWidth',
      label: '文档内容宽度',
      placeholder:'100%或100px',
      type: 'text',
      value:'100%',
    },
  ]
}
