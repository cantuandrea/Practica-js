/* Funciones  */
function divisores(numero) {
    let total=0;
    for(let i=1; i<=numero;i++){
        if (numero%i==0) {
            total++;
        }
    }
    return total;
};

/* Para usarla en una línea de código en lugar de definirla arriba del programa */
const divisoresV2 = function(numero){
    let total=0;
    for(let i=1; i<=numero;i++){
        if (numero%i==0) {
            total++;
        }
    }
    return total;
};

const divisoresV3 = (numero) => {
    let total=0;
    for(let i=1; i<=numero;i++){
        if (numero%i==0) {
            total++;
        }
    }
    return total;
};

function calcular(){
    let numero = parseInt(document.getElementById("num").value);
    let resultado = document.getElementById("resul");
    resultado.value = divisores(numero);
}


/* Llamar la función */
/* console.log("Divisores de 33",divisores(33));
console.log("Divisores de 33",divisoresV2(33));
console.log("Divisores de 33",divisoresV3(33)); */

