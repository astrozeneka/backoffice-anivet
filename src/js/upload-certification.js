

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOUploadCertification from "../pages/BOUploadCertification";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOUploadCertification),
    components: {}
}).$mount('#app')
