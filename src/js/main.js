
import Vue from "vue"
import i18n from "../plugins/i18n"
import MainVue from "../pages/Main"

new Vue({
    i18n: i18n,
    render: (h)=>h(MainVue),
    components: {}
}).$mount('#app')
