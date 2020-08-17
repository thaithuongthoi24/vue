<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import ListImage from "@/pages/ListImage";
import Observer from "./components/Observer";
export default {
  name: "App",
  components: {
    ListImage,
    Observer
  },
  data() {
    return {
      items: [],
      page: 1
    };
  },
  methods: {
    async intersected() {
      const res = await fetch(
        `https://api.unsplash.com/photos?page=${this
          .page++}&client_id=sUV22DxAKlFhcqd51VsFin7iWwObGbNcZgfAgu_qGqY`
      );
      const items = await res.json();
      this.items = [...this.items, ...items];
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
