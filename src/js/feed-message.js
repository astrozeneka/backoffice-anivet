
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOFeedMessage from "../pages/BOFeedMessage";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOFeedMessage),
    components: {}
}).$mount('#app')
