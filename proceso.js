var nueve = document.getElementById('9');
var ocho = document.getElementById('8');
var siete = document.getElementById('7');
var seis = document.getElementById('6');
var cinco = document.getElementById('5');
var cuatro = document.getElementById('4');
var tres = document.getElementById('3');
var dos = document.getElementById('2');
var uno = document.getElementById('1');
var cero = document.getElementById('0');

var suma = document.getElementById('suma');
var resta = document.getElementById('resta');
var multi = document.getElementById('multi');
var div = document.getElementById('div');
var igual = document.getElementById('igual');
var factorial = document.getElementById('factori');
var display = document.getElementById('display');
var limpiar = document.getElementById('clear');

display.value = '';
//Eventos operadores
suma.addEventListener('click',function(){
  display.value = display.value+suma.value;
});
resta.addEventListener('click',function(){
  display.value = display.value+resta.value;
});
factorial.addEventListener('click',function(){
  display.value = display.value+factorial.value;
});
div.addEventListener('click',function(){
  display.value = display.value+div.value;
});
multi.addEventListener('click',function(){
  display.value = display.value+multi.value;
});
igual.addEventListener('click',operacion);

limpiar.addEventListener('click',function(){
  display.value = "";
});

//Eventos numeros
nueve.addEventListener('click',function(){
  display.value = display.value+nueve.value;
});

ocho.addEventListener('click',function(){
  display.value = display.value+ocho.value;
});

siete.addEventListener('click',function(){
  display.value = display.value+siete.value;
});

seis.addEventListener('click',function(){
  display.value = display.value+seis.value;
});

cinco.addEventListener('click',function(){
  display.value = display.value+cinco.value;
});

cuatro.addEventListener('click',function(){
  display.value = display.value+cuatro.value;
});

tres.addEventListener('click',function(){
  display.value = display.value+tres.value;
});

dos.addEventListener('click',function(){
  display.value = display.value+dos.value;
});

uno.addEventListener('click',function(){
  display.value = display.value+uno.value;
});

cero.addEventListener('click',function(){
  display.value = display.value+cero.value;
});


function operacion(){
   var aux , arreglo, ope = 0 , tam = 0 , y=0, bandera = false;

   arreglo = display.value.split(/[+\-*\/!]/g); //guardo numeros
   aux = display.value.split(/[0-9]/g);  // guardo operadores
   tam = aux.length;


    ope = parseFloat(arreglo[0]);

    for (var i = 0; i < tam; i++)
    {
      switch(aux[i])
      {
          case '+':
             ope = parseFloat(ope) +  parseFloat(arreglo[++y] );
             console.log(ope);
          break;
          case '-':
             ope = parseFloat(ope) - parseFloat(arreglo[++y]);
          break;
          case '/':
             ope = parseFloat(ope) /  parseFloat(arreglo[++y]);
          break;
          case '*':
             ope = parseFloat(ope) *  parseFloat(arreglo[++y]);
          break;
          case '!':
            if(arreglo.length  > 2){
               display.style.cssText = 'color:red';
               display.value = "ERROR";
            }else{
               display.style.cssText = 'color:black';
               bandera = true;
               display.value = factorial(arreglo[0]);
            }

          break;
      }
    }

    if(!bandera){
      display.value = ope;
   }

    function factorial(numero){
       var factorial = 1;

       for (var i = numero ; i >=1; i--) {
          factorial = factorial * i;
       }

       return factorial;
    }
}
