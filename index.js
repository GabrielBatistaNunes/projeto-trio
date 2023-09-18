// Variável para armazenar as tarefas
const tarefas = [];

// Função para adicionar uma nova tarefa
function adicionarTarefa() {
  const quantidadeDeTarefas = Number(prompt("Quantas tarefas você deseja adicionar?"));
  if (quantidadeDeTarefas === 0) {
    console.log("Ótimo, sem tarefas hoje!");
    return;
  }
  
  for (let i = 0; i < quantidadeDeTarefas; i++) {
    const titulo = prompt(`Digite o título da ${i + 1}ª tarefa:`);
    const descricao = prompt(`Digite a descrição da ${i + 1}ª tarefa:`);
    const novaTarefa = {
      titulo,
      descricao,
      status: "pendente"
    };
    tarefas.push(novaTarefa);
    console.log(`Tarefa ${i + 1} adicionada!`);
  }
}

// Função para listar todas as tarefas
function listarTarefas() {
  if (tarefas.length === 0) {
    console.log("Não há tarefas cadastradas.");
  } else {
    console.log("Lista de Tarefas:");
    tarefas.forEach((tarefa, i) => {
      console.log(`Tarefa ${i + 1}:`);
      console.log(`Título: ${tarefa.titulo}`);
      console.log(`Descrição: ${tarefa.descricao}`);
      console.log(`Status: ${tarefa.status}`);
      console.log("----------------------");
    });
  }
}

// Função para marcar uma tarefa como concluída
function marcarComoConcluida() {
  const i = Number(prompt("Digite o número da tarefa que deseja marcar como concluída:")) - 1;
  if (i >= 0 && i < tarefas.length) {
    tarefas[i].status = "concluída";
    console.log("Tarefa marcada como concluída!");
  } else {
    console.log("Tarefa não encontrada.");
  }
}

// Função para editar uma tarefa
function editarTarefa() {
  if (tarefas.length === 0) {
    console.log("Não há tarefas para editar.");
    return;
  }

  const i = Number(prompt("Digite o número da tarefa que deseja editar:")) - 1;
  if (i >= 0 && i < tarefas.length) {
    const novoTitulo = prompt("Digite o novo título da tarefa:");
    const novaDescricao = prompt("Digite a nova descrição da tarefa:");
    tarefas[i].titulo = novoTitulo;
    tarefas[i].descricao = novaDescricao;
    console.log("Tarefa editada!");
  } else {
    console.log("Tarefa não encontrada.");
  }
}

// Função para excluir uma tarefa
function excluirTarefa() {
  if (tarefas.length === 0) {
    console.log("Não há tarefas para excluir.");
    return;
  }

  const i = Number(prompt("Digite o número da tarefa que deseja excluir:")) - 1;
  if (i >= 0 && i < tarefas.length) {
    const tarefaExcluida = tarefas.splice(i, 1);
    console.log(`Tarefa "${tarefaExcluida[0].titulo}" excluída!`);
  } else {
    console.log("Tarefa não encontrada.");
  }
}

// Loop principal para interação com a pessoa
while (true) {
  const opcao = prompt("Escolha uma opção:\n1. Adicionar Tarefa\n2. Listar Tarefas\n3. Marcar Tarefa como Concluída\n4. Editar Tarefa\n5. Excluir Tarefa\n6. Sair");

  if (opcao === null || opcao === "6") {
    console.log("Programa encerrado.");
    break; // Encerra o loop quando a pessoa seleciona "Sair" ou fecha o prompt
  }

  switch (opcao) {
    case "1":
      adicionarTarefa();
      break;
    case "2":
      listarTarefas();
      break;
    case "3":
      marcarComoConcluida();
      break;
    case "4":
      editarTarefa();
      break;
    case "5":
      excluirTarefa();
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}
