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
          </el-card>
        </template>
        <div class="m10"></div>

      </ld-doc>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: 'loading',
    data() {
      return {
        loading: true,
        loading2: true,
        loading3:true,

        doc: [{
            H1: '页面加载组件',
            tip: '在用户进入页面，或者操作数据时，我们希望，页面呈现出，加载动画，增加用户交互！',
          }, {
            h1: '示例',
            tip_i: '`ld-page-loading`组件的大小继承自父元素',
            html: `
             <ld-page-loading :loading="loading" style="height: 200px;">
                页面或组件正文
             </ld-page-loading>
            `,
            tip_w: '通过true和false控制是否显示加载动画，当为false时则显示`ld-page-loading`插槽的内容',
          },
          {
            tip_i: '当值为true时显示加载动画',
            javascript: `
            export default{
              data(){
                return {
                  //通过true和false控制是否加载
                  loading:true,
                }
              }
            }
            `,
            p: '效果如下',
            //插槽 插槽名称
            slot: 'loadingTrue',
          },
          {
            tip_i: '当值为false时则显示`ld-page-loading`插槽的内容',
            //插槽 插槽名称
            slot: 'loadingTrueAndFalse',
          },
          {
            tip_i: '通过插槽自定义加载动画',
            tip_d:'注意，当自定义加载动画时，需要对插槽进行v-if="loading"表达式的绑定',
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
            `,
            slot: 'customLoadingAnimal'
          },
          {
            p: '完整代码',
            javascript:unescape("%0A%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3C%21--%u793A%u4F8B1--%3E%0A%20%20%20%20%3Cld-page-loading%20%3Aloading%3D%22loading%22%20style%3D%22height%3A%20200px%3B%22%3E%u9875%u9762%u5185%u5BB9%3C/ld-page-loading%3E%0A%20%20%20%20%3C%21--%u793A%u4F8B2--%3E%0A%20%20%20%20%3Cel-button%20class%3D%22m-b2%22%20size%3D%22mini%22%20@click%3D%22loading2%3D%21loading2%22%3E%7B%7Bloading2%3F%27%u505C%u6B62%u52A0%u8F7D%27%3A%27%u5F00%u59CB%u52A0%u8F7D%27%7D%7D%3C/el-button%3E%0A%20%20%20%20%3Cld-page-loading%20%3Aloading%3D%22loading2%22%20style%3D%22height%3A%20200px%3B%22%3E%0A%20%20%20%20%20%20%u8FD9%u91CC%u663E%u793A%u7684%u662Fld-page-loading%u63D2%u69FD%u4E2D%u7684%u5185%u5BB9%0A%20%20%20%20%3C/ld-page-loading%3E%0A%20%20%20%20%3C%21--%u793A%u4F8B3--%3E%0A%20%20%20%20%3Cel-button%20class%3D%22m-b2%22%20size%3D%22mini%22%20@click%3D%22loading3%3D%21loading3%22%3E%7B%7Bloading3%3F%27%u505C%u6B62%u52A0%u8F7D%27%3A%27%u5F00%u59CB%u52A0%u8F7D%27%7D%7D%3C/el-button%3E%0A%20%20%20%20%3Cld-page-loading%20%3Aloading%3D%22loading3%22%20style%3D%22height%3A%20300px%3B%22%3E%0A%20%20%20%20%20%20%3Ctemplate%20%20v-if%3D%22loading3%22%20v-slot%3Aloading%3E%0A%09%3Cdiv%20class%3D%22w%20h%20f-c%20a-i-c%20b-i%22%3E%0A%09%20%20%3Cdiv%3E%0A%09%20%20%20%20%3Cimg%20src%3D%22../../../static/loading.gif%22%20class%3D%22w-200%20h-160%20r10%22%3E%0A%09%20%20%20%20%3Cdiv%20class%3D%22fs36%22%3ELOADING....%3C/div%3E%0A%09%20%20%3C/div%3E%0A%09%3C/div%3E%0A%20%20%20%20%20%20%3C/template%3E%0A%20%20%20%20%20%20%u8FD9%u91CC%u663E%u793A%u7684%u662Fld-page-loading%u63D2%u69FD%u4E2D%u7684%u5185%u5BB9%0A%20%20%20%20%3C/ld-page-loading%3E%0A%20%20%3C/div%3E%0A%3C/template%3E%0A%0A%3Cscript%3E%0A%20%20export%20default%20%7B%0A%20%20%20%20name%3A%20%27loading%27%2C%0A%20%20%20%20data%28%29%20%7B%0A%20%20%20%20%20%20return%20%7B%0A%20%20%20%20%20%20%20%20loading%3A%20true%2C%0A%20%20%20%20%20%20%20%20loading2%3A%20true%2C%0A%20%20%20%20%20%20%20%20loading3%3Atrue%2C%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%2C%0A%20%20%20%20created%28%29%20%7B%7D%0A%20%20%7D%0A%3C/script%3E%0A"),
          },
        ]
      }
    },
    created() {}
  }
</script>

<style>
  .loading .el-card__body{
    padding: 0!important;
  }
</style>
