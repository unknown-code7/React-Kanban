import React, { useState } from "react";
// Importa React e o hook useState para gerenciar o estado local do componente

import PropTypes from "prop-types";
// Importa PropTypes para validação de tipos das propriedades

import "./taskitem.css";
// Importa o arquivo de estilos CSS para o componente

// Define o componente funcional TaskItem
export default function TaskItem({
  id, // Identificador único da tarefa
  title, // Título da tarefa
  taskState, // Estado atual da tarefa
  onTaskUpdate, // Função para atualizar a tarefa
  onDeleteTask, // Função para deletar a tarefa
}) {
  // Estado para controlar se o item está em modo de edição
  const [isEditing, setIsEditing] = useState(false);

  // Estado para armazenar o título editável da tarefa
  const [editableTitle, setEditableTitle] = useState(title);

  // Função chamada ao alterar o texto do título
  const onTitleChange = (event) => {
    const newTitle = event.target.value; // Obtém o novo valor do título
    setEditableTitle(newTitle); // Atualiza o estado do título editável
    onTaskUpdate(id, newTitle, taskState); // Chama a função de atualização da tarefa
  };

  // Função chamada ao pressionar uma tecla no campo de texto
  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      // Sai do modo de edição ao pressionar Enter
      setIsEditing(false);

      // Se o título estiver vazio, remove a tarefa
      if (editableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  // Função chamada ao alterar o estado da tarefa no seletor
  const onTaskStateChange = (event) => {
    onTaskUpdate(id, title, event.target.value); // Atualiza o estado da tarefa
  };

  // Renderiza o item no modo de edição, caso isEditing seja true
  if (isEditing) {
    return (
      <div className="task-item">
        {/* Campo de texto para editar o título da tarefa */}
        <input
          type="text"
          value={editableTitle} // Título editável da tarefa
          onChange={onTitleChange} // Chama a função ao alterar o texto
          onKeyPress={onKeyPress} // Chama a função ao pressionar Enter
        />
      </div>
    );
  } else {
    // Renderiza o item no modo de exibição normal, caso isEditing seja false
    return (
      <div className="task-item">
        {/* Exibe o título da tarefa. Clique ativa o modo de edição */}
        <div onClick={(e) => setIsEditing(true)}>{editableTitle}</div>

        {/* Seletor para alterar o estado da tarefa */}
        <select onChange={onTaskStateChange} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}

// Define os tipos e requisitos para as propriedades do componente
TaskItem.propTypes = {
  id: PropTypes.number.isRequired, // O ID deve ser um número obrigatório
  title: PropTypes.string.isRequired, // O título deve ser uma string obrigatória
  taskState: PropTypes.string.isRequired, // O estado da tarefa deve ser uma string obrigatória
};
