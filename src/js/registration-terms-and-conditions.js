
import Vue from "vue"
import i18n from "../plugins/i18n"
import RegistrationTermsAndConditions from "../pages/RegistrationTermsAndConditions";
new Vue({
    i18n: i18n,
    render: (h)=>h(RegistrationTermsAndConditions),
    components: {}
}).$mount('#app')
