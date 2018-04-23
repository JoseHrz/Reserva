function openService(evt, serviceName) {
  // 01. Declarar variables
  var i, pillContent, pillLinks;

  // 02. Encontrar todos los elementos con el class "pill-content"
  //     y hacerlos desaparecer (al ser varios, se generará un array que
  //     recorreremos con un for-contador)
  pillContent = document.getElementsByClassName('pill-content');
  for(i = 0; i<pillContent.length; i++){
    pillContent[i].style.display = "none";
  }


  // 03. Encontrar todos los elementos con el class "pill"
  //     y quitarles la clase "active"
  pillLinks = document.getElementsByClassName('pill');
  for (i=0; i<pillLinks.length; i++){
    pillLinks[i].className = pillLinks[i].className.replace(' active', ' ');
    // Esta línea es la que me genera dudas
  }


  // 04. Capturamos con getElementById el elemento correspondiente al
  //     id que tiene el mismo nombre que el parámetro, y le mandamos
  //     un display block.
  document.getElementById(serviceName).style.display = "block";


  // 05. En el momento que le hemos por HTML pasamos un parámetro, estamos
  //     accediendo al objeto event de javascript, y por ende a sus métodos
  //     y propiedades. La propiedad currentTarget devuelve el elemento desde
  //     el que se dispara el evento. Le añadimos la clase Active con className
  //     y el operador de adición.
  evt.currentTarget.className += "active";

  // 06. Pill en el enlace

  // 07. Fade CSS Keyframe

  // 08. Fix para la altura del window

}
