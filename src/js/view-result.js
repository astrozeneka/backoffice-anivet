

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOViewResult from "../pages/BOViewResult";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOViewResult),
    components: {}
}).$mount('#app')
