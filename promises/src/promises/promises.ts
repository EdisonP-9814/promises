/*
investigar sobre la funcion Flecha 
y los callback
**para mañana investigar Operador Ternario, Async .
*/

console.log("inicio");

new Promise((resolve, reject)=>{
    resolve('promesa cumplida')

    setTimeout(()=>{
        reject('Promesa no cumplida');
    },1000);
    
}).then((mensaje)=> console.log(mensaje))//.then es para cuando se cumple la promesa
.catch((mensajeError)=> console.error(mensajeError))//.cach es para cuando no se cumple la promesa
.finally(()=> console.log('fin de la promesa'))//es el que se cumple independiente da si se cumple o no la promesa


console.log("fin");