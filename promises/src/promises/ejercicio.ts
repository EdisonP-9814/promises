function suma(a:number, b:number){
    new Promise((resolve, renject)=>{
        if(a>0 && b>0){
            resolve('Promesa Cumplida')
        }else{
            renject('promesa no cumplida')
        }
    }).then((mensaje)=> console.log(mensaje))
    .catch((mensajeError)=> console.error(mensajeError))
    .finally(()=> console.log('fin de la promesa'))
}


console.log(suma(10,20));