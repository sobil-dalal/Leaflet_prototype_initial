function areaInfo() {
  // method that we will use to update the control based on feature properties passed
  infoControl.update = function (props) {
    this._div.innerHTML = '<h4>Farm information - </h4>' +
      (props ?
        '<div style="overflow-x:auto;">' +
          '<table>' +
            '<tr>' +
              '<td>' +
                'FarmId' +
              '</td>' +
              '<td>' +
                props.Farm_ID +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Area acre' +
              '</td>' +
              '<td>' +
                props.FA_acre + ' acre' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Area sqm' +
              '</td>' +
              '<td>' +
                props.FA_sqm + ' sq meter' +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Area hectare' +
              '</td>' +
              '<td>' +
                props.FA_ha + ' hectare' +
              '</td>' +
            '</tr>' +
          '</table>' +
        '</div>':
        'Hover over a farm');
  };
  infoControl.addTo(map);
}

function frequencyInfo() {
  // method that we will use to update the control based on feature properties passed
  infoControl.update = function (props) {
    this._div.innerHTML = '<h4>Farm information - </h4>' +
      (props ?
        '<div style="overflow-x:auto;">' +
          '<table>' +
            '<tr>' +
              '<td>' +
                'FarmId' +
              '</td>' +
              '<td>' +
                props.Farm_ID +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Village Name' +
              '</td>' +
              '<td>' +
                props.Village_Na +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Block Name' +
              '</td>' +
              '<td>' +
                props.Block_Name +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'District' +
              '</td>' +
              '<td>' +
                props.District +
              '</td>' +
            '</tr>' +
            '<tr>' +
              '<td>' +
                'Cropping frequency' +
              '</td>' +
              '<td><b>' +
                props.Cropping_F +
              '</b></td>' +
            '</tr>' +
          '</table>' +
        '</div>':
        'Hover over a farm');
  };
  infoControl.addTo(map);
}