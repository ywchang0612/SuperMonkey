import Vue from 'vue'
import NotFoundPage from './404.vue'

Vue.config.productionTip = false

new Vue({
    render: h => h(NotFoundPage),
}).$mount('#app')
