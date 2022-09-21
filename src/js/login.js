
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOLogin from "../pages/BOLogin"

new Vue({
    i18n: i18n,
    render: (h)=>h(BOLogin),
    components: {}
}).$mount('#app')
