addEventListener("DOMContentLoaded",()=>{
    let vr=0,iva=0,des=0
    vr=Number(prompt("Ingrese el valor que tiene que pagar: "))
    if(vr>13000){
    iva=(vr*0.15)
    des=(vr-iva)
    document.write(`El total con el descuento es de: ${des}`)
    }else{
        document.write(`No hay descuento , pida mas pa la proxima :3`)

    }
})

