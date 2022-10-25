
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSampleParcelAdd from "../pages/BOSampleParcelAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSampleParcelAdd),
    components: {}
}).$mount('#app')
