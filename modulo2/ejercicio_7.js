let p=prompt("Ingresa un texto:")
let posi=" ",i=posi.length - 1;
while(i>=0){
    posi=posi + p[i];
    i = i-1;
}

document.write(posi)