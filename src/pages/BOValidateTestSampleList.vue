<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataListValidation
            title="Test samples"
            description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
            slug="testSample"
          >
            <template v-slot:head>
              <th scope="col">Id</th>
              <th scope="col">Animal</th>
              <th scope="col">Type</th>
              <th scope="col">Pet Id</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
            </template>
            <template v-slot:default="entity">
              <td>
                <a :href="`validate-test-sample.html?id=${entity.id}`">Sample #{{entity.id}}</a>
              </td>
              <td>{{entity.animal}}</td>
              <td>{{entity.type}}</td>
              <td>{{entity.petId}}</td>
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
  name: "BOValidateTestSampleList",
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

