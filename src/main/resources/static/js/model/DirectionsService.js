/** 
 * @method Gilmar Carlos
 * 
 * @description Responsável por prover serviço de renderização de rotas no mapa
 * 
 */

var service;
var display;

/** 
 * @method directionsServiceInit
 * @description inicializa o provedor de serviço
 * @param {map} mapa
 */
function directionsServiceInit(map){
    service = new google.maps.DirectionsService();
    display = new google.maps.DirectionsRenderer({map: map, draggable : true});    
}

/** 
 * @method getServiceDirections
 * @description retorna o o provedor de serviço
 * @return {service} service
 */
function getServiceDirections(){
    return service;
}

/** 
 * @method getDisplayDirections
 * @description retorna o o provedor de renderização
 * @return {display} display
 */
function getDisplayDirections(){
    return display;
}

/** 
 * @method getDisplayDirections
 * @description repassa o provedor de serviço para o calculo de rotas
 */
function directionsRoute(){
    calcRoute(service, display);
}


