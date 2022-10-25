
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOCertificationList from "../pages/BOCertificationList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOCertificationList),
    components: {}
}).$mount('#app')
