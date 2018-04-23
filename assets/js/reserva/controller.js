//1. Variables
//--------------------------------------------------------
var btValRes                = document.getElementById('btValRes'),
    nom                     = document.getElementById('nom'),
    ape                     = document.getElementById('ape'),
    ema                     = document.getElementById('ema'),
    tel                     = document.getElementById('tel'),
    dat                     = document.getElementById('dat'),
    com                     = document.getElementById('com'),
    readyStateUninitialized = 0,
    readyStateLoading       = 1,
    readyStateLoaded        = 2,
    readyStateInteractive   = 3,
    readyStateComplete      = 4,
    xhr                     = new XMLHttpRequest();






//2. Funciones a pasar como EventHandler
//--------------------------------------------------------

// CREAR OBJETO / IMPRIMIR DATOS - Conexión entre el objeto y el DOM
var newRes = function(e){

  e.preventDefault();

  var res = new Res(nom.value, ape.value, ema.value, tel.value, dat.value, com.value);
  printRes();

  console.table(res);

  var btnConfirm = document.getElementById('btnConfirm'),
      btnCancell = document.getElementById('btnCancell'),

      sendRes = function(){//CONFIRMAR RESERVA - Enviar Datos / Recibir respuesta
        ajaxReq('POST','backend/server-mssg/mock.html',callBack);
      },
      cancellRes = function(){//CANCELAR DATOS - No enviar datos / Recibir respuesta
        printCancellRes();
        res.cancellRes();
        console.table(res);
        console.log('Se han vaciado las propiedades del objeto');
      };

  btnConfirm.addEventListener('click', sendRes);
  btnCancell.addEventListener('click', cancellRes);
}



//3. Eventos
//--------------------------------------------------------
btValRes.addEventListener('click', newRes);
