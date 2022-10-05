
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOOwnerList from "../pages/BOOwnerList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOOwnerList),
    components: {}
}).$mount('#app')
