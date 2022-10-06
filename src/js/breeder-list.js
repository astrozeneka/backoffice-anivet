
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOBreederList from "../pages/BOBreederList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOBreederList),
    components: {}
}).$mount('#app')
