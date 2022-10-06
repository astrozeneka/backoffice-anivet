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

export default {
  name: "DataForm",
  //props: ["form", "fieldErrors", "next", "cancel"],
  props: {
    form: {type: Object},
    fieldErrors: {type: Object},
    next: {type: Function},
    cancel: {type: Function}
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
      let d = await beta_ajaxPost(`/api/v1/data/owner`, data)
      this.requesting = false
      if(d.hasOwnProperty('errors')){
        for(const key in this.fieldErrors)
          this.fieldErrors[key] = d.errors[key]
      }else{
        this.$emit('next')
      }
    }
  }
}
</script>

<style scoped>

</style>
