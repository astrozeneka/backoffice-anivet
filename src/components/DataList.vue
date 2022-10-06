<template>
  <div>
    <header>
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home</a></li>
          <li class="breadcrumb-item"><a href="#">Data</a></li>
          <li class="breadcrumb-item active" aria-current="page">Breeders</li>
        </ol>
      </nav>
    </header>
    <main>
      <div class="row">
        <div class="col-md-8 head">
          <h1>Breeders <span class="count">(24)</span></h1>
          <p>Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien. </p>
        </div>
        <div class="col-md-4">
          <a class='btn btn-light btn-sm btn-block' href="#">Refresh</a>
          <a class='btn btn-light btn-sm btn-block' href="#">Delete</a>
          <a class='btn btn-primary btn-sm btn-block' href="#">Add</a>
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
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">&lt;</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#">&gt;</a>
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
          <tr>
            <td><input type="checkbox"/></td>
            <td><a href="owner-edit.html?id=2">John Doe</a></td>
            <td>john.doe</td>
            <td>john.doe@gmail.com</td>
          </tr>
          <tr v-for="entity in entityList">
            <!-- Put this in a slot -->
            <td><input type="checkbox"/></td>
            <td><a :href="'owner-edit.html?id=' + entity.id">{{entity.name1}} {{entity.name2}}</a></td>
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

export default {
  name: "DataList",
  data(){
    return {
      entityList: []
    }
  },
  async beforeCreate() {
    this.entityList = await beta_ajaxGet("/api/v1/data/breeder")
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

/*
.search input{
  height: 60px;
  text-indent: 25px;
  border: 2px solid #d6d4d4;
}
 */
</style>
