
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOTestOrderDelete from "../pages/BOTestOrderDelete";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOTestOrderDelete),
    components: {}
}).$mount('#app')
