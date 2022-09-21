import VueI18n from 'vue-i18n';
import Vue from "vue";
import sessionstorage from 'sessionstorage';

let _locale = sessionstorage.getItem('locale') || "en"
const messages = {
    en: {
        message: {
            hello: 'hello world'
        },
        titles: {
            home: 'Home',
            about: 'About',
            products: 'Products',
            services: 'Services',
            funfacts: 'Fun facts',
            contact: 'Contact',
            register: 'Sign up',
            ownerRegisration: 'Pet owner registration',
            breederRegistration: 'Breeder registration',
            vetRegistration: 'Vet registration',
            logIn: 'Log in',
            orderTest: 'Order Test'
        },
        forms: {
            register: {
                personalDetails: 'Personal details',
                firstName: 'First name',
                firstNameSample: 'Samuel',
                lastName: 'Last name',
                lastNameSample: 'Kent'
            },
            account: {
                accountDetails: 'Account details',
                username: 'Username',
                usernameSample: 'samsama',
                usernamePrompt: 'Please enter your username',
                password: 'Password',
                passwordSample: '<Your password here>',
                passwordPrompt: 'Please enter your password',
                passwordCheck: 'Retype password',
                passwordCheckNoMatch: 'Passwords do not match',
                website: 'Your website',
                websiteSample: 'example.org',
                ctaSignUp: 'Sign up',
                ctaLogin: 'Log in'
            }
        },
        backoffice: {
            menu: {
                activity: "Activity",
                stats: "Stats",
                owners: "Owners",
                breeders: "Breeders",
                vets: "Vets",
                logout: "Logout"
            },
            message: {
                dbInstalled: "The database has been installed successfully"
            }
        }
    },
    th: {
        message: {
            hello: 'สวัสดี'
        },
        titles: {
            home: 'หน้าหลัก',
            about: 'เกี่ยวกับเรา',
            products: 'ผลิตภัณฑ์',
            services: 'บริการ',
            funfacts: 'สาระน่ารู้',
            contact: 'ติดต่อเรา',
            register: 'สมัครเป็นสมาชิก',
            ownerRegistration: 'สมัครบัญชีผู้มีสัตเลี้ยง',
            breederRegistration: 'สมัครบัญชีพู้เพาะพันธุ์',
            vetRegistration: 'สมัครบัญชีสัตวแพทย์',
            logIn: 'ลงชื่อเข้าใช้',
            orderTest: 'ซื้อการตรวจ'
        },
        forms: {
            register: {
                personalDetails: 'ข้อมูลส่วนตัว',
                firstName: 'ชื่อจริง',
                firstNameSample: 'สมพงศ์',
                lastName: 'นามสกุล',
                lastNameSample: 'องอาจ'
            },
            account: {
                accountDetails: 'ข้อมูลบัญชีผู้ใช้',
                username: 'ชื่อผู้ใช้',
                usernameSample: 'sompongzaa',
                usernamePrompt: 'โปรดใส่ชื่อผู้ใช้',
                password: 'รหัสผ่าน',
                passwordSample: 'ใส่รหัสผ่านของคุณที่นี่',
                passwordPrompt: 'โปรดใส่รหัสผ่าน',
                passwordCheck: 'ใส่รหัสผ่านซ้ำ',
                passwordCheckNoMatch: 'รหัสผ่านไม่ตรงกัน',
                website: 'เว็บไซต์ของคุณ',
                websiteSample: 'example.org',
                ctaSignUp: 'สมัคร',
                ctaLogin: 'ลงชื่อเข้าใช้'
            }
        },
        backoffice: {
            menu: {

            }
        }
    },
    zh: {}
}
Vue.use(VueI18n)
export default new VueI18n({
    locale: _locale,
    messages
})
