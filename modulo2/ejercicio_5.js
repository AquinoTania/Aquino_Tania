v2=prompt("Ingrese un texto:")

function cade(cadena) {
    var resultado = "El texto \""+ cadena +"\"";


if(cadena == cadena.toUpperCase()) {
    resultado += " esta conformado solo por mayusculas";

}
else if(cadena == cadena.toLowerCase()) {
    resultado +=  "esta conformado solo por minusculas";
        }
        else{
           resultado += " esta conformado  por minusculas y mayusculas";  
        }
      return resultado;  
    
    
    }
   
   
alert (cade("Hola ")) ;
 
alert(cade("HoLa")) ;
 
 alert(cade("hola")) ;