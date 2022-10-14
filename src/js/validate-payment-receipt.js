
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidatePaymentReceipt from "../pages/BOValidatePaymentReceipt";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidatePaymentReceipt),
    components: {}
}).$mount('#app')
