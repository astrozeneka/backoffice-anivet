
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestResultAdd from "../pages/BOTestResultAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestResultAdd),
    components: {}
}).$mount('#app')
