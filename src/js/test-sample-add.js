
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestSampleAdd from "../pages/BOTestSampleAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestSampleAdd),
    components: {}
}).$mount('#app')
