<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <RegistrationAsideMenu></RegistrationAsideMenu>
        </div>
        <div class="col-md-9">
          <!--
            ไม่มี H1 title
          -->
          <form
              action="/"
              method="get"
              target="_blank"
              novalidate
              @submit.prevent="formSubmit">

            <h2>Add personal informations</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>
            <FormFieldLR
                id="fName1"
                v-model="form.name1"
                type="text"
                placeholder=""
                label="Firstname*"
                :field-errors="fieldErrors.name1"
            />
            <FormFieldLR
                id="fName2"
                v-model="form.name2"
                type="text"
                placeholder=""
                label="Lastname*"
                :field-errors="fieldErrors.name2"
            />
            <FormFieldLR
                id="fPhone"
                v-model="form.phone"
                type="text"
                placeholder=""
                label="Phone*"
                :field-errors="fieldErrors.phone"
            />
            <FormFieldLR
                id="fEmail"
                v-model="form.email"
                type="text"
                placeholder=""
                label="Email*"
                :field-errors="fieldErrors.email"
            />

            <h2>Your role</h2>
            <p>Praesent ac leo nec lorem eleifend tincidunt.</p>
            <div class="row">
              <div class="col-sm-3 text-right mt-1">
                <label for="fType">Please which role you have in the company</label>
              </div>
              <div class="col-sm-6">
                <select id="fType" v-model="form.type" class="form-select">
                  <option selected value="">-- Selection option below --</option>
                  <option value="breeder">Breeder</option>
                  <option value="owner">Owner</option>
                  <option value="vet">Vet</option>
                </select>
              </div>
              <div class="col-sm-3"></div>
            </div>

            <h2>Add your location</h2>
            <p>Praesent ac leo nec lorem eleifend tincidunt. Sed ac bibendum augue. Aenean aliquam felis vel rutrum molestie. Praesent in facilisis nulla, in rutrum diam. Nulla convallis metus sit amet elit accumsan ultrices.</p>
            <FormFieldLR
                id="fAddress"
                v-model="form.address1"
                type="text"
                placeholder=""
                label="Address*"
                :field-errors="fieldErrors.address1"
            />
            <FormFieldLR
                id="fCountry"
                v-model="form.country"
                type="text"
                placeholder=""
                label="Country*"
                :field-errors="fieldErrors.country"
            />
            <FormFieldLR
                id="fChangwat"
                v-model="form.changwat"
                type="text"
                placeholder=""
                label="Province"
                :field-errors="fieldErrors.changwat"
            />
            <FormFieldLR
                id="fAmphoe"
                v-model="form.amphoe"
                type="text"
                placeholder=""
                label="Amphoe"
                :field-errors="fieldErrors.amphoe"
            />
            <FormFieldLR
                id="fTambon"
                v-model="form.tambon"
                type="text"
                placeholder=""
                label="Sub-district"
                :field-errors="fieldErrors.tambon"
            />
            <FormFieldLR
                id="fPostcode"
                v-model="form.postcode"
                type="text"
                placeholder="19001"
                label="Postcode*"
                :field-errors="fieldErrors.postcode"
            />

            <div class="text-right pt-5">
              <!--
              <button class="btn text-primary btn-sm" @click.prevent="to_cancel">Cancel</button>
              -->
              <RequestingButton2 className="btn-primary btn-sm" :requesting="requesting">
                Next
              </RequestingButton2>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationAsideMenu from "../components/RegistrationAsideMenu";
import RequestingButton2 from "../components/RequestingButton2";
import FormFieldLR from "../components/FormFieldLR";
import beta_ajaxPost from "../utils/beta_ajaxPost";
import sessionstorage from "sessionstorage";
export default {
  name: "RegistrationAccount",
  components: {RegistrationAsideMenu, RequestingButton2, FormFieldLR},
  data(){
    return {
      requesting: false,
      form: {
        type: "",
        name1: "",
        name2: "",
        phone: "",
        email: "",

        address1: "",
        country: "",
        changwat: "",
        amphoe: "",
        tambon: "",
        postcode: "",
      },
      fieldErrors: {
        type: "",
        name1: "",
        name2: "",
        phone: "",
        email: "",

        address1: "",
        country: "",
        changwat: "",
        amphoe: "",
        tambon: "",
        postcode: ""
      }
    }
  },
  methods: {
    formSubmit(){
      this.requesting = true
      this.doFormSubmit(this.form)
    },
    async doFormSubmit(data){
      let d = await beta_ajaxPost(`/public/registration/account`, data)
      this.requesting = false
      if(d.hasOwnProperty("errors")){
        for(const key in this.fieldErrors)
          this.fieldErrors[key] = d.errors[key]
      }else{
        this.next(d.entity, d.accessToken)
      }
    },
    next(entity, accessToken){
      console.log(entity)
      console.log(accessToken)
      if(entity != null && entity.id > 0 && accessToken){
        // Success
        // Use token and connect to the next step
        sessionstorage.setItem("accessToken", accessToken)
        window.location.href = "/registration-terms-and-conditions.html"
      }else {
        fieldErrors.form = "INTERNAL SERVER ERROR"
        console.error("INTERNAL SERVER ERROR")
      }
    }
  }
}
</script>
<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.scss';
h3{
  font-size: 18px;
}
</style>
