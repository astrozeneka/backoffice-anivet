<template>
  <div>
    <header>
      <Breadcrumb :labels="breadcrumbLabels"></Breadcrumb>
    </header>
    <header>
      <h1>{{title}}</h1>
    </header>

    <form
        action="/"
        method="get"
        target="_blank"
        novalidate
        @submit.prevent="formSubmit">

      <slot></slot>
      <div class="text-right pt-5">
        <button class="btn text-primary btn-sm" @click.prevent="to_cancel">Cancel</button>
        <RequestingButton2 className="btn-primary btn-sm" :requesting="requesting">
          <span v-if="action=='edit'">Update</span>
          <span v-else>Add</span>
        </RequestingButton2>
      </div>

    </form>
  </div>
</template>

<script>
import RequestingButton2 from "./RequestingButton2";
import beta_ajaxPost from "../utils/beta_ajaxPost";
import beta_ajaxPut from "../utils/beta_ajaxPut";
import beta_ajaxGet from "../utils/beta_ajaxGet";
import Breadcrumb from "./Breadcrumb";

export default {
  name: "DataForm2",
  props: {
    tableName: {type: String, default: ""},
    title: {type: String},
    slug: {type: String},
    "url-like-slug": {type: String},
    form: {type: Object},
    fieldErrors: {type: Object},
    next: {type: Function},
    cancel: {type: Function},
    beforeSubmit: {type: Function, default: ()=>true},
    action: {type: String} // add or edit,
  },
  components: {RequestingButton2, Breadcrumb},
  data(){
    return {
      requesting: false,
      breadcrumbLabels: {
        'Home': '/dash.js',
        'Data': '#'
      },
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
    formSubmit(){
      this.$emit('beforeSubmit')
      this.requesting = true
      let fs = document.querySelector('input[type=file]')
      console.log(fs)
      if(fs && fs.files && fs.files.length > 0) {
        ;(async () => { // Asynchronous script
          // Get base64 of uploaded file
          let file = fs.files[0]
          this.form.file = await this.getBase64(file)
          this.form.image = this.form.file // Should be resolved
          this.doFormSubmit(this.form)
          console.log("With file")
        })()
      }else{
        console.log("Without file")
        this.doFormSubmit(this.form)
      }
    },
    async doFormSubmit(data){
      let d = null
      if(this.action == "add"){
        d = await beta_ajaxPost(`/api/v1/data/${this.slug}`, data)
      }else if(this.action == "edit"){
        let id = (new URL(window.location.href)).searchParams.get("id");
        d = await beta_ajaxPut(`/api/v1/data/${this.slug}/${id}`, data)
        console.log(d)
      }
      this.requesting = false
      if(d.hasOwnProperty("errors")){
        for(const key in this.fieldErrors)
          this.fieldErrors[key] = d.errors[key]
      }else{
        this.$emit('next')
      }
    },
    to_cancel(){
      this.$emit('cancel')
    }
  },
  async created(){
    if(this.action == "edit"){
      let id = (new URL(window.location.href)).searchParams.get("id");
      let d = await beta_ajaxGet(`/api/v1/data/${this.slug}/${id}`)
      for (const key in this.form)
        this.form[key] = d[key]
    }


    this.breadcrumbLabels = {
      'Home': '/dashboard.js',
      'Data': '#',
    }
    this.breadcrumbLabels[this.tableName] = `/${this.urlLikeSlug}-list.html`
    let Action = this.action[0].toUpperCase() + this.action.substring(1)
    this.breadcrumbLabels[Action] = '#'
  }
}
</script>

