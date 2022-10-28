<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
              title="Update test order"
              tableName="Test Order"
              slug="testOrder"
              url-like-slug="test-order"
              :form="form"
              :fieldErrors="fieldErrors"
              @next="_next"
              @cancel="_cancel"
              @beforeSubmit="_beforeSubmit"
              action="edit"
          >

            <h2>Update description about the test order</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>
            <TextFieldLR
                id="fNotes"
                v-model="form.notes"
                placeholder=""
                label="Add notes"
                :fieldErrors="fieldErrors.notes"
            />


            <h2>Delete related samples</h2>
            <DataList5
              title="Associated test samples"
              description=""
              slug="testSample"
              url-like-slug="test-sample"
              :resource-url="`/api/v1/testOrder/${form.id}/testSamples`"
              :selected-array="selectedArrayToDissociate"
              :p-have-pagination="false"
              :have-search-bar="false"
              :custom-delete-selection="true"
            >
              <template v-slot:head>
                <th scope="col">Id</th>
                <th scope="col">Type</th>
                <th scope="col">Animal</th>
                <th scope="col">Specie</th>
                <th scope="col">Progress</th>
              </template>
              <template v-slot:default="entity">
                <td>
                  <a :href="`test-sample-edit.html?id=${entity.id}`">
                    Sample #{{entity.id}}
                  </a>
                </td>
                <td>{{entity.type}}</td>
                <td>{{entity.animal}}</td>
                <td>{{entity.petSpecie}}</td>
                <td></td>
              </template>
            </DataList5>
            <h2>Append new samples</h2>
            <DataList5
              title="Available test samples"
              description=""
              slug="testSample"
              url-like-slug="test-sample"
              :resource-url="`/api/v1/testSample/custom/available`"
              :selected-array="selectedArrayToAssociate"
              :p-have-pagination="false"
              :have-search-bar="false"
            >
              <template v-slot:head>
                <th scope="col">Id</th>
                <th scope="col">Type</th>
                <th scope="col">Animal</th>
                <th scope="col">Specie</th>
                <th scope="col">Progress</th>
              </template>
              <template v-slot:default="entity">
                <td>
                  <a :href="`test-sample-edit.html?id=${entity.id}`">
                    Sample #{{entity.id}}
                  </a>
                </td>
                <td>{{entity.type}}</td>
                <td>{{entity.animal}}</td>
                <td>{{entity.petSpecie}}</td>
                <td></td>
              </template>
            </DataList5>
          </DataForm2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataList4 from "../components/DataList4";
import FileFieldLR2 from "../components/FileFieldLR2";
import FormFieldLR from "../components/FormFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import DataForm2 from "../components/DataForm2";
import TextFieldLR from "../components/TextFieldLR";
import sessionstorage from "sessionstorage";
import beta_ajaxGet from "../utils/beta_ajaxGet";
import DataList3 from "../components/DataList3";
import DataList4b from "../components/DataList4b";
import DataList5 from "../components/DataList5";

let a;
let b;

export default {
  name: "BOTestOrderEdit",
  components: {DataList5, DataList4b, FileFieldLR2, FormFieldLR, BackofficeAsideMenu, DataForm2, TextFieldLR},
  data(){
    return {
      selectedArrayToDissociate: [],
      selectedArrayToAssociate: [],
      form: {
        id: null,
        notes: "",
        associatedSamples: [], // Calculated in the _beforeSubmit hook
        dissociatedSamples: []
      },
      fieldErrors: {
        notes: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A test order has been updated successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "test-order-list.html"
    },
    _cancel(){
      window.location.href = "test-order-list.html"
    },
    _beforeSubmit(){
      let arr

      arr = []
      for (const [index, element] of this.selectedArrayToDissociate.entries())
        if(element) arr.push(index)
      this.form.dissociatedSamples = arr
      console.log(arr)

      arr = []
      for (const [index, element] of this.selectedArrayToAssociate.entries())
        if(element) arr.push(index)
      this.form.associatedSamples = arr
      console.log(arr)
    }
  },
  async beforeCreate() {

    /*let id = (new URL(window.location.href)).searchParams.get("id");
    window.a = beta_ajaxGet(`/api/v1/testOrder/${id}/testSamples`)
    window.b = beta_ajaxGet(`/api/v1/testSample/custom/available`)

     */
  },
  async created(){
    this.form.id = (new URL(window.location.href)).searchParams.get("id");
    /*this.associatedTestSamples = await window.a
    this.nonAssociatedTestSamples = await window.b

     */
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>

