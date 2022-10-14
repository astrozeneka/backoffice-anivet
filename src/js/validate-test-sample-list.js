
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidateTestSampleList from "../pages/BOValidateTestSampleList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidateTestSampleList),
    components: {}
}).$mount('#app')
