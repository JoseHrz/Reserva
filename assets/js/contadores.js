function empezar_contador01(){

        $({countNum: $('#contador01').text()}).animate({countNum: 70}, {
          duration: 2100,
          step: function() {
            $('#contador01').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('#contador01').text(this.countNum);
          }
        });

}


function empezar_contador02(){

        $({countNum: $('#contador02').text()}).animate({countNum: 250}, {
          duration: 2500,
          step: function() {
            $('#contador02').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('#contador02').text(this.countNum);
          }
        });

}


function empezar_contador03(){

        $({countNum: $('#contador03').text()}).animate({countNum: 180}, {
          duration: 2500,
          step: function() {
            $('#contador03').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('#contador03').text(this.countNum);
          }
        });

}
empezar_contador01();
empezar_contador02();
empezar_contador03();
