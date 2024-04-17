/*Escreva um código JavaScript utilizando o operador ternário para 
determinar se um aluno foi aprovado ou reprovado em um exame. A variável 
nota contém a pontuação do aluno. Atribua o resultado à variável status.*/
let nota = 75; 

let status = nota >= 60 ? "aprovado" : "reprovado";

console.log(`O aluno obteve ${nota} pontos e está ${status}.`);
