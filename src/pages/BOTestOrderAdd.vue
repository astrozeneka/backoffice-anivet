<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3">
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <DataForm2
            title="Add test order"
            tableName="Test Order"
            slug="testOrder"
            url-like-slug="test-order"
            :form="form"
            :fieldErrors="fieldErrors"
            @next="_next"
            @cancel="_cancel"
            @beforeSubmit="_beforeSubmit"
            action="add"
          >
            <h2>Add description about the test order</h2>
            <p>Suspendisse potenti. Suspendisse rhoncus neque ut metus ornare molestie. Aenean lacinia et magna et sollicitudin.</p>

            <TextFieldLR
                id="fNotes"
                v-model="form.notes"
                placeholder=""
                label="Add notes"
                :fieldErrors="fieldErrors.notes"
            />

            <h2>Select samples to be included</h2>

            <DataList5
                title="Test sample"
                description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
                slug="testSample"
                url-like-slug="test-sample"
                :resource-url="`/api/v1/testSample/custom/available`"
                :selected-array="selectedArray"
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
import DataForm2 from "../components/DataForm2";
import FileFieldLR2 from "../components/FileFieldLR2";
import FormFieldLR from "../components/FormFieldLR";
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import TextFieldLR from "../components/TextFieldLR";
import sessionstorage from "sessionstorage";
import DataList4 from "../components/DataList4";
import DataList5 from "../components/DataList5";
export default {
  name: "BOTestOrderAdd",
  components: {DataList4, DataList5, FileFieldLR2, FormFieldLR, BackofficeAsideMenu, DataForm2, TextFieldLR},
  data(){
    return {
      selectedArray: [],
      form: {
        notes: "",
        samples: []
      },
      fieldErrors: {
        notes: ""
      }
    }
  },
  methods: {
    _next(){
      sessionstorage.setItem("message", "A test order has been added successfully")
      sessionstorage.setItem("message-class", "success")
      window.location.href = "test-order-list.html"
    },
    _cancel(){
      window.location.href = "test-order-list.html"
    },
    _beforeSubmit(){
      let arr = []
      for (const [index, element] of this.selectedArray.entries())
        if(element) arr.push(index)
      this.form.samples = arr
      console.log(arr)
    }
  },
  created(){
  }
}
</script>

<style lang="scss">
@import '../scss/style.scss';
@import '../scss/forms.scss';
</style>

