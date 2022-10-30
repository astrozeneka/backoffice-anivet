
import Vue from "vue"
import i18n from "../plugins/i18n"
import RegistrationLinks from "../pages/RegistrationLinks";

new Vue({
    i18n: i18n,
    render: (h)=>h(RegistrationLinks),
    components: {}
}).$mount('#app')
