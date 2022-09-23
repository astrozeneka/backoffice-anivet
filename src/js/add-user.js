
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOAddUser from "../pages/BOAddUser";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOAddUser),
    components: {}
}).$mount('#app')
