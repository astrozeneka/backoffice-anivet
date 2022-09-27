
import Vue from "vue"
import i18n from "../plugins/i18n"
import PaymentMethods from "../pages/PaymentMethods";

new Vue({
    i18n: i18n,
    render: (h)=>h(PaymentMethods),
    components: {}
}).$mount('#app')
