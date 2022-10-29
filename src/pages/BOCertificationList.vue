<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <MessageBox></MessageBox>
          <DataList5
              :haveHeaders="true"
              title="Certification"
              description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
              slug="certiication"
              url-like-slug="certification"
              resource-url="/api/v1/data/certification"
              props-url="/api/v1/data/certification/props"
              :selected-array="selectedArray"
          >
            <template v-slot:head>
              <th scope="col">Certiffication</th>
              <th scope="col">Sample</th>
              <th scope="col">Triggerer</th>
              <th scope="col">Customer</th>
              <th scope="col">Date</th>
              <th scope="col">File</th>
            </template>
            <template v-slot:default="entity">
              <td>
                <a :href="`certification-edit.html?id=${entity.id}`">Cert #{{ entity.id }}</a>
              </td>
              <td>
                <a :href="`test-sample-edit.html?id=${entity.testSample.id}`">Sample #{{ entity.testSample.id }}</a>
              </td>
              <td>{{entity.triggerer.username}}</td>
              <td>{{entity.customer.username}}</td>
              <td>
                {{
                  (new Date(entity.sciDoc.date)).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
                }}
              </td>
              <td>
                <a href="#" @click="downloadAttachedFile(entity.sciDoc.id, 'sciDoc')">
                  <i class="fa fa-arrow-down"></i>
                  {{
                    entity.sciDoc.file.name
                  }}
                </a>
              </td>
            </template>
          </DataList5>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageBox from "../components/MessageBox";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataList5 from "../components/DataList5";
import downloadAttachedFile from "../utils/downloadAttachedFile";

export default {
  name: "BOCertificationList",
  components: {MessageBox, BackofficeAsideMenu, DataList5},
  data(){
    return {
      selectedArray: []
    }
  },
  methods: {
    downloadAttachedFile: downloadAttachedFile
  }
}
</script>
<style>
@import '../scss/style.scss';
</style>
