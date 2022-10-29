<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
              title="Certification"
              tableName="Certification"
              slug="certification"
              url-like-slug="certification"
              :form="form"
              :fieldErrors="fieldErrors"
              @next="_next"
              @cancel="_cancel"
              @beforeSubmit="_beforeSubmit"
              action="edit"
          >

            <h2>Test Result details</h2>
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
            <!-- Can show details here -->

            <h2>Validation message</h2>
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

            <h2>Related file</h2>
            <LinkLR :entity="form.sciDoc" slug="sciDoc"/>
            <FileFieldLR2
                id="fFile"
                :field-errors="fieldErrors.file"
                type="file"
                placeholder=""
                label="Upload your file"
            />

          </DataForm2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataList5 from "../components/DataList5";
import DataList4b from "../components/DataList4b";
import FileFieldLR2 from "../components/FileFieldLR2";
import FormFieldLR from "../components/FormFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataForm2 from "../components/DataForm2";
import TextFieldLR from "../components/TextFieldLR";
import sessionstorage from "sessionstorage";
import beta_ajaxGet from "../utils/beta_ajaxGet";
import LinkLR from "../components/LinkLR";

export default {
  name: "BOCertificationEdit",
  components: {LinkLR, DataList5, DataList4b, FileFieldLR2, FormFieldLR, BackofficeAsideMenu, DataForm2, TextFieldLR},
  data(){
    return {
      testResults: [],
      form: {
        id: "",
        testResultId: "",
        validationNote: {
          message: "",
          validated: false
        },
        sciDoc: {
          file: ""
        }
      },
      fieldErrors: {}
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
    },
    _beforeSubmit(){

    },
  },
  async created(){
    this.testResults = await beta_ajaxGet(`/api/v1/data/testResult/`)
  },
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>
