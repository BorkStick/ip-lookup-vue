<template>
  <header>
    <div>
      <h1 id="1">BORK</h1>
      <h1 id="2">.</h1>
      <h1 id="host">HOST</h1>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      image: require("@/assets/logo.png")
    };
  }
};
</script>

<style scoped>
img {
  width: 300px;
}
div {
  display: flex;
  font-size: 30px;
  padding: 0 0 50px 0;
}
#host {
  color: #50fa7b;
  font-weight: 100;
}

@media (max-width: 700px) {
  img {
    display: block;
    margin: auto;
  }
}
</style>
