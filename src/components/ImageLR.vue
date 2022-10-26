<template>
  <div class="row">
    <div class="col-sm-3 text-right">
      <label>{{ label }}</label>
    </div>
    <div class="col-sm-6">
      <div class="text-center">
        <img v-if="data" :src="data" class=""/>
      </div>
    </div>
    <div class="col-sm-6"></div>
  </div>
</template>

<script>
export default {
  name: "ImageLR",
  props: ["data", "label"],
  methods: {

  }
}
</script>

<style scoped>
img{
  max-width: 100%;
  width: 250px;
  border: 1px solid gray;
}
</style>
