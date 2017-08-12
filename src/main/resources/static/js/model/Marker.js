/** 
 * @method Gilmar Carlos
 * 
 * @description Responsável por gerenciar funções de marcadores para o mapa
 * 
 */

var markers = [];
var marker;

/** 
 * @method newMarker
 * @description adiciona novo marcador no mapa
 * @param {map} mapa
 * @param {latLng} posição
 */
function newMarker(map, latLng) {
   marker = new google.maps.Marker({map: map, position: latLng});
   markers.push(marker);    
};

/** 
 * @method setAllMarkers
 * @description seleciona todos os marcadores no mapa
 * @param {map} mapa
 */
function setAllMarkers(map) {
    markers.forEach(item => item.setMap(map));
};

/** 
 * @method clearAllMarkers
 * @description retira todos os marcadores do mapa
 */
function clearAllMarkers() {
    markers.forEach(item => item.setMap(null));
};

/** 
 * @method getMarkersCount
 * @description retorna o número de marcadores
 * @return {length} tamanho da lista
 */
function getMarkersCount() {
    return markers.length;
};

/** 
 * @method isMarker
 * @description verifica se existe marcadores
 * @return {boolean}
 */
function isMarker() {
    if (getMarkersCount() > 0) {
        return true;
    } else {
        return false;
    }
};