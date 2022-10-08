

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOAdminDelete from "../pages/BOAdminDelete";
new Vue({
    i18n: i18n,
    render: (h)=>h(BOAdminDelete),
    components: {}
}).$mount('#app')
