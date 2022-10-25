
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestSampleEdit from "../pages/BOTestSampleEdit";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestSampleEdit),
    components: {}
}).$mount('#app')
