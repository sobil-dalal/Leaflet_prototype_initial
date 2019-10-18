function areaLegend() {
  legendControl.update = function () {
    grades = [0.0, 0.5, 1.0, 2.0, 3.0];
    this._div.innerHTML +=
      '<h4>Area (in acre) -</h4>' +
      '<div style="overflow-x:auto;">';

    var htmlString = "<table>";
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
      htmlString +=
        '<tr>' +
              '<td>' +
                '<i style="background:' + getAreaColor(grades[i] + 1) + '"></i>' +
              '</td>' +
              '<td>' +
                parseFloat(grades[i]).toFixed(1) + (grades[i + 1] ? ' – ' + parseFloat(grades[i + 1]).toFixed(1) + ' acre<br>' : ' + acre')
              '</td>' +
            '</tr>';
    }
    this._div.innerHTML += htmlString +'</table>' +
                            '</div>';
  };
  legendControl.addTo(map);
}