<template>
  <section class="search">
    <h1>IP Address Lookup</h1>
    <form v-on:submit.prevent="onSubmit">
      
      <div class="form-group">
        <label for="gamertag">Enter IP</label>
        <input
          type="text"
          id="gamertag"
          name="text"
          v-model="gamertag"
          placeholder="1.1.1.1"
        />
      </div>
      <div class="form-group">
        <input type="submit" value="Submit" class="btn" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      platform: "origin",
      gamertag: ""
    };
  },
  beforeCreate() {
    document.body.className = "body-bg-image";
  },
  methods: {
    onSubmit() {
      if (!this.gamertag) {
        this.$toasted.show("Enter IP", {
          duration: 3000,
          icon: "exclamation-triangle"
        });
      } else {
        //profile
        // this.$router.push(`/profile/${this.platform}/${this.gamertag}`);
        
        //ip
        this.$router.push(`/ip/${this.gamertag}`);
      }
    }
  }
};
</script>

<style>
</style>
