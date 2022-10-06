
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOVetList from "../pages/BOVetList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOVetList),
    components: {}
}).$mount('#app')
