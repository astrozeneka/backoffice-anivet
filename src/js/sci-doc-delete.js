
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSciDocDelete from "../pages/BOSciDocDelete";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSciDocDelete),
    components: {}
}).$mount('#app')
