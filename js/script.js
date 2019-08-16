var categoriaElecta = 0;
var intentos = 0;
var puntos = 0;
var rCorrectas = 0;
var rIncorrectas =0;
const catMusica = 1, catDeporte = 2, catHistoria = 3, catGastronomia = 4, catGeografia = 5;

$(document).ready(function() {
	$("#registrar").on("click", function() { validarNombre(); }); // proceder a validar nombre del jugador
	var estado=0;
	$("#btnPrincipal").on("click", function() {
		//EL BOTON PRINCIPAL EMPEZARA LA SELECCION ALEATORIA
		if (estado == 0) {
		 	estado = 1;
			$("#btnPrincipal").attr("disabled","on");//deshabilitar boton principal
			inciarJuego();
		}
		//EL BOTON PRINCIPAL AVANZARA A LA PAGINA DE PREGUNTAS DE SELECCION MULTIPLE
		else if (estado == 1) { estado = 0; iniciarPreguntas(); }
	});

});//Cierra funcion main

function validarNombre() {
	var nom = $("#nombreJugador").val().length;//Obtener cantidad de caracteres ingresados
	//EL NOMBRE INGRESADO NO ES VALIDO
	if ( nom < 3 || nom > 10) {
		$(".validacion").css("visibility","visible"); //Mostrar mensaje de validacion
		$("#nombreJugador").css("border-color","#d50000"); //poner border en rojo de la caja de texto
	}
	//EL NOMBRE INGRESADO ES CORRECTO
	else {
		$(".validacion").css("visibility","hidden"); // ocultar mensaje de validacion
		$("#nombreJugador").css("border-color","rgba(0, 0, 0, 0.54)"); //poner border normal en la caja de texto
		$("#jugador").text($("#nombreJugador").val()); //mostrar el nombre del jugador en la barra informativa
		$(".cont-principal").animate({"margin-left":"-100%"},1000); //avanzar a la pagina de seleccion aleatoria
	}
}


function inciarJuego() {
	$(".flecha").css("opacity","1");//mostrar flecha
	//Mover flecha dinamicamente 
	for(i=1; i<=2; i++) { for(j=0; j<=80; j+=20) { $(".flecha").animate({top:j + "%"},500); } }

	//Obtener un numero aleatorio para seleccionar una categoria al azar
	var catSeleccionada = aleatorio(1, 5); 
	var v = -20;

	//desplazar flecha a la categoria seleccionada
	for(x=1; x<=5; x++) {
		v+=20;
		if (catSeleccionada == x) { 
			$(".flecha").animate({top: v + "%"},500, function() {
				//cambiar color y etiqueta al boton principal
				$("#btnPrincipal").css("background-color","#2196f3").val("Preguntas");	
				$("#btnPrincipal").removeAttr("disabled"); // habilitar boton principal
				categoriaElecta = catSeleccionada;
			}); 
		}
	}
}

function iniciarPreguntas() {
	$(".flecha").css("opacity","0");//ocultar flecha

	cargarPregunta();
	$(".cont-principal").animate({"margin-left":"-200%"},1000, function() { 
		$("#btnPrincipal").css("background-color","#00c853").val("Jugar");//Cambiar color y etiqueta al boton	 
	}); //Avanzar hacia la pagina de preguntas de seleccion multiple
	
}

//Generar numero aleatorio entre un rango minimo y un maximo
function aleatorio(min, max) {
	var resultado;
 	resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  	return resultado;
}

