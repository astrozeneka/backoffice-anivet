
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSciDocEdit from "../pages/BOSciDocEdit";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSciDocEdit),
    components: {}
}).$mount('#app')
