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
          id="fName1"
          v-model="form.reference"
          type="text"
          placeholder="Receipt reference"
          label="Receipt reference"
          :field-errors="fieldErrors.reference"
      />

      <FormField2
          id="fName1"
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

      <SubmitButton :requesting="requesting"></SubmitButton>


    </form>
  </div>
</template>

<script>
import FormField2 from "../components/FormField2";
import FormErrors from "../components/FormErrors";
import SubmitButton from "../components/SubmitButton";

import * as $ from 'jquery'
import vars from '../utils/vars';

export default {
  name: "SubmitReceipt",
  components: {FormField2, FormErrors, SubmitButton},
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
      console.log(data)
      $.ajax(vars.getAPIURL('/public/submit-receipt'), {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: (res) => {
          this.requesting = false;
          if(res.hasOwnProperty('errors')){
            this.fieldErrors = res.errors
          }else{
            this.fieldErrors = {}
            // Redirect
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
    let linkReference = (new URL(window.location.href)).searchParams.get("lref");
    this.form.linkReference = linkReference
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
