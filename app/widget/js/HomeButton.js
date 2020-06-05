require([
  "esri/WebMap",
  "esri/widgets/Home",
  
], function(WebMap, Home) {

  var home = new HomeButton({
    map = webmap
  }, "HomeButton");
  home.startup();

  // Add the widget
  view.ui.add(home, "top-left");
});
