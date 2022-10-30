
import Vue from "vue"
import i18n from "../plugins/i18n"
import RegistrationInvoice from "../pages/RegistrationInvoice";

new Vue({
    i18n: i18n,
    render: (h)=>h(RegistrationInvoice),
    components: {}
}).$mount('#app')
