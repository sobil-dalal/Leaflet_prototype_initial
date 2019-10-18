// Append old node to the new parent.
function setParent(el, newParent) {
 newParent.appendChild(el);
}

// areaLayers htmlContainer switch
function areaContainerSwitch() {
 var areaInsideMap = areaControl.getContainer();
 var areaOutsideMap = document.getElementById('overLayerControl');
 setParent(areaInsideMap, areaOutsideMap);

 var infoInsideMap = infoControl.getContainer();
 var infoOutsideMap = document.getElementById('infoControl');
 setParent(infoInsideMap, infoOutsideMap);

 var legendInsideMap = legendControl.getContainer();
 var legendOutsideMap = document.getElementById('legendControl');
 setParent(legendInsideMap, legendOutsideMap);
}