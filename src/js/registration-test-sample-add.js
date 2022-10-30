
import Vue from "vue"
import i18n from "../plugins/i18n"
import RegistrationTestSampleAdd from "../pages/RegistrationTestSampleAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(RegistrationTestSampleAdd),
    components: {}
}).$mount('#app')
