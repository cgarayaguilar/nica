
/*function musicaSM() {
	//Declaracion de variables
	var categoria = "MUSICA";
	var casos = [];
	var indice;
	var comprobada = false;
	var seleccionado = false;
	//AGREGAR PREGUNTAS
	casos[0] = {
		opcion1: "Katia Cardenal",
		opcion2: "Daniela Torrez",
		opcion3: "Indiana Sanchez",
		opcion4: "Elena de Cuadra",
		pregunta:"¿Cual de las siguientes personas es una cantante nicaraguense?",
		correcta:"opcion1"
	};
	casos[1] = {
		opcion1: "Rivas",
		opcion2: "Managua",
		opcion3: "Somoto",
		opcion4: "Matagalpa",
		pregunta:"¿Donde nacio Carlos Mejia Godoy?",
		correcta:"opcion3"
	};
	casos[2] = {
		opcion1: "Martha Maria Godoy",
		opcion2: "Maria Elsa Godoy",
		opcion3: "Sofia Godoy",
		opcion4: "Socorro Godoy",
		pregunta:"¿Como se llamaba la mama de Luis Enrique Godoy?",
		correcta:"opcion2"
	};
	casos[3] = {
		opcion1: "1953",
		opcion2: "1971",
		opcion3: "1982",
		opcion4: "1963",
		pregunta:"¿Luis enrique el príncipe del salsa nacio en?",
		correcta:"opcion4"
	};
	casos[4] = {
		opcion1: "Carlos Fonseca",
		opcion2: "Salvador Allende",
		opcion3: "Camilo Zapata",
		opcion4: "Pereira Gusteazoro",
		pregunta:"¿Cual de los siguientes personajes es un cantautor de Nicaragua?",
		correcta:"opcion3"
	};

	//TERMINAR DE AGREGAR PREGUNTAS
	
	indice = aleatorio(0, (casos.length-1)); //obtener numero aleatorio para la pregunta
	//Mostrar pregunta y opciones
	$(".cat-etiqueta").text(categoria);
	$(".pregunta-SM").text(casos[indice].pregunta);
	//mostrar opciones para respuesta
	for(i=1; i<=4; i++) { 
		$(".opcion" + i).html('<input type="radio" name="opcion" id="opcion' + i + '" >' + casos[indice]["opcion" + i] + ' <i class="icon-correcto2"></i>');
	}

	//comprobacion de respuesta
	$("#btnComprobacion").on("click", function() {
		//RESPUESTA SIN COMPROBAR
		if (comprobada == false) {
			//Recorrer opciones para encontrar cual se selecciono
			$("label input").each(function() {
				if ($(this).is(':checked')) { seleccionado = true; comprobarRespuesta($(this).attr("id"), casos[indice].correcta); }
			});

			if (seleccionado == true) {
				$("label input").attr("disabled","on"); //Deshabilitar opciones
				comprobada = true;
				//cambiar color y etiqueta del boton de comprobacion
				$("#btnComprobacion").css("background-color","#2196f3").val("Siguiente");
			}
		//RESPUESTA YA COMPROBADA 
		} else {
			comprobada = false 
			seleccionado = false;
			//Avanzar a la siguiente pagina y hablitar opciones de respuesta nuevamente
			$(".cont-principal").animate({"margin-left":"-300%"},1000, function() { $(this).removeAttr("disabled"); });	
		}
		
	});

}//Cierra la categoria musica */


