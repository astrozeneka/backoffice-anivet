
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOCertificationAdd from "../pages/BOCertificationAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOCertificationAdd),
    components: {}
}).$mount('#app')
