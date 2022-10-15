<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataListValidation
            title="Test Orders"
            description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
            slug="testOrder"
          >
            <template v-slot:head>
              <th scope="col">Id</th>
              <th scope="col">Sample Count</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
            </template>
            <template v-slot:default="entity">
              <td>
                <a :href="`validate-test-order.html?id=${entity.id}`">Order #{{entity.id}}</a>
              </td>
              <td>{{entity.sampleCount}}</td>
              <td>{{entity.baseMember.email}}</td>
              <td>
                <span v-if="entity.validationNote">
                  <span v-if="entity.validationNote.validated" class="badge badge-pill badge-success">validated</span>
                  <span v-else class="badge badge-pill badge-warning">pending</span>
                </span>
              </td>
            </template>
          </DataListValidation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataListValidation from "../components/DataListValidation";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";

export default {
  name: "BOValidateTestOrderList",
  components: {DataListValidation, BackofficeAsideMenu}
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/data-list.scss';

.downloadTd a{
  white-space: nowrap;
}
</style>

