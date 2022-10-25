
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSciDocAdd from "../pages/BOSciDocAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSciDocAdd),
    components: {}
}).$mount('#app')