function historiaSM() {
	//Declaracion de variables
	var categoria = "HISTORIA";
	var casos = [];
	var indice;
	var comprobada = false;
	var seleccionado = false;
	//AGREGAR PREGUNTAS
	casos[0] = {
		opcion1: "Costa Caribe (Cabo Gracias a Dios)",
		opcion2: "Pacifico",
		opcion3: "Puerto de Corinto",
		opcion4: "Mar Dulce (Lago cocibolca)",
		pregunta:"¿Cristóbal Colon descubrió Nicaragua en?",
		correcta:"opcion1"
	};
	casos[1] = {
		opcion1: "Francisco Hernandez",
		opcion2: "Cristóbal Colon",
		opcion3: "Jose dolores Estrada",
		opcion4: "Gil Gonzales Davila",
		pregunta:"¿Quien fue el primer explorador de conquista que visito partes de las regiones Nicaragüenses",
		correcta:"opcion4"
	};
	casos[2] = {
		opcion1: "14/09/1856",
		opcion2: "14/09/1821",
		opcion3: "14/09/1853",
		opcion4: "14/09/1876",
		pregunta:"¿En que fecha ocurrió la batalla de San Jacinto?",
		correcta:"opcion1"
	};
	/*
	casos[3] = {
		opcion1: "Una vez",
		opcion2: "Cuatro veces",
		opcion3: "Cinco veces",
		opcion4: "Diesiseis veces",
		pregunta:"¿Cuantas participaciones tiene Nicaragua en la copa mundial de beisbol?",
		correcta:"opcion4"
	};*/

	/*casos[4] = {
		opcion1: "Real Esteli",
		opcion2: "Managua F.C",
		opcion3: "Walter Ferreti",
		opcion4: "Diriamge F.C",
		pregunta:"¿En que equipo debuto Juan Barrera por primera vez en Nicaragua?",
		correcta:"opcion3"
	};*/
	//TERMINAR DE AGREGAR PREGUNTAS
	
	indice = aleatorio(0, (casos.length-1)); //obtener numero aleatorio para la pregunta
	//Mostrar pregunta y opciones
	$(".cat-etiqueta").text(categoria);
	$(".pregunta-SM").text(casos[indice].pregunta);
	//mostrar opciones para respuesta
	for(i=1; i<=4; i++) { 
		$(".opcion" + i).html('<input type="radio" name="opcion" id="opcion' + i + '" >' + casos[indice]["opcion" + i] + ' <i class="icon-correcto2"></i>');
	}

	//comprobacion de respuesta
	$("#btnComprobacion").on("click", function() {
		//RESPUESTA SIN COMPROBAR
		if (comprobada == false) {
			//Recorrer opciones para encontrar cual se selecciono
			$("label input").each(function() {
				if ($(this).is(':checked')) { seleccionado = true; comprobarRespuesta($(this).attr("id"), casos[indice].correcta); }
			});

			if (seleccionado == true) {
				$("label input").attr("disabled","on"); //Deshabilitar opciones
				comprobada = true;
				//cambiar color y etiqueta del boton de comprobacion
				$("#btnComprobacion").css("background-color","#2196f3").val("Siguiente");
			}
		//RESPUESTA YA COMPROBADA 
		} else {
			comprobada = false 
			seleccionado = false;
			//Avanzar a la siguiente pagina y hablitar opciones de respuesta nuevamente
			$(".cont-principal").animate({"margin-left":"-300%"},1000, function() { $(this).removeAttr("disabled"); });	
		}
		
	});

}/Cierra la categoria historia

function gastronomiaSM() {
	//Declaracion de variables
	var categoria = "GASTRONOMIA";
	var casos = [];
	var indice;
	var comprobada = false;
	var seleccionado = false;
	//AGREGAR PREGUNTAS
	casos[0] = {
		opcion1: "Vigoron",
		opcion2: "Pescado",
		opcion3: "Nacatamal",
		opcion4: "Quesillo",
		pregunta:"¿Cual de los siguientes platos típicos es de Tipitapa?",
		correcta:"opcion2"
	};
	casos[1] = {
		opcion1: "Mariscos",
		opcion2: "Gallo pinto",
		opcion3: "Sopa de queso",
		opcion4: "Nacatamal",
		pregunta:"¿En la costa atlántica se consume mas?",
		correcta:"opcion1"
	};
	casos[2] = {
		opcion1: "Purisima",
		opcion2: "Fin de año",
		opcion3: "Fiesta Patrias",
		opcion4: "Semana santa",
		pregunta:"¿En que temporada se consume la sopa de cuajada?",
		correcta:"opcion4"
	};
	casos[3] = {
		opcion1: "Purisima",
		opcion2: "Semana santa",
		opcion3: "Fin de año",
		opcion4: "La fiesta de los Aguisotes",
		pregunta:"¿En que temporada del año se consume mas los Gofios en Nicaragua?",
		correcta:"opcion1"
	};/*
	casos[4] = {
		opcion1: "Real Esteli",
		opcion2: "Managua F.C",
		opcion3: "Walter Ferreti",
		opcion4: "Diriamge F.C",
		pregunta:"¿En que equipo debuto Juan Barrera por primera vez en Nicaragua?",
		correcta:"opcion3"
	};*/
	//TERMINAR DE AGREGAR PREGUNTAS
	
	indice = aleatorio(0, (casos.length-1)); //obtener numero aleatorio para la pregunta
	//Mostrar pregunta y opciones
	$(".cat-etiqueta").text(categoria);
	$(".pregunta-SM").text(casos[indice].pregunta);
	//mostrar opciones para respuesta
	for(i=1; i<=4; i++) { 
		$(".opcion" + i).html('<input type="radio" name="opcion" id="opcion' + i + '" >' + casos[indice]["opcion" + i] + ' <i class="icon-correcto2"></i>');
	}

	//comprobacion de respuesta
	$("#btnComprobacion").on("click", function() {
		//RESPUESTA SIN COMPROBAR
		if (comprobada == false) {
			//Recorrer opciones para encontrar cual se selecciono
			$("label input").each(function() {
				if ($(this).is(':checked')) { seleccionado = true; comprobarRespuesta($(this).attr("id"), casos[indice].correcta); }
			});

			if (seleccionado == true) {
				$("label input").attr("disabled","on"); //Deshabilitar opciones
				comprobada = true;
				//cambiar color y etiqueta del boton de comprobacion
				$("#btnComprobacion").css("background-color","#2196f3").val("Siguiente");
			}
		//RESPUESTA YA COMPROBADA 
		} else {
			comprobada = false 
			seleccionado = false;
			//Avanzar a la siguiente pagina y hablitar opciones de respuesta nuevamente
			$(".cont-principal").animate({"margin-left":"-300%"},1000, function() { $(this).removeAttr("disabled"); });	
		}
		
	});

}/Cierra la categoria gastronomia

