

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOBreederEdit from "../pages/BOBreederEdit";
new Vue({
    i18n: i18n,
    render: (h)=>h(BOBreederEdit),
    components: {}
}).$mount('#app')
