addEventListener("DOMContentLoaded",()=>{
    let n1=0,n2=0,n3=0
    n1=Number(prompt(`ingrese el pirmer numero:`))
    n2=Number(prompt(`ingrese el segundo numero:`))
    n3=Number(prompt(`ingrese el tercero numero:`))

        if (num1>num2 && num1>num3){
        document.write(`El numero 1 el cual es: ${n1}es mayor`)
        }else if (num2>num3 && num2>num1){
        document.write(`El numero 2 el cual es: ${n2}es mayor`)
        }else{
        document.write(`el numero 3 el cual es: ${n3}es mayor`)

        }if (num1<=num2 && num1<=num3){
        document.write(`El numero 1 el cual es: ${n1}es menor`)
        }else if (num2<=num3 & num2<=num1){
        document.write(`El numero 2 el cual es: ${n2}es menor`)
        }else{
        document.write(`el numero 3 el cual es: ${n3}es menor`)

        }if (num1==num2){
        document.write(`El numero 1 y 2 son iguales `)
        }else if (num2==num3){
        document.write(`El numero 2 y 3 son iguales`)
        }else if(num3==num1){
        document.write(`el numero 1 y 3 son iguales`)
    }
})

