<template>
  <div>

    <form
      action="/"
      method="post"
      target="_blank"
      novalidate
      @submit.prevent="formSubmit"
    >

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
          id="fEmail"
          v-model="form.email"
          type="text"
          placeholder="Email"
          label="Email"
          :field-errors="fieldErrors.email"
      />

      <div class="accordion" id="accordionExample">
        <div v-for="i in [...Array(sampleShown).keys()]" class="accordion-item">
          <h2 clas="accordion-header" :id="'header-' + i">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + i" aria-expanded="true" aria-controls="collapseOne">
              #{{i+1}} : TEST
            </button>
          </h2>
          <div :id="'collapse' + i" class="accordion-collapse collapse show" :aria-labelledbu="'heading' + i" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <OrderTestForm
                v-model="form.tests[i]"
                :field-errors="fieldErrors.tests[i]"
                :index="i"
              ></OrderTestForm>
            </div>
          </div>
        </div>
      </div>

      <button class="btn btn-secondary" @click.prevent="addSample">Add sample</button>

      <SubmitButton :requesting="requesting"></SubmitButton>

    </form>
  </div>
</template>

<script>
import FormField2 from "../components/FormField2";
import FormErrors from "../components/FormErrors";
import * as $ from 'jquery'
import vars from "../utils/vars";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min";
import OrderTestForm from "../components/OrderTestForm";
import SubmitButton from "../components/SubmitButton";

let maxSample = 10
export default {
  name: "SubmitOrders",
  components: {OrderTestForm, FormField2, FormErrors, SubmitButton},
  data(){
    return {
      requesting: false,
      sampleShown: 1,
      form: {
        name1: "",
        name2: "",
        email: "",
        tests: [
          {
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },]
      },
      fieldErrors: {
        name1: "",
        name2: "",
        email: "",
        tests: [
          {
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },{
            sampleId: "",
            animal: "",
            type: "",
            petId: "",
            petSpecie: "",
            image: ""
          },]
      }
    }
  },
  methods: {
    formSubmit(e){
      this.requesting = true
      this.doFormSubmit(this.form)
    },
    doFormSubmit(data){
      let url = vars.getAPIURL("/public/submit-orders")
      $.ajax(url, {
        type: "POST",
        data: JSON.stringify(data),
        contentType: "application/json",
        success: (res)=>{
          this.requesting = false;
          // Success, should redirect
          window.location.href = "preview-invoice.html"
        },
        error: (res)=>{
          this.requesting = false;
          console.error(res)
        }
      })
    },
    addSample(e){
      this.sampleShown+= 1
      this.sampleShown = Math.min(this.sampleShown, maxSample)
    }
  },

  beforeCreate() {
    // It should validate reference link first
    let linkReference = (new URL(window.location.href)).searchParams.get("lref");
    if(linkReference == null)
      window.location.href = "error.html"
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>

