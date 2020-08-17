<template>
  <div class="container">
    <h1>LIST IMGAGE OF USER</h1>
    <div class="row">
      <Dmm v-for="list in lists" v-bind="list" v-bind:key="list.id" />
    </div>
    <Observer v-on:intersect="intersected" />
  </div>
</template>

<script>
import Dmm from "./Dmm";
import Observer from "@/components/Observer";
export default {
  name: "listimageuser",
  components: {
    Dmm,
    Observer
  },
  data() {
    return {
      username: this.$route.params.username,
      lists: [],
      page: 1
    };
  },
  methods: {
    async intersected() {
      const res = await fetch(
        `https://api.unsplash.com/users/${this.username}/photos?page=${this
          .page++}&client_id=sUV22DxAKlFhcqd51VsFin7iWwObGbNcZgfAgu_qGqY`
      );
      const lists = await res.json();
      this.lists = [...this.lists, ...lists];
    }
    // }
    // ,
    // async created() {
    //   const res = await fetch(
    //     `https://api.unsplash.com/users/${this.username}/photos?page=1&client_id=sUV22DxAKlFhcqd51VsFin7iWwObGbNcZgfAgu_qGqY`
    //   );
    //   this.lists = await res.json();
  }
};
</script>
