<template>
  <!-- 加载 -->
  <div class="box-b p10 h loading">
    <el-card class="doc w h  over-a-y">
      <ld-doc :doc="doc">
        <template v-slot:loadingTrue="e">
          <el-card>
            <ld-page-loading :loading="loading" style="height: 200px;">页面内容</ld-page-loading>
          </el-card>
        </template>
        <div class="m10"></div>
        <template v-slot:loadingTrueAndFalse="e">
          <el-button class="m-b2" size="mini" @click="loading2=!loading2">{{loading2?'停止加载':'开始加载'}}</el-button>
          <el-card>
            <ld-page-loading :loading="loading2" style="height: 200px;">
              这里显示的是ld-page-loading插槽中的内容
            </ld-page-loading>
          </el-card>
        </template>
        <div class="m10"></div>
        <template v-slot:customLoadingAnimal="e">
          <el-button class="m-b2" size="mini" @click="loading3=!loading3">{{loading3?'停止加载':'开始加载'}}</el-button>
          <el-card class="p0">
            <ld-page-loading :loading="loading3" style="height: 300px;">
              <template v-if="loading3" v-slot:loading>
                <div class="w h f-c a-i-c b-i">
                  <div>
                    <img src="../../../static/loading.gif" class="w-200 h-160 r10">
                    <div class="fs36">LOADING....</div>
                  </div>
                </div>
              </template>
              这里显示的是ld-page-loading插槽中的内容
            </ld-page-loading>
          </el-card>
        </template>
        <div class="m10"></div>

        <template v-slot:loadingType="e">
          <el-card class="p0">
            <ld-forms class="m-t10 m-b10" :form="forms" :layout="formLayout" :is-row="true">
              <template v-slot:buttons="e">
                <el-button type="primary m-l10">定制</el-button>
              </template>
            </ld-forms>
            <div class="f-s-w">
              <div class="cur-p" @click="copy(key)" v-for="(key,i) in loadingTypes" :key="i">
                <ld-page-loading :background="forms['background']" :color="forms['color']" :loading-text="forms['loadingText']" :skin="forms['skin']" class="w-200 h-200" :loading-type="key" :loading="true">
                  <div class="w h position-relative">
                    <div :id="key" style="z-index: 1004;position: absolute;bottom: 0;text-align: center;"
                      class="w p10 box-b">{{key}}</div>
                  </div>
                </ld-page-loading>
              </div>
            </div>
          </el-card>
        </template>

        <div class="m10"></div>

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
  import res from './loading-res.js';
  export default {
    name: 'loading',
    data() {
      return {
        forms: {skin: 'light'},
        formLayout: res.layout,
        loadingTypes: [
          "ball-pulse",
          "ball-grid-pulse",
          "ball-clip-rotate",
          "ball-clip-rotate-pulse",
          "square-spin",
          "ball-clip-rotate-multiple",
          "ball-pulse-rise",
          "ball-rotate",
          "cube-transition",
          "ball-zig-zag",
          "ball-zig-zag-deflect",
          "ball-triangle-path",
          "ball-scale",
          "line-scale",
          "line-scale-party",
          "ball-scale-multiple",
          "ball-scale-multiple",
          "ball-beat",
          "line-scale-pulse-out",
          "line-scale-pulse-out-rapid",
          "ball-scale-ripple",
          "ball-scale-ripple-multiple",
          "ball-spin-fade-loader",
          "line-spin-fade-loader",
          "triangle-skew-spin",
          "pacman",
          "ball-grid-beat",
          "semi-circle-spin",
          "ball-scale-random"
        ],

        loading: true,
        loading2: false,
        loading3: true,

        doc: [{
            H1: '页面加载组件`ld-page-loading`',
            tip: '在用户进入页面，或者操作数据时，我们希望页面呈现出加载动画，增加用户交互！',
          }, {
            h1: '一、示例',
            h2: '1.`ld-page-loading`组件的大小继承自父元素，因此需要手动指定大小。',
            html: `
             <ld-page-loading :loading="loading" style="height: 200px;">
                页面或组件正文
             </ld-page-loading>
            `.replace(/^        /gm, ''),
            tip_w: '通过true和false控制是否显示加载动画，当为false时则显示`ld-page-loading`插槽的内容',
          },
          {
            h2: '2.当值为true时显示加载动画',
            javascript: `
            export default{
              data(){
                return {
                  //通过true和false控制是否加载
                  loading:true,
                }
              }
            }
            `.replace(/^        /gm, ''),
            p: '效果如下',
            //插槽 插槽名称
            slot: 'loadingTrue',
          },
          {
            h2: '3.当值为false时则显示`ld-page-loading`插槽的内容',
            //插槽 插槽名称
            slot: 'loadingTrueAndFalse',
          },
          {
            h2: '4.通过插槽自定义加载动画',
            tip_d: '注意，当自定义加载动画时，需要对插槽进行v-if="loading"表达式绑定',
            html: `
             <ld-page-loading :loading="loading3" style="height: 300px;">
               <!--这里需要使用v-if="loading3"进行手动处理动画-->
               <template  v-if="loading3" v-slot:loading>
                 <div class="w h f-c a-i-c b-i">
                   <div>
                     <img src="../../../static/loading.gif" class="w-200 h-160 r10">
                     <div class="fs36">LOADING....</div>
                   </div>
                 </div>
               </template>
               这里显示的是ld-page-loading插槽中的内容
             </ld-page-loading>
            `.replace(/^        /gm, ''),
            slot: 'customLoadingAnimal'
          },
          {
            H2: '5.完整代码',
            vue: unescape(
              "%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3C%21--%u793A%u4F8B1--%3E%0A%20%20%20%20%3Cld-page-loading%20%3Aloading%3D%22loading%22%20style%3D%22height%3A%20200px%3B%22%3E%u9875%u9762%u5185%u5BB9%3C/ld-page-loading%3E%0A%20%20%20%20%3C%21--%u793A%u4F8B2--%3E%0A%20%20%20%20%3Cel-button%20class%3D%22m-b2%22%20size%3D%22mini%22%20@click%3D%22loading2%3D%21loading2%22%3E%7B%7Bloading2%3F%27%u505C%u6B62%u52A0%u8F7D%27%3A%27%u5F00%u59CB%u52A0%u8F7D%27%7D%7D%3C/el-button%3E%0A%20%20%20%20%3Cld-page-loading%20%3Aloading%3D%22loading2%22%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%20%20%u8FD9%u91CC%u663E%u793A%u7684%u662Fld-page-loading%u63D2%u69FD%u4E2D%u7684%u5185%u5BB9%0A%20%20%20%20%3C/ld-page-loading%3E%0A%20%20%20%20%3C%21--%u793A%u4F8B3--%3E%0A%20%20%20%20%3Cel-button%20class%3D%22m-b2%22%20size%3D%22mini%22%20@click%3D%22loading3%3D%21loading3%22%3E%7B%7Bloading3%3F%27%u505C%u6B62%u52A0%u8F7D%27%3A%27%u5F00%u59CB%u52A0%u8F7D%27%7D%7D%3C/el-button%3E%0A%20%20%20%20%3Cld-page-loading%20%3Aloading%3D%22loading3%22%20style%3D%22height%3A%20300px%3B%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%20v-if%3D%22loading3%22%20v-slot%3Aloading%3E%0A%09%3Cdiv%20class%3D%22w%20h%20f-c%20a-i-c%20b-i%22%3E%0A%09%20%20%3Cdiv%3E%0A%09%20%20%20%20%3Cimg%20src%3D%22../../../static/loading.gif%22%20class%3D%22w-200%20h-160%20r10%22%3E%0A%09%20%20%20%20%3Cdiv%20class%3D%22fs36%22%3ELOADING....%3C/div%3E%0A%09%20%20%3C/div%3E%0A%09%3C/div%3E%0A%20%20%20%20%20%20%3C/template%3E%0A%20%20%20%20%20%20%u8FD9%u91CC%u663E%u793A%u7684%u662Fld-page-loading%u63D2%u69FD%u4E2D%u7684%u5185%u5BB9%0A%20%20%20%20%3C/ld-page-loading%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%0A%3Cscript%3E%0A%20%20export%20default%20%7B%0A%20%20%20%20name%3A%20%27loading%27%2C%0A%20%20%20%20data%28%29%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20loading%3A%20true%2C%0A%20%20%20%20%20%20%20%20loading2%3A%20true%2C%0A%20%20%20%20%20%20%20%20loading3%3Atrue%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20created%28%29%20%7B%7D%0A%20%20%7D%0A%3C/script%3E%0A"
            ),
          },
          {
            H1: `二、参数`,
            markdown: `|关键字|类型|是否必须|默认值|说明|
            |-|-|-|-|-|
            |loading|Boolean|√|false|是否显示加载动画|
            |loading-text|String||加载中......|加载文字|
            |background|String|||背景色。当背景色为空时则会根据皮肤设置前景色颜色|
            |color|String|||前景色。当前景色为空时则会根据皮肤设置前景色颜色|
            |skin|String||light|皮肤：dark(深色)\|light(浅色)|
            |loadingType|\`ball-grid-pulse\`|String||动画类型,内置29中动画，见下方示例|
            |z-index|Number||1002|加载动画层级，当加载动画被遮挡时，可使用此参数|
            `,
            H2: '支持的动画类型`loadingType`,(其中部分不支持`light`皮肤)',
            slot: 'loadingType'
          },
          {
            H1: `三、插槽`,
            markdown: `|插槽名称|类型|说明|
            |-|-|-|
            |loading|具名插槽|自定义加载动画插槽，需要手动控制动画显示还是隐藏|
            `,
          },
        ]
      }
    },
    methods: {
      copy(key) {
        let el = document.getElementById(key);
        try {
          if (document.selection) { // IE8 以下处理
            var oRange = document.body.createTextRange();
            oRange.moveToElementText(el);
            oRange.select();
          } else {
            var range = document.createRange();
            // create new range object
            range.selectNodeContents(el); // set range to encompass desired element text
            var selection = window.getSelection(); // get Selection object from currently user selected text
            selection.removeAllRanges(); // unselect any user selected text (if any)
            selection.addRange(range); // add range to Selection object to select it
          }
          let flg = document.execCommand("copy");
          this.$message[flg ? 'success' : 'error'](flg ? "复制成功！" : "复制失败，请选中代码使用Ctrl+C进行复制,Ctrl+V进行黏贴！");
        } catch (e) {
          this.$message.error("复制失败，请选中代码使用Ctrl+C进行复制,Ctrl+V进行黏贴！");
        }
      }
    },
    created() {}
  }
</script>

<style>
  .loading .el-card__body {
    padding: 0 !important;
  }
</style>
