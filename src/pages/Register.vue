<template>
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
        <select class="form-select" id="fType" name="type" v-model="form.type" @change="onTypeChange">
          <option value="" selected>-- Select option below --</option>
          <option value="breeder">Breeder</option>
          <option value="owner">Owner</option>
          <option value="vet">Vet</option>
        </select>
      </div>

      <div id="show-after" v-if="detailsShown">

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

        <RequestingButton @click="formSubmit" :requesting="requesting">Register</RequestingButton>

      </div>
    </form>
  </div>
</template>

<script>


import * as $ from 'jquery'
import FormField2 from "../components/FormField2";
import vars from '../utils/vars';
import FormErrors from "../components/FormErrors";
import SubmitButton from "../components/SubmitButton";
import RequestingButton from "../RequestingButton";


export default {
  name: "Register",
  data() {
    return {
      detailsShown: false,
      requesting: false,
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
  components: {RequestingButton, FormField2, FormErrors, SubmitButton},
  computed: {
    model: {
      get(){
        return this.value
      },
      set(value){
        this.$emit('input', value)
      }
    },
    cFieldErrors(){
      return this.fieldErrors
    }
  },
  methods: {
    onTypeChange(){
      // Show or hide the details section
      this.detailsShown = (this.form.type != "")
    },
    formSubmit(e) {
      this.requesting = true
      const form = e.currentTarget
      this.doFormSubmit(this.form)
    },
    doFormSubmit(data){
      console.log(data)
      console.log(JSON.stringify(data))
      $.ajax(vars.getAPIURL('/public/register'), {
        data: JSON.stringify(data),
        contentType: "application/json",
        type: "POST",
        success: (res)=>{
          this.requesting = false
          console.log(res)
          if(res.hasOwnProperty("errors")){
            this.fieldErrors = res.errors
          }else{
            this.fieldErrors = {}
            // NO errors
            // Should first fetch authentication
            // What to do next
            // Redirect to an information page: to read, to accept (like an e-book or sth)
            window.location.href = "terms-and-conditions.html?lref=pppjkmlkj"
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
