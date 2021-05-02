
import index from '@/pages/index'


import foot from '@/components/foot.vue'
import installs from '@/pages/start/install'
import loading from '@/pages/loading/loading'
import doc from '@/pages/doc/doc'
import menuTree from '@/pages/menu-tree/menu-tree'
import pageTabs from '@/pages/page-tabs/page-tabs'





const install = (Vue, opts = {}) => {
	Vue.component('index', index);
	Vue.component('install', installs);
	Vue.component('loading', loading);
	Vue.component('doc', doc);
	Vue.component('menu-tree', menuTree);
	Vue.component('page-tabs', pageTabs);
	Vue.component('foot', foot);
  

}
export default {
	install
}
