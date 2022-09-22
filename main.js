addEventListener("DOMContentLoaded",()=>{
    let fig=0,alt=0,bas=0,radio=0,pi=3.14
    fig=prompt("Elija la figura a la cual desee sacarle el area (t)triangulo  (c)circulo")
    if(fig=="t"){
        bas=Number(prompt("Ingrese la base del triangulo: "))
        alt=Number(prompt("Ingrese la altura del triangulo: "))
        let pr=(bas*alt)/2
        document.write(`El area del triangulo es de: ${pr}`)
    }if(fig=="b"){
        radio=Number(prompt("Ingrese el radio del circulo"))
        let rs=(pi*radio)**2
        document.write(`El area del circulo es de: ${rs}`)
    }
})

