<template>
  <div class="asideMenu">
    <!--
      This menu is dynamically managed (by itself)
      will be done later
    -->
    <ul class="nav flex-column">
      <li class="nav-item">
        <a href="feed-registration.html" class="nav-link">My account</a>
      </li>
      <li class="">
        <a href="#" class="nav-link">Terms and conditions</a>
      </li>
      <li class="">
        <a href="#" class="nav-link">My samples</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RegistrationAsideMenu"
}
</script>

<style scoped lang="scss">
.asideMenu{
  border-right: rgb(210, 220, 220) 1px solid;
}
header, .nav-link{
  padding-left: 20px;
  padding-right: 20px;
}
header{
  font-size: 18px;
  font-weight: 700;
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: rgb(229, 232, 232) 1px solid;
}
.nav{
  padding-top: 1rem;
}
.nav-item{
  .nav-link{
    color: #545b64;
    font-size: 14px;
    font-weight: 400;
    &[role='button']{
      font-weight: 700;
    }
    &.active{
      font-weight: 700;
      color: #bd0000;
    }
  }

  ul{
    padding-left: 1em;
    li{
      list-style-type: none;
    }
  }
}
</style>
