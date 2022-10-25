
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSampleParcelDelete from "../pages/BOSampleParcelDelete";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSampleParcelDelete),
    components: {}
}).$mount('#app')
