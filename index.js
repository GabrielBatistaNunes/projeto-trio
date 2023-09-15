/* const quantidadeDeTarefas = Number(prompt("Quantas tarefas você tem?"));
if (quantidadeDeTarefas === 0) {
  console.log("Ótimo, sem tarefas hoje");
} else if (quantidadeDeTarefas > 0) {
  const nomesDasTarefas = [];
  for (let i = 1; i <= quantidadeDeTarefas; i++) {
    const nomeTarefa = prompt(`Digite o nome da sua ${i}ª tarefa:`);
    nomesDasTarefas.push(nomeTarefa);
  }
  console.log("Nomes das suas tarefas:");
  console.log(nomesDasTarefas);
}
 */

 
function listaDeTarefas(){
    const quantidadeDeTarefas = Number(prompt("Quantas tarefas você tem?"));
if (quantidadeDeTarefas === 0) {
  console.log("Ótimo, sem tarefas hoje");
} else if (quantidadeDeTarefas > 0) {
  const nomesDasTarefas = [];
  //const descricao = [];
  for (let i = 1; i <= quantidadeDeTarefas; i++) {
    let nomeTarefa = prompt(`Digite o nome da sua ${i}ª tarefa:`);
    nomesDasTarefas.push("Nome da tarefa: " + nomeTarefa);
   // let textodescricao = prompt("Descrição da tarefa");
   // descricao.push("Descrição da tarefa: " + textodescricao);
  }

  console.log(nomesDasTarefas);
  //console.log(descricao);
}
    return

};
function descricaoDeTarefas() {
    for (let i = 1; i <= listaDeTarefas(); i++){
    const descricao = [];
    let textodescricao = prompt("Descrição da tarefa");
    descricao.push("Descrição da tarefa: " + textodescricao);
}
};


console.log(listaDeTarefas());
console.log(descricaoDeTarefas());

