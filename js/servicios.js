// JavaScript Document
App.Services = (function(Lungo,app,undefined) {
	var vestidos = function() {
		//Lungo.Notification.show();
		$$.ajax({
			type: 'GET', // defaults to 'GET'
			url: servicio,
			dataType: 'json', //'json'
			async: true,
			success: function(response) {
					/*var plantilla = '<ul class="indented">{{#posts}} <li id="{{id}}" class="thumb big selectable"> <img src="{{thumbnail}}"><div><div class="on-right text tiny">{{custom_fields.precio}}</div><strong>{{title}}</strong><small>{{{content}}}</small></div></li> {{/posts}}</ul>';
					var texto = Mustache.render(plantilla, response);
					$$('section#catalogo article#catalogo-art-1').html(texto)
					//Lungo.Notification.hide();*/
			},//sucess
			error: function(xhr, type) { 
				alert("valio");
			 }//error
		});//AJAX
	};
	return {
		vestidos: vestidos
	}
})(Lungo,App)