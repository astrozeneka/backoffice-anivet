<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
            title="Update payment receipt"
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            slug="paymentReceipt"
            url-like-slug="payment-receipt"
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
                id="fMethod"
                v-model="form.method"
                :field-errors="fieldErrors.method"
                type="text"
                placeholder=""
                label="Payment method"
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
import DataForm2 from "../components/DataForm2";
import FileFieldLR2 from "../components/FileFieldLR2";
import FormFieldLR from "../components/FormFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import LinkLR from "../components/LinkLR";
import sessionstorage from "sessionstorage";
export default {
  name: "BOPaymentReceiptEdit",
  components: {FileFieldLR2, FormFieldLR, BackofficeAsideMenu, DataForm2, LinkLR},
  data(){
    return {
      id: null,
      form: {
        reference: "",
        method: "",
        file: {
          type: "",
          name: "",
          content: ""
        }
      },
      fieldErrors: {
        reference: "",
        method: "",
        file: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A receipt has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "payment-receipt-list.html"
    },
    _cancel(){
      window.location.href = "payment-receipt-list.html"
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

