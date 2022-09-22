
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOStats from "../pages/BOStats";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOStats),
    components: {}
}).$mount('#app')
