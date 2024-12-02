import React from "react";

// Importa o arquivo de estilo para aplicar CSS ao componente
import "./tasklist.css";

// Importa a biblioteca PropTypes para validação de propriedades
import PropTypes from "prop-types";

// Importa o componente TaskItem para renderizar cada tarefa individualmente
import TaskItem from "../TaskItem/taskitem";

// Importa o ícone "+" para o botão de adicionar tarefa
import plusIcon from "../../img/plus-icon.svg";

// Define o componente TaskList que representa uma lista de tarefas
export default function TaskList({
  title, // Título da lista
  taskState, // Estado das tarefas (ex.: "pendente", "concluída")
  onAddTask, // Função chamada ao adicionar uma nova tarefa
  tasks, // Array de tarefas a serem exibidas
  onTaskUpdate, // Função chamada ao atualizar uma tarefa
  onDeleteTask, // Função chamada ao deletar uma tarefa
}) {
  // Função que chama o callback para adicionar uma nova tarefa
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };

  // Renderiza o componente
  return (
    <div className="tasklist">
      {/* Exibe o título da lista */}
      <div className="title">{title}</div>

      <div className="content">
        {/* Mapeia as tarefas e renderiza um componente TaskItem para cada uma */}
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id} // Chave única para cada tarefa
              id={task.id} // ID da tarefa
              title={task.title} // Título da tarefa
              taskState={task.state} // Estado da tarefa
              onTaskUpdate={onTaskUpdate} // Callback para atualizar a tarefa
              onDeleteTask={onDeleteTask} // Callback para deletar a tarefa
            />
          );
        })}

        {/* Exibe uma mensagem caso não haja tarefas */}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}

        {/* Botão para adicionar uma nova tarefa */}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar Tarefa
        </button>
      </div>
    </div>
  );
}

// Define as validações das propriedades esperadas pelo componente
TaskList.propTypes = {
  title: PropTypes.string.isRequired, // O título deve ser uma string obrigatória
  onAddTask: PropTypes.func.isRequired, // onAddTask deve ser uma função obrigatória
  tasks: PropTypes.array.isRequired, // tasks deve ser um array obrigatório
};
