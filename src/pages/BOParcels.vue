<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">
          <h1>Parcels <a href='/add-parcel.html' class="btn btn-outline-primary btn-sm">Add</a></h1>

          <table class="table">
            <thead>
            <th scope="col">Id</th>
            <th scope="col">Reference</th>
            <th scope="col">Service</th>
            <th scope="col">Sample</th>
            <th scope="col">Triggerer</th>
            <th scope="col">File</th>
            <th scope="col"></th>
            </thead>

            <tbody>
            <tr v-for="parcel in parcelList">
              <td>{{ parcel.id }}</td>
              <td>{{ parcel.reference }}</td>
              <td>{{ parcel.deliveryService }}</td>
              <td>{{ parcel.testSampleId }}</td>
              <td>{{ parcel.triggererId }}</td>
              <td>
                <a :href="'view-parcel.html?id=' + parcel.id" class="btn btn-primary">
                  View
                </a>
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
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
import sessionstorage from "sessionstorage";
import * as $ from "jquery";
import vars from "../utils/vars";

export default {
  name: "BOParcels",
  components: {TopmenuBackoffice, BackofficeMenu},
  data(){
    return {
      parcelList: []
    }
  },
  beforeCreate() {
    let token = sessionstorage.getItem("accessToken")
    let url = vars.getAPIURL(`/api/v1/parcel`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.info(res)
        this.parcelList = res
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

