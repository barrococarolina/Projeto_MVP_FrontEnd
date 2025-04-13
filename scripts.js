const baseURL = "http://127.0.0.1:5000"; // ajuste se sua API estiver em outro host/porta
const urlDeleteAluno = "http://127.0.0.1:5000/aluno";
let idAluno = "";
let idTurma = "";

document.getElementById("formAluno").addEventListener("submit", async (e) => {
  e.preventDefault();

  const aluno = {
      nome: document.getElementById("nomeAluno").value,
      email: document.getElementById("emailAluno").value,
      faltas: parseInt(document.getElementById("faltasAluno").value),
      turmaId: parseInt(document.getElementById("turmaIdAluno").value)
    };

  const response = await fetch(`${baseURL}/aluno`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(aluno)
    });

  if (response.ok) {
      alert("Aluno cadastrado!");
      carregarAlunos();
    } else {
      alert("Erro ao cadastrar aluno");
    }
});

async function carregarAlunos() {
  const res = await fetch(`${baseURL}/aluno`);
  const text = await res.text();

  try {
     // Tentar converter o texto em JSON
     const dados = JSON.parse(text);

     const lista = document.getElementById("listaAlunos");
     lista.innerHTML = "";

     dados['Lista de aluno']?.forEach((aluno) => {
          const li = document.createElement("li");
          li.id = `aluno-${aluno.id}`;  // Adiciona um id único para cada aluno
          li.innerText = `${aluno.nome} - ${aluno.email}`;
          lista.appendChild(li);

          // Criando o botão de excluir
          const excluir = document.createElement("button");
          excluir.innerHTML = '<img src="ícones/excluir.png" alt="Excluir" width="15px" height="15px">';
          excluir.style.cursor = 'pointer'; // Tornando o cursor de "mãozinha" ao passar sobre o botão

          // Adicionando um evento de clique ao botão excluir
          excluir.addEventListener("click", (e) => {
              const confirmacao = confirm("Deseja realmente excluir o aluno?");
              // Obtendo o ID do aluno
              idAluno = aluno.id;

             if (confirmacao) {
              // Passando o ID do aluno para a função deleteAluno
              deleteAluno(aluno.id);
              }
            });
          li.appendChild(excluir); // Adicionando o botão de excluir ao item da lista
        });
    } catch (err) {
    console.error("Erro ao converter resposta em JSON:", err); // Se der erro na conversão
    }
}

// Função assíncrona para excluir um aluno
async function deleteAluno(id) {
  try {
      const alunoLi = document.querySelector(`#aluno-${id}`);
      if (alunoLi) {
        // Remover o item da lista
        alunoLi.remove();
        alert("Aluno excluído com sucesso!");
       }
    } catch (error) {
        console.error(error);
    }
}

document.getElementById("formTurma").addEventListener("submit", async (e) => {
    e.preventDefault();
    const nome = document.getElementById("nomeTurma").value;
    const ativo = document.getElementById("turmaAtiva").value === "true";
  
    const response = await fetch(`${baseURL}/turma`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, ativo })
      });
  
    if (response.ok) {
        alert("Turma cadastrada!");
        carregarTurmas();
      } else {
        alert("Erro ao cadastrar turma");
      }
  });

async function carregarTurmas() {
  const res = await fetch(`${baseURL}/turma`);
  const text = await res.text();
  try {
      const dados = JSON.parse(text);

      const lista = document.getElementById("listaTurmas");
      lista.innerHTML = "";

      dados['Lista de turma']?.forEach((turma) => {
        const li = document.createElement("li");
        li.id = `turma-${turma.id}`;
        li.innerText = `${turma.nome} (${turma.ativo ? "Ativa" : "Inativa"})`;
        lista.appendChild(li);

        const excluir = document.createElement("button");
        excluir.innerHTML = '<img src="ícones/excluir.png" alt="Excluir" width="15px" height="15px">';
        excluir.style.cursor = 'pointer';

        excluir.addEventListener("click", (e) => {
            const confirmacao = confirm("Deseja realmente excluir a turma?");
            idTurma = turma.id;

           if (confirmacao) {
            deleteTurma(turma.id);
            }
          });
        li.appendChild(excluir);
      });
      
    } 
  catch (err) {
    console.error("Erro ao converter resposta em JSON:", err);
  }
}

async function deleteTurma(id) {
    try {
        const turmaLi = document.querySelector(`#turma-${id}`);
        if (turmaLi) {
          turmaLi.remove();
          alert("Turma excluída com sucesso!");
         }
      } catch (error) {
          console.error(error);
      }
  }

// Carregar ao abrir a página
carregarAlunos();
carregarTurmas();