
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOViewCertification from "../pages/BOViewCertification";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOViewCertification),
    components: {}
}).$mount('#app')
