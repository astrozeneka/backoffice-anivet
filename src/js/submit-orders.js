
import Vue from "vue"
import i18n from "../plugins/i18n"
import SubmitOrders from "../pages/SubmitOrders";

new Vue({
    i18n: i18n,
    render: (h)=>h(SubmitOrders),
    components: {}
}).$mount('#app')
