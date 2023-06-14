
    let b= prompt("Ingresa un texto:");
    let v= prompt("Ingresa cualquier vocal:");
    let i = 0;
while(i < b.length){
    if(b[i] != v){
        i = i + 1;
    }
    else{
        document.write (`La vocal:${v} esta en la posición:${i}`);
        i=b.length;
    }
       
 }















