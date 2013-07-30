// JavaScript Document
function noseTomo() {
	Lungo.Notification.error(
				"Error",                      //Title
				"No se pudo obtener la foto, intentalo nuevamente",     //Description
				"cancel",                     //Icon
				3,                            //Time on screen
				afterNotification             //Callback function
			);
}
function seTomo(imageURI) {
	$$(".bloque-fotos").append('<img src="' + imageURI + '" width="100px" height="100px">');
}