<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <header>
            <h1>Add owner</h1>
          </header>

          <DataForm
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_next"
          >

            <h2>Add personnal information</h2>
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
                id="fName1"
                v-model="form.name2"
                type="text"
                placeholder=""
                label="Lastname*"
                :field-errors="fieldErrors.name2"
            />
            <FormFieldLR
                id="fName1"
                v-model="form.phone"
                type="text"
                placeholder=""
                label="Phone*"
                :field-errors="fieldErrors.phone"
            />
            <FormFieldLR
                id="fName1"
                v-model="form.email"
                type="text"
                placeholder=""
                label="Email*"
                :field-errors="fieldErrors.email"
            />
          </DataForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataList from "../components/DataList";
import BackofficeTopMenu from "../components/BackofficeTopMenu";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import FormFieldLR from "../components/FormFieldLR";
import RequestingButton2 from "../components/RequestingButton2";
import DataForm from "../components/DataForm";
import sessionstorage from "sessionstorage";
export default {
  name: "BOOwnerAdd",
  components: {
    DataForm,
    RequestingButton2, DataList, BackofficeTopMenu, BackofficeAsideMenu, TopmenuBackoffice, FormFieldLR},
  data(){
    return {
      form: {
        name1: "",
        name2: "",
        phone: "",
        email: ""
      },
      fieldErrors: {
        name1: "",
        name2: "",
        phone: "",
        email: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "An owner has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "owner-list.html"
    },
    _cancel(){
      window.location.href = "owner-list.html"
    }
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>

<style scoped lang="scss">
// TO BE USED IN THE ENTITY FORM TO BE DONE TODAY
header h1{
  padding-top: 1em;
  padding-bottom: 1.2em;
}
h2{
  font-size: 22px;
  font-weight: 400;
  border-bottom: 1px solid #aaadad;
  padding-bottom: .2em;
}
p{
  font-size: 14px;
}
.field-item{
  margin-top: 1em;
  margin-bottom: 1em;
}
</style>
