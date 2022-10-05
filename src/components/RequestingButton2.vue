<template>
  <span>
    <button
        @click="fc"
        v-if="!requesting"
        type="submit"
        :class="'btn ' + className"
    >
      <slot/>
    </button>
    <button
        v-else
        type="submit"
        :class="'btn ' + className"
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
  name: "RequestingButton2",
  props: ["requesting", 'click', 'className'],
  methods: {
    fc(e){
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>

</style>
