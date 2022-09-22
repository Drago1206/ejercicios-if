addEventListener("DOMContentLoaded",()=>{
    let n1=0,n2=0,n3=0
    n1=Number(prompt("Ingrese el primer numero: "))
    n2=Number(prompt("Ingrese el segundo numero: "))
    n3=Number(prompt("Ingrese el tercer numero: "))
    if(n1>n2 && n1>n3){
        document.write(`EL primer numero que es el:${n1} es el mayor`)
    }if(n2>n1 && n2>n3){
        document.write(`El segundo numero el cual es: ${n2} es el mayor`)
    }else{
        document.write(`Èl tercer numero el cual es ${n3} es el mayor`)
    }
})
