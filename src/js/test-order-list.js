
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestOrderList from "../pages/BOTestOrderList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestOrderList),
    components: {}
}).$mount('#app')
