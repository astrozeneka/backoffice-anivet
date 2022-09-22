<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9">

          <!---------------
          - THE TOP PART OF THE BACKOFFICE USER INTERFACE
          - Statistics from the :
          -  * registered user
          -  * test ordered
          -  * test samples
          ---------------->
          <div class="row">
            <div class="col-md-4">
              <div class="small-box bg-gradient-success">
                <div class="inner">
                  <h3>{{ dashboard.registeredUsers }}</h3>
                  <p>User Registrations</p>
                </div>
                <div class="icon">
                  <i class="fas fa-user-plus"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="small-box bg-info">
                <div class="inner">
                  <h3>{{ dashboard.testOrders }}</h3>
                  <p>New Orders</p>
                </div>
                <div class="icon">
                  <i class="fas fa-shopping-cart"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <div class="small-box bg-gradient-yellow">
                <div class="inner">
                  <h3>{{ dashboard.testSamples }}</h3>
                  <p>Samples</p>
                </div>
                <div class="icon">
                  <i class="fas fa-flask"></i>
                </div>
                <a href="#" class="small-box-footer">
                  More info <i class="fas fa-arrow-circle-right"></i>
                </a>
              </div>
            </div>
          </div>

          <p>
            <code>Other data and metrics will be added here</code>
          </p>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sessionstorage from "sessionstorage";
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
import vars from "../utils/vars";
import * as $ from "jquery";

export default {
  name: "BODashboard",
  components: {BackofficeMenu, TopmenuBackoffice},
  data(){
    return {
      dashboard: {
        registeredUsers: 0,
        testOrders: 0,
        testSamples: 0
      },
      messageList: []
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
     * GET /api/v1/dashboard
     ************************/
    let url = vars.getAPIURL(`/api/v1/dashboard`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.log(JSON.stringify(res))
        this.dashboard = res;
      },
      error: (err)=>{

      }
    })
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
