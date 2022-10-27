<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
            title="Add test result"
            tableName="Test Result"
            slug="testResult"
            url-like-slug="test-result"
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            action="add"
          >
            <h2>Add informations about the document</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>

            <FormFieldLR
                id="fReference"
                v-model="form.sciDoc.reference"
                :field-errors="fieldErrors.reference"
                type="text"
                placeholder=""
                label="Document Reference"
            />

            <h2>Add additional information about the test result</h2>
            <div class="row">
              <div class="col-sm-3 text-right mt-1">
                <label for="fSampleId">Select test sample</label>
              </div>
              <div class="col-sm-6">
                <select id="fSampleId" v-model="form.sciDoc.testSampleId" class="form-select">
                  <option selected value="">-- Selection sample below --</option>
                  <option v-for="sample in samples" :value="sample.id">
                    Sample #{{sample.id}} – {{sample.type}} — {{sample.animal}}
                  </option>
                </select>
              </div>
              <div class="col-sm-3"></div>
            </div>

            <TextFieldLR
                id="fNotes"
                v-model="form.notes"
                placeholder=""
                label="Add notes"
                :fieldErrors="fieldErrors.notes"
            />

            <h2>Upload the file</h2>
            <!--
              A little bit different syntax
            -->
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
import DataForm2 from "../components/DataForm2";
import FormFieldLR from "../components/FormFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import TextFieldLR from "../components/TextFieldLR";
import sessionstorage from "sessionstorage";
import beta_ajaxGet from "../utils/beta_ajaxGet";
import FileFieldLR2 from "../components/FileFieldLR2";
import FileFieldLR3 from "../components/FileFieldLR3";
export default {
  name: "BOTestResultAdd",
  components: {FileFieldLR2, FormFieldLR, BackofficeAsideMenu, DataForm2, TextFieldLR},
  data(){
    return {
      samples: [],
      form: {
        notes: "",
        sciDoc: {
          testSampleId: "",
          reference: "",
          file: {}
        },
      },
      fieldErrors: {
        notes: "", // ไม่ใช่สำคัณ
        testSampleId: "",
        reference: "",
        file: "",
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A test result document has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "test-result-list.html"
    },
    _cancel(){
      window.location.href = "test-result-list.html"
    }
  },
  async created() {
    this.samples = await beta_ajaxGet(`/api/v1/testSample/`)
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>

