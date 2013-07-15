// JavaScript Document

/*
******** Esta funcion recibe el nombre de la categoria, el contenedor y la descripción de la misma
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
function obtenerVestidos (id,target_div,descr) {
		$.mobile.loading( 'show', {
			text: "Cargando...",
			textVisible: true,
			theme: 'a'
		});
	   vestidos = "";
	   jQuery.ajax({
		   url: consobtenerVestidos,
		   dataType: 'json',
		   success: function(informacion) {
			   
			  if(informacion.count != "" || informacion.count != 0) {
				  
				  vestidos += '<fieldset class="ui-grid-a"><div class="ui-grid-a">';
				  for(var i=0; i<informacion.count; i++) {
						vestidos += '<div class="ui-block-a"><div class="foto"><img src="'+ informacion.posts[i].thumbnail + '"></div><div class="titulo"><a href="' + informacion.posts[i].title +'">' + informacion.posts[i].title + '</a>' + '</div></div>';
					}//FOR
					$('.contenedor-vestidos').empty();
					vestidos += "</div>";
				   $('.contenedor-vestidos').append(vestidos); 
				   $.mobile.loading('hide');
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}

/*
******** Esta funcion recibe el nombre de la categoria, el contenedor y la descripción de la misma
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
function obtenerComo (id,target_div,descr) {
		$.mobile.loading( 'show', {
			text: "Cargando...",
			textVisible: true,
			theme: 'a'
		});
	   jQuery.ajax({
		   url: consobtenerComo,
		   dataType: 'json',
		   success: function(informacion) {
			   $('.contenedor-como').empty();
			  if(informacion.status == 'ok') {
					$('.contenedor-como').append(informacion.page.content);
				   $.mobile.loading('hide');
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}