function cargarPregunta() {
	//Declaracion de variables
	var casos = [];
	var casosVF = [];
	var categoria;
	var indice;
	var comprobada = false;
	var seleccionado = false;

	restablecerEstilo();

	if (categoriaElecta == catMusica) { casos = musicaSM(); categoria = "MUSICA"; casosVF = musicaVF(); }
	else if (categoriaElecta == catDeporte) {  casos = deporteSM(); categoria = "DEPORTE"; casosVF = deporteVF(); }
	else if (categoriaElecta == catHistoria) {  casos = historiaSM(); categoria = "HISTORIA"; casosVF = historiaVF(); }
	else if (categoriaElecta == catGastronomia) { casos = gastronomiaSM(); categoria = "GASTRONOMIA"; casosVF = gastronomiaVF(); }
	else if (categoriaElecta == catGeografia) {  casos = geografiaSM(); categoria = "GEOGRAFIA"; casosVF = geografiaVF(); }


	indice = aleatorio(0, (casos.length-1)); //obtener numero aleatorio para la pregunta
	
	//Mostrar pregunta y opciones
	$(".cont-preg-SM .cat-etiqueta").text(categoria);
	$(".cont-preg-SM .pregunta-SM").text(casos[indice].pregunta);
	
	//mostrar opciones para respuesta
	for(i=1; i<=4; i++) { 
		$(".cont-preg-SM .opcion" + i).html('<input type="radio" name="opcion" id="opcion' + i + '" >' + casos[indice]["opcion" + i] + ' <i class="icon-correcto2"></i>');
	}

	//comprobacion de respuesta
	$(".cont-preg-SM .btnComprobacion").on("click", function() {
		//RESPUESTA SIN COMPROBAR
		if (comprobada == false) {
				//Recorrer opciones para encontrar cual se selecciono
				$(".cont-preg-SM label input").each(function() {
					if ( $(this).is(':checked') && seleccionado == false ) { 
						seleccionado = true; 
						comprobarRespuesta($(this).attr("id"), casos[indice].correcta, "fase-SM");
					}
				});

				if (seleccionado == true) {
					$(".cont-preg-SM label input").attr("disabled","on"); //Deshabilitar opciones
					comprobada = true;
					//cambiar color y etiqueta del boton de comprobacion
					$(".cont-preg-SM .btnComprobacion").css("background-color","#2196f3").val("Siguiente");
				}

		//RESPUESTA YA COMPROBADA 
		} else {
			comprobada = false 
			seleccionado = false;

			//Avanzar a la siguiente pagina y hablitar opciones de respuesta nuevamente
			$(".cont-preg-SM .btnComprobacion").off("click");
			cargarPreguntaVF(categoria, casosVF);

			$(".cont-principal").animate({"margin-left":"-300%"},1000, function() { 
				$(this).removeAttr("disabled");	
			});


		}
		
	});

}//Cierra funcion cargar preguntas

