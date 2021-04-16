<template>
  <div id="app" class="h-vh">
    <router-view class="wh box-b over-a-y" />
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        loginLoading: false,
        loading: false,
        forms: {},
        layouts: [{
            prop: 'phone',
            type: 'text',
            label: '',
            placeholder: '请输入电话号码',
            regex: /^[1][0-9]{10}$/,
            require:true,
          },
          {
            prop: 'password',
            type: 'text',
            label: '',
            placeholder: '请输入用户密码',
            regex: /^[1][0-9]{10}$/,
            require:true,
          },
        ]
      }
    },
    methods: {
      loginData() {
        console.log('login')

        //验证数据
        let result = this.$refs.loginForm.checkForm();
        if (result['error']) {
          this.$message.error(result['msg'])
          return;
        }

        this.loginLoading = true;
        //模拟请求耗时
        setTimeout(() => {
          this.loginLoading = false;
        }, 2000);


      },
      resetData() {
        this.forms = {};
      }
    },
    created() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
</script>
