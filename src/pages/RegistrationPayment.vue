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

            <h2>Enter information about your payment process</h2>
            <p>Aenean lacinia et magna et sollicitudin.</p>


            <div class="row">
              <div class="col-sm-3 text-right mt-1">
                <label for="fMethod">Payment method</label>
              </div>
              <div class="col-sm-6">
                <select id="fMethod" v-model="form.method" class="form-select">
                  <option selected value="">-- Selection option below --</option>
                  <option value="breeder">Thai QR</option>
                  <option value="owner">Credit Card</option>
                  <option value="vet">Cash on delivery</option>
                </select>
              </div>
              <div class="col-sm-3"></div>
            </div>

            <FormFieldLR
                id="fAmount"
                v-model="amount"
                type="text"
                placeholder=""
                label="Amount (THB)"
                disabled
            />
            <FormFieldLR
                id="fReference"
                v-model="form.reference"
                :field-errors="fieldErrors.reference"
                type="text"
                placeholder=""
                label="Document reference"
            />


            <h2>Upload a screenshot or document scan</h2>
            <p>Suspendisse potenti 5NT</p>
            <FileFieldLR2
                id="fFile"
                :field-errors="fieldErrors.file"
                type="file"
                placeholder=""
                label="Upload file"
            />


            <div class="text-right pt-5">
              <RequestingButton2 className="btn-primary btn-sm" :requesting="requesting">
                <span>Add</span>
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
import beta_ajaxPost from "../utils/beta_ajaxPost";
import beta_ajaxGet from "../utils/beta_ajaxGet";

export default {
  name: "RegistrationPayment",
  components: {FormFieldLR, FileFieldLR2, RegistrationAsideMenu, RequestingButton2},
  data(){
    return {
      requesting: false,
      amount: 10,
      form: {
        method: "",
        reference: "",
        file: {
          type: "",
          name: "",
          content: ""
        }
      },
      fieldErrors: {
        method: "",
        reference: "",
        file: ""
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
      let d = await beta_ajaxPost(`/public/registration/payment-receipt`, data)
      this.requesting = false
      if(d.hasOwnProperty("errors")){
        for(const key in this.fieldErrors)
          this.fieldErrors[key] = d.errors[key]
      }else{
        this.next(d.entity)
      }
    },
    async next(entity){
      window.location.href = "/registration-links.html"
    }
  },
  async created(){
    this.testSampleList = await beta_ajaxGet(`/public/registration/test-sample`)
    this.amount = 0
    for(const testSample of this.testSampleList){
      this.amount += testSample.testType.price
    }
  }
}
</script>

<style>
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>
