require([
  "esri/WebMap",
  "esri/widgets/Home",
  
], function(WebMap, Home) {

  var home = new HomeButton({
    view: view
  });

  // Add the widget to the left corner of the view
  view.ui.add(home, "top-left");
});
