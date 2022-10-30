<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <RegistrationAsideMenu></RegistrationAsideMenu>
        </div>
        <div class="col-md-9">
          <form
              action="/"
              method="get"
              target="_blank"
              novalidate
              @submit.prevent="formSubmit"
          >
            <h2>What type of test do you want to do</h2>
            <p>Aenean lacinia et magna et sollicitudin.</p>
            <div class="row">
              <div class="col-sm-3 text-right mt-1">
                <label for="fType">Sample type</label>
              </div>
              <div class="col-sm-6">
                <select id="fType" v-model="form.type" class="form-select">
                  <option selected value="">-- Selection option below --</option>
                  <option value="breeder">Blood</option>
                  <option value="owner">Saliva</option>
                  <option value="vet">Feather</option>
                </select>
              </div>
              <div class="col-sm-3"></div>
            </div>

            <h2>Add informations about your sample</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>
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

            <h2>Related file</h2>
            <!-- Image preview LR -->
            <ImageLR
                label="Your uploaded image"
                :data="form.image.content"
            ></ImageLR>
            <FileFieldLR2
                id="fImage"
                :field-errors="fieldErrors.image"
                type="file"
                placeholder=""
                label="Update file"
            />


            <div class="text-right pt-5">
              <RequestingButton2 className="btn-primary btn-sm" :requesting="requesting">
                <span>Edit</span>
              </RequestingButton2>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FormFieldLR from "../components/FormFieldLR";
import FileFieldLR2 from "../components/FileFieldLR2";
import RegistrationAsideMenu from "../components/RegistrationAsideMenu";
import RequestingButton2 from "../components/RequestingButton2";
import beta_ajaxPut from "../utils/beta_ajaxPut";
import beta_ajaxGet from "../utils/beta_ajaxGet";
import ImageLR from "../components/ImageLR";

export default {
  name: "RegistrationTestSampleEdit",
  components: {ImageLR, FormFieldLR, FileFieldLR2, RegistrationAsideMenu, RequestingButton2},
  data(){
    return {
      requesting: false,
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
    getBase64(file){
      return new Promise((resolve)=>{
        var reader = new FileReader();
        //reader.readAsBinaryString(file)
        reader.readAsDataURL(file);
        reader.onload = function () {
          let o = {
            name: file.name,
            type: file.type,
            content: reader.result
          }
          resolve(o);
        };
        reader.onerror = function (error) {
          console.error('Error: ', error);
        };
      })
    },
    formSubmit: async function(){
      this.requesting = true
      let fs = document.querySelector('input[type=file]')

      if (fs && fs.files && fs.files.length > 0) {
        console.log("With file input")
        let file = fs.files[0]
        this.form.file = await this.getBase64(file)
        this.form.image = this.form.file
        this.doFormSubmit(this.form)
      } else {
        console.log("No file input")
        this.doFormSubmit(this.form)
      }
    },
    async doFormSubmit(data){
      let d = await beta_ajaxPut(`/public/registration/test-sample/${this.form.id}`, data)
      this.requesting = false
      if(d.hasOwnProperty("errors")){
        for(const key in this.fieldErrors)
          this.fieldErrors[key] = d.errors[key]
      }else{
        this.next(d.entity)
      }
    },
    next(entity){
      if(entity)
        window.location.href = "/registration-test-sample-list.html"
    }
  },
  async created(){
    this.form.id = (new URL(window.location.href)).searchParams.get("id");
    this.form = await beta_ajaxGet(`/public/registration/test-sample/${this.form.id}`)
    console.log(this.form)
  }
}
</script>
<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.scss';
h3{
  font-size: 18px;
}
</style>
