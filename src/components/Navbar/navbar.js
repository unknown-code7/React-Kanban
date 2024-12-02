import React from "react";
// Importa a biblioteca React para criar e utilizar componentes

import "./navbar.css";
// Importa o arquivo de estilo para aplicar CSS ao componente Navbar

// Define o componente funcional Navbar
export default function Navbar() {
  return (
    // Renderiza um elemento de navegação (nav) com a classe "navbar"
    <nav className="navbar">
      {/* Exibe o título "React Kanban" dentro da barra de navegação */}
      <span>React Kanban</span>
    </nav>
  );
}
