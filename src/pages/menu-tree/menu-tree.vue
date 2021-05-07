<template>
	<!-- 加载 -->
	<div class="box-b p10 h loading">
		<el-card class="doc w h  over-a-y">
			<ld-doc :doc="doc">
				<template v-slot:frist="e">
					<el-card class="p10 b-i1">
						<ld-menu-tree class="w-200" menu-trigger="click" style="height: 500px;overflow: hidden auto;"
							:tree="tree">
						</ld-menu-tree>
					</el-card>
				</template>

				<template v-slot:secound="e">
					<ld-forms class="m-t10 m-b10" :form="forms" :layout="layout" :is-row="true">
						<template v-slot:buttons="e">
							<div style="position: relative;">
								<el-button type="primary m-l10" @click="copy('#doc2',true)">复制代码</el-button>
							</div>
						</template>
					</ld-forms>
					<el-card class="p10 b-i1">
						<ld-menu-tree :mode="forms['mode']"
							:class="{'w-200 ':forms['mode']== 'vertical'&&forms['collapse']== false,'w':forms['mode']!= 'vertical','w-60':forms['mode']== 'vertical'&&forms['collapse']== true}"
							:collapse="forms['collapse']||false" :background-color="forms['backgroundColor']"
							:text-color="forms['textColor']" :active-text-color="forms['activeTextColor']"
							:unique-opened="forms['uniqueOpened']" menu-trigger="click" style="overflow: hidden auto;"
							:style="{'height':forms['mode']== 'vertical'?'500px':'300px'}" :tree="tree">
						</ld-menu-tree>
					</el-card>
				</template>


				<template v-slot:foot="e">
					<foot></foot>
				</template>
			</ld-doc>

		</el-card>
	</div>
</template>

