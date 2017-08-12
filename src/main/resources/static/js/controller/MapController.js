/** 
 * @method Gilmar Carlos
 * 
 * @description Responsável por gerenciar funções no mapa
 * 
 */
var position;
var view;
var options;
var map;

/** 
 * @method init
 * @description inicializa o mapa e provedor de serviço de rotas
 */
function init() {
    view = document.getElementById('map');
    options = {zoom: 4, center: {lat: -15.623, lng: -47.878}};
    map = new google.maps.Map(view, options);
    directionsServiceInit(map);
};

/** 
 * @method addMarker
 * @description adiciona um marcador no mapa
 * @param {position} position
 */
function addMarker(position) {
    parseLatLng(map, position);
};

/** 
 * @method showMarkers
 * @description mostra todos os marcadores no mapa
 */
function showMarkers() {
    if (isMarker()) {
        setAllMarkers(map);
    } else {
        showNotification("Adicione uma localidade no mapa");
    }
};

/** 
 * @method hideMarkers
 * @description esconde todos os marcadores no mapa
 */
function hideMarkers() {
    if (isMarker()) {
        clearAllMarkers();
    } else {
        showNotification("Adicione uma localidade no mapa");
    }
};

/** 
 * @method showRoute
 * @description mostra a rota no mapa
 */
function showRoute() {
    if (isRoute()) {
        calcRoute(getServiceDirections(), getDisplayDirections());
        if(getDisplayDirections().getMap() == null){
            getDisplayDirections().setMap(map);
        }
        clearAllMarkers();
    } else {
        showNotification("Adicione pelo menos duas localidade no mapa");
    }
};

/** 
 * @method hideRoute
 * @description esconde a rota no mapa
 */
function hideRoute() {
    if (isRoute()) {
        hiddenRoute();
    } else {
        showNotification("Adicione pelo menos duas localidade no mapa");
    }
};

/** 
 * @method showNotification
 * @description mostra mensagens de alerta 
 * @param {mensagem} mensagem
 */
function showNotification(mensagem){
    	
    	$.notify({
        	icon: "notifications",
        	message: mensagem

        },{
            type: 'danger',
            timer: 2000,
            placement: {
                from: 'top',
                align: 'center'
            }
        });
	};



