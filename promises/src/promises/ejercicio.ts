function suma(a:number, b:number){
    new Promise((resolve, renject)=>{
        if(a>0 && b>0){
            resolve('Promesa Cumplida')
            console.log("Solucion de la Suma = ",a+b)
        }else{
            renject('promesa no cumplida')
        }
    }).then((mensaje)=> console.log(mensaje))
    .catch((mensajeError)=> console.error(mensajeError))
    .finally(()=> console.log('fin de la promesa'))
}

function division(dividendo:number, divisor:number){
    new Promise((resolve, renject)=>{
        if(divisor!=0){
            resolve("Promesa Cumplida => ")
            console.log("Solucion de la division")
        }else{
            renject("no se puede cumplir la promesa")
            console.error("No se puede resolver la DIVISION = "+dividendo/divisor)
        }
    }).then((mensaje)=> console.log(mensaje))
    .catch((mensajeError)=> console.error(mensajeError))
    .finally(()=> console.log('fin de la promesa'))
}

suma(10,20);
division(1,0)