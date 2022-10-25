<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">

          <ConfirmDeletion
            tableName="Documents"
            slug="sciDoc"
            url-like-slug="sci-doc"
          >
            <template v-slot:default="messageData">
              <h3>
                Are you sure to delete {{messageData.count}} row{{messageData.count>1?'s':''}} from the table {{messageData.tableName.toLowerCase()}} ?
              </h3>
              <p>
                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
              </p>
            </template>
          </ConfirmDeletion>

          <!--
          <header>
            <h1>Confirm deletion</h1>
          </header>
          <div>
            <h3>
              Are you sure to delete {{count}} row{{count>1?'s':''}} from the table {{tableName}} ?
            </h3>
            <p>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
            </p>
          </div>
          -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import RequestingButton2 from "../components/RequestingButton2";
import Breadcrumb from "../components/Breadcrumb";
import ConfirmDeletion from "../components/ConfirmDeletion";

export default {
  name: "BOSciDocDelete",
  components: {ConfirmDeletion, BackofficeAsideMenu, RequestingButton2},
  data(){
    return {
      tableName: "Document",
      slug: "sciDoc",
      urlLikeSlug: "sci-doc",
      breadcrumbLabels: {
        'Home': '/dashboard.js',
        'Data': '#'
      },

      requesting: false,
      count: 0
    }
  },
  methods: {
    cancel(){
      window.location.href = `${this.urlLikeSlug}-list.html`
    },
    async confirm(){

    }
  },
  created(){
    this.breadcrumbLabels = {
      'Home': '/dashboard.js',
      'Data': '#',
      'Documents': '/sci-doc-list',
      'Delete': '#'
    }
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
