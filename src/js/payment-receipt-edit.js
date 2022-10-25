
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOPaymentReceiptEdit from "../pages/BOPaymentReceiptEdit";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOPaymentReceiptEdit),
    components: {}
}).$mount('#app')
