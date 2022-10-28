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
              title="Test orders"
              description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
              slug="testOrder"
              url-like-slug="test-order"
              resource-url="/api/v1/testOrder"
              props-url="/api/v1/testOrder/props"
              :selected-array="selectedArray"
          >
            <template v-slot:head>
              <th scope="col">Id</th>
              <th scope="col">Triggerer</th>
              <th scope="col">Samples</th>
              <th scope="col">Date</th>
            </template>
            <template v-slot:default="entity">
              <td><a :href="`test-order-edit.html?id=${entity.id}`">Order #{{ entity.id }}</a></td>
              <td>{{ entity.member.username }}</td>
              <td>{{ entity.sampleCount }}</td>
              <td>
                {{
                  (new Date(entity.date)).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
                }}
              </td>
            </template>
          </DataList5>
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
import DataList4 from "../components/DataList4";
import DataList5 from "../components/DataList5";
export default {
  name: "BOTestOrderList",
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
