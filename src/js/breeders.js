
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOBreeders from "../pages/BOBreeders";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOBreeders),
    components: {}
}).$mount('#app')
