
import Vue from "vue"
import i18n from "../plugins/i18n"
import OrderFinished from "../pages/OrderFinished";

new Vue({
    i18n: i18n,
    render: (h)=>h(OrderFinished),
    components: {}
}).$mount('#app')
