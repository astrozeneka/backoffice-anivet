<template>
  <div>
    <header>
      <Breadcrumb :labels="breadcrumbLabels"></Breadcrumb>
    </header>
    <header>
      <h1>{{title}}</h1>
    </header>
    <div>
      <slot v-bind="messageData"></slot>
    </div>

    <div class="text-right pt-5">
      <button class="btn text-primary btn-sm" @click="cancel">Cancel</button>
      <RequestingButton2 className="btn-primary btn-sm" :requesting="requesting" @click="confirm">Confirm</RequestingButton2>
    </div>
  </div>
</template>

<script>
import RequestingButton2 from "./RequestingButton2";
import Breadcrumb from "./Breadcrumb";
import beta_ajaxDelete from "../utils/beta_ajaxDelete";
import sessionstorage from "sessionstorage";

export default {
  name: "ConfirmDeletion",
  components: {RequestingButton2, Breadcrumb},
  props: {
    title: {type: String, default: "Confirm deletion"},
    tableName: {type: String, default: "Unspecified"},
    slug: {type: String},
    urlLikeSlug: {type: String}
  },
  data(){
    return {
      messageData: {
        count: 0,
        tableName: "",
      },
      breadcrumbLabels: {
        'Home': '/dash.js',
        'Data': '#'
      },
      requesting: false
    }
  },
  methods: {
    cancel(){
      window.location.href = `${this.urlLikeSlug}-list.html`
    },
    async confirm(){
      let idListSeparated = (new URL(window.location.href)).searchParams.get("idList").split(",")
      let o = await beta_ajaxDelete(`/api/v1/data/${this.slug}/${idListSeparated.join(',')}`)
      console.log(o)
      if(o.affectedRows == idListSeparated.length){
        sessionstorage.setItem("message", `${this.messageData.count} row${this.messageData.count>1?'s':''} has been deleted successfully`)
        sessionstorage.setItem("message-class", "success")
        window.location.href = `${this.urlLikeSlug}-list.html`
      }else{
        sessionstorage.setItem("message", "An error occurs when deleting from table")
        sessionstorage.setItem("message-class", "warning")
        window.location.href = `${this.urlLikeSlug}-list.html`
      }
    }
  },
  created(){
    this.messageData.tableName = this.tableName
    let tn = this.messageData.tableName
    this.breadcrumbLabels = {
      'Home': '/dashboard.js',
      'Data': '#',
    }
    this.breadcrumbLabels[tn] = `/${this.urlLikeSlug}-list`
    this.breadcrumbLabels["Delete"] = '#'
    let list = (new URL(window.location.href)).searchParams.get("idList").split(",")
    this.messageData.count = list.length
  }
}
</script>

<style scoped>
h1{
  margin-bottom: 1em;
}
</style>
