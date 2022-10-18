
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOFeedSiteDetails from "../pages/BOFeedSiteDetails";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOFeedSiteDetails),
    components: {}
}).$mount('#app')
