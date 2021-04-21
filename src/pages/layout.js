const layout = {
  menuTree: [
		{
		  icon: 'el-icon-s-open',
		  label: '开发指南',
		  children: [
		    { label:'快速开始',prop:'快速开始',page:'install'},
		  ],
		},
    {
      icon: 'el-icon-s-platform',
      label: '组件',
      children: [
        { label:'加载组件',prop:'加载组件',page:'loading'},
      ],
    },
  ],
}
export default layout;
