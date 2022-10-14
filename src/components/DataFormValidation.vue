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
      <RequestingButton2 className="btn-primary btn-sm" :requesting="requesting">
        <span>Submit</span>
      </RequestingButton2>
    </div>
  </form>
</template>

<script>
import RequestingButton2 from "./RequestingButton2";
import beta_ajaxPost from "../utils/beta_ajaxPost";
import beta_ajaxGet from "../utils/beta_ajaxGet";

export default {
  name: "DataFormValidation",
  props: {
    slug: {type: String},
    form: {type: Object},
    fieldErrors: {type: Object},
    next: {type: Function},
    cancel: {type: Function},
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
      data.id = (new URL(window.location.href)).searchParams.get("id");
      let d = await beta_ajaxPost(`/api/v1/validation/${this.slug}`, data)
      this.requesting = false
      if (d.hasOwnProperty('errors')) {
        for (const key in this.fieldErrors)
          this.fieldErrors[key] = d.errors[key]
      } else {
        this.$emit('next')
      }
    }
  },
  async created(){
    let id = (new URL(window.location.href)).searchParams.get("id");
    let d = await beta_ajaxGet(`/api/v1/validation/${this.slug}/${id}`);
    for (const key in this.form)
      this.form[key] = d[key]
  }
}
</script>

<style scoped>

</style>
