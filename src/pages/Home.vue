<template>
  <div id="app">
    <div class="container">
      <h1>LIST IMGAGE</h1>
      <div class="row">
        <ListImage v-for="item in items" v-bind="item" v-bind:key="item.id" />
      </div>
      <Observer v-on:intersect="intersected" />
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import ListImage from "./ListImage";
import Observer from "../components/Observer";
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

<style lang="css">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-weight: bold;
  padding-bottom: 20px;
}
/* Prevent image stretching is it's resized */
.card-img-top {
  object-fit: cover;
}

/* Make all cards in row the same height */
.row {
  display: flex;
  flex-wrap: wrap;
}

.row > div[class*="col-"] {
  display: flex;
}

/* Hover effects */
.card {
  transition: -webkit-transform 0.3s ease;
}
.card:hover {
  transform: scale(1.01, 1.01);
}

/* Responsive design for image heights */
@media (min-width: 576px) {
  .card-img-top {
    height: 50vw;
  }
}

@media (min-width: 768px) {
  .card-img-top {
    height: 30vw;
  }
}

@media (min-width: 992px) {
  .card-img-top {
    height: 20vw;
  }
}

@media (min-width: 1200px) {
  .card-img-top {
    height: 20vw;
  }
}
</style>
