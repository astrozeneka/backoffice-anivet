<template>
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
    <!--
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Data</a></li>
      <li class="breadcrumb-item active" aria-current="page">{{ title }}</li>
    </ol>
    -->
    <ol class="breadcrumb">
      <slot v-for="(value, key) in labels">
        <li v-if="value!='#'" class="breadcrumb-item">
          <a :href="value">
            {{key}}
          </a>
        </li>
        <li v-else class="breadcrumb-item active" aria-current="page">
          {{key}}
        </li>
      </slot>
    </ol>
  </nav>
</template>

<script>
export default {
  name: "Breadcrumb",
  props: ['labels']
}
</script>

<style lang="scss" scoped>
nav{
  --bs-breadcrumb-divider: '>'!important;
}
ol.breadcrumb{
  padding-top: 1.8em;
  padding-bottom: 1.6em;
  & a{
    text-decoration: none
  }
}
</style>
