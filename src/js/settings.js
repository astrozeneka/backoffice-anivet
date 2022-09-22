
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSettings from "../pages/BOSettings";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSettings),
    components: {}
}).$mount('#app')
