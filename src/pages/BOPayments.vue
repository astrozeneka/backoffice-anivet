<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">
          <h1>Payment Receipts</h1>

          <table class="table">
            <thead>
            <th scope="col">id</th>
            <th scope="col">Reference</th>
            <th scope="col">Method</th>
            <th scope="col">Link Reference</th>
            <th scope="col">File</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
            </thead>
            <tbody>
              <tr v-for="receipt in receiptList">
                <td>{{ receipt.id }}</td>
                <td>{{ receipt.reference }}</td>
                <td>{{ receipt.method }}</td>
                <td>{{ receipt.linkReference }}</td>
                <td><a href="#">Download file</a></td>
                <td>

                  <span v-if="receipt.validated" class="badge badge-pill badge-success">validated</span>
                  <span v-else class="badge badge-pill badge-warning">pending</span>
                </td>
                <td>
                  <div class="btn-group" role="group" aria-label="">
                    <a class="btn btn-sm btn-primary" :href="'/validate-receipt.html?id=' + receipt.id">
                      Verify
                    </a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as $ from "jquery";
import vars from "../utils/vars";
import sessionstorage from "sessionstorage";
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";

export default {
  name: "BOPayments",
  components: {TopmenuBackoffice, BackofficeMenu},
  data(){
    return {
      receiptList: []
    }
  },
  beforeCreate() {
    let token = sessionstorage.getItem("accessToken")
    let url = vars.getAPIURL(`/api/v1/paymentReceipt`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.info(res)
        this.receiptList = res;
      },
      error: (err)=>{
        console.error(err)
      }
    })
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>

