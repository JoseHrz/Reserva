//1. Constructor Reserva
//-----------------------------
function Res(nom,ape,ema,tel,dat,com){
  this.nombre       = nom;
  this.apellido     = ape;
  this.email        = ema;
  this.telefono     = tel;
  this.dat          = dat;
  this.comensales   = com;

  Res.prototype.cancellRes = function () {
    this.nombre       = "";
    this.apellido     = "";
    this.email        = "";
    this.telefono     = "";
    this.dat          = "";
    this.comensales   = "";
  };
}






//2. Función de petición Ajax - POST
//-----------------------------------
function ajaxReq(meth, url, funct){
  xhr.onreadystatechange = funct;
  xhr.open(meth,url);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  var query_string = makeQueryString();
  xhr.send(query_string);
}







//3. Convertir formulario en string - POST
//----------------------------------------
function makeQueryString(){
  var frmVals = document.getElementsByClassName('resField'),
      makeqStr    = "";


  for (var i = 0; i < frmVals.length; i++) {
    makeqStr += '&'+frmVals[i].name+'='+encodeURIComponent(frmVals[i].value);
    console.log(makeqStr);
  }
  var qStr = makeqStr+"&nocache="+Math.random();
  console.log(qStr);

  return qStr;
}
