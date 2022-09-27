
import Vue from "vue"
import i18n from "../plugins/i18n"
import ReferencesAndLinks from "../pages/ReferencesAndLinks";

new Vue({
    i18n: i18n,
    render: (h)=>h(ReferencesAndLinks),
    components: {}
}).$mount('#app')
