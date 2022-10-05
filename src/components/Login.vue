<template>
  <div class="container">
    <div class="">
      <!-- Branding -->
      <h1 class="branding">
        <img
            src="/assets/logotype.png"
            class="img-fluid"
            style="max-height: 48px"
            alt="Anivet Pet:DNA"
        />
      </h1>
    </div>

    <div class="content row">
      <div class="col-sm-6">
        <h2>Login</h2>
        <form
            action="/"
            method="get"
            target="_blank"
            novalidate
            @submit.prevent="formSubmit"
        >

          <div>
            <div class="detailed-radio">
              <input type="radio" id="admin" name="fType" value="admin" checked>
              <label for="admin">Administrator</label>
              <label class="paragraph" for="admin">
                Fusce et enim ultrices, egestas massa et, porta enim. In consequat blandit ipsum quis feugiat.
              </label>
            </div>
            <div class="detailed-radio">
              <input type="radio" id="scientist" name="fType" value="scientist">
              <label for="scientist">Scientist</label>
              <label class="paragraph" for="scientist">
                Fusce suscipit lectus sed orci consectetur, vitae aliquam mi sollicitudin.
              </label>
            </div>
          </div>

          <FormField2
              id="fUsername"
              type="fText"
              v-model="form.username"
              placeholder="Username"
              label="Username"
              :field-errors="fieldErrors.username"
          />
          <FormField2
              id="fPassword"
              type="password"
              v-model="form.password"
              placeholder="PASSWORD"
              label="PASSWORD"
              :field-errors="fieldErrors.password"
          />
          <FormErrors
              :field-errors="fieldErrors.form"
          />

          <div class="pb-4 pt-2">
            <RequestingButton2 className="btn-primary btn-block" @click="formSubmit" :requesting="requesting">Login</RequestingButton2>
          </div>
        </form>

        <div>
          <p class="form-information">
            Suspendisse facilisis felis vel leo tristique consequat. Aliquam at justo odio. Etiam sagittis mauris non ipsum ornare, at hendrerit lorem accumsan. Nam ipsum quam, tincidunt dignissim ipsum sed, consequat maximus neque. Vestibulum tincidunt tristique imperdiet. Etiam lobortis tortor lorem, ut placerat <a href="#">erat mattis id</a>. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
      <div class="col-sm-6">
        <p>Promotional Image</p>
      </div>
    </div>
  </div>
</template>

<script>
import FormField2 from "./FormField2";
import FormErrors from "./FormErrors";
import RequestingButton2 from "./RequestingButton2";
import beta_ajaxPost from "../utils/beta_ajaxPost";
import sessionstorage from "sessionstorage";
import beta_ajaxGet from "../utils/beta_ajaxGet";
export default {
  name: "Login",
  components: {FormField2, FormErrors, RequestingButton2},
  data(){
    return {
      requesting: false,
      form: {
        type: "",
        username: "",
        password: ""
      },
      fieldErrors: {
        type: "",
        username: "",
        password: "",
        form: ""
      }
    }
  },
  methods: {
    formSubmit(){
      this.requesting = true
      this.doFormSubmit(this.form)
    },
    async doFormSubmit(data){
      let res = await beta_ajaxPost('/public/login', data)
      this.requesting = false
      if(res.hasOwnProperty('errors'))
        this.fieldErrors = res.errors
      else{
        sessionstorage.setItem('accessToken', res.accessToken)
        window.location.reload()
      }
    }
  },
  async beforeCreate() {
    // Check if user is already connected
    let res = await beta_ajaxGet('/api/v1/baseMember/active')
    if(res != null)
      window.location.href = "dashboard.html"
  }
}
</script>

<style lang="scss" scoped>
.branding{
  margin: 30px 0px 40px 0px;
}

h2{
  font-weight: 700;
  font-size: 1.7em;
  margin: .6em 0 1em 0;
}

.form-information{
  color: #464646FF;
  font-size: 12px;
}

.detailed-radio{
  margin-bottom: 1em;
  & input{
  }
  label{
    margin-bottom: 0;
  }
  p, .paragraph{
    font-weight: 400!important; // Override style from label
    font-size: 12px;
    margin: 0;
  }
}

</style>
