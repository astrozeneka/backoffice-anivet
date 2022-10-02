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
            THE ORDERS LOADED FROM THE DATABASE
          -->
          <div v-for="order in orders" class="alert alert-light" role="alert">
            <h4 class="alert-heading">Order</h4>
            <div>
              <span v-if="order.validated" class="badge badge-pill badge-success">validated</span>
              <span v-else class="badge badge-pill badge-warning">pending</span>
            </div>
            <div class="m-0">{{order.date}}</div>
            From : {{order.name1}} {{order.name2}}
            &lt;email@google.com&gt;
            <br/>

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
              </tr>
              </thead>
              <tbody>
              <tr v-for="sample in order.samples">
                <td>{{sample.id}}</td>
                <td>{{sample.animal}}</td>
                <td>{{sample.petSpecie}}</td>
                <td>{{sample.type}}</td>
                <td>{{sample.petId}}</td>
              </tr>
              </tbody>
            </table>

            <div>
              <div class="btn-group" role="group" aria-label="">
                <a class="btn btn-sm btn-primary" :href="'/validate-order.html?id='+order.id">Verify</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sessionstorage from "sessionstorage";
import vars from "../utils/vars";
import * as $ from "jquery"
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";

export default {
  name: "BOOrders",
  components: {TopmenuBackoffice, BackofficeMenu},
  data(){
    return {
      orders: []
    }
  },
  created(){
    let token = sessionstorage.getItem("accessToken")
    let userId = sessionstorage.getItem("userId")
    if(token == null){
      window.location = "login.html"
    }

    /************************
     * LOAD DATA FROM THE API
     ************************/
    $.ajax(vars.getAPIURL(`/api/v1/testOrder`), {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.info(res)
        this.orders = res
      }
    })

  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
