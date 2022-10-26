<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
            title="Update sample parcel"
            tableName="Sample parcel"
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            slug="sampleParcel"
            url-like-slug="sample-parcel"
            action="edit"
          >
            <h2>Update informations about your parcel</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>

            <FormFieldLR
                id="fReference"
                v-model="form.reference"
                :field-errors="fieldErrors.reference"
                type="text"
                placeholder=""
                label="Reference"
            />
            <FormFieldLR
                id="fDeliveryService"
                v-model="form.deliveryService"
                :field-errors="fieldErrors.deliveryService"
                type="text"
                placeholder="Kerry, DHL"
                label="Delivery Service"
            />

            <h2>Test sample</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>

            <!--
              READONLY DATA CAN BE ADDED HERE
            -->

            <div class="row">
              <div class="col-sm-3 text-right mt-1">
                <label for="fSampleId">Select sample</label>
              </div>
              <div class="col-sm-6">
                <select id="fSampleId" v-model="form.testSampleId" class="form-select">
                  <option selected value="">-- Selection sample below --</option>
                  <option v-for="sample in samples" :value="sample.id">
                    Sample #{{sample.id}} – {{sample.type}} — {{sample.animal}}
                  </option>
                </select>
              </div>
              <div class="col-sm-3"></div>
            </div>


            <h2>Update related file</h2>
            <p>Suspendisse potenti 5NT</p>
            <LinkLR :entity="form" slug="sampleParcel"/>
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
import FormFieldLR from "../components/FormFieldLR";
import FileFieldLR2 from "../components/FileFieldLR2";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataForm2 from "../components/DataForm2";
import LinkLR from "../components/LinkLR";
import sessionstorage from "sessionstorage";
import beta_ajaxGet from "../utils/beta_ajaxGet";

export default {
  name: "BOSampleParcelEdit",
  components: {FormFieldLR, FileFieldLR2, BackofficeAsideMenu, DataForm2, LinkLR},
  data(){
    return {
      id: null,
      samples: [],
      form: {
        reference: "",
        deliveryService: "",
        testSampleId: "",
        file: {
          type: "",
          name: "",
          content: ""
        }
      },
      fieldErrors: {
        reference: "",
        deliveryService: "",
        testSampleId: "",
        file: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A parcel has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "sample-parcel-list.html"
    },
    _cancel(){
      window.location.href = "sample-parcel-list.html"
    }
  },
  async created(){
    this.form.id = (new URL(window.location.href)).searchParams.get("id");
    this.samples = await beta_ajaxGet(`/api/v1/testSample/`)
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>

