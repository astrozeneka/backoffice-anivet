

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOActivity from "../pages/BOActivity";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOActivity),
    components: {}
}).$mount('#app')
