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
    name: 'loading',
    data() {
      return {
        loading: true,
        loading2: true,
        loading3: true,

        doc: [{
          H1: '轻量级文档结构化解释组件`ld-doc`',
          tip: '通过参数控制显示内容',
          tip_d: '注意：如果在使用中需要使用`markdown`来显示内容且markdown不能正确渲染，请使用如下命令安装markdown文档解释插件`vue-meditor`',
          bash: 'npm i vue-meditor',
        }, ]
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
