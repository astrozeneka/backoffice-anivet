
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOPaymentReceiptList from "../pages/BOPaymentReceiptList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOPaymentReceiptList),
    components: {}
}).$mount('#app')
