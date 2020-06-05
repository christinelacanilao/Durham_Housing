require([
  "esri/WebMap",
  "esri/dijit/HomeButton",
  "dojo/domReady!"
  
], function(WebMap, Homebutton) {

  var home = new HomeButton({
    map = webmap
  }, "HomeButton");
  home.startup();
  
});
