

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOScientistDelete from "../pages/BOScientistDelete";
new Vue({
    i18n: i18n,
    render: (h)=>h(BOScientistDelete),
    components: {}
}).$mount('#app')
