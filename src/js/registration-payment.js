
import Vue from "vue"
import i18n from "../plugins/i18n"
import RegistrationPayment from "../pages/RegistrationPayment";

new Vue({
    i18n: i18n,
    render: (h)=>h(RegistrationPayment),
    components: {}
}).$mount('#app')
