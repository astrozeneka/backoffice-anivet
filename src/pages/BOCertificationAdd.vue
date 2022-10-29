<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
              title="Add certification"
              tableName="Certification"
              slug="certification"
              url-like-slug="certification"
              :form="form"
              :fieldErrors="fieldErrors"
              @next="_next"
              @cancel="_cancel"
              action="add"
          >
            <h2>Select Test Result to which this certification is attributed to</h2>
            <div class="row">
              <div class="col-sm-3 text-right mt-1">
                <label for="fTestResultId">Select test result document</label>
              </div>
              <div class="col-sm-6">
                <select id="fTestResultId" v-model="form.testResultId" class="form-select">
                  <option selected value="">-- Selection document below --</option>
                  <option v-for="testResult in testResults" :value="testResult.id">
                    {{ testResult.sciDoc.reference }} —
                    {{ testResult.sciDoc.testSample.animal}} —
                    {{ testResult.sciDoc.testSample.type}}
                  </option>
                  <!--
                  <option v-for="sample in samples" :value="sample.id">
                    Sample #{{sample.id}} – {{sample.type}} — {{sample.animal}}
                  </option>
                  -->
                </select>
              </div>
              <div class="col-sm-3"></div>
            </div>


            <h2>Add a message</h2>
            <p>The certification will be labelled with this message</p>
            <TextFieldLR
                id="fMessage"
                v-model="form.validationNote.message"
                placeholder=""
                label="Add message"
                :fieldErrors="fieldErrors.message"
            />
            <div class="row">
              <div class="col-sm-3 text-right mt-2">
                <label for="fValidated">Is the document validated</label>
              </div>
              <div class="col-sm-6">
                <input id="fValidated" v-model="form.validationNote.validated" type="checkbox" class="form-control-lg"/>
              </div>
              <div class="col-sm-3"></div>
            </div>


            <h2>Upload related file</h2>
            <p>Suspendisse potenti 5NT</p>
            <FileFieldLR2
                id="fFile"
                :field-errors="fieldErrors.file"
                type="file"
                placeholder=""
                label="Upload a new file"
            />

          </DataForm2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FileFieldLR2 from "../components/FileFieldLR2";
import FormFieldLR from "../components/FormFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataForm2 from "../components/DataForm2";
import TextFieldLR from "../components/TextFieldLR";
import sessionstorage from "sessionstorage";
import beta_ajaxGet from "../utils/beta_ajaxGet";

export default {
  name: "BOCertificationAdd",
  components: {FileFieldLR2, FormFieldLR, BackofficeAsideMenu, DataForm2, TextFieldLR},
  data(){
    return {
      testResults: [],
      form: {
        testResultId: "",
        validationNote: {
          message: "",
          validated: false,
        },
        file: {}
      },
      fieldErrors: {
        testResultId: "",
        message: "",
        file: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A certification document has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "certification-list.html"
    },
    _cancel(){
      window.location.href = "certification-list.html"
    }
  },
  async created(){
    this.testResults = await beta_ajaxGet(`/api/v1/data/testResult/`)
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>
