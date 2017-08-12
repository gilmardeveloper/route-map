/** 
 * @method Gilmar Carlos
 * 
 * @description Responsável por converter um endereço para um valor geocode
 * 
 */

var latLng;
var pos;

/** 
 * @method parseLatLng
 * @description adiciona novo marcador no mapa
 * @param {map} mapa
 * @param {address} endereço
 */
function parseLatLng(map, address) {
    addRoute(address);
    var geo = new google.maps.Geocoder();
    geo.geocode({'address': address}, function (results, status) {
        if (status == 'OK') {
            newMarker(map, results[0].geometry.location);
        }
    });
};