function cargarPreguntaVF(categoria, casos) {
	var comprobada = false;
	var seleccionado = false;
	var indice;

	restablecerEstilo();

	indice = aleatorio(0, (casos.length-1)); //obtener numero aleatorio para la pregunta
	//Mostrar pregunta y opciones
	$(".cont-preg-VF .cat-etiqueta").text(categoria);
	$(".cont-preg-VF .pregunta-VF").text(casos[indice].pregunta);

	//comprobacion de respuesta
	$(".cont-preg-VF .btnComprobacion").on("click", function() {
		//RESPUESTA SIN COMPROBAR
		if (comprobada == false) {
				//Recorrer opciones para encontrar cual se selecciono
				$(".cont-preg-VF label input").each(function() {
					if ( $(this).is(':checked') && seleccionado == false ) { 
						seleccionado = true;
						comprobarRespuesta($(this).attr("id"), casos[indice].correcta, "fase-VF");
					 }
				});

				if (seleccionado == true) {
					$(".cont-preg-VF label input").attr("disabled","on"); //Deshabilitar opciones
					comprobada = true;
					//cambiar color y etiqueta del boton de comprobacion
					$(".cont-preg-VF .btnComprobacion").css("background-color","#2196f3").val("Siguiente");
				}

		//RESPUESTA YA COMPROBADA 
		} else {
			comprobada = false 
			seleccionado = false;
			$(".cont-preg-VF .btnComprobacion").off("click");
			//Preguntar si ya termino sus intentos
			if (intentos >= 10) {
				//Mostrar ventana de resultados
				$(".nombre-ganador").text($("#jugador").text());//Mostrar nombre de jugador
				$(".puntaje-obtenido").text(puntos); //Mostrar puntos
				if  (puntos < 50) {
					$(".msj-ganaste").css("color","#d50000").text("PERDISTE");
					$(".msj-resultado").text("No tienes madera para ser Nica");
					//mostrar 0 estrellaS
					$(".cont-estrellas .est-1").css("color","rgba(0, 0, 0, 0.54)");
					$(".cont-estrellas .est-2").css("color","rgba(0, 0, 0, 0.54)");
					$(".cont-estrellas .est-3").css("color","rgba(0, 0, 0, 0.54)");
				}
				else if (puntos >= 50 && puntos < 70) {
					$(".msj-ganaste").css("color","#d50000").text("PERDISTE");
					$(".msj-resultado").text("Te falta poco sigue asi y lo lograras algun dia");
					//mostrar 1 estrella
					$(".cont-estrellas .est-1").css("color","yellow");
					$(".cont-estrellas .est-2").css("color","rgba(0, 0, 0, 0.54)");
					$(".cont-estrellas .est-3").css("color","rgba(0, 0, 0, 0.54)");
				}
				else if (puntos >= 70 && puntos < 100) {
					$(".msj-ganaste").css("color","#00c853").text("GANASTE");
					$(".msj-resultado").text("Felicitaciones eres un nica que se respeta");
					//mostrar 2 estrella
					$(".cont-estrellas .est-1").css("color","yellow");
					$(".cont-estrellas .est-2").css("color","yellow");
					$(".cont-estrellas .est-3").css("color","rgba(0, 0, 0, 0.54)");
				}
				else if (puntos == 100) {
					$(".msj-ganaste").css("color","#00c853").text("GANASTE");
					$(".msj-resultado").text("Felicitaciones eres un nica que se respeta");
					//mostrar 3 estrellas
					$(".cont-estrellas .est-1").css("color","yellow");
					$(".cont-estrellas .est-2").css("color","yellow");
					$(".cont-estrellas .est-3").css("color","yellow");
				}
				
				$(".correctas").text(rCorrectas);
				$(".incorrectas").text(rIncorrectas);

				$(".cont-principal").animate({"margin-left":"-400%"},1000);
			} else {
				//Mostrar seccion de juego para seleccion aleatoria
				$(".cont-principal").animate({"margin-left":"-100%"},1000);
			}
			

		}
		
	});
}

function comprobarRespuesta(elem, correcta, fase) {
		//LA RESPUESTA ES CORRECTA
		intentos++;
		if (elem == correcta) {
			//Agregar icono de respuesta CORRECTA
			$("#" + elem + " + i").removeClass("icon-incorrecto2");
			$("#" + elem + " + i").addClass("icon-correcto2");
			$("#" + elem + " + i").css({"opacity":"1", "color":"#00c853"});

			 // Cambiar el color de la pregunta a verde
			if (fase == "fase-SM") { $(".pregunta-SM").css("color","#00c853"); }
			else { $(".pregunta-VF").css("color","#00c853"); } 
			puntos+=10;
			rCorrectas++;
		} 
		//LA RESPUESTA ES INCORRECTA
		else { 
			//Agregar icono de respuesta INCORRECTA
			$("#" + elem + " + i").removeClass("icon-correcto2");
			$("#" + elem + " + i").addClass("icon-incorrecto2");
			$("#" + elem + " + i").css({"opacity":"1", "color":"#d50000"}); 

			// Cambiar el color de la pregunta a rojo
			if (fase == "fase-SM") { $(".pregunta-SM").css("color","#d50000"); }
			else { $(".pregunta-VF").css("color","#d50000"); }
			rIncorrectas++;
		}
		$("#intentos").text(intentos); //mostrar total de intentos
		$("#puntos").text(puntos);  //mostrar total de puntos
		$("." + elem).css("background-color","rgba(0, 0, 0, 0.1)"); //Aplicar fondo gris ala opcion seleccionada
}

function restablecerEstilo() {
		$(".pregunta-SM").css("color","rgba(0, 0, 0, 0.87)");
		$(".pregunta-VF").css("color","rgba(0, 0, 0, 0.87)");
		$("label input").attr("checked","false");
		$("label input").removeAttr("disabled"); //habilitar opciones
		$(".btnComprobacion").css("background-color","#00c853").val("Comprobar");
		$("label i").css("opacity","0");
		$(".opciones label").css("background-color","rgba(0, 0, 0, 0)"); //quitar fondo gris ala opcion seleccionada
}
