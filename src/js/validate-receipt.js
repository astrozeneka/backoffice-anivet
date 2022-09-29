
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidateReceipt from "../pages/BOValidateReceipt";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidateReceipt),
    components: {}
}).$mount('#app')
