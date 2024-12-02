import React, { useState } from "react";
// Importa React e o hook useState para gerenciar estados no componente

import "./styles.css";
// Importa o arquivo de estilos CSS para a aplicação

import Navbar from "./components/Navbar/navbar";
// Importa o componente Navbar para o cabeçalho da aplicação

import TaskList from "./components/TaskList/tasklist";
// Importa o componente TaskList para exibir listas de tarefas

// Variável para gerar IDs únicos para as tarefas
let idAcc = 0;

// Função que gera um novo ID incremental
const generateId = () => {
  idAcc = idAcc + 1; // Incrementa o contador
  return idAcc; // Retorna o novo ID
};

// Define o componente principal da aplicação
export default function App() {
  // Estado que armazena a lista de tarefas
  const [tasks, setTasks] = useState([]);

  // Função para adicionar uma nova tarefa
  const addTask = (title, state) => {
    const newTask = {
      id: generateId(), // Gera um ID único para a tarefa
      title, // Define o título da tarefa
      state, // Define o estado da tarefa (ex.: "Pendente", "Fazendo")
    };

    // Atualiza o estado de tarefas com a nova tarefa adicionada
    setTasks((existingTasks) => {
      return [...existingTasks, newTask]; // Adiciona a nova tarefa ao array existente
    });
  };

  // Função para atualizar o título ou estado de uma tarefa
  const updateTask = (id, title, state) => {
    setTasks((existingTasks) => {
      // Atualiza a tarefa correspondente ao ID
      return existingTasks.map((task) => {
        if (task.id === id) {
          return { ...task, title, state }; // Atualiza o título e/ou estado
        } else {
          return task; // Mantém as outras tarefas inalteradas
        }
      });
    });
  };

  // Função para excluir uma tarefa com base no ID
  const deleteTask = (id) => {
    setTasks((existingTasks) => {
      // Remove a tarefa correspondente ao ID
      return existingTasks.filter((task) => task.id !== id);
    });
  };

  // Renderiza a interface da aplicação
  return (
    <div className="App">
      {/* Renderiza a barra de navegação */}
      <Navbar />

      {/* Container principal que contém as listas de tarefas */}
      <div className="container">
        {/* Lista de tarefas no estado "Pendente" */}
        <TaskList
          title="Pendente" // Título da lista
          onAddTask={addTask} // Callback para adicionar uma nova tarefa
          taskState="Pendente" // Estado correspondente à lista
          tasks={tasks.filter((t) => t.state === "Pendente")} // Filtra as tarefas com estado "Pendente"
          onTaskUpdate={updateTask} // Callback para atualizar uma tarefa
          onDeleteTask={deleteTask} // Callback para deletar uma tarefa
        />

        {/* Lista de tarefas no estado "Fazendo" */}
        <TaskList
          title="Fazendo" // Título da lista
          onAddTask={addTask} // Callback para adicionar uma nova tarefa
          taskState="Fazendo" // Estado correspondente à lista
          tasks={tasks.filter((t) => t.state === "Fazendo")} // Filtra as tarefas com estado "Fazendo"
          onTaskUpdate={updateTask} // Callback para atualizar uma tarefa
          onDeleteTask={deleteTask} // Callback para deletar uma tarefa
        />

        {/* Lista de tarefas no estado "Completa" */}
        <TaskList
          title="Completa" // Título da lista
          onAddTask={addTask} // Callback para adicionar uma nova tarefa
          taskState="Completa" // Estado correspondente à lista
          tasks={tasks.filter((t) => t.state === "Completa")} // Filtra as tarefas com estado "Completa"
          onTaskUpdate={updateTask} // Callback para atualizar uma tarefa
          onDeleteTask={deleteTask} // Callback para deletar uma tarefa
        />
      </div>
    </div>
  );
}
