
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestOrderEdit from "../pages/BOTestOrderEdit";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestOrderEdit),
    components: {}
}).$mount('#app')
