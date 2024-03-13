import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Icon, Button } from 'vant';

import App from './App.vue'
import router from './router'

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

directive(app)

app.component('svg-icon', SvgIcon)

app.mount('#app')
