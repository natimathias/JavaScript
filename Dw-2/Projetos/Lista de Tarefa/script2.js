const listaDeTarefas = document.querySelector(".container");
const contadorCriadas = document.querySelector(".criadas .numero");
const contadorConcluidas = document.querySelector(".concluidas .numero1");

const checkboxes = document.querySelectorAll(".check");
const totalTarefas = checkboxes.length;

// Inicializar contadores
contadorCriadas.textContent = totalTarefas;

// Atualizar contagem de tarefas concluídas
function atualizarContadores() {
  const concluida = document.querySelectorAll(".check:checked").length;
  contadorConcluidas.textContent = `${concluida} de ${totalTarefas}`;
}

// Adicionar evento para cada checkbox
checkboxes.forEach(checkbox => {
  checkbox.addEventListener("change", atualizarContadores);
});

// Atualizar contadores na carga inicial
atualizarContadores();
