let operacao = prompt("Digite uma operação, 1-soma, 2-subtração, 3-multiplicação, 4-divisão")


//operacao está entre 1, 2, 3 e 4
//operacao = 5

//(operacao >= 1) && (operacao <= 4)
//   FALSO        &&     FALSO
//              FALSO



if ((operacao >= 1) && (operacao <= 4)) {

    let num1 = Number(prompt("digite o primeiro valor da operação: "))
    let num2 = Number(prompt("digite o segundo valor da peração: "))

    /* if (operacao == 1) {
        alert(`resultado ${num1 + num2}`)
    } else {

        if (operacao == 2) {
            alert(`resultado ${num1 - num2}`)
        } else {

            if (operacao == 3) {
                alert(`resultado ${num1 * num2}`)
            } else {

                if (operacao == 4) {
                    alert(`resultado ${num1 / num2}`)
                }

            }
        }
    }

      switch (operacao) {
        case '1':
            alert(`resultado ${num1 + num2}`)
            break;

        case '2':
            alert(`resultado ${num1 - num2}`)
            break;

        case '3':
            alert(`resultado ${num1 * num2}`)
            break;

        case '4':
            alert(`resultado ${num1 / num2}`)
            break;

    }

} else {
    alert(`Digite um valor entre 1 e 4!!!`)
}
*/

    switch (operacao) {
        case '1':
            alert(`resultado ${num1 + num2}`)
            break;

        case '2':
            alert(`resultado ${num1 - num2}`)
            break;

        case '3':
            alert(`resultado ${num1 * num2}`)
            break;

        case '4':
            alert(`resultado ${num1 / num2}`)
            break;

    }


    
} else {
    alert(`Digite um valor entre 1 e 4!!!`)
}