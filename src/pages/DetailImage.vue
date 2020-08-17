<template>
  <div>
    <h2>{{ info.id }}</h2>
    <h5>Width : {{ info.width }} px</h5>
    <h5>Height : {{ info.height }} px</h5>
    <h5>
      Description : <strong>{{ info.alt_description }}</strong>
    </h5>
    <i class="fa fa-heart fa-9x"></i>: {{ info.likes }}
    <br />
    <img :src="info.urls.full" width="500px" height="500px" />
  </div>
</template>

<script>
export default {
  name: "detailimage",
  data() {
    return {
      id: this.$route.params.id,
      info: {}
    };
  },
  async created() {
    const res = await fetch(
      `https://api.unsplash.com/photos/${this.id}?client_id=sUV22DxAKlFhcqd51VsFin7iWwObGbNcZgfAgu_qGqY`
    );
    this.info = await res.json();
    console.log(this.info);
  }
};
</script>
