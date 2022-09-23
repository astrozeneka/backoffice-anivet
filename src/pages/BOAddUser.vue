<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">
          <h1>Add User</h1>

          <div>
            <form
              action="/"
              method="get"
              target="_blank"
              novalidate
              @submit.prevent="formSubmit"
            >

              <div class="form-group">
                <label for="fType">Which kind of membership do you want to register</label>

                <select v-if="userTypeEnabled" class="form-select" id="fType" name="type" v-model="form.type" @change="onTypeChange">
                  <option value="" selected>-- Select option below --</option>
                  <option value="breeder">Breeder</option>
                  <option value="owner">Owner</option>
                  <option value="vet">Vet</option>
                  <option value="scientist">Scientist</option>
                </select>
                <select v-else class="form-select" id="fType_" name="type" v-model="form.type" disabled>
                  <option value="" selected>-- Select option below --</option>
                  <option value="breeder">Breeder</option>
                  <option value="owner">Owner</option>
                  <option value="vet">Vet</option>
                  <option value="scientist">Scientist</option>
                </select>
              </div>

              <FormField2
                  id="fName1"
                  v-model="form.name1"
                  type="text"
                  placeholder="NAME1"
                  label="NAME1_LABEL"
                  :field-errors="fieldErrors.name1"
              />

              <FormField2
                  id="fName2"
                  v-model="form.name2"
                  type="text"
                  placeholder="NAME2"
                  label="NAME2_LABEL"
                  :field-errors="fieldErrors.name2"
              />

              <FormField2
                  id="fPhone"
                  v-model="form.phone"
                  type="text"
                  placeholder="PHONE"
                  label="PHONE_LABEL"
                  :field-errors="fieldErrors.phone"
              />

              <FormField2
                  id="fEmail"
                  v-model="form.email"
                  type="text"
                  placeholder="EMAIL"
                  label="EMAIL_LABEL"
                  :field-errors="fieldErrors.email"
              />

              <h2>ADDRESS</h2>

              <FormField2
                  id="fCountry"
                  v-model="form.country"
                  type="text"
                  placeholder="COUNTRY"
                  label="COUNTRY_LABEL"
                  :field-errors="fieldErrors.country"
              />

              <FormField2
                  id="fAddress"
                  v-model="form.address"
                  type="text"
                  placeholder="ADDRESS"
                  label="ADDRESS_LABEL"
                  :field-errors="fieldErrors.address"
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

              <h2>ACCOUNT DETAILS</h2>

              <FormField2
                  id="fUsername"
                  v-model="form.username"
                  type="text"
                  placeholder="USERNAME"
                  label="USERNAME_LABEL"
                  :field-errors="fieldErrors.username"
              />

              <FormField2
                  id="fPassword"
                  v-model="form.password"
                  type="password"
                  placeholder="PASSWORD"
                  label="PASSWORD_LABEL"
                  :field-errors="fieldErrors.password"
              />

              <FormField2
                  id="fPasswordCheck"
                  v-model="form.passwordCheck"
                  type="password"
                  placeholder="PASSWORDCHECK"
                  label="PASSWORDCHECK_LABEL"
                  :field-errors="fieldErrors.passwordCheck"
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
import SubmitButton from "../components/SubmitButton";
import * as $ from 'jquery'
import vars from "../utils/vars";
import sessionstorage from "sessionstorage";

export default {
  name: "BOAddUser",
  components: {TopmenuBackoffice, BackofficeMenu, FormField2, FormErrors, SubmitButton},
  data(){
    return {
      requesting: false,
      userTypeEnabled: true,
      nextPage: "/dashboard.html",
      form: {
        type: "",// Tne default type

        name1: "",
        name2: "",
        phone: "",
        email: "",

        country: "",
        address: "",
        changwat: "",
        amphoe: "",
        tambon: "",
        postcode: "",

        username: "",
        password: "",
        passwordCheck: "",
        website: "",
        subscribe: false
      },
      fieldErrors: {
        name1: "",
        name2: "",
        phone: "",
        email: "",

        country: "",
        address: "",
        changwat: "",
        amphoe: "",
        tambon: "",
        postcode: "",

        username: "",
        password: "",
        passwordCheck: "",
        form: ""
      }
    }
  },
  methods: {
    onTypeChange(){},
    formSubmit(e){
      this.requesting = true
      this.doFormSubmit(this.form)
    },
    doFormSubmit(data){
      let token = sessionstorage.getItem("accessToken")
      let adminId = sessionstorage.getItem("userId")
      $.ajax(vars.getAPIURL('/api/v1/registration'), {
        type: "POST",
        beforeSend: (xhr)=>{
          xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        },
        data: JSON.stringify(data),
        contentType: "application/json",
        success: (res)=>{
          console.info(res)
          if(res.hasOwnProperty('errors'))
            this.fieldErrors = res.errors
          else{
            this.fieldErrors = {}
            // Redirect
            window.location.href = this.nextPage
          }
        },
        error: (err)=>{
          console.error(err)
        }
      })
    }
  },
  created(){
    let userType = (new URL(window.location.href)).searchParams.get("type");
    if(userType != null){
      this.userTypeEnabled = false
      this.form.type = userType
      this.nextPage = `/${userType}s.html`
    }
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
