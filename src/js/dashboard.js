

import Vue from "vue"
import i18n from "../plugins/i18n"
import BODashboard from "../pages/BODashboard";

new Vue({
    i18n: i18n,
    render: (h)=>h(BODashboard),
    components: {}
}).$mount('#app')
