
import index from '@/pages/index'


import foot from '@/components/foot.vue'
import installs from '@/pages/start/install'
import loading from '@/pages/loading/loading'
import doc from '@/pages/doc/doc'
import menuTree from '@/pages/menu-tree/menu-tree'
import pageTabs from '@/pages/page-tabs/page-tabs'
import forms from '@/pages/forms/forms'
import tables from '@/pages/table/table.vue'
import css from '@/pages/css/css.vue'
import utils from '@/pages/utils/utils.vue'
import frames from '@/pages/frame/frame.vue'
import axios from '@/pages/axios/axios.vue'
import juanzhu from '@/pages/juanzhu/juanzhu.vue'
import first from '@/pages/example/first.vue'






const install = (Vue, opts = {}) => {
	Vue.component('index', index);
	Vue.component('install', installs);
	Vue.component('loading', loading);
	Vue.component('doc', doc);
	Vue.component('menu-tree', menuTree);
	Vue.component('page-tabs', pageTabs);
	Vue.component('forms', forms);
	Vue.component('tables', tables);
	Vue.component('frame', frames);
	Vue.component('axios', axios);
	Vue.component('util', utils);
	Vue.component('css', css);
	Vue.component('juanzhu', juanzhu);
	Vue.component('first', first);


	Vue.component('foot', foot);


}
export default {
	install
}
