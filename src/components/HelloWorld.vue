<template>
  <ld-page-loading :loading="loading" class="box-b" style="height: calc(100vh - 20px);">
    <div class="w h f-c over-a-y ">
      <ld-forms :cols="1" :form="forms" :show-tip-button="true" :layout="layouts" class="w h box-b"
        style="width:820px;">
        <!-- 单独行插槽 -->
        <!-- <template v-slot:rowCustom="e">{{e}}</template> -->
        <!-- 单独行的 录入元素插槽 -->
        <template v-slot:testSlot="e">
          <div class="tip-w b-w1 ellipsis w"> {{e}}</div>
        </template>
        <template v-slot:dataInfo="e">
          <div class="tip-d b-d1"> {{e.form}}</div>
        </template>


        <!-- form表单插槽 -->
        <!-- <template v-slot:custom="e">{{e}}</template> -->

        <!-- form按钮插槽-->
        <template v-slot:buttons="e">
          <div class="w f-c">
            <el-button @click="saveData">保存</el-button>
          </div>
        </template>


      </ld-forms>
    </div>
  </ld-page-loading>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        loading: true,
        forms: {

        },
        layouts: [{
            prop: 'id',
            type: 'tip',
            tip: `这是一段测试文字！`,
            tipClass: 'tip-p b-p1',
            label: 'tip',
            showLabel: true
          }, {
            prop: 'id2',
            type: 'datakey',
            label: 'id'
          }, {
            prop: 'name',
            type: 'text',
            label: '姓名',
            css: 'c-d',
            style: 'color:red;',
            tip: `<div>姓名必须是<span class="c-d">3-6</span>个字符</div>`,
            tipClass: 'tip-d b-d1 p1 fs12',
            require: true
          }, {
            prop: 'password',
            type: 'text',
            password: true,
            tip: `<div>密码必须是<span class="c-d">6-12</span>个字符</div>`,
            label: '密码'
          }, {
            prop: 'testSlot',
            type: 'slot',
            label: '测试插槽',
          }
        ],
      };

    },
    methods: {
      saveData() {
        this.$ld.getRequest('test/getUserInfo').then(res => {
          console.log(res)
          if (res.code == 0) {
            return;
          }
        }, error => {
          console.log(error);
        })
        // this.$ld.request('test/getUserInfo', 'get', {}).then(res => {
        // 	debugger
        // 	console.log(res)
        // 	if (res.code == 0) {
        // 		return;
        // 	}
        // }, error => {
        // 	console.log(error);
        // })
      },
    },
    created() {
      setTimeout(() => {
        this.loading = false;
      }, 200);
    }
  }
</script>
