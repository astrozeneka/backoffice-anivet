

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOVetDelete from "../pages/BOVetDelete";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOVetDelete),
    components: {}
}).$mount('#app')
