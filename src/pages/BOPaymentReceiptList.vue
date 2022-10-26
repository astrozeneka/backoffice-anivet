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
            title="Payment receipt"
            description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
            slug="paymentReceipt"
            url-like-slug="payment-receipt"
          >
            <template v-slot:head>
              <th scope="col">Reference</th>
              <th scope="col">Method</th>
              <th scope="col">Order</th>
              <th scope="col">Triggerer</th>
              <th scope="col">Date</th>
              <th scope="col">File</th>
            </template>
            <template v-slot:default="entity">
              <td>
                <a :href="`payment-receipt-edit.html?id=${entity.id}`">
                  {{ entity.reference }}
              </a></td>
              <td>{{ entity.method }}</td>
              <td></td>
              <td>{{ entity.triggerer.username }}</td>
              <td>{{
                  (new Date(entity.date)).toLocaleDateString("en-US", { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' })
                }}</td>
              <td>
                <a href="#" @click="downloadAttachedFile(entity, 'paymentReceipt')">
                  {{ entity.file.name }}
                </a>
              </td>
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
import vars from "../utils/vars";
import downloadAttachedFile from "../utils/downloadAttachedFile";
import sessionstorage from "sessionstorage";
export default {
  name: "BOPaymentReceiptList",
  components: {MessageBox, BackofficeAsideMenu, DataList3},
  data(){
    return {
      token: null
    }
  },
  methods: {
    getAPIURL: vars.getAPIURL,
    downloadAttachedFile: downloadAttachedFile
  },
  created(){
    this.token = sessionstorage.getItem("accessToken")
  }
}
</script>
<style>
@import '../scss/style.scss';
</style>
