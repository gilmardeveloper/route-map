/** 
 * @method Gilmar Carlos
 * 
 * @description Responsável por gerenciar funções de rotas para o mapa
 * 
 */


var origin;
var destination;
var route = [];
var points = [];

/** 
 * @method calcRoute
 * @description calcula a rota entre dois ou mais pontos
 * @param {Object} service
 * @param {Object} display
 */
function calcRoute(service, display) {

    service.route({
        origin: getOrigin(),
        destination: getDestination(),
        waypoints: getPoints(),
        optimizeWaypoints: true,
        travelMode: 'DRIVING'

    }, function (results, status) {
        if (status == 'OK') {
            display.setDirections(results);
        }
    });

};

/** 
 * @method addRoute
 * @description adiciona um emdereço na lista de rotas
 * @param {address}
 */
function addRoute(address){
    route.push(address);
    if(getRouteCount() > 2){
        setPoint();
    }
};

/** 
 * @method getRouteCount
 * @description retorna o número de pontos na rota
 * @return {length} tamanho da lista
 */
function getRouteCount(){
    return route.length;
};

/** 
 * @method getOrigin
 * @description retorna o ponto de partida da rota
 * @return {origin} primeiro ponto da lista
 */
function getOrigin(){
    return route[0];
};

/** 
 * @method getDestination
 * @description retorna o ponto de destino da rota
 * @return {destination} último ponto da lista
 */
function getDestination(){
    return route[route.length - 1];
};

/** 
 * @method setPoint
 * @description adiciona pontos entre a origem e o destino
 */
function setPoint(){
    points.push({
        location : route[route.length - 2],
        stopover: true
    });
};

/** 
 * @method getPoints
 * @description retorna os pontos entre a origem e o destino
 * @return {points} lista de pontos
 */
function getPoints(){
    return points;
};

/** 
 * @method isRoute
 * @description verifica se existe pontos suficiente para calcular uma rota
 * @return {boolean}
 */
function isRoute(){
    if(getRouteCount() >= 2){
        return true;
    }else{
        return false;
    }
};

/** 
 * @method hiddenRoute
 * @description remove as informações da rota do mapa
 */
function hiddenRoute(){
    getDisplayDirections().setMap(null);
};

/** 
 * @method clearRoute
 * @description retira as informações das listas de pontos
 */
function clearRoute(){
    points = [];
    route = [];
    origin = "";
    destination = "";
    getDisplayDirections().setMap(null);
};