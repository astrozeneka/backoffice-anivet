<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">
          <h1>Documents <a href='/upload-document.html' class="btn btn-outline-primary btn-sm">Upload</a></h1>
          <div>
            <table class="table">
              <thead>
              <th scope="col">Id</th>
              <th scope="col">References</th>
              <th scope="col">Type</th>
              <th scope="col">TestSampleId</th>
              <th scope="col">TriggererId</th>
              <th scope="col">Date</th>
              <th scope="col"></th>
              </thead>
              <tbody>
              <tr v-for="doc in documentList">
                <td>{{ doc.id }}</td>
                <td>{{ doc.reference }}</td>
                <td>{{ doc.type }}</td>
                <td>{{ doc.testSampleId }}</td>
                <td>{{ doc.triggererId }}</td>
                <td>{{ doc.date }}</td>
                <td><a :href="'view-document.html?id' + doc.id">View</a></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
import BaseMemberList from "../components/BaseMemberList";
import sessionstorage from "sessionstorage";
import vars from "../utils/vars";
import * as $ from "jquery";
import beta_ajaxGet from "../utils/beta_ajaxGet";

export default {
  name: "BODocuments",
  components: {TopmenuBackoffice, BackofficeMenu},
  data(){
    return {
      documentList: []
    }
  },
  async beforeCreate() {
    this.documentList = await beta_ajaxGet(`/api/v1/document`)
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
