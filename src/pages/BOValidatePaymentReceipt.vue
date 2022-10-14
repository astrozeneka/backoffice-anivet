<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <header>
            <h1>Check and confirm user registration</h1>
          </header>

          <DataFormValidation
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            slug="paymentReceipt"
          >
            <h2>File information</h2>
            <FormFieldLR
                id="fReference"
                v-model="form.reference"
                type="text"
                placeholder=""
                label="Reference"
                disabled
            />
            <FormFieldLR
                id="fMethod"
                v-model="form.method"
                type="text"
                placeholder=""
                label="Payment method"
                disabled
            />
            <FormFieldLR
                id="fTestOrderId"
                v-model="form.testOrderId"
                type="text"
                placeholder=""
                label="Test Order ID"
                disabled
            />

            <h2>Check file</h2>
            <div class="row">
              <div class="col-sm-3 text-right">
                <label for="fFile">Uploaded file</label>
              </div>
              <div class="col-sm-6">
                <p id="fFile">
                  <a href="#" class="btn-link"><i class="fa fa-arrow-down"></i> Download</a>
                </p>
              </div>
              <div class="col-sm-6"></div>
            </div>

            <h2>About the customer</h2>
            <FormFieldLR
                v-if="form.baseMember"
                id="fEmail"
                v-model="form.baseMember.email"
                type="text"
                placeholder=""
                label="Customer email"
                disabled
            />

            <h2>Add message</h2>
            <TextFieldLR
                id="fEmail"
                v-model="form.validationNote.message"
                type="text"
                placeholder=""
                label="Your message"
                :fieldErrors="fieldErrors.message"
            />
            <div class="row">
              <div class="col-sm-3 text-right">
                <input class="form-check-input" type="checkbox" value="" id="fValidated" v-model="form.validationNote.validated">
              </div>
              <div class="col-sm-6">
                <label class="form-check-label" for="fValidated">
                  The information submitted by the user are corrected
                </label>
              </div>
              <div class="col-sm-6"></div>
            </div>
          </DataFormValidation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextFieldLR from "../components/TextFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataFormValidation from "../components/DataFormValidation";
import FormFieldLR from "../components/FormFieldLR";
import sessionstorage from "sessionstorage";

export default {
  name: "BOValidatePaymentReceipt",
  components: {TextFieldLR, BackofficeAsideMenu, DataFormValidation, FormFieldLR},
  data: function () {
    return {
      form: {
        reference: "",
        method: "",
        testOrderId: "sdf",
        baseMember: {
          email: "",
        },
        validationNote: {
          validated: false,
          message: ""
        }
      },
      fieldErrors: { // No need to be the same as form
        validated: false,
        message: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "Registration table has been updated")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "validate-payment-receipt-list.html"
    },
    _cancel(){
      window.location.href = "validate-payment-receipt-list.html"
    }
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.css';
a{
  text-decoration: none!important;
}
</style>
