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
          :type="'file'"
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
  name: "FileFieldLR3",
  props: {
    id: {
      type: String,
      default() {
        return '' + Math.random() * 1e9
      },
    },
    label: { type: String, required: true },
    required: { type: Boolean, default: false },
    value: { required: false },
    type: { type: String, default: 'text' },
    invalidFeedback: { type: String, default: null },
    under: { type: String, default: null },
    placeholder: { type: String, default: () => '' },
    validity: { type: [String, Boolean], default: null },
    isInvalid: { type: Boolean, required: false, default: false},
    validFeedback: { type: String, default: null },
    isValid: {type: Boolean, required: false, default: false},
    fieldErrors: {type: String, required: false, default: ""},
    fileObject: {type: Object}
  },
  data() {
    return {}
  },
  emits: ['input'],
  methods: {
    getBase64(file){
      return new Promise((resolve)=>{
        var reader = new FileReader();
        //reader.readAsBinaryString(file)
        reader.readAsDataURL(file);
        reader.onload = function () {
          let o = {
            name: file.name,
            type: file.type,
            content: reader.result
          }
          resolve(o);
        };
        reader.onerror = function (error) {
          console.error('Error: ', error);
        };
      })
    }
  },
  computed: {
    model: {
      get() {
        let fs = document.querySelector(`input[type=file]#${this.id}`)
        let output = null
        if(fs && fs.files && fs.files.length > 0) {
          ;(async ()=>{
            let file = fs.files[0]
            output = await this.getBase64((file))
          })()
        }
        this.fileObject = output
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    }
  }
}
</script>

