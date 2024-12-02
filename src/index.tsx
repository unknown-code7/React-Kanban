import React from "react";
// Importa a biblioteca React para criar e gerenciar componentes

import ReactDOM from "react-dom/client";
// Importa a biblioteca ReactDOM para manipular o DOM e renderizar o componente principal

import App from "./App";
// Importa o componente principal da aplicação (App)

// Seleciona o elemento raiz no arquivo HTML onde a aplicação será renderizada
const rootElement = document.getElementById("root")!;

// Cria um ponto de entrada raiz para a aplicação usando React 18+
const root = ReactDOM.createRoot(rootElement);

// Renderiza o componente principal (App) dentro do elemento raiz
root.render(
  <React.StrictMode>
    {/* Envolve o componente App com React.StrictMode para detectar problemas e boas práticas */}
    <App />
  </React.StrictMode>
);
