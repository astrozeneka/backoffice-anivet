<template>
  <span>
    <button
        @click="fc"
        v-if="!requesting"
        type="submit"
        class="btn btn-primary"
    >
      <slot/>
    </button>
    <button
        v-else
        type="submit"
        class="btn btn-primary"
        disabled
    >
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </button>
  </span>
</template>

<script>
export default {
  name: "RequestingButton",
  props: ["requesting", 'click'],
  methods: {
    fc(e){
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>

</style>
