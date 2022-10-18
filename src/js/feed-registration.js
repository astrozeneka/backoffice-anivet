
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOFeedRegistration from "../pages/BOFeedRegistration";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOFeedRegistration),
    components: {}
}).$mount('#app')
