
import Vue from "vue"
import i18n from "../plugins/i18n"
import RegistrationTestSampleDelete from "../pages/RegistrationTestSampleDelete";

new Vue({
    i18n: i18n,
    render: (h)=>h(RegistrationTestSampleDelete),
    components: {}
}).$mount('#app')
