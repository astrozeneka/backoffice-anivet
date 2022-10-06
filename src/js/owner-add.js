
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOOwnerAdd from "../pages/BOOwnerAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOOwnerAdd),
    components: {}
}).$mount('#app')
