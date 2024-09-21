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

        divisor != 0 ? resolve("Promesa Cumplida => ") : renject("no se puede cumplir la promesa")
        
        
    }).then((mensaje)=> console.log(mensaje))
    .catch((mensajeError)=> console.error(mensajeError))
    .finally(()=> console.log('fin de la promesa'))
}

suma(10,20);
division(1,0)