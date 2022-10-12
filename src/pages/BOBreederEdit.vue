<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <header>
            <h1>Update breeder</h1>
          </header>

          <DataForm
            :form="form"
            :field-errors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            slug="breeder"
            action="edit"
          >
            <h2>Add personal information</h2>
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

            <h2>Login credentials</h2>
            <p>Vivamus suscipit elit at lectus viverra, sed posuere libero laoreet. Maecenas porta laoreet orci, vel vestibulum lorem iaculis at.</p>

            <FormFieldLR
                id="fUsername"
                v-model="form.username"
                type="text"
                placeholder=""
                label="Username*"
                :field-errors="fieldErrors.username"
            />
            <FormFieldLR
                id="fPassword"
                v-model="form.password"
                type="password"
                placeholder=""
                label="Password"
                :field-errors="fieldErrors.password"
            />
            <FormFieldLR
                id="fPasswordCheck"
                v-model="form.passwordCheck"
                type="password"
                placeholder=""
                label="Confirm your password"
                :field-errors="fieldErrors.passwordCheck"
            />
          </DataForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataForm from "../components/DataForm";
import RequestingButton2 from "../components/RequestingButton2";
import DataList from "../components/DataList";
import BackofficeTopMenu from "../components/BackofficeTopMenu";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import FormFieldLR from "../components/FormFieldLR";
import sessionstorage from "sessionstorage";

export default {
  name: "BOBreederEdit",
  components: {DataForm,RequestingButton2, DataList, BackofficeTopMenu, BackofficeAsideMenu, TopmenuBackoffice, FormFieldLR},
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
        password: "",
        passwordCheck: ""
      },
      fieldErrors: {
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
        password: "",
        passwordCheck: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A breeder has been updated successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "breeder-list.html"
    },
    _cancel(){
      window.location.href = "breeder-list.html"
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
