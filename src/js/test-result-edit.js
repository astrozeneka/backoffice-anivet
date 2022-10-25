
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestResultDelete from "../pages/BOTestResultDelete";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestResultDelete),
    components: {}
}).$mount('#app')
