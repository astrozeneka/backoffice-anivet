
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestOrderAdd from "../pages/BOTestOrderAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestOrderAdd),
    components: {}
}).$mount('#app')
