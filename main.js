addEventListener("DOMContentLoaded",()=>{
    let bas=0, alt=0
    bas=Number(prompt("Ingrese la base del rectangulo para sacar su area: "))
    alt=Number(prompt("Ingrese la altura del triangulo: "))
    if(bas>0 && alt>0){
        let pr=(bas*alt)
        document.write(`El area del rectangulo es: ${pr}`)
    }else{
        alert("Los valores tiene que ser poositivos")
    }
})

