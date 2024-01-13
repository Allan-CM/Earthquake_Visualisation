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

  // Declare the features variable
  let features = response.features;
  
  // Define a markerSize() function that will give each city a different radius based on its population.
  function markerSize(mag) {
    return Math.sqrt(Math.abs(mag)) * 30000;
  }

  function getColor(d) {
    return d > 90  ? '#bd0026' :
           d > 70  ? '#f03b20' :
           d > 50   ? '#fd8d3c' :
           d > 30   ? '#feb24c' :
           d > 10   ? '#fed976' :
                      '#ffffb2';
  }


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
      fillColor: getColor(location[2]),
      radius: markerSize(magnitude_level)
   }).addTo(myMap);
  }



let legend = L.control({ position: 'bottomright' });

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 10, 30, 50, 70, 90],
    labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);
});