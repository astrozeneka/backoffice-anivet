
import Vue from "vue"
import i18n from "../plugins/i18n"
import RegistrationTestSampleList from "../pages/RegistrationTestSampleList";

new Vue({
    i18n: i18n,
    render: (h)=>h(RegistrationTestSampleList),
    components: {}
}).$mount('#app')
