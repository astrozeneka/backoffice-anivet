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
            title="Sample parcel tracking"
            description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
            slug="sampleParcel"
            url-like-slug="sample-parcel"
          >
            <template v-slot:head>
              <th scope="col">reference</th>
              <th scope="col">Service</th>
              <th scope="col">Sample</th>
              <th scope="col">Triggerer</th>
              <th scope="col">Date</th>
            </template>
            <template v-slot="entity">
              <td>
                <a :href="`sample-parcel-edit.html?id=${entity.id}`">
                  {{entity.reference}}
                </a>
              </td>
              <td>{{entity.deliveryService}}</td>
              <td>
                <a :href="`test-sample-edit.html?id=${entity.testSample.id}`">
                  Sample #{{entity.testSample.id}}
                </a>
              </td>
              <td>
                <a href="#">
                  {{entity.triggerer.username}}
                </a>
              </td>
              <td>{{
                  (new Date(entity.date)).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
                }}</td>
            </template>

          </DataList3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageBox from "../components/MessageBox";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataList3 from "../components/DataList3";
import downloadAttachedFile from "../utils/downloadAttachedFile";

export default {
  name: "BOSampleParcelList",
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