function geografiaSM() {
	//Declaracion de variables
	var categoria = "GEOGRAFIA";
	var casos = [];
	var indice;
	var comprobada = false;
	var seleccionado = false;
	//AGREGAR PREGUNTAS
	casos[0] = {
		opcion1: "Costa Rica",
		opcion2: "Honduras",
		opcion3: "Océano Pacifico",
		opcion4: "Mar Caribe",
		pregunta:"¿Nicaragua limita al norte con?",
		correcta:"opcion2"
	};
	casos[1] = {
		opcion1: "Asososca",
		opcion2: "Apanas",
		opcion3: "Apoyo",
		opcion4: "Nejapa",
		pregunta:"¿Cual es el único Lago artificial que tiene Nicaragua?",
		correcta:"opcion2"
	};
	casos[2] = {
		opcion1: "Rio grande de Matagalpa",
		opcion2: "Rio San Juan",
		opcion3: "Rio Tipitapa",
		opcion4: "Rio coco",
		pregunta:"¿Cual de estos ríos es del océano pacifico?",
		correcta:"opcion3"
	};
	/*
	casos[3] = {
		opcion1: "Masaya",
		opcion2: "Granada",
		opcion3: "Managua",
		opcion4: "Rivas",
		pregunta:"¿El gran lanzador Denis Martinez nacio en?",
		correcta:"opcion2"
	};*/
	/*
	casos[4] = {
		opcion1: "Real Esteli",
		opcion2: "Managua F.C",
		opcion3: "Walter Ferreti",
		opcion4: "Diriamge F.C",
		pregunta:"¿En que equipo debuto Juan Barrera por primera vez en Nicaragua?",
		correcta:"opcion3"
	};*/
	//TERMINAR DE AGREGAR PREGUNTAS
	
	indice = aleatorio(0, (casos.length-1)); //obtener numero aleatorio para la pregunta
	//Mostrar pregunta y opciones
	$(".cat-etiqueta").text(categoria);
	$(".pregunta-SM").text(casos[indice].pregunta);
	//mostrar opciones para respuesta
	for(i=1; i<=4; i++) { 
		$(".opcion" + i).html('<input type="radio" name="opcion" id="opcion' + i + '" >' + casos[indice]["opcion" + i] + ' <i class="icon-correcto2"></i>');
	}

	//comprobacion de respuesta
	$("#btnComprobacion").on("click", function() {
		//RESPUESTA SIN COMPROBAR
		if (comprobada == false) {
			//Recorrer opciones para encontrar cual se selecciono
			$("label input").each(function() {
				if ($(this).is(':checked')) { seleccionado = true; comprobarRespuesta($(this).attr("id"), casos[indice].correcta); }
			});

			if (seleccionado == true) {
				$("label input").attr("disabled","on"); //Deshabilitar opciones
				comprobada = true;
				//cambiar color y etiqueta del boton de comprobacion
				$("#btnComprobacion").css("background-color","#2196f3").val("Siguiente");
			}
		//RESPUESTA YA COMPROBADA 
		} else {
			comprobada = false 
			seleccionado = false;
			//Avanzar a la siguiente pagina y hablitar opciones de respuesta nuevamente
			$(".cont-principal").animate({"margin-left":"-300%"},1000, function() { $(this).removeAttr("disabled"); });	
		}
		
	});

}/Cierra la categoria geografia