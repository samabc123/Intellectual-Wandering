import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { ConfigProvider } from 'vant';
import { Icon, Button, PullRefresh } from 'vant';
import { Field, CellGroup, Form } from 'vant';

import App from './App.vue'
import router from './router'
// import baiduMap from 'vue3-baidu-map-gl'

import SvgIcon from '@/components/SvgIcon/index.vue'

import 'amfe-flexible/index.js'
import './assets/styles/index.scss'
import './assets/icons/iconfont.js'
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios
app.use(ConfigProvider)
app.use(Field)
app.use(Form)
app.use(CellGroup)
app.use(createPinia())
app.use(router)
app.use(Icon)
app.use(Button)
app.use(PullRefresh)
// app.use(baiduMap, {
//     ak: '百度地图ak',
//     plugins: ['TrackAnimation']
// })

app.component('svg-icon', SvgIcon)

app.mount('#app')
