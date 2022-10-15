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
            slug="testOrder"
          >
            <h2>Test Order informations</h2>
            <FormFieldLR
                id="fSampleCount"
                v-model="form.sampleCount"
                type="text"
                placeholder=""
                label="Test Sample ID"
                disabled
            />

            <h2>Samples informations</h2>
            <table class="table">
              <thead>
              <th scope="col">Id</th>
              <th scope="col">Animal</th>
              <th scope="col">Type</th>
              <th scope="col">Pet Id</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              </thead>
              <tbody>
              <tr v-for="testSample in testSamples">
                <td>{{ testSample.id }}</td>
                <td>{{ testSample.animal }}</td>
                <td>{{ testSample.type }}</td>
                <td>{{ testSample.petId }}</td>
                <td>{{ testSample.baseMember.email }}</td>
                <td>
                <span v-if="testSample.validationNote">
                  <span v-if="testSample.validationNote.validated" class="badge badge-pill badge-success">validated</span>
                  <span v-else class="badge badge-pill badge-warning">pending</span>
                </span>
                </td>
              </tr>
              </tbody>
            </table>

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
import beta_ajaxGet from "../utils/beta_ajaxGet";

export default {
  name: "BoValidateTestOrder",
  components: {TextFieldLR, BackofficeAsideMenu, DataFormValidation, FormFieldLR},
  data(){
    return {
      form: {
        sampleCount: 0,
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
      },
      testSamples: []
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "Test order table has been updated")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "validate-test-order-list.html"
    },
    _cancel(){
      window.location.href = "validate-test-sample-list.html"
    }
  },
  async created(){
    let id = (new URL(window.location.href)).searchParams.get("id");
    this.testSamples = await beta_ajaxGet(`/api/v1/validation/testSample/byTestOrderId/${id}`) // LOad samples from here
    console.log(this.samples)
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.css';
a{
  text-decoration: none!important;
}
</style>
