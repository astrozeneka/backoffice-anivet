
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSamples from "../pages/BOSamples";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSamples),
    components: {}
}).$mount('#app')
