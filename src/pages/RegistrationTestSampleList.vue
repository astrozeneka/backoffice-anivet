<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <RegistrationAsideMenu></RegistrationAsideMenu>
        </div>
        <div class="col-md-9">
          <MessageBox></MessageBox>
          <DataList5
              title="Test sample"
              description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
              slug="testSample"
              url-like-slug="test-sample"
              resource-url="/public/registration/test-sample"
              :selected-array="selectedArray"
              :have-headers="false"
              :p-have-pagination="false"
              :have-search-bar="false"
              :have-breadcrumbs="false"
              :add-link="`/registration-test-sample-add.html`"
          >
            <template v-slot:head>
              <th scope="col">Id</th>
              <th scope="col">Type</th>
              <th scope="col">Animal</th>
              <th scope="col">Specie</th>
            </template>
            <template v-slot:default="entity">
              <td>
                <a :href="`registration-test-sample-edit.html?id=${entity.id}`">
                  Sample #{{entity.id}}
                </a>
              </td>
              <td>{{entity.type}}</td>
              <td>{{entity.animal}}</td>
              <td>{{entity.petSpecie}}</td>
            </template>
          </DataList5>

          <div class="text-right">

            <a :class="'btn btn-light btn-sm ' + (selectedLength==0?'disabled':'')" @click="deleteClicked">
              <i class="fa-solid fa-trash"></i>
              Delete {{selectedLength}} row{{selectedLength>1?'s':''}}
            </a>

            <a class="btn btn-light" :href="`/registration-test-sample-add.html`">
              <i class="fa-solid fa-plus"></i>
              Add sample
            </a>

            <RequestingButton2 @click.prevent="proceed" className="btn-primary btn-sm">
              Confirm order
            </RequestingButton2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationAsideMenu from "../components/RegistrationAsideMenu";
import DataList5 from "../components/DataList5";
import downloadAttachedFile from "../utils/downloadAttachedFile";
import RequestingButton2 from "../components/RequestingButton2";
import MessageBox from "../components/MessageBox";

export default {
  name: "RegistrationTestSampleList",
  components: {MessageBox, RequestingButton2, RegistrationAsideMenu, DataList5},
  data(){
    return {
      selectedArray: []
    }
  },
  computed: {
    selectedLength(){
      if(!this.selectedArray)
        return 0
      let arr = []
      for (const [index, element] of this.selectedArray.entries())
        if(element) arr.push(index)
      return arr.length
    },
  },
  methods: {
    proceed: async ()=>{
      window.location = "/registration-invoice.html"
    },
    deleteClicked(){
      let arr = []
      for (const [index, element] of this.selectedArray.entries())
        if(element) arr.push(index)
      let url = `registration-test-sample-delete.html?idList=${arr.join(',')}`
      if(arr.length > 0)
        window.location.href = url
    },
  }
}
</script>

<style>
@import '../scss/style.scss';
</style>
