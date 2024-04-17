/*Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é um bebê, criança, adolescente, adulto ou idoso. A 
variável idade contém a idade da pessoa. Atribua o resultado à variável 
categoria*/
let idade = 35; 
let categoria = idade < 2 ? "bebê" :
                idade < 12 ? "criança" :
                idade < 18 ? "adolescente" :
                idade < 65 ? "adulto" :
                             "idoso";

console.log(`Com ${idade} anos, a pessoa é ${categoria}.`);
