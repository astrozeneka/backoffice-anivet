<template>
  <div v-if="fieldErrors != ''" class="alert alert-danger">
    {{ fieldErrors }}
  </div>
</template>

<script>
export default {
  name: "FormErrors",
  props: {
    fieldErrors: {type: String, required: false, default: ""}
  },
  data(){
    return {}
  }
}
</script>

<style scoped>

</style>
