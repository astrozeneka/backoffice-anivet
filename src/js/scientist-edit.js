

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOScientistEdit from "../pages/BOScientistEdit";
new Vue({
    i18n: i18n,
    render: (h)=>h(BOScientistEdit),
    components: {}
}).$mount('#app')
