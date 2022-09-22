
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOShipping from "../pages/BOShipping";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOShipping),
    components: {}
}).$mount('#app')
