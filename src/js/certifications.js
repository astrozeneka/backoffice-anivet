
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOCertifications from "../pages/BOCertifications";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOCertifications),
    components: {}
}).$mount('#app')
