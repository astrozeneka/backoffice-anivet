<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <MessageBox></MessageBox>
          <DataList3
              title="Test sample"
              description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
              slug="testSample"
              url-like-slug="test-sample"
          >
            <template v-slot:head>
              <th scope="col">Id</th>
              <th scope="col">Type</th>
              <th scope="col">Animal</th>
              <th scope="col">Specie</th>
              <th scope="col">Progress</th>
            </template>
            <template v-slot:default="entity">
              <td>
                <a :href="`test-sample-edit.html?id=${entity.id}`">
                  Sample #{{entity.id}}
                </a>
              </td>
              <td>{{entity.type}}</td>
              <td>{{entity.animal}}</td>
              <td>{{entity.petSpecie}}</td>
              <td></td>
            </template>
          </DataList3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataList3 from "../components/DataList3";
import MessageBox from "../components/MessageBox";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import downloadAttachedFile from "../utils/downloadAttachedFile";
export default {
  name: "BOTestSampleList",
  components: {MessageBox, BackofficeAsideMenu, DataList3},
  data(){
    return {}
  },
  methods: {
    downloadAttachedFile: downloadAttachedFile
  }
}
</script>
<style>
@import '../scss/style.scss';
</style>
