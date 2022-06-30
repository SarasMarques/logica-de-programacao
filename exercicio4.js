let numero = prompt("Digite um numero para saber se é par ou impar")
/*
if((numero %2) == 0){
    alert(`o numero ${numero} é par`)
}else{
    alert(`o numero ${numero} é impar`)
}
*/
alert(`O numero ${numero} é ${ ((numero % 2) == 0) ?   'par'     : 'impar' }`)