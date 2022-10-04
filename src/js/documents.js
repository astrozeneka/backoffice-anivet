
import Vue from "vue"
import i18n from "../plugins/i18n"
import BODocuments from "../pages/BODocuments";

new Vue({
    i18n: i18n,
    render: (h)=>h(BODocuments),
    components: {}
}).$mount('#app')
