<template>
  <div>
    <header>Dashboard</header>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a href="/dashboard.html" class="nav-link">
          Dashboard
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#newsFeedCollapse" role="button" aria-expanded="false" aria-controls="newsFeedCollapse">News feed</a>
        <ul class="collapse show" id="newsFeedCollapse">
          <li class="nav-item">
            <a href="news-feed.html" class="nav-link">All</a>
          </li>
          <li class="nav-item">
            <a href="registration-feed.html" class="nav-link">Registration</a>
          </li>
          <li class="nav-item">
            <a href="test-order-feed.html" class="nav-link">Test order</a>
          </li>
          <li class="nav-item">
            <a href="message-feed.html" class="nav-link">Message</a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#validationCollapse" role="button" aria-expanded="false" aria-controls="validationCollapse">Validation</a>
        <ul class="collapse show" id="validationCollapse">
          <li class="nav-item">
            <a href="/validate-registration.html" class="nav-link">Registration</a>
          </li>
          <li class="nav-item">
            <a href="/validate-order.html" class="nav-link">Orders</a>
          </li>
          <li class="nav-item">
            <a href="/validate-order.html" class="nav-link">Samples</a>
          </li>
          <li class="nav-item">
            <a href="/validate-receipt.html" class="nav-link">Receipt</a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-bs-toggle="collapse" href="#dataCollapse" role="button" aria-expanded="false" aria-controls="dataCollapse">Data</a>
        <ul class="collapse show" id="dataCollapse">
          <li class="nav-item">
            <a href="owner-list.html" class="nav-link">Owners</a>
          </li>
          <li class="nav-item">
            <a href="breeder-list.html" class="nav-link">Breeders</a>
          </li>
          <li class="nav-item">
            <a href="vet-list.html" class="nav-link">Vet</a>
          </li>
          <li class="nav-item">
            <a href="scientist-list.html" class="nav-link">Scientists</a>
          </li>
          <li class="nav-item">
            <a href="admin-list.html" class="nav-link">Administrators</a>
          </li>
          <li class="nav-item">
            <a href="document-list.html" class="nav-link">Documents</a>
          </li>
          <li class="nav-item">
            <a href="parcel-list.html" class="nav-link">Parcels</a>
          </li>
          <li class="nav-item">
            <a href="order-list.html" class="nav-link">Test orders</a>
          </li>
          <li class="nav-item">
            <a href="sample-list.html" class="nav-link">Test samples</a>
          </li>
          <li class="nav-item">
            <a href="result-list.html" class="nav-link">Test results</a>
          </li>
          <li class="nav-item">
            <a href="certification-list.html" class="nav-link">Certification</a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link">Log out</a>
      </li>
    </ul>
  </div>
</template>

<script>
import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.min";
export default {
  name: "BackofficeAsideMenu"
}
</script>

<style scoped lang="scss">
header, .nav-link{
  padding-left: 20px;
  padding-right: 20px;
}
header{
  font-size: 18px;
  font-weight: 700;
  padding-top: 2rem;
  padding-bottom: 1rem;
  border-bottom: rgb(196, 206, 206) 1px solid;
}
.nav{
  padding-top: 1rem;
}
.nav-item{
  .nav-link{
    font-size: 14px;
    font-weight: 400;
    &[role='button']{
      font-weight: 700;
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
