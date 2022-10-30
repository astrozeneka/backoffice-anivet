<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <RegistrationAsideMenu></RegistrationAsideMenu>
        </div>
        <div class="col-md-9">


        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestingButton2 from "../components/RequestingButton2";
import RegistrationAsideMenu from "../components/RegistrationAsideMenu";

export default {
  name: "RegistrationInvoice",
  components: {RegistrationAsideMenu, RequestingButton2},
  data(){
    return {}
  }
}
</script>

<style scoped>

</style>
