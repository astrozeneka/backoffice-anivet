import VueI18n from 'vue-i18n';
import Vue from "vue";
import sessionstorage from 'sessionstorage';

let _locale = sessionstorage.getItem('locale') || "en"
const messages = {
    en: {},
    th: {},
    zh: {}
}
Vue.use(VueI18n)
export default new VueI18n({
    locale: _locale,
    messages
})
