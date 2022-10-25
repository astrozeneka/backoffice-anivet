
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSampleParcelEdit from "../pages/BOSampleParcelEdit";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSampleParcelEdit),
    components: {}
}).$mount('#app')
