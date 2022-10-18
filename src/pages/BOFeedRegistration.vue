<template>
  <div>
    <div class="main">
      <div class="row">
        <div class="col-md-3"> <!-- SHould use another column system -->
          <BackofficeAsideMenu></BackofficeAsideMenu>
        </div>
        <div class="col-md-9">
          <Feed
            title="Registration Feed"
            description="Vivamus sed iaculis leo. Nullam nec libero quam. Fusce enim ipsum, cursus non interdum non, volutpat sed sapien."
            slug="registration"
          >
            <template v-slot:head>
              <th scope="col">Date</th>
              <th scope="col">Type</th>
              <th scope="col">Triggerer</th>
              <th scope="col">Extract</th>
              <th scope="col">Recipient</th>
              <th scope="col">Status</th>
            </template>
            <template v-slot:default="entity">
              <td>{{ entity.date }}</td>
              <td>{{ entity.tags }}</td>
              <td>-</td>
              <td v-html="entity.content"></td>
              <td>{{ entity.receiver.username }}</td>
              <td>-</td>
            </template>
          </Feed>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackofficeAsideMenu from "../components/BackofficeAsideMenu";
import Feed from "../components/Feed";

export default {
  name: "BOFeedRegistration",
  components: {Feed, BackofficeAsideMenu}
}
</script>

<style>
@import '../scss/style.scss';
</style>
<style scoped lang="scss">
@import '../scss/forms.css';
</style>