<script>
	import res from './menu-tree-res.js'
	export default {
		name: 'loading',
		data() {
			return {
				forms: {
					mode: 'vertical',
					collapse: false
				},
				layout: res.layout,

				tree: [{
						label: '一级菜单1',
						prop: 'menu1',
						icon: 'el-icon-platform-eleme',
						children: [{
								label: '二级菜单1',
								prop: 'cmenu1',
								children: [{
										label: '三级菜单1',
										prop: 'ccmenu1',
									},
									{
										label: '三级菜单2',
										prop: 'ccmenu2',
                    icon: 'el-icon-platform-eleme',
										children: [{
											label: '四级菜单1',
											prop: 'cccmenu1',
										}, {
											label: '四级菜单1',
											prop: 'cccmenu2',
										}]
									},
								]
							},
							{
								label: '二级菜单2',
								prop: 'cmenu2'
							},
							{
								label: '二级菜单3',
								prop: 'cmenu3',
							},
						]
					},
					{
						label: '一级菜单2',
						prop: 'menu2',
						icon: 'el-icon-eleme',
						children: [{
								label: '二级菜单2',
								prop: 'ccmenu2',
							},
							{
								label: '二级菜单3',
								prop: 'ccmenu3',
								children: [{
									label: '三级菜单4',
									prop: 'cccmenu4',
								}, {
									label: '三级菜单5',
									prop: 'cccmenu5',
								}]
							},
						]
					},
					{
						label: '一级菜单3',
						prop: 'menu3',
						icon: 'el-icon-s-tools',
					},
					{
						label: '一级菜单4',
						prop: 'menu4',
						icon: 'el-icon-s-goods'
					},
					{
						label: '一级菜单5',
						prop: 'menu5',
						icon: 'el-icon-success'
					},
				],

				doc: [{
						title: '菜单树组件`ld-menu-tree`',
						tip: '通过参数可多层递归显示菜单树',
						tip_d: '注意：理论上通过children节点可以无限递归多层菜单树，但为了性能考虑，请慎重操作!',
					},
					{
						h1: '一.简单示例',
						h2: '示例代码',
						html: `
            <ld-menu-tree class="w-200" style="height: 500px;overflow: hidden auto;" :tree="tree"></ld-menu-tree>
            `.replace(/^        /gm, ''),
						javascript: `
            export default {
                data() {
                  return {
                    tree:[
                      {label: '菜单1',prop: 'menu1',
                        children: [
                          {label: '二级菜单1',prop: 'cmenu1',
                            children: [
                              {label: '三级菜单1',prop: 'ccmenu1',},
                              {label: '三级菜单2',prop: 'ccmenu2',
                                children: [
                                    {label: '四级菜单1',prop: 'cccmenu1'},
                                    {label: '四级菜单1',prop: 'cccmenu2'}]
                                },
                            ]},
                          {label: '二级菜单2',prop: 'cmenu2'},
                          {label: '二级菜单3',prop: 'cmenu3'}]
                      },
                      {label: '菜单2',prop: 'menu2'},
                      {label: '菜单3',prop: 'menu3'},
                      {label: '菜单4',prop: 'menu4'},
                      {label: '菜单5',prop: 'menu5'},
                  ],
                }
              }
            }`.replace(/^          /gm, ''),
						p: '效果如下',
						slot: 'frist',
					},
					{
						h1: '二.自定义样式示例',
						slot: 'secound',
						html: `
						<ld-menu-tree :mode="forms['mode']"
							:class="{'w-200 ':forms['mode']== 'vertical'&&forms['collapse']== false,'w':forms['mode']!= 'vertical','w-60':forms['mode']== 'vertical'&&forms['collapse']== true}"
							:collapse="forms['collapse']||false" :background-color="forms['backgroundColor']"
							:text-color="forms['textColor']" :active-text-color="forms['activeTextColor']"
							:unique-opened="forms['uniqueOpened']" menu-trigger="click" style="overflow: hidden auto;"
							:style="{'height':forms['mode']== 'vertical'?'500px':'300px'}" :tree="tree">
						</ld-menu-tree>`.replace(/^						/gm, ""),
						javascript: `
							export default {
								data() {
									return {
										tree:[
											{label: '一级菜单1',prop: 'menu1',icon: 'el-icon-platform-eleme',
												children: [{label: '二级菜单1',prop: 'cmenu1',
													children:
														[{label: '三级菜单1',prop: 'ccmenu1',},
														{label: '三级菜单2',prop: 'ccmenu2',
														children:
															[{label: '四级菜单1',prop: 'cccmenu1',},
															{label: '四级菜单1',prop: 'cccmenu2',}]
														},
													]
												},
												{label: '二级菜单2',prop: 'cmenu2'},
												{label: '二级菜单3',prop: 'cmenu3',},
												]
											},
											{label: '一级菜单2',prop: 'menu2',icon: 'el-icon-eleme',
												children:
													[{label: '二级菜单2',prop: 'ccmenu2',},
													{label: '二级菜单3',prop: 'ccmenu3',
														children:
															[{label: '三级菜单4',prop: 'cccmenu4',},
															{label: '三级菜单5',prop: 'cccmenu5',}]
														},
													]
											},
											{label: '一级菜单3',prop: 'menu3',icon: 'el-icon-s-tools',},
											{label: '一级菜单4',prop: 'menu4',icon: 'el-icon-s-goods'},
											{label: '一级菜单5',prop: 'menu5',icon: 'el-icon-success'},
										]
									}
								}
							}`.replace(/^							/gm, ''),
					},
					{
						H1: '三.参数和其他',
						h2: '参数说明',
						md: `|关键字|类型|解释|默认值|是否必须|说明|
								|-|-|-|-|-|-|
								|tree|Array|菜单参数|[]|√|一组对象数据的集合[{label:'菜单1'},{label:'菜单2'},{label:'菜单3'}]即可创建一个简单的菜单[详情点这里,查看tree的取值](###tree)|
								|mode|String|菜单类型(\`vertical\`\\|\`horizontal\`)|vertical纵向||菜单树方向，可以使纵向，也可以是横向菜单|
								|collapse|Boolean|是否水平折叠|false||是否水平折叠收起菜单（仅在 mode 为 vertical 时可用|
								|background-color|String|菜单的背景色|'#ffffff'||（仅支持 hex 格式）|
								|text-color|String|菜单的文字颜色|'#303133'||（仅支持 hex 格式）|
								|active-text-color|String|激活菜单的文字颜色|'#409EFF'||当前激活菜单的文字颜色（仅支持 hex 格式）|
								|collapse-transition|Boolean|水平折叠时，使用过度动画|false|||
								|menu-trigger|String|子菜单打开的触发方式(\`click\`\\|\`hover\`)|click||(只在 mode 为 horizontal 时有效)|
								|uniqueOpened|Boolean|是否只保持一个子菜单的展开|false|||
								|defaultActive|String|当前激活菜单的 index|'0'|||`
					},
					{
						h2: 'tree参数说明',
						md: `|关键字|类型|解释|默认值|是否必须|说明|
								|-|-|-|-|-|-|
								|label|String|菜单显示的名称|-|√|-|
								|icon|String|菜单显示的图标|-||比如值为：'el-icon-search';建议一级菜单设置icon,在折叠菜单时比较重要|
								|disabled|Boolean|是否禁用|-||\`[注]\`暂时不起作用|
								|children|Array[Object]|子菜单|-||[理论上可以无限嵌套，但为了性能考虑，请慎重设置]子菜单是一组菜单子项的集合，形如\`{label:'1',children:[{label:'2'},{label:'3'},....]}\`|
`
					},
					{
						h2: 'Event事件',
						md: `|名称|类型|返回值|解释|说明|
						|-|-|-|-|-|
						|click|Function($event)|Object|菜单点击事件|当点击菜单时，触发事件。|`
					},
					{
						h1: '四.补充说明',
						tip_d: '如果发现当设置值为`mode="horizontal"`时，打开二级菜单会改变一级菜单的宽度时，请使用以下样式',
						css: `
						.el-menu--horizontal.el-menu>.el-submenu {
							position: relative;
						}

						.el-menu--horizontal.el-menu>.el-submenu>.el-menu--horizontal {
							position: absolute;
						}

						`.replace(/^						/gm, ''),
					},
					{
						slot: 'foot'
					}
				]
			}
		},
		created() {}
	}
</script>

<style>
	.loading .el-card__body {
		padding: 0 !important;
	}

	.el-menu--horizontal.el-menu>.el-submenu {
		position: relative;
	}

	/* .el-menu--horizontal.el-menu>.el-submenu>.el-submenu__title {} */

	.el-menu--horizontal.el-menu>.el-submenu>.el-menu--horizontal {
		position: absolute;
	}
</style>
