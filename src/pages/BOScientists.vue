<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">
          <h1>Scientists <a href='/add-user.html?type=scientist' class="btn btn-outline-primary btn-sm">Add</a></h1>
          <div>
            <BaseMemberList type="scientist"></BaseMemberList>
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
  name: "BOScientists",
  components: {TopmenuBackoffice, BackofficeMenu, BaseMemberList},
}
</script>

<style>
@import '../scss/style.scss';
</style>
