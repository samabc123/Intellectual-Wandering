import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon, Button, PullRefresh} from 'vant';

import App from './App.vue'
import router from './router'
// import baiduMap from 'vue3-baidu-map-gl'

import SvgIcon from '@/components/SvgIcon/index.vue'

import 'amfe-flexible/index.js'
import './assets/styles/index.scss'
import './assets/icons/iconfont.js'

import './permission'
import directive from './directive'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Icon)
app.use(Button)
app.use(PullRefresh)
// app.use(baiduMap, {
//     ak: '百度地图ak',
//     plugins: ['TrackAnimation']
// })
directive(app)

app.component('svg-icon', SvgIcon)

app.mount('#app')
