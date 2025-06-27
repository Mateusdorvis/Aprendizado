/*let nome  = "Mateus"
console.log("Ola " + nome)*/
let quest = prompt('Qual sua linguagem de programação favorita ?');
let Dados = {
    'language' : null,
    'username' : null
};
let username = prompt('Qual seu nome ?');
Dados.language = quest;
Dados.username = username;

let log = `Linguagem favorita do usuário ${Dados.username} => `; 
console.log(log + `${Dados.language}`);
//DOM
let p = document.createElement('p');
p.innerHTML = log+` <span style="color:green; font-weight: bold;">${Dados.language}</span>`
p.style.fontFamily = 'Arial,sans-serif';


document.body.appendChild(p);

