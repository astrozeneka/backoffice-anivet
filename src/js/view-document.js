

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOViewDocument from "../pages/BOViewDocument";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOViewDocument),
    components: {}
}).$mount('#app')
