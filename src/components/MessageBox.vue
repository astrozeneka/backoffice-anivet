<template>
  <div>
    <div v-if="message" :class="'message bg-' + messageClass">
      <i class="fa-solid fa-circle-info"></i>
      <div class="content">{{ message }}</div>
    </div>
  </div>
</template>

<script>
import sessionstorage from "sessionstorage";

export default {
  name: "MessageBox",
  data(){
    return {
      message: null,
      messageClass: null
    }
  },
  created(){
    this.message = sessionstorage.getItem("message")
    this.messageClass = sessionstorage.getItem("message-class")
    sessionstorage.removeItem("message")
    sessionstorage.removeItem("message-class")
  }
}
</script>

<style scoped>
.message{
  margin-left: -24px;
  margin-right: calc(-24px - 1em);
  padding: 24px;
  padding-top: 2em;
  padding-bottom: 1em;
i{
  float:left;
  font-size: 1.2em;
}
&>div{
   margin-left: 2em;
   margin-top: -2px;
 }
}
</style>
