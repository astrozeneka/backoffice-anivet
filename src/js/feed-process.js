
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOFeedProcess from "../pages/BOFeedProcess";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOFeedProcess),
    components: {}
}).$mount('#app')
