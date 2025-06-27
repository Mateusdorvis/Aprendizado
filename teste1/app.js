alert('Vamos calcular a média !');
//let quantidadeNumeros = parseInt(prompt('Digite a quantidade de números : '))
let quantidadeNumeros = 3
let soma = 0
let loop = 0;
let nota;
//O que acontece aqui
// AO invés de escrever let nota1 = parseInt(prompt..).., let nota2 = parseInt(promp)
while (loop < quantidadeNumeros){
    loop++;//loop soma  + 1
    nota = parseInt(prompt(`${loop} Digite uma nota :`))
    let conta = soma + nota
    console.log(`Soma : ${soma} + ${nota} = ${conta}`); //debbug 
    soma+=nota;
}
let divisao = soma / quantidadeNumeros
console.log(`Média : ${soma} / ${quantidadeNumeros} = ${divisao}`); //debbug
let media = soma / quantidadeNumeros;
let p = document.createElement('p'); //cria um novo elemento
p.innerHTML =  ` Média : ${media <=5 ?`<span style="color:red">${media} Reprovado !</span>` :`<span style="color:green">${media} Aprovado !</span>`}`;//media é menor ou igual a 5 ? se sim exibe uma mensagem
document.body.appendChild(p);
