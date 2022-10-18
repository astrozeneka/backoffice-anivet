
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOFeedSite from "../pages/BOFeedSite";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOFeedSite),
    components: {}
}).$mount('#app')
