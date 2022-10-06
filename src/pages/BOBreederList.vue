<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">

          <DataList
              title="Breeder"
              description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
              slug="breeder"
          ></DataList>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataList from "../components/DataList";
import BackofficeTopMenu from "../components/BackofficeTopMenu";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import TopmenuBackoffice from "../components/TopmenuBackoffice";

export default {
  name: "BOBreederList",
  components: {DataList, BackofficeTopMenu, BackofficeAsideMenu, TopmenuBackoffice},
}
</script>

<style>
@import '../scss/style.scss';
</style>
