<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataList2
            title="Registration"
            description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
            slug="registration"
          ></DataList2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataList2 from "../components/DataList2";

export default {
  name: "BOValidateRegistrationList",
  components: {BackofficeAsideMenu, DataList2}
}
</script>

<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.css';
</style>
