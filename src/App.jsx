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
      <Container sx={{zIndex: "100", position: "relative", padding: "50px 40px"}}>
        <Bar />
        <NewTodo />
        <Todos />
      </Container>
    </main>
  );
}

export default App;
