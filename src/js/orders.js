
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOOrders from "../pages/BOOrders";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOOrders),
    components: {}
}).$mount('#app')
