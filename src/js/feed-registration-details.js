
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOFeedRegistrationDetails from "../pages/BOFeedRegistrationDetails";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOFeedRegistrationDetails),
    components: {}
}).$mount('#app')
