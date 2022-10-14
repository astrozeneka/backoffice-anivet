
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidatePaymentReceiptList from "../pages/BOValidatePaymentReceiptList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidatePaymentReceiptList),
    components: {}
}).$mount('#app')
