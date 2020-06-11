var layerList = new LayerList({
  view: view,
  listItemCreated: defineActions
)};

function defineActions(event) {

  var item = event.item;
  
  if (item.title === " ")
  
    items.actionsSection = [
      [
        {
          title: "Go to full extent",
          className: "esri-icon-zoom-out-fixed",
          id: "full-extent"
        },
        {
          title: "Layer information",
          className: "esri-icon-description",
          id: information"
        }
      ]
    ];
  }
}

layerList.on("trigger-action", function(event) {
  var visibleLayer = 
  
// Other option is just a simple Layer list
view.when(function() {
  var layerList = new LayerList({
    view: view
  )};
  
  // Add widget to screen
  view.ui.add(layerList, "top-right");
});
