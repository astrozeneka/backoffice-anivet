<template>
  <div>
    <h1>Invoice</h1>
    <p>
      {{order.name1}}
      {{order.name2}}
    </p>
    <div>
      <table class="table">
        <thead>
        <tr>
          <th scope="col">SampleID</th>
          <th scope="col">Animal</th>
          <th scope="col">Specie</th>
          <th scope="col">Type</th>
          <th scope="col">Price</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="sample in order.samples">
          <td>{{sample.id}}</td>
          <td>{{sample.animal}}</td>
          <td>{{sample.petSpecie}}</td>
          <td>{{sample.type}}</td>
          <td>1 500 ฿</td>
        </tr>
        </tbody>
      </table>
      <div>
        <RequestingButton @click="next">Proceed to payment</RequestingButton>
      </div>
    </div>
  </div>
</template>

<script>
import * as $ from "jquery"
import sessionstorage from "sessionstorage";
import vars from "../utils/vars";
import SubmitButton from "../components/SubmitButton";
import RequestingButton from "../RequestingButton";
export default {
  name: "PreviewInvoice",
  components: {RequestingButton, SubmitButton},
  data(){
    return {
      order: {
        name1: "",
        name2: "",
        date: "",
        email: "",
        tests: []
      }
    }
  },
  methods: {
    next(){
      window.location = "submit-receipt.html"
    }
  },
  beforeCreate() {
    let token = sessionstorage.getItem("accessToken") // A token should be given to the user at this time
    let userId = sessionstorage.getItem("userId")
    $.ajax(vars.getAPIURL('/public/order/1'), {
      // IMPORTANT, should be updated to the V1 protected API after password submission
      // Password and Email is needed in order to get API Token
      type: "GET",
      success: (res)=>{
        this.order = res
      }
    })
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
