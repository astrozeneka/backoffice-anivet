<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sessionstorage from "sessionstorage";
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
export default {
  name: "BODashboard",
  components: {BackofficeMenu, TopmenuBackoffice},
  created(){
    let token = sessionstorage.getItem("accessToken")
    let userId = sessionstorage.getItem("userId")
    if(token == null){
      window.location = "login.html"
    }
    console.log("You are connected, should verify your token via the server")
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
