
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOPaymentReceiptDelete from "../pages/BOPaymentReceiptDelete";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOPaymentReceiptDelete),
    components: {}
}).$mount('#app')
