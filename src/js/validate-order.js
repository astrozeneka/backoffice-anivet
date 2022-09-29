
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidateOrder from "../pages/BOValidateOrder";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidateOrder),
    components: {}
}).$mount('#app')
