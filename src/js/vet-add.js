
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOAddParcel from "../pages/BOAddParcel";
import BOVetAdd from "../pages/BOVetAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOVetAdd),
    components: {}
}).$mount('#app')
