
// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 40.152478, lng: -75.234894 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: uluru,
        map: map,
    });
}


//function map(n) {
//    google.maps.Map.prototype.setCenterWithOffset = function (latlng, offsetX, offsetY) {
//        var map = this;
//        var ov = new google.maps.OverlayView();
//        ov.onAdd = function () {
//            var proj = this.getProjection();
//            var aPoint = proj.fromLatLngToContainerPixel(latlng);
//            aPoint.x = aPoint.x + offsetX;
//            aPoint.v = aPoint.v + offsetY;
//            map.panTo(proj.fromContainerPixelToLatLng(aPoint));
//        }
//        ov.draw = function () { };
//        ov.setMap(this);
//    };
//    var markers = new Array();
//    var infowindow = new google.maps.InfoWindow({

//    });
//    var locations = [
//        [new google.maps.LatLng(53.819055, 27.8813694)]
//    ]
//    var options = {
//        zoom: 10,
//        panControl: false,
//        center: locations[0][0],
//        scrollwheel: false,
//        mapTypeId: google.maps.MapTypeId.ROADMAP
//    };
//    var map = new google.maps.Map(document.getElementById('map'), options);
//    var icon = {
//        url: 'img/icon/directions.svg',
//        scaledSize: new google.maps.Size(18, 20),
//        anchor: new google.maps.Point(9, 10)
//    }
//    for (var i = 0; i < location.length; i++) {
//        var marker = new google.maps.Marker({
//            position: locations[i][0],
//            map: map,
//        });
//        markers.push(marker);
//    }
//};
//if ($("#map").length > 0) {
//    map();
//}