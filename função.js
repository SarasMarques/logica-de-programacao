let operacao = prompt("Digite uma operação, 1-soma, 2-subtração, 3-multiplicação, 4-divisão")

if ((operacao >= 1) && (operacao <= 4)) {

    let num1 = Number(prompt("digite o primeiro valor da operação: "))
    let num2 = Number(prompt("digite o segundo valor da peração: "))

let soma          = (v1,v2) => v1 + v2
let subtração     = (v1,v2) => v1 - v2
let divisão       = (v1,v2) => v1 / v2
let multiplicação = (v1,v2) => v1 * v2


switch (operacao) {
    case '1':
        alert(`resultado ${soma(num1,num2)}`)
        break;

    case '2':
        alert(`resultado ${subtração(num1,num2)}`)
        break;

    case '3':
        alert(`resultado ${divisão(num1,num2)}`)
        break;

    case '4':
        alert(`resultado ${multiplicação(num1,num2)}`)
        break;

}
    let resp = 1
    
    while(resp == 1){
      
        let num1 = Number(prompt("digite o primeiro valor da operação: "))
    let num2 = Number(prompt("digite o segundo valor da peração: "))

    switch (operacao) {
    
        case '1':
            alert(`resultado ${soma(num1,num2)}`)
            break;
    
        case '2':
            alert(`resultado ${subtração(num1,num2)}`)
            break;
    
        case '3':
            alert(`resultado ${divisão(num1,num2)}`)
            break;
    
        case '4':
            alert(`resultado ${multiplicação(num1,num2)}`)
            break;
    
    }

     resp = Number(prompt("deseja continuar"))
    }
    
}