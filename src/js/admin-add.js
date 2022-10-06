
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOAdminAdd from "../pages/BOAdminAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOAdminAdd),
    components: {}
}).$mount('#app')
