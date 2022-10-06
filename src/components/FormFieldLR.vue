<template>
  <div class="row field-item">
    <div class="col-sm-3 text-right">
      <label :for="id">
        {{ label }} <FormRequiredMarker v-if="required" />
      </label>
    </div>
    <div class="col-sm-6">
      <input
          :id="id"
          v-model="model"
          :type="type"
          :class="'form-control form-control-sm ' +
          (isInvalid?'is-invalid':'') + ' ' +
          (isValid?'is-valid':'') + ' ' +
          (fieldErrors!=''?'is-invalid':'')"
          :required="required"
          :placeholder="placeholder"
          :aria-describedby="under ? `${id}Under` : null"
          v-bind="$attrs"
      />
      <div v-if="validFeedback" class="valid-feedback">
        {{ validFeedback }}
      </div>
      <div v-if="fieldErrors" class="invalid-feedback">
        {{ fieldErrors }}
      </div>
      <div v-if="under" :id="`${id}Under`" class="form-text">
        {{ under }}
      </div>
    </div>
    <div class="col-sm-3"></div>
  </div>
</template>

<script>
export default {

  props: {
    id: {
      type: String,
      default() {
        return '' + Math.random() * 1e9
      },
    },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
    value: { type: String, required: false },
    type: { type: String, default: 'text' },
    invalidFeedback: { type: String, default: null },
    under: { type: String, default: null },
    placeholder: { type: String, default: () => 'foo' },
    validity: { type: [String, Boolean], default: null },
    isInvalid: { type: Boolean, required: false, default: false},
    validFeedback: { type: String, default: null },
    isValid: {type: Boolean, required: false, default: false},
    fieldErrors: {type: String, required: false, default: ""}
  },

  data() {
    return {
    }
  },


  emits: ['input'],

  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
    defaultPlaceholder() {
      return this.$t('misc.foo')
    },
  },

}
</script>
<style scoped>
label{
  font-size: 14px;
}
</style>
