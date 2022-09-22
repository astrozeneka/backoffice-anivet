<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9">
          <p>
            Settings
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";

export default {
  name: "BOSettings",
  components: {TopmenuBackoffice, BackofficeMenu},
}
</script>

<style>
@import '../scss/style.scss';
</style>

