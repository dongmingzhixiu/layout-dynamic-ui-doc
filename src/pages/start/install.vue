<template>
  <!-- 安装 -->
  <div class="box-b p10 h">
    <el-card class="doc w h  over-a-y">
      <ld-doc :doc="doc">
      </ld-doc>
      <div class="w h f-s">
        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
          style="width:20px;height:20px" />
        <a class="c-p" href="https://github.com/dongmingzhixiu/layout-dynamic-ui">发现错误,去修改</a>
      </div>
      <div class="m10"></div>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'installs',
    data() {
      return {
        doc: [{
            H1: '目的',
            tip: '我们期望通过传入简单的数据参数，来控制显示布局，避免同样的重复构建相似的布局。我们甚至可以通过从数据库加载布局信息，来显示不同的表单结构，让开发只需要专注于结构，减少对布局的重复构建。',
          }, {
            h1: '安装',
            h2: 'npm安装',
            p: '推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。',
            bash: 'npm i layout-dynamic-ui',
            //插槽 插槽名称
            slot: 'custom',
          },
          {
            p:'在main.js中进行引入',
            javascript: `
                import Vue from 'vue';
                import App from './App';
                import ElementUI from 'element-ui';
                import 'element-ui/lib/theme-chalk/index.css';

                import layoutDynamicUI from 'layout-dynamic-ui';
                import 'layout-dynamic-ui/lib/index.css';
                Vue.use(ElementUI);
                Vue.use(layoutDynamicUI);
                Vue.config.productionTip = false
                new Vue({
                  el: '#app',
                  components: { App },
                  template: '<App/>'
                })`.replace(/^             /gm, ' '),
            tip_i:'完成以上操作即可进行组件的使用！'
          }
        ]
      }
    }
  }
</script>

<style>
</style>
