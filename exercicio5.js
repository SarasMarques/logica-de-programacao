let numero = prompt("Digite um numero para saber se é positivo ou negativo")
/*
if((numero) <0){
    alert(`o numero ${numero} é negativo`)
}else{
    alert(`o numero ${numero} é positivo`)
}
*/
alert(`O numero ${numero} é ${ ((numero <0) == 0) ?   'positivo'  : 'negativo' }`)