
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestResultList from "../pages/BOTestResultList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestResultList),
    components: {}
}).$mount('#app')
