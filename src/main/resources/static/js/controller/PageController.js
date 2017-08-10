/** 
 * @method Gilmar Carlos
 * 
 * @description Responsável por gerenciar funções da página
 * 
 */

var end = document.getElementById("end");
var showRouteBtn = document.getElementById("show_route");
var showMarkersBtn = document.getElementById("show_markers");
var hideMarkersBtn = document.getElementById("hide_markers");
var hideRouteBtn = document.getElementById("hide_route");
var searchBtn = document.getElementById("btn_search");

showRouteBtn.addEventListener("click", showRoute);
hideRouteBtn.addEventListener("click", hideRoute);
showMarkersBtn.addEventListener("click", showMarkers);
hideMarkersBtn.addEventListener("click", hideMarkers);
searchBtn.addEventListener("click", addAddresss);


/** 
 * @method addAddress
 * @description repassa o endereço para o método addMarker
 * @param {e} evento
 */
function addAddress(e){
    
    if(e.key == "Enter"){
        addMarker(end.value);
        end.value = "";
        end.focus();
    }
    
}

/** 
 * @method addAddresss
 * @description repassa o endereço para o método addMarker
 */
function addAddresss(){
        addMarker(end.value);
        end.value = "";
        end.focus();
}




