//Escribir un programa que reciba el número del mes y devuelva si tiene 31, 30 o menos días.
//Por ejemplo: si ingreso el mes 12 el resultado debe decir tiene 31 días
let v2,v3
let meses=[["Enero",31],["febrero",28],["marzo",31], ["abril",30 ],["mayo",31 ],["junio",30],["julio",31],["agosto",31] ["septiembre",30],[ "octubre",31],[ "noviembre",30],[ "diciembre",31 ]];
v2=prompt("Ingresa un número del 1 al 12 de :","" );
for(i=0; i<meses.length; i++) {
   if(i==v2){
    v3=alert(`El mes y su Cantidad de dias son: ${meses[i-1]}`) 
   } 

}
  
