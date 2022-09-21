<template>
  <div>
    <nav class="navbar d-flex d-wrap justify py-3 border-bottom">
      <div class="container-xxl d-flex flex-wrap gap-3 justify-content-center">
        <a href="/">
          <img
              src="/assets/logotype.png"
              class="img-fluid"
              style="max-height: 37px"
              alt="Anivet Pet:DNA"
          />
        </a>
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="/">{{ $t('titles.about') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">{{ $t('titles.products') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">{{ $t('titles.services') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">{{ $t('titles.funfacts') }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">{{ $t('titles.contact') }}</a>
          </li>
          <li class="nav-item">
            <LocaleSwitcher/>
          </li>
        </ul>
        <div>
          Hello Admin
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LocaleSwitcher from "./LocaleSwitcher";
export default {
  name: "TopmenuBackoffice",
  components: {LocaleSwitcher}
}
</script>

