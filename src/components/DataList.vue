<template>
  <div>
    <div v-if="message" :class="'message bg-' + messageClass">
      <i class="fa-solid fa-circle-info"></i>
      <div class="content">{{ message }}</div>
    </div>
    <header>
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Data</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
        </ol>
      </nav>
    </header>
    <main>
      <div class="row">
        <div class="col-md-8 head">
          <h1>{{ title }} <span class="count">({{ totalCount }})</span></h1>
          <p>{{ description }} </p>
        </div>
        <div class="col-md-4">
          <a class='btn btn-light btn-sm btn-block' href="#" @click="refresh()">Refresh</a>
          <a :class="'btn btn-light btn-sm btn-block ' + (selectedLength==0?'disabled':'')" href="#"
             @click="deleteClicked"
          >Delete {{selectedLength}} row{{selectedLength>1?'s':''}}</a>
          <a class='btn btn-primary btn-sm btn-block' :href="`${slug}-add.html`">Add</a>
        </div>
      </div>

      <div class="search">
        <i class="fa fa-search"></i>
        <input type="text" class="form-control form-control-sm" placeholder="Search breeder by name, email or another keywords">
        <button class="btn btn-primary btn-sm">Search</button>
      </div>

      <div class="data">

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-end">
            <li class="page-item">
              <a v-if="paginationActivePage==0" class="page-link disabled" href="#" tabindex="-1" aria-disabled="true">&lt;</a>
              <a v-else class="page-link" href="#" tabindex="-1" @click="paginationGoTo(i-1)">&lt;</a>
            </li>
            <slot v-for="(n,i) in paginationTotal">
              <li v-if="i==paginationActivePage" class="page-link disabled">{{n}}</li>
              <li v-else class="page-link" href="#" @click="paginationGoTo(i)">{{n}}</li>
            </slot>
            <li class="page-item">
              <a v-if="paginationActivePage+1==paginationTotal" class="page-link disabled" href="#" tabindex="-1" aria-disabled="true">&gt;</a>
              <a v-else class="page-link" href="#" tabindex="-1" @click="paginationGoTo(i+1)">&gt;</a>
            </li>
          </ul>
        </nav>

        <table class="table">
          <thead>
          <tr>
            <th scope="col"><input type="checkbox"/></th>
            <th scope="col">Fullname</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="entity in entityList">
            <!-- Put this in a slot -->
            <td><input type="checkbox" v-model="selectedArray[entity.id]"/></td>
            <td><a :href="`${slug}-edit.html?id=${entity.id}`">{{entity.name1}} {{entity.name2}}</a></td>
            <td>{{ entity.username }}</td>
            <td>{{ entity.email}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
import beta_ajaxGet from "../utils/beta_ajaxGet";
import sessionstorage from "sessionstorage";
import beta_ajaxGet2 from "../utils/beta_ajaxGet2";

export default {
  name: "DataList",
  props: ['title', 'description', 'slug'],
  data(){
    return {
      message: null,
      messageClass: null,
      entityList: [],
      selectedArray: [],
      totalCount: 0,

      // Pagination (should be inserted in a separate component)
      paginationActivePage:0, // From zero
      paginationTotal: undefined,
      viewOffset: 0,
      viewLimit: 10, // Configurable
    }
  },
  computed: {
    selectedLength(){
      let arr = []
      for (const [index, element] of this.selectedArray.entries())
        if(element) arr.push(index)
      return arr.length
    }
  },
  methods: {
    deleteClicked(){
      let arr = []
      for (const [index, element] of this.selectedArray.entries())
        if(element) arr.push(index)
      let url = `${this.slug}-delete.html?idList=${arr.join(',')}`
      if(arr.length > 0)
        window.location.href = url
    },
    paginationGoTo(n){
      this.viewOffset = n*10
      this.paginationActivePage = n
      this.refresh()
    },
    async refresh(){
      this.entityList = []
      this.entityList = await beta_ajaxGet(`/api/v1/data/${this.slug}?offset=${this.viewOffset}&limit=${this.viewLimit}`)

    },
    search(){

    }
  },
  async created() {
    console.log(`/api/v1/data/${this.slug}`)
    this.message = sessionstorage.getItem("message")
    this.messageClass = sessionstorage.getItem("message-class")
    sessionstorage.removeItem("message")
    sessionstorage.removeItem("message-class")

    let a = await beta_ajaxGet(`/api/v1/data/${this.slug}/props`)
    this.totalCount = a.totalCount

    // Build the pagination (should be inserted in a separated component)
    this.paginationTotal = parseInt(this.totalCount /10)+1
    this.entityList = await beta_ajaxGet(`/api/v1/data/${this.slug}?offset=${this.viewOffset}&limit=${this.viewLimit}`)
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/style.scss';
ol.breadcrumb{
  padding-top: 1.8em;
  padding-bottom: 1.6em;
  & a{
     text-decoration: none
  }
}

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


table a{
  text-decoration: none!important;
  &:hover{
    text-decoration: underline!important;
  }
}

.page-item{
  border-width: 0px!important;
}
.page-link{
  border-width: 0px!important;
}
.message{
  margin-left: -24px;
  margin-right: calc(-24px - 1em);
  padding: 24px;
  padding-top: 2em;
  padding-bottom: 1em;
  i{
    float:left;
    font-size: 1.2em;
  }
  &>div{
    margin-left: 2em;
    margin-top: -2px;
  }
}

/*
.search input{
  height: 60px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;
}
 */
</style>
