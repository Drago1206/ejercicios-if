addEventListener("DOMContentLoaded",()=>{
    let carg=0,salp=0,sala=0,hrs=0
    carg=(prompt("Elija el cargo que le corresponda planta(p) Administrativo(a) "))
    hrs=Number(prompt("Ingrese las horas trabajadas: "))
    if(carg=="p"){
    salp=(hrs*2000)
    document.write(`El total del pago dependiendo de sus${hrs} horas siendo de planta  es de: ${salp}`)
    }if(carg=="a"){
        sala=(hrs*10000)
        document.write(`El total de su paga  de sus${hrs} horas siendo administrativo es de: ${sala}`)

    }
})

