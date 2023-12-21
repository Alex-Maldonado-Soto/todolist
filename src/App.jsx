import { Container } from "@mui/material";
import React from "react";
import Bar from "./assets/componentes/Bar";
import Decoration from "./assets/componentes/Decoration";
import NewTodo from "./assets/componentes/NewTodo";
import Todos from "./assets/componentes/Todos";

function App() {
  return (
    <main>
      <Decoration />
      <Container>
        <Bar />
        <NewTodo />
        <Todos />
      </Container>
    </main>
  );
}

export default App;
