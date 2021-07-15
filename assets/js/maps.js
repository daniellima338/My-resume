function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat:55.70370353422885,
            lng: 12.4736332609691
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVXYZ";

    var locations = [
        { lat: 55.70370353422885, lng: 12.4736332609691},
        { lat: 55.650233, lng: 12.537233},
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
<!--The map function works similar to a forEach function-->

new MarkerClusterer(map, markers, {
imagePath:
"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
});
};