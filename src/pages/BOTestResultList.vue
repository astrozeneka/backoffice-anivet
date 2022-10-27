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
            title="Test Result"
            description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
            slug="testResult"
            url-like-slug="test-result"
          >
            <template v-slot:head>
              <th scope="col">Reference</th>
              <th scope="col">Triggerer</th>
              <th scope="col">Date</th>
              <th scope="col">File</th>
            </template>
            <template v-slot:default="entity">
              <td>
                <a :href="`test-result-edit.html?id=${entity.id}`">
                  {{ entity.sciDoc.reference }}
                </a>
              </td>
              <td>{{ entity.triggerer.username }}</td>
              <td>
                {{
                  (new Date(entity.sciDoc.date)).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
                }}
              </td>
              <td>
                <a href="#" @click="downloadAttachedFile(entity, 'sciDoc')">
                  <i class="fa fa-arrow-down"></i>
                  {{
                    entity.file.name
                  }}
                </a></td>
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
  name: "BOTestResultList",
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
