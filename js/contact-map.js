/*

  Да, хорошо, молодец!

*/

function initMap() {

  var map = new google.maps.Map(document.getElementById('map-container'), {
    zoom: 17,
    center: {
      lat: 59.939098,
      lng: 30.319898
     }

  });

  var contactLatLng = {
    lat: 59.938794,
    lng: 30.323083
  };

  var contactLogo = {
    url: 'img/contacts-map-logo.png',
    size: new google.maps.Size(231, 190),
    anchor: new google.maps.Point(53, 158)
  };

  var marker = new google.maps.Marker({
    position: contactLatLng,
    icon: contactLogo,
    draggable: true,
    map: map
  });

}