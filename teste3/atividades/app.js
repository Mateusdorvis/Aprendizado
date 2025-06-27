
function somar(){
let valor1 = document.getElementById('valor1');
console.log('Valor : '+valor1.value);
let valor2 = document.getElementById('valor2');
console.log("Valor 2 : "+valor2.value);
//resultado 
let resultado = parseInt(valor1.value) - parseInt(valor2.value);
//inserindo a resposta na página
let p = document.createElement('p');

p.innerHTML = `O resultado do ${valor1.value} - ${valor2.value} = <span style="color:green;font-weight:bold;">${resultado}</span>`;
//log
console.log(`O resultado de ${valor1.value} - ${valor2.value} = ${resultado}`)

p.style.fontFamily = 'Arial,sans-serif';
p.style.transition = '5s'
document.body.appendChild(p);

setTimeout(()=>{
p.style.color = 'red';
},2000)
}
