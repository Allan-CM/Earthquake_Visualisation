//Initlaized new map coordinates are set on Canada
let myMap = L.map("map", {
  center: [46.1304, -106.3468],
  zoom: 3
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

//All earthque data for the apst 7 days api 
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

//Loading API into D3 element
d3.json(url).then(function(response) {

  // Declare the features variable
  let features = response.features;
  
  // Defining a marker size function that will determine a markers radius based on magnitude 
  function markerSize(mag) {
    //abolute vlaue taken as data included negative numbers 
    return Math.sqrt(Math.abs(mag)) * 30000;
  }

  // Defining color function that will get darker from the inital color of yellow as the depth increases 
  function getColor(d) {
    // Defining conditions on how to color the marker based on earthquake depth 
    return d > 90  ? '#bd0026' :
           d > 70  ? '#f03b20' :
           d > 50   ? '#fd8d3c' :
           d > 30   ? '#feb24c' :
           d > 10   ? '#fed976' :
                      '#ffffb2';
  }


  //Renders all earthquake data onto the map 
  let marker_limit = features.length;
  
  //loops throughs all data based on the number of earthquakes 
  for (let i = 0; i < marker_limit; i++) {
    // declaring location data of earthquakes
    let location = features[i].geometry.coordinates;
    // declaring magnitude data of earthquakes 
    let magnitude_level = features[i].properties.mag;
    // Takes the long and lat to map earthquakes
    L.circle([location[1], location[0]], {
      fillOpacity: 1,
      color: "black",
      //calls the getColor function to determine color based on earthquke depth 
      fillColor: getColor(location[2]),
      //calls markerSize function to determine circle radius based on earthquake magnitude 
      radius: markerSize(magnitude_level)
  //Popup dispplays where on Eartht he earthquake took place, magnitude level, and depth 
   }).bindPopup(`<h1>Earthquake Info</h1> <hr> <h3>Place: ${features[i].properties.place}</h3> <hr> <h3>Magnitude: ${magnitude_level.toLocaleString()}</h3>
   <hr> <h3>Depth: ${location[2]}</h3>`
   // adds marker to map 
   ).addTo(myMap);
  }


// declaring legend and its posistion 
let legend = L.control({ position: 'bottomright' });

//calling the onAdd function to customize our legend
legend.onAdd = function (map) {

    // declaring variable to add a div and class for the legend 
    var div = L.DomUtil.create('div', 'info legend'),
    //defining legend parameters
    depths = [0, 10, 30, 50, 70, 90],
    labels = [];

    // loop through our the earthquake depth data and fetch each color based on the parameters that were defined 
    for (var i = 0; i < depths.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
            depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(myMap);
});