/*Escreva um código JavaScript utilizando o operador ternário para 
determinar se um ano é bissexto. A variável ano contém o ano a ser verificado. 
Atribua o resultado à variável resultado*/

let ano = 2024; 
let resultado = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ? "é bissexto" : "não é bissexto";

console.log(`O ano ${ano} ${resultado}.`);
