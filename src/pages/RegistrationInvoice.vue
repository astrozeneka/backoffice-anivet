<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <RegistrationAsideMenu></RegistrationAsideMenu>
        </div>
        <div class="col-md-9">

          <h2 class="text-center">Invoice</h2>
          <div>
            <!--
               READONLY FORM
            -->

            <p>
            {{ member.name1 }} {{ member.name2 }}<br/>
            {{ member.phone }}<br/>
            {{ member.address.address1 }}
            </p>

            <div class="text-right">
              <p><b>AnivetPETDNA</b><br/>
              Ngamwongwan Road, Faculty of Science<br/>
                +66-8-1234556
              </p>
              <br/>
              <br/>
            </div>
          </div>

          <DataList5
              title="Test sample"
              description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
              slug="testSample"
              url-like-slug="test-sample"
              resource-url="/public/registration/test-sample"
              :p-entity-list="testSampleList"
              :selected-array="[]"
              :have-headers="false"
              :p-have-pagination="false"
              :have-search-bar="false"
              :have-breadcrumbs="false"
              :add-link="`/registration-test-sample-add.html`"
              @load="_load"
          >
            <template v-slot:head>
              <th scope="col">Id</th>
              <th scope="col">Test Type</th>
              <th scope="col">Unit price</th>
              <th scope="col">Total price</th>
            </template>
            <template v-slot:default="entity">
              <td>
                Sample #{{entity.id}}
              </td>
              <td>{{entity.testType.label}}</td>
              <td>{{ entity.testType.price }} THB</td>
              <td>{{ entity.testType.price }} THB</td>
            </template>
          </DataList5>

          <div class="text-right">
            Total : <b>{{ total }} THB</b>
          </div>
        </div>

        <div class="text-right pt-5">
          <a :href="`registration-payment.html`" class="btn btn-primary btn-sm">Proceed to payment</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RequestingButton2 from "../components/RequestingButton2";
import RegistrationAsideMenu from "../components/RegistrationAsideMenu";
import beta_ajaxGet from "../utils/beta_ajaxGet";
import DataList5 from "../components/DataList5";

export default {
  name: "RegistrationInvoice",
  components: {DataList5, RegistrationAsideMenu, RequestingButton2},
  data(){
    return {
      testSampleList: [],
      member: {
        name1: "",
        name2: "",
        phone: "",
        email: "",
        address: {}
      },
      total: 0
    }
  },
  methods: {
    _load(data){
      console.log(data)
      this.testSampleList = data
      this.total = 0
      for(const testSample of data){
        this.total += testSample.testType.price
      }
    }
  },
  async created(){
    this.member = await beta_ajaxGet(`/public/registration/base-member`)
  }
}
</script>

<style>
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>
