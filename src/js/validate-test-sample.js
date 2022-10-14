
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidateTestSample from "../pages/BOValidateTestSample";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidateTestSample),
    components: {}
}).$mount('#app')
