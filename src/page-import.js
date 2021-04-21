
import index from '@/pages/index'


import installs from '@/pages/start/install'
import loading from '@/pages/loading/loading'





const install = (Vue, opts = {}) => {
	Vue.component('index', index);
	Vue.component('install', installs);
	Vue.component('loading', loading);
}
export default {
	install
}
