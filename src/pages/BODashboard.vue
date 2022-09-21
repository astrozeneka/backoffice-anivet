<template>
  <div>
    <h2>This is a protected area</h2>
  </div>
</template>

<script>
import sessionstorage from "sessionstorage";
export default {
  name: "BODashboard",
  created(){
    let token = sessionstorage.getItem("accessToken")
    let userId = sessionstorage.getItem("userId")
    if(token == null){
      window.location = "login.html"
    }
  }
}
</script>

<style scoped>

</style>
