
import Vue from "vue"
import i18n from "../plugins/i18n"
import BoValidateTestOrder from "../pages/BoValidateTestOrder";

new Vue({
    i18n: i18n,
    render: (h)=>h(BoValidateTestOrder),
    components: {}
}).$mount('#app')
