<script src="../plugins/i18n.js"></script>
<template>
  <!--
  <div class="dropdown">
    <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false">
      ภาษาไทย
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <a class="dropdown-item" href="#">ภาษาไหย</a>
      <a class="dropdown-item" href="#">English</a>
    </div>
  </div>
  -->
  <div class="dropdown">
    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
      <img :src="activeLocale.flag"/>
      <!--ภาษาไทย-->
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li><a class="dropdown-item" href="#" @click="switchLocale('th')">
        <img src="https://flagcdn.com/16x12/th.png"/> ภาษาไทย
      </a></li>
      <li><a class="dropdown-item" href="#" @click="switchLocale('en')">
        <img src="https://flagcdn.com/16x12/us.png"/> English
      </a></li>
    </ul>
  </div>
</template>
<script>
import sessionstorage from 'sessionstorage';
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min";

export default {
  name: "LocaleSwitcher",
  created(){
    console.log("It works")

    this.activeLocaleFlag = "https://flagcdn.com/16x12/th.png"
    this.activeLocaleFullName = "ภาษาไทย"
    /*
    if(locale == 'th'){
      this.activeLocaleFlag = "https://flagcdn.com/16x12/th.png"
      this.activeLocaleFullName = "ภาษาไทย"
    }else if(locale == 'en'){
      this.activeLocalFlag = 'https://flagcdn.com/16x12/en.png'
      this.activeLocaleFullName = "English"
    }
     */

  },
  computed: {
    activeLocale: {
      get(){
        let locale = sessionstorage.getItem('locale');
        let flag = locale
        if(flag == 'en') flag = 'us'
        return {
          'flag': 'https://flagcdn.com/16x12/' +flag+ '.png'
        }
      }
    },
  },
  methods: {
    switchLocale(locale) {
      sessionstorage.setItem("locale", locale)
      window.location.reload()
    },
  }
}
</script>

<style scoped>
.dropdown img{
  margin-right: .3em;
}
</style>
