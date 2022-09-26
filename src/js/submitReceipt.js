
import Vue from "vue"
import i18n from "../plugins/i18n"
import SubmitReceipt from "../pages/SubmitReceipt";

new Vue({
    i18n: i18n,
    render: (h)=>h(SubmitReceipt),
    components: {}
}).$mount('#app')
