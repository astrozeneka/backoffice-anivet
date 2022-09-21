
import Vue from "vue"
import i18n from "../plugins/i18n"
import AdminLogin from "../pages/AdminLogin"

new Vue({
    i18n: i18n,
    render: (h)=>h(AdminLogin),
    components: {}
}).$mount('#app')
