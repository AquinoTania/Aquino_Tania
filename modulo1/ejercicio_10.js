let v2
let meses=["Enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre" , "diciembre" ]
v2=prompt("Ingresa un número del 1 al 12 de :","" );
for(i=0; i<meses.length; i++) {
   if(i==v2){
    alert(`El mes es: ${meses[i-1]}`)
    break;
   }
   
}





