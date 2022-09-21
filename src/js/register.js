
import Vue from "vue"
import i18n from "../plugins/i18n"
import RegisterVue from "../pages/Register"

new Vue({
    i18n: i18n,
    render: (h)=>h(RegisterVue),
    components: {}
}).$mount('#app')
