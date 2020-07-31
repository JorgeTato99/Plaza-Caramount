$(function() {


    var body_top = $( "body" ).scrollTop();
    var menu_nav = $("#header_nav_wrapper");

    var SliderModule = (function() {
  		var pb = {};
  		pb.el = $('#slider');
  		pb.items = {
  			panel: pb.el.find('li')
  		}

  		// Variables Necesarias
  		var SliderInterval,
  			currentSlider = 0,
  			nextSlider = 1,
  			lengthSlider = pb.items.panel.length;

  		// Initialize
  		pb.init = function(settings) {
  			this.settings = settings || {duration: 16000}
  			var output = '';

  			// Activamos nuestro slider
  			SliderInit();

  			for(var i = 0; i < lengthSlider; i++) {
  				if (i == 0) {
  					output += '<li class="active"></li>';
  				} else {
  					output += '<li></li>';
  				}
  			}

  			// Controles del Slider
  			$('#slider-controls').html(output).on('click', 'li', function (e){
  				var $this = $(this);
  				if (currentSlider !== $this.index()) {
  					changePanel($this.index());
  				};
  			});
  		}

  		var SliderInit = function() {
  			SliderInterval = setInterval(pb.startSlider, pb.settings.duration);
  		}

  		pb.startSlider = function() {
  			var panels = pb.items.panel,
  				controls = $('#slider-controls li');

  			if (nextSlider >= lengthSlider) {
  				nextSlider = 0;
  				currentSlider = lengthSlider-1;
  			}

  			// Efectos
  			controls.removeClass('active').eq(nextSlider).addClass('active');
  			panels.eq(currentSlider).fadeOut('slow');
  			panels.eq(nextSlider).fadeIn('slow');

  			// Actualizamos nuestros datos
  			currentSlider = nextSlider;
  			nextSlider += 1;
  		}

  		// Funcion para controles del slider
  		var changePanel = function(id) {
  			clearInterval(SliderInterval);
  			var panels = pb.items.panel,
  				controls = $('#slider-controls li');

  			// Comprobamos el ID
  			if (id >= lengthSlider) {
  				id = 0;
  			} else if (id < 0) {
  				id = lengthSlider-1;
  			}

  			// Efectos
  			controls.removeClass('active').eq(id).addClass('active');
  			panels.eq(currentSlider).fadeOut('slow');
  			panels.eq(id).fadeIn('slow');

  			// Actualizamos nuestros datos
  			currentSlider = id;
  			nextSlider = id+1;

  			// Reactivamos el slider
  			SliderInit();
  		}


  		return pb;
  	}());
  	SliderModule.init({duration: 4000});

    $( window ).scroll(function() {

      body_top = $( "body" ).scrollTop();
      if (body_top > 0) {
        menu_nav.addClass('nav_comprimido');
        $("#amenu1").addClass('a_comprimido');
        $("#amenu2").addClass('a_comprimido');
        $("#amenu3").addClass('a_comprimido');
        $("#amenu4").addClass('a_comprimido');
        $("#amenu5").addClass('a_comprimido');
        $("#amenu6").addClass('a_comprimido');
        $("#amenu7").addClass('a_comprimido');
        $("#amenu8").addClass('a_comprimido');
        $("#plazacaramountmenu").addClass('h2_comprimido');
        $("#logomenu").addClass('img_comprimido');
        $("#plazamenu").addClass('plaza_comprimido');
        $("#caramountmenu").addClass('caramount_comprimido');
      }else {
        menu_nav.removeClass('nav_comprimido');
        $("#amenu1").removeClass('a_comprimido');
        $("#amenu2").removeClass('a_comprimido');
        $("#amenu3").removeClass('a_comprimido');
        $("#amenu4").removeClass('a_comprimido');
        $("#amenu5").removeClass('a_comprimido');
        $("#amenu6").removeClass('a_comprimido');
        $("#amenu7").removeClass('a_comprimido');
        $("#amenu8").removeClass('a_comprimido');
        $("#plazacaramountmenu").removeClass('h2_comprimido');
        $("#logomenu").removeClass('img_comprimido');
        $("#plazamenu").removeClass('plaza_comprimido');
        $("#caramountmenu").removeClass('caramount_comprimido');
      }

      // console.log(  );
    });

    // Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function() {

  var formulario = document.formulario_registro,
    elementos = formulario.elements;

  // Funcion que se ejecuta cuando el evento click es activado

  var validarInputs = function() {
    for (var i = 0; i < elementos.length; i++) {
      // Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
      if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
        // Si es tipo texto, email o password vamos a comprobar que esten completados los input
        if (elementos[i].value.length == 0) {
          console.log('El campo ' + elementos[i].name + ' esta incompleto');
          elementos[i].className = elementos[i].className + " error";
          return false;
        } else {
          elementos[i].className = elementos[i].className.replace(" error", "");
        }
      }
    }

    // Comprobando que las contraseñas coincidan
    if (elementos.pass.value !== elementos.pass2.value) {
      elementos.pass.value = "";
      elementos.pass2.value = "";
      elementos.pass.className = elementos.pass.className + " error";
      elementos.pass2.className = elementos.pass2.className + " error";
    } else {
      elementos.pass.className = elementos.pass.className.replace(" error", "");
      elementos.pass2.className = elementos.pass2.className.replace(" error", "");
    }

    return true;
  };

  var validarRadios = function() {
    var opciones = document.getElementsByName('sexo'),
      resultado = false;

    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
        // Recorremos los radio button
        for (var o = 0; o < opciones.length; o++) {
          if (opciones[o].checked) {
            resultado = true;
            break;
          }
        }

        if (resultado == false) {
          elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
          console.log('El campo sexo esta incompleto');
          return false;
        } else {
          // Eliminamos la clase Error del radio button
          elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
          return true;
        }
      }
    }
  };

  var validarCheckbox = function() {
    var opciones = document.getElementsByName('terminos'),
      resultado = false;

    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].type == "checkbox") {
        for (var o = 0; o < opciones.length; o++) {
          if (opciones[o].checked) {
            resultado = true;
            break;
          }
        }

        if (resultado == false) {
          elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
          console.log('El campo checkbox esta incompleto');
          return false;
        } else {
          // Eliminamos la clase Error del checkbox
          elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
          return true;
        }
      }
    }
  };

  var enviar = function(e) {
    if (!validarInputs()) {
      console.log('Falto validar los Input');
      e.preventDefault();
    } else if (!validarRadios()) {
      console.log('Falto validar los Radio Button');
      e.preventDefault();
    } else if (!validarCheckbox()) {
      console.log('Falto validar Checkbox');
      e.preventDefault();
    } else {
      console.log('Envia');
      e.preventDefault();
    }
  };

  var focusInput = function() {
    this.parentElement.children[1].className = "label active";
    this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
  };

  var blurInput = function() {
    if (this.value <= 0) {
      this.parentElement.children[1].className = "label";
      this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
    }
  };

  // --- Eventos ---
  formulario.addEventListener("submit", enviar);

  for (var i = 0; i < elementos.length; i++) {
    if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
      elementos[i].addEventListener("focus", focusInput);
      elementos[i].addEventListener("blur", blurInput);
    }
  }

}())

}); // Fin DOM Ready
