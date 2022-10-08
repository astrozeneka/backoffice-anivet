

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOVetEdit from "../pages/BOVetEdit";
new Vue({
    i18n: i18n,
    render: (h)=>h(BOVetEdit),
    components: {}
}).$mount('#app')
