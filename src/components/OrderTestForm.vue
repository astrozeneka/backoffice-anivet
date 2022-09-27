<template>
  <div>
    <FormField2
        :id="'fSampleId' + index"
        v-model="form.sampleId"
        type="text"
        placeholder="Sample Id"
        label="Sample ID"
        :field-errors="fieldErrors.sampleId"
    />

    <FormField2
        :id="'fAnimal' + index"
        v-model="form.animal"
        type="text"
        placeholder="Animal"
        label="Animal"
        :field-errors="fieldErrors.animal"
    />

    <FormField2
        :id="'fType' + index"
        v-model="form.type"
        type="text"
        placeholder="Type"
        label="Type"
        :field-errors="fieldErrors.type"
    />

    <FormField2
        :id="'fPetId' + index"
        v-model="form.petId"
        type="text"
        placeholder="Pet Id"
        label="Pet Id"
        :field-errors="fieldErrors.petId"
    />

    <FormField2
        :id="'fPetSpecie' + index"
        v-model="form.petSpecie"
        type="text"
        placeholder="Pet Specie"
        label="Pet Specie"
        :field-errors="fieldErrors.petSpecie"
    />

    <FormField2
        :id="'fImage' + index"
        v-model="form.image"
        type="text"
        placeholder="Image"
        label="Image"
        :field-errors="fieldErrors.image"
    />


  </div>
</template>

<script>
import FormField2 from "./FormField2";
export default {
  name: "OrderTestForm",
  components: {FormField2},
  data(){
    return {}
  },
  props: ['value', 'field-errors', 'index'],
  emits: ['input'],
  computed: {
    form: {
      get(){
        return this.value
      },
      set(value){
        this.$emit('input', value)
      }
    }
  }
}
</script>
