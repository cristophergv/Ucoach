// JavaScript Document	
Lungo.Events.init({
	'swipeRight body' :function() {
		Lungo.Aside.show("lateral");
	},
	'swipeLeft body' :function() {
		Lungo.Aside.hide();
	}
	
	/*'tap section footer a:nth-child(2)' :function() {
		Lungo.Notification.show();
		$$.ajax({
			type: 'GET', // defaults to 'GET'
			url: obtenerVestidos,
			dataType: 'json', //'json'
			async: true,
			success: function(response) {
					var plantilla = '<ul class="indented">{{#posts}} <li id="{{id}}" class="thumb big selectable"> <img src="{{thumbnail}}"><div><div class="on-right text tiny">{{custom_fields.precio}}</div><strong>{{title}}</strong><small>{{{content}}}</small></div></li> {{/posts}}</ul>';
					var texto = Mustache.render(plantilla, response);
					$$('section#catalogo article#catalogo-art-1').html(texto)
					Lungo.Notification.hide();
			},//sucess
			error: function(xhr, type) { 
				alert("valio");
			 }//error
		});//AJAX
	},
	'tap section footer a:nth-child(3)' :function() {
		Lungo.Notification.show();
		$$.ajax({
			type: 'GET', // defaults to 'GET'
			url: obtenerComo,
			dataType: 'json', //'json'
			async: true,
			success: function(response) {
					var plantilla = '{{#page}} {{{content}}}{{/page}}';
					var texto = Mustache.render(plantilla, response);
					$$('section#como article#como-art-1').html(texto)
					Lungo.Notification.hide();
			},//sucess
			error: function(xhr, type) { 
				alert("valio");
			 }//error
		});//AJAX
		//Lungo.Router.article("my-section", "my-article");
	},
	'tap section#catalogo article#catalogo-art-1 ul li' :function(event) {
		var vestidoid= $$(this).attr('id');
		Lungo.Router.article("catalogo", "catalogo-art-2");
		Lungo.Notification.show();
		$$.ajax({
			type: 'GET', // defaults to 'GET'
			url: obtenerVestido + vestidoid,
			dataType: 'json', //'json'
			async: true,
			success: function(response) {
					var plantilla = '<div>{{#post}} <div align="center"><img src="{{{thumbnail}}}"></div><div align="center"><img src="{{{thumbnail}}}"></div>{{/post}}</div>';
					var texto = Mustache.render(plantilla, response);
					$$('section#catalogo article#catalogo-art-2').html(texto)
					Lungo.Notification.hide();
			},//sucess
			error: function(xhr, type) { 
				alert("valio");
			 }//error
		});//AJAX
		
	}*/
})
