
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOAddParcel from "../pages/BOAddParcel";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOAddParcel),
    components: {}
}).$mount('#app')
