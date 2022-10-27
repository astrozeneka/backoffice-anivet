
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestResultEdit from "../pages/BOTestResultEdit";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestResultEdit),
    components: {}
}).$mount('#app')
