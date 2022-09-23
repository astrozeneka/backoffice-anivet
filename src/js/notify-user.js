
import Vue from "vue"
import i18n from "../plugins/i18n"
import BONotifyUser from "../pages/BONotifyUser";

new Vue({
    i18n: i18n,
    render: (h)=>h(BONotifyUser),
    components: {}
}).$mount('#app')
