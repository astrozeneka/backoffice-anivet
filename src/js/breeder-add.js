
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOBreederAdd from "../pages/BOBreederAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOBreederAdd),
    components: {}
}).$mount('#app')
