<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <header>
            <h1>Add Admin</h1>
          </header>
          <DataForm
              :form="form"
              :fieldErrors="fieldErrors"
              @next="_next"
              @cancel="_cancel"
              slug="admin"
              action="add"
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
  name: "BOAdminAdd",
  components: {
    DataForm,
    RequestingButton2, DataList, BackofficeTopMenu, BackofficeAsideMenu, TopmenuBackoffice, FormFieldLR},
  data(){
    return {
      form: {
        name1: "",
        name2: "",
        phone: "",
        email: "",
        username: "",
        password: "",
        passwordCheck: ""
      },
      fieldErrors: {
        name1: "",
        name2: "",
        phone: "",
        email: "",
        username: "",
        password: "",
        passwordCheck: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "An admin has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "admin-list.html"
    },
    _cancel(){
      window.location.href = "admin-list.html"
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

