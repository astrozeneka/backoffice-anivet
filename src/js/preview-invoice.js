
import Vue from "vue"
import i18n from "../plugins/i18n"
import PreviewInvoice from "../pages/PreviewInvoice";

new Vue({
    i18n: i18n,
    render: (h)=>h(PreviewInvoice),
    components: {}
}).$mount('#app')
