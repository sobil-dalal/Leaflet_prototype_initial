/* ----------------------------Common style starts---------------------------- */
function zoomToFeature(e) {
 map.fitBounds(e.target.getBounds());
}

function highlight(e) {
 var layer = e.target;
 layer.setStyle({
  weight: 5,
  color: '#666',
  dashArray: '',
  fillOpacity: 0.7
 });
 layer.bringToFront();
 infoControl.update(layer.feature.properties);
}

/* ----------------------------Common style starts---------------------------- */

/* ----------------------------Primary farm segment style starts---------------------------- */
function styleFarmSegment() {
 return {
  weight: 1,
  opacity: 0.7,
  color: '#023858',
  dashArray: '3',
  fillOpacity: 0.1
 };
}

function onEachFarmSegment(feature, layer) {
 layer.on({
  mouseover: highlightFarmSegment,
  mouseout: resetFarmSegments,
  click: zoomToFeature
 });
}

function highlightFarmSegment(e) {
 var layer = e.target;

 layer.setStyle({
  weight: 5,
  color: '#666',
  dashArray: '',
  fillOpacity: 0.7
 });

 layer.bringToFront();
}

function resetFarmSegments(e) {
 farmSegementsLayer.resetStyle(e.target);
}
/* ----------------------------Primary farm segment style ends---------------------------- */

/* ----------------------------Area style starts---------------------------- */
function styleArea(feature) {
 return {
  fillColor: getAreaColor(feature.properties.FA_acre),
  weight: 1,
  opacity: 0.7,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
 };
}

function getAreaColor(property) {
 return property > 3.0 ? '#006837' :
  property > 2.0 ? '#31a354' :
  property > 1.0 ? '#78c679' :
  property > 0.5 ? '#c2e699' :
  '#ffffcc';
}

function onAreaEach(feature, layer) {
 layer.on({
  mouseover: highlight,
  mouseout: resetAreaHighlight,
  click: zoomToFeature
 });
}

function resetAreaHighlight(e) {
 areaLayer.resetStyle(e.target);
 infoControl.update();
}
/* ----------------------------Area style ends---------------------------- */

/* ----------------------------Frequency style starts---------------------------- */
function styleFrequency(feature) {
 return {
  fillColor: getFrequencyColor(feature.properties.Cropping_F),
  weight: 1,
  opacity: 0.7,
  color: 'white',
  dashArray: '3',
  fillOpacity: 0.7
 };
}

function getFrequencyColor(property) {
 return property == 3 ? '#88419d' :
  property == 2 ? '#8c96c6' :
  property == 1 ? '#b3cde3' :
  '#edf8fb';
}

function onFrequencyEach(feature, layer) {
 layer.on({
  mouseover: highlight,
  mouseout: resetFrequencyHighlight,
  click: zoomToFeature
 });
}

function resetFrequencyHighlight(e) {
 frequencyLayer.resetStyle(e.target);
 infoControl.update();
}
/* ----------------------------Frequency style ends---------------------------- */