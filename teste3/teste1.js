let numerosecreto = parseInt(Math.random() * 100 +1);
alert('Tenta adivinha um número de 1 a '+numerosecreto);
let numero;
let tentativas = 1
while (numero != numerosecreto){
  numero = parseInt(prompt('Digite um número :'))
  if (numero == numerosecreto){
    break;
  }
  else{
    alert(`${numero} é ${numero > numerosecreto ? 'menor' : 'maior'}`)
  }
  tentativas++;
}
alert(`Você acertou ! O número é mesmo ${numerosecreto} e você acertou com ${tentativas} tentativa${tentativas > 2 ? 's.' : '.'}`)