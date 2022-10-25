
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOCertificationDelete from "../pages/BOCertificationDelete";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOCertificationDelete),
    components: {}
}).$mount('#app')
