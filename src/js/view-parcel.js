

import Vue from "vue"
import i18n from "../plugins/i18n"
import BOViewParcel from "../pages/BOViewParcel";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOViewParcel),
    components: {}
}).$mount('#app')
