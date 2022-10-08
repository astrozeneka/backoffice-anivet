

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOBreederDelete from "../pages/BOBreederDelete";
new Vue({
    i18n: i18n,
    render: (h)=>h(BOBreederDelete),
    components: {}
}).$mount('#app')
