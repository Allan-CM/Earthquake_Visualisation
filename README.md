# Earthquake Visualization Map

## Overview
This project visualizes earthquake data on an interactive map using Leaflet.js and D3.js. The map displays earthquake locations, magnitudes, and depths using circles of varying sizes and colors. A legend is also included to provide context for the colors used to represent different earthquake depths.

## Technologies Used
* Leaflet.js
* D3.js
* OpenStreetMap
* HTML/CSS

## Project Structure
### JavaScript Code
* Map Initialization: Initializes a map centered on Canada with zoom level set to 3.
* Tile Layer: Adds a tile layer using OpenStreetMap.
* Data Loading: Fetches earthquake data from the USGS API.
* Marker Size Function: Defines a function to calculate marker size based on earthquake magnitude.
* Color Function: Defines a function to determine marker color based on earthquake depth.
* Rendering Markers: Loops through the earthquake data to render markers on the map.
* Legend: Defines a legend to provide context for the marker colors.
### HTML Code
* Map Container: Defines a div to hold the map.
* External Libraries: Includes Leaflet, D3, and custom JavaScript files.
* CSS: Includes custom styles for the map and legend.
### CSS Code
* Body Styling: Removes default margin and padding.
* Map Styling: Sets map, body, and html to 100% screen size.
* Legend Styling: Defines styles for the legend.

## Data Analysis
The map visualizes earthquake data from the past week, displaying locations, magnitudes, and depths. The marker size and color provide visual cues for the earthquake magnitude and depth, respectively.

## How to Use
1. Open the HTML file in a web browser via https://allan-cm.github.io/Earthquake_Visualisation/
2. Explore the interactive map to view earthquake locations.
3. Hover over a marker to view earthquake details, including location, magnitude, and depth.
4. Refer to the legend to understand the colors representing different earthquake depths.

## Conclusion
This interactive map serves as a tool for visualizing and understanding earthquake data. Users can easily explore earthquake locations, magnitudes, and depths, gaining insights into seismic activity over the past week.

## Repository Organization: 
1. logic --> contains js code to render map 
2. style --> css file rendering webpage desining 
3. index.htm --> contains structure of webapge 
4. Images folder --> contians picture reference of what the assingment should look like 

Credits: 
1. https://leafletjs.com/ --> documentation referenced to complete this assingment 
2. https://colorbrewer2.org/#type=sequential&scheme=YlOrRd&n=6 --> used to determine the hexcodes needs to create our color palaette. 


