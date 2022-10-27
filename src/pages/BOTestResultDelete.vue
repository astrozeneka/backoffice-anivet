<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <ConfirmDeletion
              :tableName="tableName"
              :slug="slug"
              :url-like-slug="urlLikeSlug"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmDeletion from "../components/ConfirmDeletion";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import RequestingButton2 from "../components/RequestingButton2";

export default {
  name: "BOTestResultDelete",
  components: {ConfirmDeletion, BackofficeAsideMenu, RequestingButton2},
  data(){
    return {
      tableName: "Test Result",
      slug: "testResult",
      urlLikeSlug: "test-result",
      requesting: false,
      count: 0
    }
  },
  methods: {
    cancel(){
      window.location.href = `${this.urlLikeSlug}-list.html`
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
