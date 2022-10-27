<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
              title="Update test result"
              tableName="Test Result"
              slug="testResult"
              url-like-slug="test-result"
              :form="form"
              :fieldErrors="fieldErrors"
              @next="_next"
              @cancel="_cancel"
              action="edit"
          >

            <h2>Update informations about the document</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>
            <FormFieldLR
                id="fReference"
                v-model="form.sciDoc.reference"
                :field-errors="fieldErrors.reference"
                type="text"
                placeholder=""
                label="Document Reference"
            />

            <h2>Update additional information about the test result</h2>
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
            <h2>Related file</h2>
            <LinkLR :entity="form.sciDoc" slug="sciDoc"/> <!-- sciDoc ก็ได้เหมือนกัน -->
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
import FileFieldLR2 from "../components/FileFieldLR2";
import FormFieldLR from "../components/FormFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataForm2 from "../components/DataForm2";
import LinkLR from "../components/LinkLR";
import beta_ajaxGet from "../utils/beta_ajaxGet";
import sessionstorage from "sessionstorage";
import TextFieldLR from "../components/TextFieldLR";

export default {
  name: "BOTestResultEdit",
  components: {TextFieldLR, FileFieldLR2, FormFieldLR, BackofficeAsideMenu, DataForm2, LinkLR},
  data(){
    return {
      samples: [],
      id: null,
      form: {
        notes: "",
        testSampleId: "",
        sciDoc: {
          reference: "",
          file: {
            type: "",
            name: "",
            content: ""
          }
        }
      },
      fieldErrors: { // ไม่มี structure ไม่ใช่เท่ากับ form
        notes: "", // ไม่ใช่สำคัณ
        testSampleId: "",
        reference: "",
        file: ""
      },
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A test result has been updated successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "test-result-list.html"
    },
    _cancel(){
      window.location.href = "test-result-list.html"
    }
  },
  async created(){
    this.form.id = (new URL(window.location.href)).searchParams.get("id");
    this.samples = await beta_ajaxGet(`/api/v1/testSample/`)
    setTimeout(()=>{
      console.log(JSON.stringify(this.form.sciDoc))
    }, 1000)
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>

