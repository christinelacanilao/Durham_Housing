require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer"
    ], function(Map, MapView, FeatureLayer)  {
      
      var map = new Map({
        basemap: "gray-vector"
      });

      var view = new MapView({
        //container: "viewDiv",  
        container: "mapid",  
        map: map,
        center: [-78.871866,43.914656],
        zoom: 10           
      });
      
      
