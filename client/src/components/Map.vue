<template>
  <body>
      <div id="map">
      
    </div>
  </body>
    
 
</template>

<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
    async defer></script>
<script>
export default {
  name: "Map",
  data() {
    return {
      
    };
  }
};
</script>
<script>
export default {
function initMap() {
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 30.4421, lng: -97.6299 },
    zoom: 8
  });
}
}
</script>

<style scoped>

</style>
