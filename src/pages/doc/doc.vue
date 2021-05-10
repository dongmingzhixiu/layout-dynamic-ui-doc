<template>
  <!-- 加载 -->
  <div class="box-b p10 h ld-doc">
    <el-card class="doc w h">
      <ld-doc :doc="doc" class="w h">

        <template v-slot:first="e">
          <ld-doc :doc="doc1" :show-outline="false" class="w h bor-d" style="height: 300px;">
            <template v-slot:foot="e">
              <foot></foot>
            </template>
          </ld-doc>
        </template>


        <template v-slot:secound="e">

          <ld-forms class="m-t10 m-b10" :form="forms" :layout="formLayout" :is-row="true">
            <template v-slot:buttons="e">
              <div style="position: relative;">
                <el-button type="primary m-l10" @click="copy('#doc2',true)">复制代码</el-button>
              </div>
            </template>
          </ld-forms>
          <ld-doc :doc="doc2" :aligns="forms['aligns']" :skin="forms['skin']" :show-outline="forms['showOutline']"
            :doc-width="forms['docWidth']" class="w bor-d" style="height: 1000px;">
            <template v-slot:foot="e">
              <foot></foot>
            </template>
          </ld-doc>
        </template>

        <template v-slot:third="e">

          <ld-doc :doc="doc3" class="w bor-d" style="height: 1000px;">
            <template v-slot:foot="e">
              <foot></foot>
            </template>
          </ld-doc>
        </template>

        <template v-slot:outlines="e">
          <ld-doc :doc="doc1" class="w h">
             <template v-slot:outline="e">
               <!--需要实现的插槽内容-->
               <div class="w-200 b-d1">
               这是自定义大纲，大纲内容变量为 e
               </div>
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
  import js from '@/util/js-formatter.js'
  import res from './doc-res.js';
  export default {
    name: 'doc',
    data() {
      return {
        forms: {
          showOutline: true,
          skin: 'dark',
          aligns: 'left'
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
            p: '使用foot组件作为插槽内容!',
            slot: 'foot',
          }
        ],
        doc3: [{
            md: '```javascript\n' +
              'console.log("hello world!");\n' +
              '```',
          },
          {
            md: '# 标题1\n## 标题2',
          },
          {
            md: '```vue\n'+
            '<ld-doc :doc="doc3" class="w bor-d" style="height: 1000px;">\n  <template v-slot:foot="e">\n   <foot></foot>\n  </template>\n</ld-doc>\n'+
            '```\n>解析图片\n![gitHub图标](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)'
          }
        ],

        doc: [{
            title: '`ld-doc`轻量级文档结构化解释组件',
            h1: '一.准备',
            tip: '通过参数控制显示内容',
            tip_d: '注意：如果在使用中需要使用`markdown`来显示内容且markdown不能正确渲染，请使用如下命令安装markdown文档解释插件`vue-meditor`',
            tipd: '文档大纲只支持 `h1`,`h2`,`h3`',
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
            h1: '四.`markdown`或`md`关键字',
            h2: '使用`markdown`或`md`关键字可以简单的渲染md文档内容！',
            tip_d: '使用该标签之后，会使用`vue-meditor`渲染页面，但没有文档大纲。如果不能正确渲染，请使用`npm i vue-meditor`命令安装markdown文档解释插件`vue-meditor`',
            slot: 'third',
            p:'使用md标签或者markdown标签时，代码如下',
            html:`
            <ld-doc :doc="doc" class="w bor-d" style="height: 1000px;">
              <template v-slot:foot="e">
                <foot></foot>
              </template>
            </ld-doc>
            `.replace(/^          /gm,""),
            javascript:`
            export default {
              data(){
                return {
                  doc:[{
                        md: '\`\`\`javascript\\n'+
                            '  console.log("hello world!");\\n'+
                            '\`\`\`',
                      },
                      {
                        md: '# 标题1\\n## 标题2',
                      },
                      {
                        md: '\`\`\`vue\\n'+
                            '<ld-doc :doc="doc3" class="w bor-d" style="height: 1000px;">\\n  <template v-slot:foot="e">\\n   <foot></foot>\\n  </template>\\n</ld-doc>\\n'+
                            '\`\`\`\\n>解析图片\\n![gitHub图标](https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png)'
                      }
                    ],
                  }
                }
            }`.replace(/^          /gm,"")
          },
          {
            h1: '五.`slot`关键字',
            h2: '使用`slot`可以自定义插槽！(插槽为作用域插槽)',
            tip_d: '比如为文档插入插槽，名称为：`first`,那么文档结构如下：',
            javascript:`
            export default {
              data(){
                return {
                  doc:[
                    {slot:'first'}
                  ]
                }
              }
            }
            `.replace(/^          /gm,""),
            tipd:'TA的插槽实现为',
            html:`
             <ld-doc :doc="doc" class="w h">
                <!--插槽名称为first 【必须以作用域插槽的形式来实现插槽内容】-->
                <template v-slot:first="e">
                  <!--需要实现的插槽内容-->
                </template>
             </ld-doc>
            `.replace(/^          /gm,""),
          },
          {
            h1:'六.参数和其他说明',
            h2:'参数',
            md:`|关键字|类型|是否必须|默认值|说明|
            |-|-|-|-|-|
            |doc|Array,Object,String|√||整个文档的解释内容；支持关键字见下表|
            |code-languages|Array||\`["csharp", "html", "css", "javascript", "php", "dart", "bash", "shell", "sql", 'vue']\`|将那些关键字解析成以代码形式显示|
            |show-outline|Boolean||true|是否显示大纲|
            |skin|String|||皮肤\`light\`\\|\`dark\`;皮肤只作用在大纲上|
            |aligns|String||left|大纲位置\`left\`\\|\`right\`\\|\`center\`|
            |doc-width|String||100%|文档内容区域的宽度;值的格式形如100px或者100%等|
            |MdAnchorLinkTarget|String||_self|md文档中锚链接点击时打开方式_blank,_self,_parent,_top,framename|
            `
          },
          {
            h2:'doc参数支持关键字',
            md:`|标签关键字|补充|
                |-|-|
                |p||
                |h1||
                |h2||
                |h3||
                |slot|(具名插槽)|
                |tip|tip\\|tip_p 主题色，tip_d 危险色，tip_w 警告色 tip_i 信息色 tip_s 成功色(实际上关键字以\`tip\`开头，结尾以\`p\` \`d\` \`w\` \`i\` \`s\`,都可以解析成对应的tip;如\`tip_d\`<=>\`tip__d\`<=>\`tipd\`是相同的)|
                |其他被解析成代码的标签|\`csharp\`, \`html\`, \`css\`, \`javascript\`, \`php\`, \`dart\`, \`bash\`, \`shell\`, \`sql\`, \`vue\`|
                |md\|markdown\\|markdown简单文档支持|`
          },
          {
            h2:'插槽',
            md:`|插槽方式|类型|说明|
            |-|-|-|
            |自定名称|作用域插槽|根据传入的数据值定义不同的插槽|`
          },
          {
            h1:'七.自定义大纲；插槽`outline`',
            tip_d:'插槽名`outline`作为内置关键字，用来自定义文章大纲。',
            slot:'outlines',
            html:`
             <ld-doc :doc="doc1" class="w h">
                <template v-slot:outline="e">
                  <!--需要实现的插槽内容-->
                  <div class="w-200 b-d1">
                   这是自定义大纲，大纲内容变量为 e
                  </div>
                </template>
             </ld-doc>
            `.replace(/^          /gm,""),
          },
          {
            slot: 'foot'
          }
        ]
      }
    },
    methods: {
      copy(selector, isHTML) {
        const flg = this.$ld.util.copyToClipboard(JSON.stringify(this.forms));
        this.$message[flg ? 'success' : 'error'](flg ? '复制成功！' : '复制失败！');
      }
    },
    created() {
      this.doc2[this.doc2.length - 1]['javascript'] =
        js.format(JSON.stringify(this.doc2)).replace(/^/, '\n')
    }
  }
</script>

<style>
  .loading .el-card__body {
    padding: 0 !important;
  }
  .ld-doc-item .m-r10.over-a-y.h.p10.box-b.f-n-c-w,.ld-doc-item .over-a-y.h.p10.box-b.f-n-c-w{
    width: 300px!important;
    max-width: 300px!important;
  }
</style>
