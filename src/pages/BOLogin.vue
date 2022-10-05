<template>
  <Login></Login>
</template>

<script>
import * as $ from 'jquery'
import vars from "../utils/vars";
import FormField2 from "../components/FormField2";
import FormErrors from "../components/FormErrors";
import sessionstorage from "sessionstorage";
import SubmitButton from "../components/SubmitButton";
import Login from "../components/Login";

export default {
  name: "BOLogin",
  components: {Login, SubmitButton, FormField2, FormErrors},
}
</script>


<style>
@import '../scss/style.scss';
</style>
<style scoped>
  img{
    height: 3em;
    width: auto;
  }
  .card{
    margin-top: 2em;
    .card-title{
      margin-top: 1em;
      margin-bottom: 1em;
    }
    .card-body p{
      margin-top: .3em;
      padding-bottom: .5em;
    }
  }
</style>
