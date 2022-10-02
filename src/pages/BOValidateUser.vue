<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9">

          <h2>User Information</h2>
          <h3>Personnal details</h3>

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

          <h3>Account details</h3>

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

          <hr/>

          <h2>Validate</h2>

          <form
            action="/"
            method="get"
            target="_blank"
            novalidate
            @submit.prevent="formSubmit"
          >
            <FormField2
                id="fMessage"
                v-model="validationForm.message"
                type="text"
                placeholder="Message"
                label="Message"
                :field-errors="validationFieldErrors.message"
            />

            <div class="form-check my-3">
              <input class="form-check-input" type="checkbox" value="" id="fValidated" v-model="validationForm.validated">
              <label class="form-check-label" for="fValidated">
                The information submitted by the user are corrected
              </label>
            </div>

            <RequestingButton :requesting="requesting">Submit</RequestingButton>
          </form>

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
import SubmitButton from "../components/SubmitButton";
import sessionstorage from "sessionstorage";
import vars from "../utils/vars";
import * as $ from "jquery";
import RequestingButton from "../RequestingButton";

export default {
  name: "BOValidateUser",
  components: {RequestingButton, TopmenuBackoffice, BackofficeMenu, FormField2, FormErrors, SubmitButton},
  data(){
    return {
      requesting: false,
      httpReferer: "",
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
      },
      validationForm: {
        validated: false,
        message: ""
      },
      validationFieldErrors: {
        validated: "",
        message: ""
      }
    }
  },
  methods: {
    formSubmit(e){
      // This is only for the validation form, not for the user form
      this.requesting = true
      this.doFormSubmit()
    },
    doFormSubmit(data){
      let token = sessionstorage.getItem("accessToken")
      let userId = (new URL(window.location.href)).searchParams.get("id");
      $.ajax(vars.getAPIURL(`/api/v1/baseMember/validate/${userId}`), {
        type: "POST",
        data: JSON.stringify(this.validationForm),
        contentType: "application/json",
        beforeSend: (xhr)=>{
          xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        },
        success: (res)=>{
          this.requesting = false
          console.info(res)
          if(res.hasOwnProperty("errors"))
            this.validationFieldErrors = res.errors
          else {
            this.validationFieldErrors = {}
            window.location.href = this.httpReferer
          }
        },
        error: (res)=>{
          this.requesting = false;
          console.error(res)
        }
      })
    }
  },
  beforeCreate() {
    let token = sessionstorage.getItem("accessToken")
    let userId = (new URL(window.location.href)).searchParams.get("id");
    let url = vars.getAPIURL(`/api/v1/baseMember/${userId}`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.log(JSON.stringify(res))
        this.httpReferer = res.type + "s.html"
        this.form = res
        this.validationForm.message = res.validationNoteMessage
        this.validationForm.validated = res.validationNoteValidated
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
