<template>
  <div class="box-b p10 h ld-doc">
    <el-card class="doc w h">
      <!-- 页面内容 -->
      <ld-doc :doc="doc" class="w h">

      </ld-doc>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: '',
    data() {
      return {
        doc:[
          {
            title:'快速开发框架页',
            tip:'文档正在完善中...<a target="_black" href="https://github.com/dongmingzhixiu/layout-dynamic-ui/blob/main/doc/ld-frame.md">前往gitHub查看ld-frame说明文档</a>',
            md:`# \`ld-frame\`后台管理页

            ## 效果图

            ![效果图](https://github.com/dongmingzhixiu/layout-dynamic-ui/raw/main/effect/ld-frame.png)

            ## \`ld-frame\` 参数

            > \`ld-page-tabs\` 只有简单的几个参数

            |关键字|类型|解释|默认值|是否必须|说明|
            |-|-|-|-|-|-|
            |menuTreeUniqueOpened|Boolean|菜单树是否只打开一个|||菜单树是否只打开一个|
            |menuTree|Array|菜单树参数|||详情参考[菜单树参数](./ld-menu-tree.md##\`ld-menu-tree\`属性)|
            |leftHeadInfo|Object||头部左侧信息||{image:'logo图片',label:'右侧第一行文字',text:'右侧第二行文字'}||
            |passEventUp|Boolean|是否向上传递事件|true||详细说明见[页面事件向上传递](##页面事件向上传递约定)|
            |showConfirm|Boolean|关闭窗口时，是否弹框提示|true|||


            ## Event 事件
             > 无


            ## Slot 插槽（作用域插槽）
            |名称|类型|插槽入参|说明|
            |-|-|-|-|
            |headCenter|默认插槽||头部内容插槽|
            |logo|作用域插槽||自定义左侧图标和文字|
            |page|作用域插槽|item {} 一个tab元素对象值|使用此插槽意味着你需要自己完成页面相关的显示和操作|


            ## 页面事件向上传递约定

            > 在将页面作为组件进行标签页操作时，有时需要在页面操作后床底到标签页外部以便进行其他关操作，此时便需要使用固定的格式进行参数传递

            - 设置 \`passEventUp = true\` 向上传递数据

            -- 在页面中使用如下代码
            \`\`\`javascript
            	//向上传递事件名称必须是event，参数必须具备eventMethod和eventParam
            	this.$emit('events',{eventMethod:'click',eventParam:{}});
            \`\`\`
            此时在\`ld-page-tabs\`页面中处理函数使用如下代码
            \`\`\`html
            <ld-page-tabs @events="getEvent"></ld-page-tabs>
            \`\`\`
            \`\`\`javascript
            //....
            	getEvent(event){
            		//处理 相关事件
            	}
            //...
            \`\`\`

            - 设置 \`passEventUp = false\` 不向上传递数据，此时事件则会散播
            -- 在页面中使用如下代码
            \`\`\`javascript
            	//向上传递事件名称必须是event，参数必须具备eventMethod和eventParam
            	this.$emit('events',{eventMethod:'click',eventParam:{}});
            \`\`\`
            此时在\`ld-page-tabs\`页面中处理函数使用如下代码
            \`\`\`html
            <ld-page-tabs @click="getEvent"></ld-page-tabs>
            \`\`\`
            \`\`\`javascript
            //....
            	getEvent(event){
            		//这里的 event则为eventParam的值
            		//处理 相关事件
            	}
            //...
            \`\`\`

            # 补充说明

            ## 页面内关闭窗口,刷新窗口,打开窗口和 logo 区域设置

            ### \`home.vu\`的模板

            \`\`\`html
            <!--home.vue-->
            <ld-frame ref="frame" class="h-vh w" :menu-tree="menuTree" :left-head-info="leftHeadInfo" @openTabs="openTabs" @closeTabs="closeTabs" @refreshTabs="refreshTabs" :pass-event-up="false">
            	<template v-slot:logo="e">
            		<div :title="\`\${leftHeadInfo.label} \\r\\n \`\${leftHeadInfo.text}\`" class="logo f-c a-i-c b-i2" style="height: 60px;">
            			<img class="w-40 h-40 b-t m4" :src="leftHeadInfo.image"></img>
            			<div v-if="e.item.collapse">
            				<div class="fs14 c-f fs-w-b c-f" style="text-shadow: 1px 1px #f3f3f373;color: #fefefe;">
            					{{leftHeadInfo.label}}
            				</div>
            				<div class="fs f-s a-i-c c-f m-t2">{{leftHeadInfo.text}}</div>
            			</div>
            		</div>
            	</template>
            </ld-frame>
            \`\`\`
            ### \`home.vu\`的脚本

            \`\`\`javascript
            //home.vue
            /**
             * 打开tab
             * @param {Object} e
             */
            openTabs(e) {
            	this.$refs.frame.menuClick(e);
            },
            /**
             * 关闭tab
             * @param {Object} e
             */
            closeTabs(item) {
            	if (typeof item['showConfirm'] === 'boolean' && item['showConfirm'] == false) {
            		this.$refs.frame.closeTabPageByProp(item['prop']);
            		return;
            	}
            	this.$confirm(\`确定关闭【\${item['label']}】窗口吗？\`, '提示', {
            		confirmButtonText: '确定',
            		cancelButtonText: '取消',
            		type: 'warning'
            	}).then(() => {
            		this.$refs.frame.closeTabPageByProp(item['prop']);
            	}).catch(() => {});
            	return;
            },
            /**
             * 刷新页面
             * @param {Object} item
             */
            refreshTabs(item) {
            	this.$refs.frame.refreshTabByProp(item['prop']);
            }
            \`\`\`
            ###  \`ld-frame\`组件内使用的页面
            \`\`\`javascript
            //通过\`ld-frame\`使用的页面内
            refreshTabs() {
            	this.$emit("events", {
            		eventMethod: 'refreshTabs',
            		eventParam: {prop: 'page1'} //与ld-frame 的layout参数的prop值一致
            	});
            },
            openTabs(e) {
            	this.$emit('events', {
            		eventMethod: 'openTabs',
            		eventParam: {prop:'page1',label:'页面1',icon:'el-icon-pie-chart',page:'page1'} //页面必须设置prop值，否则在关闭页面后不能被选中
            	});
            },
            closeTabs(e) {
            	this.$emit("events", {
            		eventMethod: 'closeTabs',
            		eventParam: {showConfirm:true,prop:'page1'} //与ld-frame 的layout参数的prop值一致
            	});
            }
            \`\`\`

            `.replace(/^       /gm,''),

          }
        ]
      };
    }
  }
</script>

<style>
</style>
