
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSampleParcelList from "../pages/BOSampleParcelList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSampleParcelList),
    components: {}
}).$mount('#app')
