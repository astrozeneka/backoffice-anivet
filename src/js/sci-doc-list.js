
import Vue from "vue"
import i18n from "../plugins/i18n"
import BOSciDocList from "../pages/BOSciDocList";

new Vue({
    i18n: i18n,
    render: (h)=>h(BOSciDocList),
    components: {}
}).$mount('#app')
