<template>
  <div class="container">
    <div class="card">
      <div class="card-body">
        <h1 class="card-title text-center">
          <img
              src="/assets/logotype.png"
              class="img-fluid"
              style="max-height: 60px"
              alt="Anivet Pet:DNA"
          />
        </h1>
        <h2 class="card-subtitle">Login as admin</h2>
        <div class="card-text">
          <p class="card-text">
            For having access to the back-office system, you should be connected first.
          </p>
          <FormField2
              id="fUsername"
              type="text"
              v-model="form.username"
              placeholder="USERNAME"
              label="USERNAME_LABEL"
              :field-errors="fieldErrors.username"
          />

          <FormField2
              id="fPassword"
              type="password"
              v-model="form.password"
              placeholder="PASSWORD"
              label="PASSWORD"
              :field-errors="fieldErrors.password"
          />
          <FormErrors
              :field-errors="fieldErrors.form"
          />

          <SubmitButton @click="formSubmit" :requesting="requesting"></SubmitButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as $ from 'jquery'
import vars from "../utils/vars";
import FormField2 from "../components/FormField2";
import FormErrors from "../components/FormErrors";
import sessionstorage from "sessionstorage";
import SubmitButton from "../components/SubmitButton";

export default {
  name: "AdminLogin",
  components: {SubmitButton, FormField2, FormErrors},
  data() {
    return {
      requesting: false,
      form: {
        username: "",
        password: ""
      },
      fieldErrors: {
        username: "",
        password: "",
        form: ""
      }
    }
  },
  methods: {
    formSubmit(e){
      // Client-side validation
      this.requesting = true
      console.log(this.requesting)
      this.doFormSubmit(this.form)
    },
    doFormSubmit(data){
      $.ajax(vars.getAPIURL("/api/v1/admin/login"), {
        data: JSON.stringify(data),
        contentType: "application/json",
        type: "POST",
        success: (res)=>{
          this.requesting = false
          if(res.hasOwnProperty("errors"))
            this.fieldErrors = res.errors
          else{
            this.fieldErrors = {}
            sessionstorage.setItem("accessToken", res.accessToken)
            sessionstorage.setItem("userId", res.userId)
            window.location.reload()
          }
        }
      })
    }
  }
}
</script>


<style>
@import '../scss/style.scss';
</style>
<style scoped>
  img{
    height: 3em;
    width: auto;
  }
  .card{
    margin-top: 2em;
    .card-title{
      margin-top: 1em;
      margin-bottom: 1em;
    }
    .card-body p{
      margin-top: .3em;
      padding-bottom: .5em;
    }
  }
</style>
