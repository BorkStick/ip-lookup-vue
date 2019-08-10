<template>
  <section>
    <div v-if="loading">
      <h3>Loading IP</h3>
    </div>
    <div v-if="error">
      <h1>{{error}}</h1>
      <router-link to="/">Back</router-link>
    </div>
    <div v-if="ipData" class="container">
      <div>
        <h1 class="ip">
        {{ipData.IPv4}}
      </h1>
      </div>
      <hr>
      <div class="row">
        <h3>Country:</h3>
        <span>
        {{ipData.country_name}}
      </span>
      </div>
      <div class="row">
        <h3>State:</h3>
        <span>
        {{ipData.state}}
      </span>
      </div>
      <div class="row">
        <h3>City:</h3>
        <span>
        {{ipData.city}}
      </span>
      </div>
     <div class="row">
        <h3>Zip:</h3>
        <span>
        {{ipData.postal}}
      </span>
      </div>
      <div id="latlong" class="row">
        <h3>Lat:</h3>
        <span>
        {{ipData.latitude}}
      </span>
      <h3>Long:</h3>
        <span>
        {{ipData.longitude}}
      </span>
      </div>
      <div class="map">
        <img src="https://via.placeholder.com/300" alt="" srcset="">
      </div>
      <div >
        <span>Perform Other Lookups on </span><span> </span> <strong>{{ipData.IPv4}}</strong>
      </div>
      <router-link to="/">Back</router-link>
    </div>
  </section>
</template>


<script>
import axios from "axios";

export default {
  name: "Ip",
  data() {
    return {
      loading: false,
      error: null,
      ipData: null
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-no-image";
  },
  async created() {
    this.loading = true;
    try {
      const response = await axios.get(
        `/api/v1/ip/${this.$route.params.gamertag}`
      );
      console.log(response);
      
      this.ipData = response.data;
      console.log(this.ipData);
      this.loading = false;
    } catch (err) {
      this.loading = false;
      this.error = err.response.data.message;
    }
  }
};
</script>

<style scoped>
.container {
  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  max-width: 700px;
  margin: 1rem auto;
  padding: 2rem 1.5rem;
  border-radius: 20px;
}
h1.ip {
  font-size: 2rem;
  background: rgba(0, 0, 0, 0.6);
  padding: 0.3rem 0.5rem;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  align-self: center;
}
.row {
  display: flex;
  align-items: center;
  padding: 2px;
  

}
.row span{
  padding: 0 0 0 5px;
}
a {
  display: inline-block;
  margin-top: 2rem;
  border: #fff 2px solid;
  padding: 0.5rem 0.8rem;
}
a:hover {
  border: #ccc 2px solid;
  color: #ccc;
}
.platform-avatar {
  width: 40px;
  margin-right: 0.7rem;
}
img {
  width: 100%;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
}
li {
  background: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  margin-bottom: 0.7rem;
  border-radius: 10px;
}
li p {
  font-size: 2rem;
}
li:first-child p {
  font-size: 1.5rem;
}
li span {
  font-size: 1rem;
  color: #ccc;
}
@media (max-width: 500px) {
  h1 {
    font-size: 1.5rem;
    display: block;
    text-align: center;
  }
  .platform-avatar {
    display: none;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  li p {
    font-size: 1.5rem;
  }
}
</style>
