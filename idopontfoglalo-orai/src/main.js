import { Toast,  POSITION }  from 'vue-toastification'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "vue-toastification/dist/index.css"
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const options ={
    POSITION: POSITION.TOP_RIGHT,
    timeout: 200,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    Animation: 'bounce',

}

app.use(createPinia())
app.use(router)
app.use(Toast, options)

app.mount('#app')
