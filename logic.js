let myMap = L.map("map", {
  center: [46.1304, -106.3468],
  zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

d3.json(url).then(function(response) {
  // Define a markerSize() function that will give each city a different radius based on its population.
  function markerSize(mag) {
    return Math.sqrt(Math.abs(mag)) * 30000;
  }

  // Declare the features variable
  let features = response.features;

  // Comment this line in to render all 80,000 markers
  let marker_limit = features.length;
  //let marker_limit = 1000;

  for (let i = 0; i < marker_limit; i++) {
    let location = features[i].geometry.coordinates;
    let magnitude_level = features[i].properties.mag;
    //console.log(magnitude_level)
    L.circle([location[1], location[0]], {
      fillOpacity: 1,
      color: "black",
      fillColor: "yellow",
      radius: markerSize(magnitude_level)
   }).addTo(myMap);
    
  }
});