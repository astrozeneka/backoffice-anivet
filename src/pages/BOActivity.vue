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
            NOTIFICATION TIMELINE
          -->
          <div class="timeline">
            <div class="time-label">
              <span class="bg-green">Today</span>
            </div>

            <div v-for="message in messageList">
              <i :class="timeline_badge_color(message.tags) + ' ' + timeline_badge_icon(message.tags)"></i>
              <div class="timeline-item">
                <span class="time"><i class="fas fa-clock"></i> {{ (new Date(message.date)).toLocaleDateString("en-us", { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }) }}</span>
                <h3 class="timeline-header" v-html="message.title"></h3>
                <div class="timeline-body" v-html="message.content">
                </div>
                <div class="timeline-footer">
                  <a class="btn btn-primary btn-sm">Read more</a>
                  <a class="btn btn-danger btn-sm">Delete</a>
                </div>
              </div>
            </div>
            <div>
              <i class="fas fa-clock bg-gray"></i>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
import sessionstorage from "sessionstorage";
import vars from "../utils/vars";
import * as $ from "jquery";

export default {
  name: "BOActivity",
  components: {TopmenuBackoffice, BackofficeMenu},
  data(){
    return {
      messageList: []
    }
  },
  methods: {
    timeline_badge_icon(tags){
      if(tags.includes("NEW_MEMBER"))
        return "fas fa-user-plus"
      if(tags.includes("NEW_ORDER"))
        return "fas fa-shopping-cart"
      if(tags.includes("MESSAGE"))
        return "fas fa-envelope"
      return ""
    },
    timeline_badge_color(tags){
      if(tags.includes("NEW_MEMBER"))
        return "bg-blue"
      if(tags.includes("NEW_ORDER"))
        return "bg-yellow"
      if(tags.includes("MESSAGE"))
        return "bg-red"
      return ""
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
    let url = vars.getAPIURL(`/api/v1/message/to/${userId}`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.info(res)
        this.messageList = res
      }
    })
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
