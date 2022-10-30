
import Vue from "vue"
import i18n from "../plugins/i18n"
import RegistrationAccount from "../pages/RegistrationAccount";

new Vue({
    i18n: i18n,
    render: (h)=>h(RegistrationAccount),
    components: {}
}).$mount('#app')
