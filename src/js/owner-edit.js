
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOOwnerEdit from "../pages/BOOwnerEdit";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOOwnerEdit),
    components: {}
}).$mount('#app')
