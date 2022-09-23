<template>
  <div>
    <TopmenuBackoffice></TopmenuBackoffice>
    <div class="main container">
      <div class="row">
        <div class="col-md-3">
          <BackofficeMenu></BackofficeMenu>
        </div>
        <div class="col-md-9 page-content">

          <h1>Sample Details</h1>

          <!--
            STEPPER
          -->
          <div class="bs-stepper">
            <div class="bs-stepper-header" role="tablist">
              <!-- your steps here -->

              <slot v-for="(step, index) in steps">

                <div v-if="index>1" class="line"></div>

                <div v-if="index>0" class="step" data-target="null">
                  <button type="button" class="step-trigger" role="tab" aria-controls="ss" id="qq">
                    <span :class="'bs-stepper-circle ' + ((parseInt(form.progress)>=index)?'bg-success':'bg-light')">{{ step.step }}</span>
                    <span class="bs-stepper-label">{{ step.label }}</span>
                  </button>
                </div>
              </slot>
            </div>
          </div>


          <!--
            TRACKING STATUS
          -->
          <div>
            <label for="fType">Update the work progress</label>
            <select class="form-select" id="fType" name="type" v-model="tmpProgress" @change="tmpProgressChanged">
              <option v-for="step in steps" :value="step.step">
                {{ step.label }}
              </option>
            </select>
            <button v-if="progressUpdateButtonDisabled" class="btn btn-secondary" disabled>Update</button>
            <button v-else class="btn btn-warning" @click.prevent="updateProgress">Update</button>
          </div>

          <!--
            UPDATE FORM
          -->
          <div>
            <h2>Update informations</h2>
            <form>
              <FormField2
                  :id="'fSampleId'"
                  v-model="form.id"
                  type="text"
                  placeholder="Sample Id"
                  label="Sample ID"
                  :field-errors="fieldErrors.id"
              />

              <FormField2
                  :id="'fAnimal'"
                  v-model="form.animal"
                  type="text"
                  placeholder="Animal"
                  label="Animal"
                  :field-errors="fieldErrors.animal"
              />

              <FormField2
                  :id="'fType'"
                  v-model="form.type"
                  type="text"
                  placeholder="Type"
                  label="Type"
                  :field-errors="fieldErrors.type"
              />

              <FormField2
                  :id="'fPetId'"
                  v-model="form.petId"
                  type="text"
                  placeholder="Pet Id"
                  label="Pet Id"
                  :field-errors="fieldErrors.petId"
              />

              <FormField2
                  :id="'fPetSpecie'"
                  v-model="form.petSpecie"
                  type="text"
                  placeholder="Pet Specie"
                  label="Pet Specie"
                  :field-errors="fieldErrors.petSpecie"
              />

              <FormField2
                  :id="'fImage'"
                  v-model="form.image"
                  type="text"
                  placeholder="Image"
                  label="Image"
                  :field-errors="fieldErrors.image"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopmenuBackoffice from "../components/TopmenuBackoffice";
import BackofficeMenu from "../components/BackofficeMenu";
import sessionstorage from "sessionstorage";
import FormField2 from "../components/FormField2";
import FormErrors from "../components/FormErrors";
import * as $ from "jquery";
import vars from "../utils/vars";

export default {
  name: "BOSampleDetails",
  components: {TopmenuBackoffice, BackofficeMenu, FormField2, FormErrors},
  data(){
    return {
      progressUpdateButtonDisabled: true,
      tmpProgress: 0,
      form: {
        id: "",
        animal: "",
        type: "",
        petId: "",
        petSpecie: "",
        image: "",
        email: ""
      },
      fieldErrors: {
        id: "",
        animal: "",
        type: "",
        petId: "",
        petSpecie: "",
        image: "",
        email: ""
      },
      steps: []
    }
  },
  methods: {
    tmpProgressChanged(){
      this.progressUpdateButtonDisabled = false
    },
    updateProgress(){
      let token = sessionstorage.getItem("accessToken")
      let adminId = sessionstorage.getItem("userId")
      let sampleId = this.form.id;
      let url = vars.getAPIURL(`/api/v1/testSample/${sampleId}/progress`)
      $.ajax(url, {
        type: "PUT",
        data: JSON.stringify({
          progress: this.tmpProgress
        }),
        contentType: "application/json",
        beforeSend: (xhr)=>{
          xhr.setRequestHeader('Authorization', `Bearer ${token}`)
        },
        success: (res)=>{
          console.info(res)
          // Reload page
          window.location.reload()
        },
        error: (err)=>{
          console.err(error)
        }
      })

    }
  },
  created(){
    let token = sessionstorage.getItem("accessToken")
    let userId = sessionstorage.getItem("userId")
    if(token == null){
      window.location = "login.html"
    }
    let sampleId = (new URL(window.location.href)).searchParams.get("id");

    (async()=>{

      /************************
       * LOAD DATA FOR FORM
       ************************/
      await (()=>{return new Promise((resolve)=>{
        let url = vars.getAPIURL(`/api/v1/testSample/${sampleId}`)
        $.ajax(url, {
          type: "GET",
          beforeSend: (xhr)=>{
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
          },
          success: (res)=>{
            console.info(res)
            res.petId = "" + res.petId
            res.id = "" + res.id
            res.image = "" + res.image
            this.form = res;
            this.tmpProgress = this.form.progress
            resolve();
          },
          error: (err)=>{

          }
        })
      })})();

      /************************
       * LOAD DATA FOR STEPPER
       ************************/
      await (()=>{return new Promise((resolve)=>{
        let url = vars.getAPIURL(`/api/v1/sampleStatus/${this.form.trackingTypeId}`)
        $.ajax(url, {
          type: "GET",
          beforeSend: (xhr)=>{
            xhr.setRequestHeader('Authorization', `Bearer ${token}`)
          },
          success: (res)=>{
            console.info(res)
            // By convention, the step0 is not considered
            this.steps = res
            resolve();
          },
          error: (err)=>{
            console.error(err)
          }
        })
      })})();

    })();
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
<style scoped>
@import "~bs-stepper/dist/css/bs-stepper.css";
.bs-stepper-label{
  text-transform: capitalize;
}
</style>

