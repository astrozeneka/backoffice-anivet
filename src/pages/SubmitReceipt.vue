<template>
  <div>
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

      <div class="my-3">
        <label for="fFile" class="form-label">Upload your receipt scan</label>
        <input class="form-control" type="file" id="fFile">
      </div>

      <FormErrors
          :field-errors="fieldErrors.form"
      />
      <FormErrors
          :field-errors="fieldErrors.linkReference"
      />

      <RequestingButton :requesting="requesting">Submit</RequestingButton>

    </form>
  </div>
</template>

<script>
import FormField2 from "../components/FormField2";
import FormErrors from "../components/FormErrors";
import SubmitButton from "../components/SubmitButton";

import * as $ from 'jquery'
import vars from '../utils/vars';
import RequestingButton from "../RequestingButton";
import sessionstorage from "sessionstorage";

export default {
  name: "SubmitReceipt",
  components: {FormField2, FormErrors, RequestingButton},
  data(){
    return {
      requesting: false,
      form: {
        linkReference: "",
        reference: "",
        method: "",
        file: ""
      },
      fieldErrors: {
        reference: "",
        method: "",
        file: ""
      }
    }
  },
  methods: {
    getBase64(file){
      return new Promise((resolve)=>{
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
          resolve(reader.result);
        };
        reader.onerror = function (error) {
          console.error('Error: ', error);
        };
      })
    },
    formSubmit(e){
      this.requesting = true
      const form = e.currentTarget


      ;(async ()=>{ // Asynchronous script
        // Get base64 of uploaded file
        let file = document.querySelector('#fFile').files[0]
        if(file != null)
          this.form.file = await this.getBase64(file)
        this.doFormSubmit(this.form)
      })()

    },
    doFormSubmit: function (data) {
      console.info(data)
      // Append testOrderId to data
      let token = sessionstorage.getItem("accessToken")
      data.testOrderId = sessionstorage.getItem("testOrderId")
      console.info(data.testOrderId)
      $.ajax(vars.getAPIURL('/public/submit-receipt'), {
        type: "POST",
        beforeSend: (xhr)=>{
          xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        },
        data: JSON.stringify(data),
        contentType: "application/json",
        success: (res) => {
          this.requesting = false;
          if(res.hasOwnProperty('errors')){
            this.fieldErrors = res.errors
          }else{
            this.fieldErrors = {}
            // Redirect
            window.location.href = "/order-finished.html"
          }
        },
        error: (res) => {
          this.requesting = false;
          console.error(res)
        }
      })
    }
  },
  created(){
  },
  beforeCreate() {
    let token = sessionstorage.getItem("accessToken")
    let testOrderId = sessionstorage.getItem("testOrderId")
    console.info(`testOrderId is ${testOrderId}`)
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
