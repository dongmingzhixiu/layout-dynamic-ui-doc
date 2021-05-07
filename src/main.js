// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import home from './home'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import layoutDynamicUI from 'layout-dynamic-ui';
import 'layout-dynamic-ui/lib/index.css';

Vue.use(ElementUI);

Vue.use(layoutDynamicUI);

import pageImport from './page-import.js';

Vue.use(pageImport);


require("./mock/forms.js");

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { home },
  template: '<home/>'
})
