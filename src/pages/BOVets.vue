<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">
          <h1>Vets</h1>

          <div>
            <BaseMemberList type="vet"></BaseMemberList>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
import BaseMemberList from "../components/BaseMemberList";

export default {
  name: "BOVets",
  components: {BaseMemberList, TopmenuBackoffice, BackofficeMenu},
}
</script>

<style>
@import '../scss/style.scss';
</style>

