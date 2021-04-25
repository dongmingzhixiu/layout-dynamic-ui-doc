<template>
  <!-- 加载 -->
  <div class="box-b p10 h ld-doc">
    <el-card class="doc w h">
      <ld-doc :doc="doc" class="w h">

        <template v-slot:first="e">
          <ld-doc :doc="doc1" :show-outline="false" class="w h bor-d">
            <template v-slot:foot="e">
              <foot></foot>
            </template>
          </ld-doc>
        </template>


        <template v-slot:secound="e">

          <ld-forms class="m-t10 m-b10" :form="forms" :layout="formLayout" :is-row="true">
            <template v-slot:buttons="e">
              <div style="position: relative;">
                <el-button type="primary m-l10" @click="copy('customCode')">复制代码</el-button>
                <div id="customCode" class="o0" style="position: absolute;">
                  {{forms}}
                </div>
              </div>
            </template>
          </ld-forms>

          <ld-doc :doc="doc2" :aligns="forms['aligns']" :skin="forms['skin']" :show-outline="forms['showOutline']" class="w bor-d"
            style="height: 1000px;">
            <template v-slot:foot="e">
              <foot></foot>
            </template>
          </ld-doc>
        </template>

        <template v-slot:foot="e">
          <foot></foot>
        </template>
      </ld-doc>
    </el-card>
  </div>
</template>

<script>
  import res from './doc-res.js';
  export default {
    name: 'doc',
    data() {
      return {
        forms: {
          showOutline: true,
          skin: 'dark',
          aligns:'left'
        },
        formLayout: res.layout,

        doc1: {
          h1: 'ld-doc组件是一个轻量级的文档解释组件',
          h2: 'TA的使用场景通常使用在官方文档中，需要结合示例代码展示，必要时可与需要提供可交互的示例动态结合！',
          h3: '这样的使用，可以大量复用，可以结合实例动态展示整个要说明程序或组件的各种特性！',
          slot: 'foot',
        },
        doc2: [{
            title: 'title 标题',
            tip: '注意：皮肤深色和浅色只对大纲起作用！',
            h1: '一.常用文档标签',
          },
          {
            h1: 'h1',
            h2: 'h2',
            h3: 'h3',
            tip_d: '`tip_d`标签',
            tip_i: '`tip_i`标签',
            tip_w: '`tip_w`标签',
            tip_s: '`tip_s`标签',
            tip_p: '`tip_p`标签,也可简写成`tip`',
            p: 'p标签'
          },
          {
            h1: '二.代码标签',
            p: '`csharp`, `html`, `css`, `javascript`, `php`, `dart`, `bash`, `shell`, `sql`, `vue`',
            tip_d: '目前这些标签会在文档中被解析成代码，如需将其他标签也解析成代码，请使用`codeLanguages`进行设置，(但样式方面需要自己去支持！)。当前值为`codeLanguages=["csharp", "html", "css", "javascript", "php", "dart", "bash", "shell", "sql", "vue"]`',
          }, {
            csharp: `
              public void GetData(){
                return null;
              }`.replace(/^        /gm, ''),
            html: `<div>这是html代码</div>`.replace(/^        /gm, ''),
            css: `
            .c-d{
              color:var(--dangercolor);
            }
            `.replace(/^        /gm, ''),
            javascript: `
            console.log('这是一段javascript代码');
            `.replace(/^        /gm, ''),
            php: `
            <?php

            echo "Hello World!" ;
            echo "Hello PHP!" ;

            ?>
            `.replace(/^        /gm, ''),
            bash: ` npm i `,
            shell: ` npm update `,
            sql: ` SELECT * FROM USERS`,

          },
          {
            h1: '三.以上文档配置代码如下',
            javascript: ``,
            slot: 'foot',
          }
        ],

        doc: [{
            title: '`ld-doc`轻量级文档结构化解释组件',
            h1: '一.准备',
            tip: '通过参数控制显示内容',
            tip_d: '注意：如果在使用中需要使用`markdown`来显示内容且markdown不能正确渲染，请使用如下命令安装markdown文档解释插件`vue-meditor`',
            bash: 'npm i vue-meditor',
          },
          {
            h1: '二.一个简单的文档示例',
            h2: '示例代码`不显示大纲，包含h1,h2,h3和slot`',
          }, {
            html: `
          <ld-doc :doc="doc1" :show-outline="false" class="w h b-p2">
            <!-- 自定义插槽 ，插槽名称右 doc变量中的 slot值决定-->
            <!-- 这里的作用域插槽名称foot是由下方参数的slot:'foot'决定的-->
            <template v-slot:foot="e">
              <foot></foot>
            </template>
          </ld-doc>
          `.replace(/^       /gm, ''),
            javascript: `
            export default {
              data(){
                return {
                  data1:{
                    h1:'ld-doc组件是一个轻量级的文档解释组件',
                    h2:'TA的使用场景通常使用在官方文档中，需要结合示例代码展示，必要时可与需要提供可交互的示例动态结合！',
                    h3:'这样的使用，可以大量复用，可以结合实例动态展示整个要说明程序或组件的各种特性！',
                    slot:'foot',
                  }
                }
              }
            }
          `.replace(/^       /gm, ''),
            h2: '效果如下',
            slot: 'first',
          },
          {
            h1: '三.文档参数`doc`结构说明',
            h2: '文档结构支持`Array`,`Object`,`String`类型',
            h3: '如下是一个动态支持各种类型的示例，可手动设置',
            tip_d: '如果需要支持多个相同标签，那么将TA分割成两个Object,避免相同键的值覆盖！',
            slot: 'secound',
          },
          {
            slot: 'foot'
          }
        ]
      }
    },
    created() {
      this.doc2[this.doc2.length - 1]['javascript'] =
      JSON.stringify(this.doc2)
      .replace(/^/,'\n	 ')
      .replace(/,"/g,',\n\t\t"')
      .replace(/"[}]/g,'"\n\t}')
      .replace(/,[{]/g,',\n\t{\n\t\t')
      ;
    }
  }
</script>

<style>
  .loading .el-card__body {
    padding: 0 !important;
  }
</style>
