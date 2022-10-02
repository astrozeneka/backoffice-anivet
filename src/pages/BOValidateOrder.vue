<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9">
          <div>
            <h4 class="alert-heading">Order</h4>
            <div class="m-0">{{order.date}}</div>
            From : {{order.name1}} {{order.name2}}
            &lt;email@google.com&gt;
            <br/>

            <table class="table">
              <thead>
              <tr>
                <th scope="col">
                  SampleId
                </th>
                <th scope="col">
                  Animal
                </th>
                <th scope="col">
                  Specie
                </th>
                <th scope="col">
                  Type
                </th>
                <th scope="col">
                  PetID
                </th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="sample in order.samples">
                <td>{{sample.id}}</td>
                <td>{{sample.animal}}</td>
                <td>{{sample.petSpecie}}</td>
                <td>{{sample.type}}</td>
                <td>{{sample.petId}}</td>
              </tr>
              </tbody>
            </table>
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

              <RequestingButton :requesting="validationRequesting">Submit</RequestingButton>
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
import sessionstorage from "sessionstorage";
import vars from "../utils/vars";
import * as $ from "jquery"
import RequestingButton from "../RequestingButton";
import FormField2 from "../components/FormField2";

export default {
  name: "BOValidateOrder",
  components: {TopmenuBackoffice, BackofficeMenu, FormField2, RequestingButton},
  data(){
    return {
      order: {},
      validationRequesting: false,
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
    formValidateSubmit(){
      this.validationRequesting = true
      this.doFormValidationSubmit(this.validationForm)
    },
    doFormValidationSubmit(data){
      let token = sessionstorage.getItem("accessToken")
      let orderId = (new URL(window.location.href)).searchParams.get("id")
      let url = vars.getAPIURL(`/api/v1/testOrder/validate/${orderId}`)
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
          console.error(res)
        }
      })
    }
  },
  beforeCreate() {
    let token = sessionstorage.getItem("accessToken")
    let userId = sessionstorage.getItem("userId")
    let orderId = (new URL(window.location.href)).searchParams.get("id");
    let url = vars.getAPIURL(`/api/v1/testOrder/${orderId}`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.log(JSON.stringify(res))
        this.order = res
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
