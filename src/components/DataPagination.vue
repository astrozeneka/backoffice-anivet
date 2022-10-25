<template>
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
</template>

<script>
export default {
  name: "DataPagination",
  props_: ["havePagination", "paginationActivePage",
  "paginationTotal", "viewOffset", "viewLimit", "refresh"],
  props: {
    havePagination: {type: Boolean},
    paginationActivePage: {type: Number},
    paginationTotal: {type: Number},
    viewOffset: {type: Number},
    viewLimit: {type: Number},
    refresh: {type: Function}
  },
  methods:{
    paginationGoTo(n){
      console.log(this.viewLimit)
    }
  }
}
</script>

<style scoped>
nav{
  margin-top: 2em;
}
</style>
