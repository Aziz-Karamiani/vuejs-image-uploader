import {createApp} from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'
import s from './store/index'

const store = createStore(s);
createApp(App).use(store).mount('#app')
