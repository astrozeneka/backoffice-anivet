
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidateRegistrationList from "../pages/BOValidateRegistrationList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidateRegistrationList),
    components: {}
}).$mount('#app')
