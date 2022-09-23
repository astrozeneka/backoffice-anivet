
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSampleDetails from "../pages/BOSampleDetails";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSampleDetails),
    components: {}
}).$mount('#app')
