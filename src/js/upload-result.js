
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOUploadResult from "../pages/BOUploadResult";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOUploadResult),
    components: {}
}).$mount('#app')
