
import Vue from "vue"
import i18n from "../plugins/i18n"
import TermsAndConditions from "../pages/TermsAndConditions";

new Vue({
    i18n: i18n,
    render: (h)=>h(TermsAndConditions),
    components: {}
}).$mount('#app')
