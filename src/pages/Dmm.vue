<template>
  <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div class="card">
      <router-link :to="'/photos/' + id"
        ><img :src="urls.full" class="card-img-top"
      /></router-link>
      <div class="card-body">
        <p class="card-text">
          {{ alt_description }}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dmm",
  props: {
    id: String,
    urls: Object,
    alt_description: String,
    likes: Number,
    user: Object
  }
};
</script>
