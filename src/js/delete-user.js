
import Vue from "vue"
import i18n from "../plugins/i18n"
import BODeleteUser from "../pages/BODeleteUser";

new Vue({
    i18n: i18n,
    render: (h)=>h(BODeleteUser),
    components: {}
}).$mount('#app')
