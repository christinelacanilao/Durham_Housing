require([
      "esri/Map",
      "esri/views/MapView",
      "esri/layers/FeatureLayer", //Adding feature layer to the application using FeatureLayer module
      "esri/widgets/Legend", //Adding Legend to the application
      "esri/widgets/LayerList",
      "esri/widgets/Feature"
    ], function(Map, MapView, FeatureLayer, Legend, LayerList, Feature)  {
      
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
      
      
