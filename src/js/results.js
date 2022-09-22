
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOResults from "../pages/BOResults";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOResults),
    components: {}
}).$mount('#app')
