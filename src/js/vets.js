
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOVets from "../pages/BOVets";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOVets),
    components: {}
}).$mount('#app')
