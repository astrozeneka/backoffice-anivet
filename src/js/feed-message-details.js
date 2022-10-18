
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOFeedMessageDetails from "../pages/BOFeedMessageDetails";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOFeedMessageDetails),
    components: {}
}).$mount('#app')
