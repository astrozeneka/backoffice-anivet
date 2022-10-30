<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <RegistrationAsideMenu></RegistrationAsideMenu>
        </div>
        <div class="col-md-9">
          <div>
            <h3>
              Are you sure to delete {{messageData.count}} test sample{{messageData.count>1?'s':''}} from your order ?
            </h3>
            <p>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
            <div class="text-right pt-5">
              <button class="btn text-primary btn-sm" @click="cancel">Cancel</button>
              <RequestingButton2 className="btn-primary btn-sm" :requesting="requesting" @click="confirm">Confirm</RequestingButton2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestingButton2 from "../components/RequestingButton2";
import RegistrationAsideMenu from "../components/RegistrationAsideMenu";
import beta_ajaxDelete from "../utils/beta_ajaxDelete";
import sessionstorage from "sessionstorage";

export default {
  name: "RegistrationTestSampleDelete",
  components: {RegistrationAsideMenu, RequestingButton2},
  data(){
    return {
      messageData: {
        count: 0,
        tableName: "", // UNUSED
      },
      requesting: false,
    }
  },
  methods: {
    cancel(){
      window.location.href = `/registration-test-sample-list.html`
    },
    async confirm(){
      let idListSeparated = (new URL(window.location.href)).searchParams.get("idList").split(",")
      let o = await beta_ajaxDelete(`/public/registration/test-sample/${idListSeparated.join(',')}`)
      if(o.affectedRows == idListSeparated.length){
        sessionstorage.setItem("message", `${this.messageData.count} samples has been deleted`)
        sessionstorage.setItem("message-class", "success")
        window.location.href = `registration-test-sample-list.html`
      }else{
        sessionstorage.setItem("message", "An error occurs when deleting from table")
        sessionstorage.setItem("message-class", "warning")
        window.location.href = `registration-test-sample-list.html`
      }
    }
  },
  created(){
    let list = (new URL(window.location.href)).searchParams.get("idList").split(",")
    this.messageData.count = list.length
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
