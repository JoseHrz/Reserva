//Seleccionamos el elemento con el id menu

var menu 		= document.getElementById('menu'),
		logo 		= document.getElementById('logo');

//Tenemos que saber la distancia que hay entre el inicio de la página y el menú principal. Para ello usaremos este pequeño truquito

/*  alert(menu.offsetTop);  */    /* offsetTop nos calcula la distancia entre el inicio de la página y el id menu que hemos guardado
en la variable menu. En nuestro caso esta distancia es de 77px.


1. Usamos offsetTop para guardar la distancia entre el inicio de la página y el id menú en una variable

2. Creamos un evento que se desarrollará cuando hagamos scroll, y el cual ejecutará una función.

3. Esta función tendrá dentro una condicional if. Para entender esta condicional tendremos que entender antes que el método pageYOffset
agregado al objeto window, especifica la cantidad scroll que realiza un usuario

4. El if establecerá que si la distancia de scroll realizada es mayor que la variable "altura" (la cual nos está guardando la distancia en px que
hay entre el inicio de la página y el id menu) se le añadirá la clase "fixed" al elemento menu

*/
var altura = menu.offsetTop;//1
window.addEventListener('scroll', function(){//2
	if(window.pageYOffset > altura){
		menu.classList.add('stick');
	}else{
		menu.classList.remove('stick');
	}


	if($('#menu').hasClass('stick')){
		logo.setAttribute('src', 'img/comun/logo-fixed.png');
	}else{
		logo.setAttribute('src', 'img/comun/logo.png');
	}
});





var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop){
		 $('#menu').css('top','-74px');
   } else {
      $('#menu').css('top','0px');
   }
   lastScrollTop = st;
});
