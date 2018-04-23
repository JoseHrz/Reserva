//1. Variables para elementos HTML
//--------------------------------------------------------
var servMessg  = document.getElementById('servMessg'),
    messUl     = document.createElement('ul'),
    resField   = document.getElementsByClassName('resField');



//2. Imprimir en pantalla
//--------------------------------------------------------
function printRes(){
  for (var i = 0; i < resField.length; i++) {
    var messLi = document.createElement('li');
    messLi.textContent = resField[i].value;
    messUl.appendChild(messLi);
  }


  servMessg.appendChild(messUl);

  var suResTxt  = 'Estos son los datos de su reserva',
      suRes     = document.createElement('p');
  suRes.textContent = suResTxt;

  servMessg.insertBefore(suRes,messUl);

  var btnCancell = document.createElement('button');
  servMessg.appendChild(btnCancell);
  btnCancell.setAttribute('id','btnCancell');
  btnCancell.textContent="Cancelar reserva";

  var btnConfirm = document.createElement('button');
  servMessg.appendChild(btnConfirm);
  btnConfirm.setAttribute('id','btnConfirm');
  btnConfirm.textContent="Confirmar reserva";

}



function printCancellRes(){
  servMessg.innerHTML = '<h1 style="color:tomato; font-weight:200;">Cancelación de reserva</h1><h2 style="color:#c1c1c1; font-style:italic; font-weight:200;">Su reserva ha sido cancelada</h2>';
}


//3. Función de retorno para llamada Ajax
//--------------------------------------------------------
function callBack(){
  if(xhr.readyState === readyStateComplete){
    if(xhr.status === 200){
      servMessg.innerHTML = xhr.responseText;
    }else if(xhr.status === 404){
      servMessg.innerHTML = '<h1>Error 404</h1> <br>'+'<h2>No se ha podido realizar la reserva debido a un error en el servidor.</h2>';
    }else if(xhr.status === 500){
      servMessg.innerHTML = '<h1>Error 404</h1> <br>'+'<h2>No se ha podido realizar la reserva debido a un error en el servidor.</h2>';
    }
  }else if (xhr.readyState === readyStateLoading || xhr.readyState === readyStateLoaded || xhr.readyState === readyStateInteractive) {
    servMessg.innerHTML = '<img src="assets/img/ajax-loader.gif" alt="">';
  }
}
