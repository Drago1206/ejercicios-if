addEventListener("DOMContentLoaded",()=>{
    let N=0
    N=Number(prompt("Ingrese un numero positivo: "))
    if(N<100 && N>0){
        alert(`El numero: ${N} es menor que 100`)
    }else{
        alert("El numero tiene que ser positivo")
    }
})
