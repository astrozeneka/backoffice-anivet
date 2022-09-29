
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidateUser from "../pages/BOValidateUser";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidateUser),
    components: {}
}).$mount('#app')
