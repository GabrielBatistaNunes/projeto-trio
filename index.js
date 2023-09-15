/* 
function lista(titulo, descricao, stats){
    return(`Eu sou ${titulo}, tenho ${descricao} anos, moro em ${stats} .`)
}
titulo = prompt("Título para sua tarefa")
descricao = prompt("Sua idade")
let stats = 0
if (stats = 0) {
stats = "pendente"    
}
console.log(lista(titulo, descricao, status));
  */
const quantidadeDePets = parseInt(prompt("Quantos bichinhos de estimação você tem?"));
if (quantidadeDePets === 0) {
  console.log("Que pena! Você pode adotar um pet!");
} else if (quantidadeDePets > 0) {
  const nomesDosPets = [];
  for (let i = 1; i <= quantidadeDePets; i++) {
    const nomePet = prompt(`Digite o nome do seu pet número ${i}:`);
    nomesDosPets.push(nomePet);
  }
  console.log("Nomes dos seus bichinhos de estimação:");
  console.log(nomesDosPets);
}
