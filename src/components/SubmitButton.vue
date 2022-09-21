<template>
  <div>
    <button
        @click="fc"
        v-if="!requesting"
        type="submit"
        class="btn btn-lg btn-primary"
    >
      Register
    </button>
    <button
        v-else
        type="submit"
        class="btn btn-lg btn-primary"
        disabled
    >
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "SubmitButton",
  props: ["requesting", 'click'],
  methods: {
    fc(e){
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped>
button[type=submit]{
  width: 6.5em!important;
}
.spinner-border{
  height: 1.4rem;
  width: 1.4rem;
}
</style>
