<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">

          <!--
            1.0 Alert
          -->

          <DataList></DataList>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackofficeTopMenu from "../components/BackofficeTopMenu";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import BackofficeMenu from "../components/BackofficeMenu";
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import DataList from "../components/DataList";

export default {
  name: "BOOwnerList",
  components: {DataList, BackofficeTopMenu, BackofficeAsideMenu, TopmenuBackoffice},
}
</script>

<style>
@import '../scss/style.scss';
</style>
