<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9">

          <!--
            SAMPLE LIST
          -->
          <div>
            <h2>Samples</h2>
            <table class="table">
              <thead>
              <tr>
                <th scope="col">
                  SampleId
                </th>
                <th scope="col">
                  Animal
                </th>
                <th scope="col">
                  Specie
                </th>
                <th scope="col">
                  Type
                </th>
                <th scope="col">
                  PetID
                </th>
                <th scope="col">
                  Owner
                </th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="sample in samples">
                <td>{{sample.id}}</td>
                <td>{{sample.animal}}</td>
                <td>{{sample.petSpecie}}</td>
                <td>{{sample.type}}</td>
                <td>{{sample.petId}}</td>
                <td>{{sample.testOrder_email}}</td>
                <td>
                  <div class="btn-group" role="group">
                    <a class="btn btn-sm btn-primary" :href="'/sample-details.html?id=' + sample.id">
                      <i class="fa-regular fa-eye"></i>
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
  </div>
</template>

<script>
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
import * as $ from "jquery"
import sessionstorage from "sessionstorage";
import vars from "../utils/vars";

export default {
  name: "BOSamples",
  components: {TopmenuBackoffice, BackofficeMenu},
  data(){
    return {
      samples: []
    }
  },
  created(){
    let token = sessionstorage.getItem("accessToken")
    let userId = sessionstorage.getItem("userId")
    if(token == null){
      window.location = "login.html"
    }

    let url = vars.getAPIURL(`/api/v1/testSample`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.info(res)
        this.samples = res
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
