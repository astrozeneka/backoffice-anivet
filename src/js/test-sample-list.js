
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestSampleList from "../pages/BOTestSampleList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestSampleList),
    components: {}
}).$mount('#app')
