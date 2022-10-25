
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOPaymentReceiptAdd from "../pages/BOPaymentReceiptAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOPaymentReceiptAdd),
    components: {}
}).$mount('#app')
