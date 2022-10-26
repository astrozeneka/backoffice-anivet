<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
            title="Add payment receipt"
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            slug="paymentReceipt"
            url-like-slug="payment-receipt"
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
              id="fMethod"
              v-model="form.method"
              :field-errors="fieldErrors.method"
              type="text"
              placeholder=""
              label="Payment method"
            />

            <h2>Upload the file</h2>
            <p>Suspendisse potenti 5NT</p>
            <FileFieldLR2
                id="fFile"
                :field-errors="fieldErrors.content"
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
import DataForm2 from "../components/DataForm2";
import FormFieldLR from "../components/FormFieldLR";
import FileFieldLR from "../components/FileFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import sessionstorage from "sessionstorage";
export default {
  name: "BOPaymentReceiptAdd",
  components: {FileFieldLR, FormFieldLR, BackofficeAsideMenu, DataForm2},
  data(){
    return {
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
        content: "" // From the file
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A document has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "payment-receipt-list.html"
    },
    _cancel(){
      window.location.href = "payment-receipt-list.html"
    }
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>

