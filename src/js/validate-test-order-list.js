
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOValidateTestOrderList from "../pages/BOValidateTestOrderList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOValidateTestOrderList),
    components: {}
}).$mount('#app')
