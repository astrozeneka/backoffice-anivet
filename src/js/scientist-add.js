
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOAddParcel from "../pages/BOAddParcel";
import BOScientistAdd from "../pages/BOScientistAdd";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOScientistAdd),
    components: {}
}).$mount('#app')
