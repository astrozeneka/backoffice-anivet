<template>
  <div class="row">
    <div class="col-sm-3 text-right">
      <label for="fFilex">Uploaded file</label>
    </div>
    <div class="col-sm-6">
      <p id="fFilex">
        <a href="#" @click="downloadAttachedFile(entity, slug)" class="btn-link"><i class="fa fa-arrow-down"></i>
          {{ entity.file.name}}
        </a>
      </p>
    </div>
    <div class="col-sm-3"></div>
  </div>
</template>

<script>
import downloadAttachedFile from "../utils/downloadAttachedFile";

export default {
  name: "LinkLR",
  props: ["entity", "slug"],
  methods: {
    downloadAttachedFile: downloadAttachedFile
  }
}
</script>

<style scoped>
.row{
  padding-top: .8em;
}
a{
  text-decoration: none;
}
</style>
