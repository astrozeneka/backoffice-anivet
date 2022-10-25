<template>
  <div>
    <div v-if="message" :class="'message bg-' + messageClass">
      <i class="fa-solid fa-circle-info"></i>
      <div class="content">{{ message }}</div>
    </div>
    <header>
      <Breadcrumb :labels="breadcrumbLabels"></Breadcrumb>
    </header>
    <main>
      <div class="row">
        <div class="col-md-8 head">
          <h1>{{ title }}</h1>
          <p>{{ description }} </p>
        </div>
        <div class="col-md-4">
          <a class='btn btn-light btn-sm btn-block' href="#" @click="refresh()">Refresh</a>
          <a :class="'btn btn-light btn-sm btn-block ' + (selectedLength==0?'disabled':'')" href="#"
             @click="deleteClicked"
          >Delete {{selectedLength}} row{{selectedLength>1?'s':''}}</a>
          <a class='btn btn-primary btn-sm btn-block' :href="`${urlLikeSlug}-add.html`">Add</a>
        </div>
      </div>


      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" v-model="searchQuery" class="form-control form-control-sm" placeholder="Search breeder by name, email or another keywords">
        <button class="btn btn-primary btn-sm" @click="search()">Search</button>
      </div>


      <div class="data">
        <nav aria-label="Page navigation example" v-if="havePagination">
          <ul class="pagination justify-content-end">
            <li class="page-item">
              <a v-if="paginationActivePage==0" class="page-link disabled" href="#" tabindex="-1" aria-disabled="true">&lt;</a>
              <a v-else class="page-link" href="#" tabindex="-1" @click="paginationGoTo(paginationActivePage-1)">&lt;</a>
            </li>

            <slot name="pagination" v-for="(n,i) in paginationTotal">
              <li v-if="i==paginationActivePage" class="page-link disabled">{{n}}</li>
              <li v-else class="page-link" href="#" @click="paginationGoTo(i)">{{n}}</li>
            </slot>

            <li class="page-item">
              <a v-if="paginationActivePage+1==paginationTotal" class="page-link disabled" href="#" tabindex="-1" aria-disabled="true">&gt;</a>
              <a v-else class="page-link" href="#" tabindex="-1" @click="paginationGoTo(paginationActivePage+1)">&gt;</a>
            </li>
          </ul>
        </nav>
        <table class="table">
          <thead>
          <th scope="col"><input type="checkbox" v-model="allChecked" disabled/></th>
          <slot name="head"></slot>
          </thead>
          <tbody>
          <tr v-for="entity in entityList">
            <td><input type="checkbox" v-model="selectedArray[entity.id]"></td>
            <slot v-bind="entity"></slot>
          </tr>
          </tbody>
        </table>

      </div>
    </main>
  </div>
</template>

<script>
import Breadcrumb from "./Breadcrumb";
import DataPagination from "./DataPagination";
import beta_ajaxGet from "../utils/beta_ajaxGet";
import beta_ajaxPost from "../utils/beta_ajaxPost";
export default {
  name: "DataList3",
  components: {DataPagination, Breadcrumb},
  props: ['title', 'description', 'slug', 'url-like-slug'],
  data(){
    return {
      message: null,
      messageClass: null,
      entityList: [],
      selectedArray: [],
      totalCount: 0,

      havePagination: true,
      paginationActivePage: 0,
      paginationTotal: undefined,
      viewOffset: 0, // Used by pagination component
      viewLimit: 10, // Used by pagination component

      breadcrumbLabels: {
        'Home': '/dashboard.js',
        'Data': '#'
      },

      searchQuery: "",
    }
  },
  computed: {
    selectedLength(){
      let arr = []
      for (const [index, element] of this.selectedArray.entries())
        if(element) arr.push(index)
      return arr.length
    },
    allChecked: {
      get() {
        return false
      },
      set(v) {

        /*
        let checkboxes = document.querySelectorAll('tbody input[type=checkbox]')
        checkboxes.forEach(checkbox=>{
          checkbox.checked = true
        })
        */

        /*
        console.log(JSON.stringify(this.selectedArray))
        for (const [index, element] of this.selectedArray.entries()){
          console.log(element)
        }
        this.selectedArray[4] = true
        console.log(JSON.stringify(this.selectedArray))
         */
      }
    }
  },
  methods: {
    deleteClicked(){
      let arr = []
      for (const [index, element] of this.selectedArray.entries())
        if(element) arr.push(index)
      let url = `${this.urlLikeSlug}-delete.html?idList=${arr.join(',')}`
      if(arr.length > 0)
        window.location.href = url
    },
    async refresh(){
      this.entityList = []
      this.entityList = await beta_ajaxGet(`/api/v1/data/${this.slug}?offset=${this.viewOffset}&limit=${this.viewLimit}`)
      console.log("__")
      let a = await beta_ajaxGet(`/api/v1/data/${this.slug}/props`)
      this.totalCount = a.totalCount
      this.havePagination = true
    },
    paginationGoTo(n){
      this.viewOffset = n*10
      this.paginationActivePage = n
      this.refresh()
    },
    async search(){
      this.entityList = []
      this.entityList = await beta_ajaxPost(`/api/v1/data/${this.slug}/search?offset=${this.viewOffset}&limit=${this.viewLimit}&q=${this.searchQuery}`)
      this.havePagination = false
    }
  },
  async created() {
    this.breadcrumbLabels[this.title] = '#' // After creation update

    // From now, message is managed by MessageBox component

    // data props
    let a = await beta_ajaxGet(`/api/v1/data/${this.slug}/props`)
    this.totalCount = a.totalCount
    // Important : manage pagination

    // data
    this.paginationTotal = parseInt(this.totalCount /10) +1
    this.entityList = await beta_ajaxGet(`/api/v1/data/${this.slug}?offset=${this.viewOffset}&limit=${this.viewLimit}`)
  }
}
</script>

<style scoped lang="scss">
.head{
  h1{
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 5px;
    .count{
      color: #aaadad;
    }
  }
  p{
    font-size: 14px;
    color: #808080;
    margin-top: 0px;
    margin-bottom: 0px;
  }
}

.search{
  margin-top: 2em;
  margin-bottom: 2em;
  position: relative;
  box-shadow: 0 0 10px rgba(51, 51, 51, .1);
  & input{
    text-indent: 30px;
  }
  & .fa-search{
    position: absolute;
    top: 7px;
    left: 16px;
  }
  & button{
    position: absolute;
    top: 0px;
    right: 0px;
    border-bottom-left-radius: 0px!important;
    border-top-left-radius: 0px!important;
  }
}

table a, table button{
  text-decoration: none!important;
  &:hover{
    text-decoration: underline!important;
  }
  white-space: nowrap!important;
}


nav{
  margin-top: 2em;
  li.page-link{
    cursor: pointer!important;
  }
  li.page-link.disabled{
    cursor: inherit!important;
  }
}



</style>
