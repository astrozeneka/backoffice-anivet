<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">
          <h1>Add Parcel</h1>
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
                  placeholder="Parcel reference"
                  label="Parcel reference"
                  :field-errors="fieldErrors.reference"
              />
              <FormField2
                  id="fReference"
                  v-model="form.deliveryService"
                  type="text"
                  placeholder="Delivery Service"
                  label="Delivery Service"
                  :field-errors="fieldErrors.deliveryService"
              />

              <div class="form-group">
                <label for="fType">For which sample this parcel is attributed to</label>
                <select class="form-select" id="fType" name="type" v-model="form.testSampleId">
                  <option value="" selected>-- Select option below --</option>
                  <option v-for="sample in samples" :value="sample.id">
                    #{{sample.id}} — {{sample.petSpecie}} {{sample.type}} from {{sample.testOrder_email}}
                  </option>
                </select>
                <div v-if="fieldErrors.testSampleId" class="text-danger">
                  {{ fieldErrors.testSampleId }}
                </div>
              </div>

              <div class="my-3">
                <label for="fFile" class="form-label">Upload your delivery screenshot of ticket scan</label>
                <input class="form-control" type="file" id="fFile">
              </div>
              <FormErrors
                  :field-errors="fieldErrors.file"
              />

              <FormErrors
                  :field-errors="fieldErrors.form"
              />

              <RequestingButton :requesting="requesting">Submit</RequestingButton>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as $ from 'jquery'
import vars from '../utils/vars';
import FormField2 from "../components/FormField2";
import FormErrors from "../components/FormErrors";
import RequestingButton from "../RequestingButton";
import sessionstorage from "sessionstorage";
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
export default {
  name: "BOAddParcel",
  components: {TopmenuBackoffice, BackofficeMenu, FormField2, FormErrors, RequestingButton},
  data(){
    return {
      requesting: false,
      samples: [],
      form: {
        reference: "",
        deliveryService: "",
        testSampleId: "",
        file: "",
        // Triggerer and date will be added in the server side
      },
      fieldErrors: {
        reference: "",
        deliveryService: "",
        testSampleId: "",
        file: "",
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
      ;(async ()=>{ // Asynchronous script
        // Get base64 of uploaded file
        let file = document.querySelector('#fFile').files[0]
        if(file != null)
          this.form.file = await this.getBase64(file)
        this.doFormSubmit(this.form)
      })()
    },
    doFormSubmit(data){
      console.debug(`Try to send JSON data : ${JSON.stringify(data)}`)
      let token = sessionstorage.getItem("accessToken")
      $.ajax(vars.getAPIURL(`/api/v1/parcel`), {
        type: "POST",
        beforeSend: (xhr)=>{
          xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        },
        data: JSON.stringify(data),
        contentType: "application/json",
        success: (res)=>{
          this.requesting = false;
          console.debug(`Receive JSON ${JSON.stringify(res)}`)
          if(res.hasOwnProperty('errors')){
            this.fieldErrors = res.errors
          }else{
            this.fieldErrors = {}
            window.location.href = "parcels.html"
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
    // Get list of available sample
    let token = sessionstorage.getItem("accessToken")
    let url = vars.getAPIURL(`/api/v1/testSample`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.debug(`Receive JSON ${JSON.stringify(res)}`)
        this.samples = res
      },
      error: (err)=>{
        console.error(err)
      }
    })
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
