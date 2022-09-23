
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOViewUser from "../pages/BOViewUser";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOViewUser),
    components: {}
}).$mount('#app')
