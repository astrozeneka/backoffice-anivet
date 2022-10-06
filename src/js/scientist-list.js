
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOScientistList from "../pages/BOScientistList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOScientistList),
    components: {}
}).$mount('#app')
