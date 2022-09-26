<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">
          <h1>Update User</h1>

          <div>
            <form
                action="/"
                method="post"
                target="_blank"
                novalidate
                @submit.prevent="formSubmit"
            >
              <h2>Personnal details</h2>

              <FormField2
                  id="fName1"
                  v-model="form.name1"
                  type="text"
                  placeholder="Firstname"
                  label="Firstname"
                  :field-errors="fieldErrors.name1"
              />

              <FormField2
                  id="fName2"
                  v-model="form.name2"
                  type="text"
                  placeholder="Lastname"
                  label="Lastname"
                  :field-errors="fieldErrors.name2"
              />

              <FormField2
                  id="fPhone"
                  v-model="form.phone"
                  type="text"
                  placeholder="Phone number"
                  label="Phone number"
                  :field-errors="fieldErrors.phone"
              />

              <FormField2
                  id="fEmail"
                  v-model="form.email"
                  type="text"
                  placeholder="Email"
                  label="Email"
                  :field-errors="fieldErrors.email"
              />

              <h2>Address</h2>

              <FormField2
                  id="fCountry"
                  v-model="form.country"
                  type="text"
                  placeholder="COUNTRY"
                  label="COUNTRY_LABEL"
                  :field-errors="fieldErrors.country"
              />

              <FormField2
                  id="fAddress1"
                  v-model="form.address1"
                  type="text"
                  placeholder="ADDRESS"
                  label="ADDRESS_LABEL"
                  :field-errors="fieldErrors.address1"
              />

              <FormField2
                  id="fChangwat"
                  v-model="form.changwat"
                  type="text"
                  placeholder="CHANGWAT"
                  label="CHANGWAT_LABEL"
                  :field-errors="fieldErrors.changwat"
              /><!-- Change following the country -->

              <FormField2
                  id="fPostcode"
                  v-model="form.postcode"
                  type="text"
                  placeholder="POSTCODE"
                  label="POSTCODE_LABEL"
                  :field-errors="fieldErrors.postcode"
              />

              <h2>Account details</h2>

              <FormField2
                  id="fUsername"
                  v-model="form.username"
                  type="text"
                  placeholder="USERNAME"
                  label="USERNAME_LABEL"
                  :field-errors="fieldErrors.username"
              />

              <FormField2
                  id="fWebsite"
                  v-model="form.website"
                  type="text"
                  placeholder="Website"
                  label="Website"
                  :field-errors="fieldErrors.website"
              />

              <FormErrors
                  :field-errors="fieldErrors.form"
              />

              <SubmitButton :requesting="requesting"></SubmitButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
import FormField2 from "../components/FormField2";
import FormErrors from "../components/FormErrors";

import * as $ from "jquery";
import sessionstorage from "sessionstorage";
import vars from "../utils/vars"
import SubmitButton from "../components/SubmitButton";

export default {
  name: "BOUpdateUser",
  components: {TopmenuBackoffice, BackofficeMenu, FormField2, FormErrors, SubmitButton},
  data(){
    return {
      requesting: false,
      form: {
        name1: "",
        name2: "",
        phone: "",
        email: "",

        country: "",
        address1: "",
        changwat: "",
        amphoe: "",
        tambon: "",
        postcode: "",

        username: "",
        password: "",
        website: "",
        subscribe: false
      },
      fieldErrors: {
        name1: "",
        name2: "",
        phone: "",
        email: "",
        form: "",

        country: "",
        address1: "",
        changwat: "",
        amphoe: "",
        tambon: "",
        postcode: "",

        username: "",
        password: "",
        website: "",
      }
    }
  },
  methods: {
    formSubmit(e){
      this.requesting = true
      this.doFormSubmit(this.form)
    },
    doFormSubmit(data) {
      let token = sessionstorage.getItem("accessToken")
      let userId = (new URL(window.location.href)).searchParams.get("id");
      let url = vars.getAPIURL(`/api/v1/registration/${userId}`)
      $.ajax(url, {
        type: "PUT",
        contentType: "application/json",
        data: JSON.stringify(data),
        beforeSend: (xhr)=>{
          xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        },
        success: (res)=>{
          console.info(res)
          this.requesting = false;
          if(res.hasOwnProperty("errors"))
            this.fieldErrors = res.errors
          else {
            // Redirect
            window.location.reload()
          }
        }
      })
    }
  },
  created(){
    let token = sessionstorage.getItem("accessToken")
    let userId = (new URL(window.location.href)).searchParams.get("id");
    let url = vars.getAPIURL(`/api/v1/baseMember/${userId}`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        this.form = res
      },
      error: (res)=>{
        console.error(res)
      }
    })
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
<style scoped>

</style>
