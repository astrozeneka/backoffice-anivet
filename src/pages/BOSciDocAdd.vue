<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
              title="Add Document"
              :form="form"
              :fieldErrors="fieldErrors"
              @next="_next"
              @cancel="_cancel"
              slug="sciDoc"
              url-like-slug="sci-doc"
              action="add"
          >

            <h2>Add informations about the document</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>
            <FormFieldLR
              id="fReference"
              v-model="form.reference"
              :field-errors="fieldErrors.reference"
              type="text"
              placeholder=""
              label="Document Reference"
            />
            <FormFieldLR
              id="fType"
              v-model="form.type"
              :field-errors="fieldErrors.type"
              type="text"
              placeholder=""
              label="Document Type"
            />

            <h2>Upload the file</h2>
            <FileFieldLR
              id="fFile"
              :field-errors="fieldErrors.file"
              type="file"
              placeholder=""
              label="Upload a new file"
            />
            <!--
              ไม่มี v-model
            -->

          </DataForm2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataForm2 from "../components/DataForm2";
import FormFieldLR from "../components/FormFieldLR";
import FileFieldLR from "../components/FileFieldLR";
import sessionstorage from "sessionstorage";

export default {
  name: "BOSciDocAdd",
  components: {FileFieldLR, FormFieldLR, BackofficeAsideMenu, DataForm2},
  data(){
    return {
      form: {
        reference: "",
        type: "",
        file: {
          type: "",
          name: "",
          content: ""
        }
      },
      fieldErrors: {
        reference: "",
        type: "",
        file: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A document has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "sci-doc-list.html"
    },
    _cancel(){
      window.location.href = "sci-doc-list.html"
    }
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>
