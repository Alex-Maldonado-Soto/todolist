import { Container } from "@mui/material";
import React from "react";
import Bar from "./assets/componentes/Bar";
import Decoration from "./assets/componentes/Decoration";
import Footer from "./assets/componentes/Footer";
import Todos from "./assets/componentes/Todos";
import { Theme } from "./assets/Theme";

function App() {
  return (
    <Container component="main" sx={{padding: { xs: "0px", md: "0px"}, height: "100vh", margin: "0", backgroundColor: Theme.palette.background.paper}}>
      <Decoration />
      <Container sx={{zIndex: "100", position: "relative", padding: "50px 40px"}}>
        <Bar />
        <Todos />
        <Footer />
      </Container>
    </Container>
  );
}

export default App;
