mapboxgl.accessToken = 'pk.eyJ1IjoiYnJlbnRiYW5uYXdpdCIsImEiOiJja20wcWtoOG4xb2YzMndwOG14bTA2eXQxIn0.G4w4tHglL46PiwCggB2CsQ';

  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [100.5383, 13.7649],
      zoom: 14
  });
 
var marker = new mapboxgl.Marker()
    .setLngLat([100.5383, 13.7649])
    .addTo(map);

const busStops = [

];

let counter = 0;
function move(){
  setTimeout(()=>{
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  },3000); 

}