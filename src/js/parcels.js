
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOParcels from "../pages/BOParcels";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOParcels),
    components: {}
}).$mount('#app')
