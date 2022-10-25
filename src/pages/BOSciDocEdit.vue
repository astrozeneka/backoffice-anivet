<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
              title="Update Document"
              :form="form"
              :fieldErrors="fieldErrors"
              @next="_next"
              @cancel="_cancel"
              slug="sciDoc"
              url-like-slug="sci-doc"
              action="edit"
          >
            <h2>Update informations about the document</h2>
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
                :field-errors="fieldErrors.reference"
                type="text"
                placeholder=""
                label="Document Type"
            />

            <h2>Related file</h2>
            <LinkLR :entity="form" slug="sciDoc"/>
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
import FormFieldLR from "../components/FormFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataForm2 from "../components/DataForm2";
import LinkLR from "../components/LinkLR";
import sessionstorage from "sessionstorage";
import FileFieldLR2 from "../components/FileFieldLR2";

export default {
  name: "BOSciDocEdit",
  components: {FileFieldLR2, FormFieldLR, BackofficeAsideMenu, DataForm2, LinkLR},
  data(){
    return{
      id: null,
      form: {
        reference: "",
        type: "",
        file: {
          type: "",
          name: "",
          content: ""
        }, // The old one
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
  },
  created(){
    this.form.id = (new URL(window.location.href)).searchParams.get("id");
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>
