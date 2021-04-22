
import index from '@/pages/index'


import installs from '@/pages/start/install'
import loading from '@/pages/loading/loading'
import doc from '@/pages/doc/doc'
import menuTree from '@/pages/menu-tree/menu-tree'





const install = (Vue, opts = {}) => {
	Vue.component('index', index);
	Vue.component('install', installs);
	Vue.component('loading', loading);
	Vue.component('doc', doc);
	Vue.component('menu-tree', menuTree);
  
}
export default {
	install
}
