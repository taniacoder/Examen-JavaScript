
//reloj
function  digiClock(){
    var actualizarhora = function (){
        var fecha = new Date(),
            horas = fecha.getHours(),
            minutos = fecha.getMinutes();

		clock.textContent = horas + minutos;

    };

    actualizarhora();
    var intervalo = setInterval (actualizarhora, 1000);
}
//chat

$("#inputTexto").keypress(function(v){
	if(v.which == 13){

		activity();
	}
});


function getInputValue() {
	var inputBox = document.getElementById("inputTexto");
	return inputBox.value;
}
function activity() {

	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		h(inputBoxValue);
		clean();
	}
}
function h(itText) {
	var lista = document.getElementById("mensajes");
	//Crear el elemento
	var msg = document.createElement("div");
	msg.className = "msg";
	var elemento = document.createElement("div");
	elemento.className = "respt1";
	var texto = document.createElement("p");
	texto.className = "respt-tex";
	var hora = document.createElement("p");
	hora.className = "f-r";
	texto.innerHTML = itText;
	hora.innerHTML = "hora";


	lista.appendChild(msg);
	msg.appendChild(elemento)
	elemento.appendChild(texto);
	elemento.appendChild(hora);
	
}

function clean() {
	var inputBox = document.getElementById("inputTexto");
	inputBox.value = "";
	inputBox.focus();
}


//buscador

$(document).ready(function(){
  $('#buscador').keyup(function(){
     var nombres = $('.nombres');
     var buscando = $(this).val();
     var item='';
     for( var i = 0; i < nombres.length; i++ ){
         item = $(nombres[i]).html().toLowerCase();
          for(var x = 0; x < item.length; x++ ){
              if( buscando.length == 0 || item.indexOf( buscando ) > -1 ){
                  $(nombres[i]).parents('.item').show(); 
              }else{
                   $(nombres[i]).parents('.item').hide();
              }
          }
     }
  });
});


//scroll_abajo

setInterval(function(){
document.getElementById('vercont').scrollTop=5000;},200);