<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <header>
            <h1>Check and confirm user registration</h1>
          </header>

          <DataFormValidation
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            slug="registration"
          >
            <h2>Personal informations</h2>
            <FormFieldLR
                id="fName1"
                v-model="form.name1"
                type="text"
                placeholder=""
                label="Firstname"
                disabled
            />
            <FormFieldLR
                id="fName2"
                v-model="form.name2"
                type="text"
                placeholder=""
                label="Lastname"
                disabled
            />
            <FormFieldLR
                id="fPhone"
                v-model="form.phone"
                type="text"
                placeholder=""
                label="Phone"
                disabled
            />
            <FormFieldLR
                id="fEmail"
                v-model="form.email"
                type="text"
                placeholder=""
                label="Email"
                disabled
            />
            <FormFieldLR
                id="fUsername"
                v-model="form.username"
                type="text"
                label="Username"
                disabled
            />

            <h2>Location</h2>
            <FormFieldLR
              id="fAddress"
              v-model="form.address1"
              type="text"
              label="Address"
              disabled
            />
            <FormFieldLR
              id="fCountry"
              v-model="form.country"
              type="text"
              label="Country"
              disabled
            />
            <FormFieldLR
              id="fChangwat"
              v-model="form.changwat"
              type="text"
              label="Changwat"
              disabled
            />
            <FormFieldLR
                id="fAmphoe"
                v-model="form.amphoe"
                type="text"
                label="Amphoe"
                disabled
            />
            <FormFieldLR
                id="fTambon"
                v-model="form.tambon"
                type="text"
                label="Sub-district"
                disabled
            />
            <FormFieldLR
                id="fPostcode"
                v-model="form.postcode"
                type="text"
                label="Postcode*"
                disabled
            />

            <h2>Add message</h2>
            <TextFieldLR
              id="fMessage"
              v-model="form.validationNoteMessage"
              type="text"
              label="Your message"
              :fieldErrors="fieldErrors.validationNoteMessage"
            />
            <div class="row">
              <div class="col-sm-3 text-right">
                <input class="form-check-input" type="checkbox" value="" id="fValidated" v-model="form.validationNoteValidated">
              </div>
              <div class="col-sm-6">
                <label class="form-check-label" for="fValidated">
                  The information submitted by the user are corrected
                </label>
              </div>
              <div class="col-sm-6"></div>
            </div>
          </DataFormValidation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataFormValidation from "../components/DataFormValidation";
import FormFieldLR from "../components/FormFieldLR";
import TextFieldLR from "../components/TextFieldLR";
import sessionstorage from "sessionstorage";

export default {
  name: "BOValidateRegistration",
  components: {TextFieldLR, BackofficeAsideMenu, DataFormValidation, FormFieldLR},
  // WE ARE HERE
  data(){
    return {
      form: {
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
        username: "",

        // Validation
        validationNoteMessage: "",
        validationNoteValidated: false
      },
      fieldErrors: {
        validationNoteMessage: "",
        validationNoteValidated: "",
        form: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "Registration table has been updated")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "validate-registration-list.html"
    },
    _cancel(){
      window.location.href = "validate-registration-list.html"
    }
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.css';
</style>
