<script src="../router/backoffice.js"></script>
<template>
  <ul class="nav flex-column">
    <li class="nav-item">
      <a href="/dashboard.html" class="nav-link">
        <i class="fa-solid fa-gauge"></i>
        Dashboard
      </a>
    </li>
    <li class="nav-item">
      <a href="/activity.html" class="nav-link">
        <i class="fa-solid fa-rss"></i>
        Activity
      </a>
    </li>
    <li class="nav-item">
      <a href="/orders.html" class="nav-link">
        <i class="fa-solid fa-cart-shopping"></i>
        Orders
        <span class="badge badge-danger">{{ menuBadge.testOrders }}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/samples.html" class="nav-link">
        <i class="fa-solid fa-flask"></i>
        Samples
        <span class="badge badge-danger">{{ menuBadge.testSamples }}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/shipping.html" class="nav-link">
        <i class="fa-solid fa-truck"></i>
        Shipping
      </a>
    </li>
    <li class="nav-item">
      <a href="/finance.html" class="nav-link">
        <i class="fa-solid fa-coins"></i>
        Finance
      </a>
    </li>
    <li class="nav-item">
      <a href="/results.html" class="nav-link">
        <i class="fa-solid fa-vials"></i>
        Test Results
      </a>
    </li>
    <li class="nav-item">
      <a href="/owners.html" class="nav-link">
        <i class="fa-solid fa-user"></i>
        {{ $t('backoffice.menu.owners') }}
        <span class="badge badge-danger">{{ menuBadge.owners }}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/breeders.html" class="nav-link">
        <i class="fa-solid fa-user"></i>
        {{ $t('backoffice.menu.breeders') }}
        <span class="badge badge-danger">{{  menuBadge.breeders }}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/vets.html" class="nav-link">
        <i class="fa-solid fa-user"></i>
        {{ $t('backoffice.menu.vets') }}
        <span class="badge badge-danger">{{ menuBadge.vets }}</span>
      </a>
    </li>
    <li class="nav-item">
      <a href="/scientists.html" class="nav-link">
        <i class="fa-solid fa-user"></i>
        Scientists
        <span class="badge badge-danger">{{  menuBadge.scientists }}</span>
      </a>
    </li>

    <li class="nav-item">
      <a href="/stats.html" class="nav-link">
        <i class="fa-solid fa-chart-column"></i>
        {{ $t('backoffice.menu.stats') }}
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/settings.html">
        <i class="fa-solid fa-gear"></i>
        Settings
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" @click="logoutButtonClick">
        <i class="fa-solid fa-right-from-bracket"></i>
        {{ $t('backoffice.menu.logout') }}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" @click="reinstallDB">
        <i class="fa-solid fa-database"></i>
        Reinstall DB
      </a>
    </li>
  </ul>
</template>

<script>
import sessionstorage from "sessionstorage";
import * as $ from "jquery";
import vars from "../utils/vars";

export default {
  name: "BackofficeMenu",
  data(){
    return {
      menuBadge: {
        testOrders: 0,
        testSamples: 0,
        owners: 0,
        breeders: 0,
        vets: 0,
        scientists: 0
      }
    }
  },
  methods: {
    logoutButtonClick(){
      sessionstorage.removeItem("accessToken")
      sessionstorage.removeItem("userId")
      window.location.reload()
    },
    reinstallDB(){
      $.ajax(vars.getAPIURL("/install"), {
        type: "GET",
        success: (res)=>{
          // This portion of code should be reviewed
          console.log(this.$t("backoffice.message.dbInstalled"))
          window.location.reload()
        }
      })
    }
  },
  created(){
    let token = sessionstorage.getItem("accessToken")
    let userId = sessionstorage.getItem("userId")
    if(token == null){
      window.location = "login.html"
    }

    let url = vars.getAPIURL(`/api/v1/dashboard/menu-badge`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.log(res)
        this.menuBadge = res
      },
      error: (err)=>{
        console.log(err)
        // Redirect if expired
      }
    })
  }
}
</script>

<style scoped>

</style>
