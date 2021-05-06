<template>
  <ld-frame class="h-vh w" :menu-tree="menuTree"></ld-frame>
</template>

<script>
  import layout from './pages/layout.js';
  export default {
    name: 'home',
    data() {
      return {
        menuTree: layout.menuTree,
      }
    },
    beforeCreate() {
      //配置全局参数
      this.$ld.component.loadingPage = {
        loadingType: 'line-scale'
      }
    }
  }
</script>

<style lang="scss">
  .doc {
    box-sizing: border-box;
    padding: 20px;
    background: white;

    h1 {
      color: #1f2f3d;
      font-size: 28px;
      font-weight: 400;
      line-height: 40px;
    }

    h2 {
      font-weight: 400;
      font-size: 22px;
      color: #1f2f3d;
      line-height: 30px;
    }

    h3 {
      font-weight: 400;
      font-size: 20px;
      color: #1f2f3d;
    }

    p {
      font-size: 14px;
      color: #5e6d82;
      line-height: 1.5em;
    }

    .code[lang=shell] {
      background: rgba(255, 253, 248, 1.0);
      padding: 10px;
      margin-top: 5px;
      line-height: 40px;
      border: 1px solid #ececec;
    }
    
    .el-card__body {
      padding: 0 !important;
      height: 100%;
    }
  }
  .m-r10.box-shadow.over-a-y.h.p10.box-b {
    max-width: 300px !important;
    min-width: 300px !important;
  }
</style>
