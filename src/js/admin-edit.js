

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOAdminEdit from "../pages/BOAdminEdit";
new Vue({
    i18n: i18n,
    render: (h)=>h(BOAdminEdit),
    components: {}
}).$mount('#app')
