//var valores = [true, false, 2, "hola", "mundo", 3, "char"];
var arreglos=[`hola`, `mundo`,`char`];
arreglos.sort()
console.log(arreglos)

const Palabralarga= String => {
let mas=""
for(let i=0 ;i<String.length; i++){
    if(mas.length < String[i].length){
        mas = String[i]
    }
}
console.log("Palabra mas larga:"+mas) 
}

Palabralarga(["hola", "mundo","char"]);
