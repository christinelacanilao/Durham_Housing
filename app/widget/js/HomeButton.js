require([
  "esri/WebMap",
  "esri/widgets/Home",
  
], function(WebMap, Home) {

  // Creates a WebMap instance
  var webmap = new WebMap({
    portalItem: { //autocasts as new PortalItem()
      id: "a37abf36893f42bbaccb0cef64fb28ab"
    }
  });
      
  // Mapview, referencing WebMap instance
  var view = new MapView({
    map: webmap,    // The WebMap instance created above
      container: "viewDiv",
      center: [-78.871866,43.914656],
      zoom: 10
  });
  
  // Home Widget
  var home = new HomeButton({
    view: view
  });

  // Add the widget to the left corner of the view
  view.ui.add(home, "top-left");
});
