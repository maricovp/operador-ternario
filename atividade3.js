/* Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa pode dirigir ou não. A variável idade contém a idade 
da pessoa. Atribua o resultado à variável permissao*/

let idade = 20; 
let permissao = idade >= 18 ? "Pode dirigir" : "Não pode dirigir";

console.log(`Com ${idade} anos, a pessoa ${permissao}.`);
