addEventListener("DOMContentLoaded",()=>{


    let men=(prompt("Dijite cual es su tipo de membresia A, B, C, D:"))
    let num1=Number(prompt("dijite el valor  del helado:"))
    //proceso de datos
    if (men=="A"){
        let   res=num1*0.10
        let   res2=num1-res
        document.write(`su valordel helado es de:,${res2},"con el descuento de la membrecia tipo A`)
    }else if (men=="B"){
        let   res=num1*0.15
        let   res2=num1-res
        document.write(`su valordel helado es de:,${res2},"con el descuento de la membrecia tipo B`)
    }if (men== "C"){
        let   res=num1*0.20
        let   res2=num1-res
        document.write(`su valordel helado es de:,${res2},"con el descuento de la membrecia tipo C`)
    }else if (men=="D"){
        document.write(` su valor del helado es de : ,${num1},  sin nungun descuento`)
    }
})


