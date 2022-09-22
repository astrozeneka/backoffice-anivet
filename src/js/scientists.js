
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOScientists from "../pages/BOScientists";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOScientists),
    components: {}
}).$mount('#app')
