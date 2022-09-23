
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOFinance from "../pages/BOFinance";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOFinance),
    components: {}
}).$mount('#app')
