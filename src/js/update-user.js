
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOUpdateUser from "../pages/BOUpdateUser";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOUpdateUser),
    components: {}
}).$mount('#app')
