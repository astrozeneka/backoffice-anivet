<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <RegistrationAsideMenu></RegistrationAsideMenu>
        </div>
        <div class="col-md-9">
          <h3>Thank you for ordering</h3>
          <p>We will contact you for the next process</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationAsideMenu from "../components/RegistrationAsideMenu";

export default {
  name: "RegistrationLinks",
  components: {RegistrationAsideMenu}
}
</script>
<style>
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>
