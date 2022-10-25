<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <header>
            <h1>Check and confirm test sample</h1>
          </header>

          <DataFormValidation
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            slug="testSample"
          >

            <h2>Sample Information</h2>
            <FormFieldLR
                id="fId"
                v-model="form.id"
                type="text"
                placeholder=""
                label="Test Sample ID"
                disabled
            />
            <FormFieldLR
                id="fAnimal"
                v-model="form.animal"
                type="text"
                placeholder=""
                label="Animal"
                disabled
            />
            <FormFieldLR
                id="fType"
                v-model="form.type"
                type="text"
                placeholder=""
                label="Sample Type"
                disabled
            />
            <FormFieldLR
                id="fPetId"
                v-model="form.petId"
                type="text"
                placeholder=""
                label="Pet Id"
                disabled
            />
            <FormFieldLR
                id="fPetSpecie"
                v-model="form.petSpecie"
                type="text"
                placeholder=""
                label="Pet Specie"
                disabled
            />

            <h2>User information</h2>
            <FormFieldLR
                id="fName1"
                v-model="''+form.baseMember.name1"
                type="text"
                placeholder=""
                label="Firstname"
                disabled
            />
            <FormFieldLR
                id="fName2"
                v-model="''+form.baseMember.name2"
                type="text"
                placeholder=""
                label="Lastname"
                disabled
            />
            <FormFieldLR
                id="fEmail"
                v-model="''+form.baseMember.email"
                type="text"
                placeholder=""
                label="Email"
                disabled
            />
            <FormFieldLR
                id="fFirstname"
                v-model="''+form.baseMember.phone"
                type="text"
                placeholder=""
                label="Phone"
                disabled
            />

            <h2>Add message</h2>
            <TextFieldLR
                id="fEmail"
                v-model="form.validationNote.message"
                type="text"
                placeholder=""
                label="Your message"
                :fieldErrors="fieldErrors.message"
            />
            <div class="row">
              <div class="col-sm-3 text-right">
                <input class="form-check-input" type="checkbox" value="" id="fValidated" v-model="form.validationNote.validated">
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
import TextFieldLR from "../components/TextFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataFormValidation from "../components/DataFormValidation";
import FormFieldLR from "../components/FormFieldLR";
import sessionstorage from "sessionstorage";

export default {
  name: "BOValidateTestSample",
  components: {TextFieldLR, BackofficeAsideMenu, DataFormValidation, FormFieldLR},
  data: function(){
    return {
      form: {
        id: "",
        animal: "",
        type: "",
        petId: "",
        petSpecie: "",
        baseMember: {
          name1: "",
          name2: "",
          email: "",
          phone: ""
        },
        validationNote: {
          message: "",
          validated: false
        }
      },
      fieldErrors: { // No need to be the same as form
        validated: false,
        message: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "Test sample table has been updated")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "validate-test-sample-list.html"
    },
    _cancel(){
      window.location.href = "validate-test-sample-list.html"
    }
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.scss';
a{
  text-decoration: none!important;
}
</style>
