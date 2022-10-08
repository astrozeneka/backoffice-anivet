

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOOwnerDelete from "../pages/BOOwnerDelete";
new Vue({
    i18n: i18n,
    render: (h)=>h(BOOwnerDelete),
    components: {}
}).$mount('#app')
