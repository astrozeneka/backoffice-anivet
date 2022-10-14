
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidateRegistration from "../pages/BOValidateRegistration";
new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidateRegistration),
    components: {}
}).$mount('#app')
