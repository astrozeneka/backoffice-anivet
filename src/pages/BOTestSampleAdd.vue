<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
            title="Add test sample"
            tableName="Test Sample"
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            slug="testSample"
            url-like-slug="test-sample"
            action="add"
          >

            <h2>Add informations about your sample</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>
            <FormFieldLR
                id="fType"
                v-model="form.type"
                :field-errors="fieldErrors.type"
                type="text"
                placeholder=""
                label="Sample type"
            />

            <h2>Add information about the animal</h2>
            <p>Aenean lacinia et magna et sollicitudin.</p>
            <FormFieldLR
                id="fAnimal"
                v-model="form.animal"
                :field-errors="fieldErrors.animal"
                type="text"
                placeholder=""
                label="Animal"
            />
            <FormFieldLR
                id="fPetSpecie"
                v-model="form.petSpecie"
                :field-errors="fieldErrors.petSpecie"
                type="text"
                placeholder=""
                label="Pet Specie"
            />
            <FormFieldLR
                id="fPetId"
                v-model="form.petId"
                :field-errors="fieldErrors.petId"
                type="text"
                placeholder="Leave blank if not available"
                label="Pet ID"
            />
`
            <h2>Upload sample image</h2>
            <p>Suspendisse potenti 5NT</p>
            <FileFieldLR2
                id="fImage"
                :field-errors="fieldErrors.image"
                type="file"
                placeholder=""
                label="Upload file"
            />

          </DataForm2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataForm2 from "../components/DataForm2";
import sessionstorage from "sessionstorage";
import FileFieldLR2 from "../components/FileFieldLR2";
import FormFieldLR from "../components/FormFieldLR";

export default {
  name: "BOTestSampleAdd",
  components: {FormFieldLR, FileFieldLR2, BackofficeAsideMenu, DataForm2},
  data(){
    return {
      form: {
        type: "",
        animal: "",
        petSpecie: "",
        petId: "",
        image: {
          type: "",
          name: "",
          content: ""
        }
      },
      fieldErrors: {
        type: "",
        animal: "",
        petSpecie: "",
        image: "" // From the file
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A sample has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "test-sample-list.html"
    },
    _cancel(){
      window.location.href = "test-sample-list.html"
    }
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>

