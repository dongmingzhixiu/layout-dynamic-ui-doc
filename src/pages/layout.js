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
        { label:'加载【loading-page】',prop:'加载组件',page:'loading'},
        { label:'文档【doc】',prop:'文档组件',page:'doc'},
        { label:'菜单树【menu-tree】',prop:'菜单树',page:'menu-tree'},
        { label:'标签页【page-tabs】',prop:'标签页',page:'page-tabs'},
        { label:'表单【form】',prop:'表单',page:'forms'},

      ],
    },
  ],
}
export default layout;
