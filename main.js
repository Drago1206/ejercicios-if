addEventListener("DOMContentLoaded",()=>{
    let par = 0, impa = 1;
    while(confirm(`Desea ingresar otro numero`)){
        let num=Number(prompt(`dijite  un numero`))
        eval(`${(num%2 == 0) ? "par+=num" : "impa*=num"}`);
    }
    alert(`La suma de los pares es: ${par}\nEl producto de los impares es: ${impa}`);
})


