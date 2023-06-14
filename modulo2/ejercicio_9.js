let num1=parseInt(prompt('Ingrese la primera nota:'));
let num2=parseInt(prompt('Ingrese la segunda nota:'));
let num3=parseInt(prompt('Ingrese la tercera nota:'));
promedio=(num1+num2+num3)/3;
parseInt(promedio);
if(promedio>= 0 && promedio<=5){
    document.write('Desaprobado con:${promedio}');
}

else if(promedio>=6 && promedio == 8){
    document.write('Aprobado con:${promedio}');
}
else if(promedio>8 && promedio<=10){
    alert('Sobresaliente con:${promedio}');
}
  
