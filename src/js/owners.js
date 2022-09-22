
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOOwners from "../pages/BOOwners";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOOwners),
    components: {}
}).$mount('#app')
