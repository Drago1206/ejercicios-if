addEventListener("DOMContentLoaded",()=>{
    let tem=0,pres=0
    tem=Number(prompt("Ingrese la temperatura: "))
    pres=Number(prompt("Ingrese la presion: "))
    if(tem>100 && pres>100){
        alert("ALARMA NOS VAMOS A MORIR :( ")
    }else{
        alert("TA NORMAL RELAJAO :3 ")
    }
})

