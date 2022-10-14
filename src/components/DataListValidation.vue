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
          <li class="breadcrumb-item"><a href="#">Validate</a></li>
          <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
        </ol>
      </nav>
    </header>

    <div class="row">
      <div class="col-md-8 head">
        <h1>{{ title }}</h1>
        <p>{{ description }} </p>
      </div>
      <div class="col-md-4">
        <a class='btn btn-light btn-sm btn-block' href="#" @click="refresh()">Refresh</a>
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
          <slot v-for="(n,i) in paginationTotal">
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
        <slot name="head"></slot>
        </thead>
        <tbody>
        <tr v-for="entity in entityList">
          <slot v-bind="entity"></slot>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import sessionstorage from "sessionstorage";
import beta_ajaxGet from "../utils/beta_ajaxGet";

export default {
  name: "DataListValidation",
  props: ['title', 'description', 'slug'],
  data(){
    return {
      message: null,
      messageClass: null,
      entityList: [],

      // Pagination (should be inserted in a separate component)
      havePagination: true,
      paginationActivePage:0, // From zero
      paginationTotal: undefined,
      viewOffset: 0,
      viewLimit: 10, // Configurable

      // Searching
      searchQuery: ""
    }
  },
  methods: {
    paginationGoTo(n){
      console.log(n)
      this.viewOffset = n*10
      this.paginationActivePage = n
      this.refresh()
    },
    async refresh(){

    },
    async search(){

    }
  },
  async created(){
    // Message
    this.message = sessionstorage.getItem("message")
    this.messageClass = sessionstorage.getItem("message-class")
    sessionstorage.removeItem("message")
    sessionstorage.removeItem("message-class")

    // List
    this.entityList = await beta_ajaxGet(`/api/v1/validation/${this.slug}?offset=${this.viewOffset}&limit=${this.viewLimit}`)
    console.log(JSON.stringify(this.entityList))
  }
}
</script>

