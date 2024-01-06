import {
  Container,
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
  Grow,
} from "@mui/material";
import React from "react";
import Bar from "./assets/componentes/Bar";
import Decoration from "./assets/componentes/Decoration";
import Footer from "./assets/componentes/Footer";
import Todos from "./assets/componentes/Todos";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import { Theme } from "./assets/Theme";

function App() {
  const [todos, setTodos] = React.useState([]);

  const handleAddTodos = (name) => {
    const newTodo = {
      name: name,
      id: uuidv4(),
      check: false,
      timeout: 1000,
      delete: true,
    };
    setTodos([...todos, newTodo]);
  };
  ///////uuidv4 es una libreria que genera un id aleatorio
  //////newTodos lo que hace es crear un objeto con propiedades
  //////Luego setTodos selecciona todos los todos ya existentes y agrega el nuevo objeto con los valores correspondientes

  const deleteTodos = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  ////Lo que hace es filtrar todos los todos que no coincidan con el id y crea todos menos el que coincida

  const handleCheck = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          check: !todo.check,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  //////Lo que hace es cambiar el valor de check del todo que coincida con el id y vuelve a crear todos

  //////////Crea una lista de todos y un checkbox para cada uno de ellos usando los datos de los objetos
  const listTodos = todos.map((todo) => (
    <Grow key={todo.id} in={true} timeout={1000} appear>
      <ListItem
        key={todo.id}
        sx={{
          maxWidth: "80vw",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Checkbox
          color="hint"
          checked={todo.check}
          onChange={() => {
            handleCheck(todo.id);
          }}
          icon={<Brightness1OutlinedIcon />}
          checkedIcon={<CheckCircleOutlineIcon />}
        />
        <ListItemText
          primary={todo.name}
          sx={{
            color: todo.check
              ? Theme.palette.text.disabled
              : Theme.palette.text.primary,
            textDecoration: todo.check ? "line-through" : "none",
            maxWidth: "80vw",
          }}
        />
        <IconButton
          sx={{
            color: todo.check
              ? Theme.palette.text.disabled
              : Theme.palette.text.primary,
          }}
          onClick={() => deleteTodos(todo.id)}
        >
          <CloseIcon label="clickable" />
        </IconButton>
      </ListItem>
    </Grow>
  ));

  return (
    <Container
      component="main"
      sx={{
        padding: { xs: "0px", md: "0px" },
        height: "100vh",
        margin: "0",
        backgroundColor: Theme.palette.background.paper,
      }}
    >
      <Decoration />
      <Container
        sx={{
          zIndex: "100",
          position: "relative",
          padding: { xs: "50px 40px" },
        }}
      >
        <Bar handleAddTodos={handleAddTodos} />
        <Todos
          listTodos={listTodos}
          handleCheck={handleCheck}
          deleteTodos={deleteTodos}
        />
        <Footer />
      </Container>
    </Container>
  );
}

export default App;
