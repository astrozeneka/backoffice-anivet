<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Firstname</th>
        <th scope="col">Lastname</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="entity in entityList">
        <td>{{ entity.id }}</td>
        <td>{{ entity.name1 }}</td>
        <td>{{ entity.name2 }}</td>
        <td>{{ entity.username }}</td>
        <td>{{ entity.email }}</td>
        <td>
          <div class="btn-group" role="group" aria-label="">
            <button class="btn btn-sm btn-primary">
              <i class="fa-regular fa-eye"></i>
            </button>
            <a class="btn btn-sm btn-info" :href="'/notify-user.html?id=' + entity.id">
              <i class="fa-regular fa-comment"></i>
            </a>
            <a class="btn btn-sm btn-warning" :href="'/update-user.html?id=' + entity.id">
              <i class="fa-regular fa-pen-to-square"></i>
            </a>
            <a class="btn btn-sm btn-danger" :href="'/delete-user.html?id=' + entity.id">
              <i class="fa-regular fa-trash-can"></i>
            </a>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import * as $ from "jquery";
import vars from "../utils/vars";
import sessionstorage from "sessionstorage";
export default {
  name: "BaseMemberList",
  props: ['type'],
  data () {
    return {
      entityList: []
    }
  },
  created(){
    let token = sessionstorage.getItem("accessToken")
    let userId = sessionstorage.getItem("userId") // ADMIn
    let url = vars.getAPIURL(`/api/v1/${this.type}`)
    $.ajax(url, {
      type: "GET",
      beforeSend: (xhr)=>{
        xhr.setRequestHeader('Authorization', `Bearer ${token}`)
      },
      success: (res)=>{
        console.info(res)
        this.entityList = res;
      },
      error: (err)=>{
        console.error(err)
      }
    })
  }
}
</script>

<style scoped>

</style>
