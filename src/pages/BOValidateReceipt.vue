<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">
          <div>
            <h2>Informations</h2>
            <form
              action="/"
              method="get"
              target="_blank"
              novalidate
              @submit.prevent="formSubmit"
          >


            <FormField2
                id="fReference"
                v-model="form.reference"
                type="text"
                placeholder="Receipt reference"
                label="Receipt reference"
                :field-errors="fieldErrors.reference"
            />
            <FormField2
                id="fMethod"
                v-model="form.method"
                type="text"
                placeholder="Payment method"
                label="Payment method"
                :field-errors="fieldErrors.method"
            />
            <div>
              Should visualize file from this section
            </div>
          </form>
          </div>
          <div>
            <h2>Validate</h2>
            <form
                action="/"
                method="get"
                target="_blank"
                novalidate
                @submit.prevent="formValidateSubmit"
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

              <RequestingButton :requesting="validationRequesting">Validate</RequestingButton>
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
import sessionstorage from "sessionstorage";
import vars from "../utils/vars";
import * as $ from "jquery"
import RequestingButton from "../RequestingButton";

export default {
  name: "BOValidateReceipt",
  components: {TopmenuBackoffice, BackofficeMenu, FormField2, FormErrors, RequestingButton},
  data(){
    return {
      requesting: false,
      validationRequesting: false,
      form:{
        linkReference: "",
        reference: "",
        method: "",
        file: ""
      },
      fieldErrors:{
        linkReference: "",
        reference: "",
        method: "",
        file: ""
      },
      validationForm:{
        validated: false,
        message: ""
      },
      validationFieldErrors:{
        validated: false,
        message: ""
      }
    }
  },
  methods: {
    formValidateSubmit(){
      this.validationRequesting = true
      this.doFormValidationSubmit(this.validationForm)
    },
    doFormValidationSubmit(data){
      let token = sessionstorage.getItem("accessToken")
      let receiptId = (new URL(window.location.href)).searchParams.get("id");
      let url = vars.getAPIURL(`/api/v1/paymentReceipt/validate/${receiptId}`)
      $.ajax(url, {
        type: "POST",
        data: JSON.stringify(this.validationForm),
        contentType: "application/json",
        beforeSend: (xhr)=>{
          xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        },
        success: (res)=>{
          this.validationRequesting = false
          console.info(res)
        },
        error: (res)=>{
          this.validationRequesting = false
          console.info(res)
        }
      })
      /**
       * WE ARE HERE
       */

    }
  },
  beforeCreate() {

    let token = sessionstorage.getItem("accessToken")
    let userId = sessionstorage.getItem("userId")
    let receiptId = (new URL(window.location.href)).searchParams.get("id");
    let url = vars.getAPIURL(`/api/v1/paymentReceipt/${receiptId}`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.log(JSON.stringify(res))
        this.form = res;
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
