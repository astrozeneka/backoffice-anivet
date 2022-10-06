
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOAdminList from "../pages/BOAdminList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOAdminList),
    components: {}
}).$mount('#app')
