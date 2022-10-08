<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">

          <header>
            <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Data</a></li>
                <li class="breadcrumb-item"><a href="#">Owner</a></li>
                <li class="breadcrumb-item active" aria-current="page">Delete</li>
              </ol>
            </nav>
          </header>
          <header>
            <h1>Confirm deletion</h1>
          </header>
          <div>
            <h3>
              Are you sure to delete {{count}} row{{count>1?'s':''}} from the table Owner ?
            </h3>
            <p>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </div>

          <div class="text-right pt-5">
            <button class="btn text-primary btn-sm" @click="cancel">Cancel</button>
            <RequestingButton2 className="btn-primary btn-sm" :requesting="requesting" @click="confirm">Confirm</RequestingButton2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import RequestingButton2 from "../components/RequestingButton2";
import beta_ajaxDelete from "../utils/beta_ajaxDelete";
import sessionstorage from "sessionstorage";

export default {
  name: "BOOwnerDelete",
  components: {BackofficeAsideMenu, RequestingButton2},
  data(){
    return {
      requesting: false,
      count: 0
    }
  },
  methods: {
    cancel(){
      window.location.href = `owner-list.html`
    },
    async confirm(){
      let idListSeparated = (new URL(window.location.href)).searchParams.get("idList").split(",")
      let o = await beta_ajaxDelete(`/api/v1/data/owner/${idListSeparated.join(',')}`)
      if(o.affectedRows == idListSeparated.length){
        sessionstorage.setItem("message", `${this.count} owner${this.count>1?'s':''} has been deleted successfully`)
        sessionstorage.setItem("message-class", "success")
        window.location.href = "owner-list.html"
      }else{
        sessionstorage.setItem("message", "An error occurs when deleting from table")
        sessionstorage.setItem("message-class", "warning")
        window.location.href = "owner-list.html"
      }
    }
  },
  created() {
    let list = (new URL(window.location.href)).searchParams.get("idList").split(",")
    this.count = list.length
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.css';
h3{
  font-size: 18px;
}
ol.breadcrumb{
  padding-top: 1.8em;
  padding-bottom: 1.6em;
  & a{
    text-decoration: none
  }
}
</style>

