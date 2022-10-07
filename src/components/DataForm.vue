<template>
  <form
      action="/"
      method="get"
      target="_blank"
      novalidate
      @submit.prevent="formSubmit"
  >
    <slot></slot>
    <div class="text-right pt-5">
      <button class="btn text-primary btn-sm">Cancel</button>
      <RequestingButton2 className="btn-primary btn-sm" :requesting="requesting">Add</RequestingButton2>
    </div>
  </form>
</template>

<script>
import RequestingButton2 from "./RequestingButton2";
import beta_ajaxPost from "../utils/beta_ajaxPost";
import sessionstorage from "sessionstorage";
import beta_ajaxGet from "../utils/beta_ajaxGet";
import beta_ajaxPut from "../utils/beta_ajaxPut";

export default {
  name: "DataForm",
  //props: ["form", "fieldErrors", "next", "cancel"],
  props: {
    slug: {type: String},
    form: {type: Object},
    fieldErrors: {type: Object},
    next: {type: Function},
    cancel: {type: Function},
    action: {type: String}
  },
  components: {RequestingButton2},
  data(){
    return {
      requesting: false
    }
  },
  methods: {
    formSubmit(){
      this.requesting = true
      this.doFormSubmit(this.form)
    },
    async doFormSubmit(data){
      let d = null
      if(this.action == "add") {
        d = await beta_ajaxPost(`/api/v1/data/${this.slug}`, data)
      }else if(this.action == "edit") {
        let id = (new URL(window.location.href)).searchParams.get("id");
        d = await beta_ajaxPut(`/api/v1/data/${this.slug}/${id}`, data)
      }

      this.requesting = false
      if (d.hasOwnProperty('errors')) {
        for (const key in this.fieldErrors)
          this.fieldErrors[key] = d.errors[key]
      } else {
        this.$emit('next')
      }
    }
  },
  async created() {
    if(this.action == "edit"){
      console.log("sdf")
      let id = (new URL(window.location.href)).searchParams.get("id");
      let d = await beta_ajaxGet(`/api/v1/data/${this.slug}/${id}`, )
      for (const key in this.form)
        this.form[key] = d[key]
    }
  }
}
</script>

<style scoped>

</style>
