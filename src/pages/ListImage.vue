<template>
  <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="card">
      <router-link v-bind:to="'/photos/' + id">
        <img :src="urls.small" class="card-img-top" />
      </router-link>
      <div class="card-body">
        <p class="card-text">
          {{ alt_description }}
        </p>
        <p>
          <b>Author : </b
          ><router-link v-bind:to="'/users/' + user.username">
            <p>{{ user.username }}</p>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "listimage",
  props: {
    id: String,
    width: Number,
    urls: Object,
    alt_description: String,
    user: Object
  }
};
</script>
