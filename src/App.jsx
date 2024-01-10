import {
  Container,
  ListItem,
  Checkbox,
  ListItemText,
  IconButton,
  Grow,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Bar from "./assets/componentes/Bar";
import Decoration from "./assets/componentes/Decoration";
import Footer from "./assets/componentes/Footer";
import Todos from "./assets/componentes/Todos";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from "@emotion/react";
import { Theme, ThemeDark } from "./assets/Theme.jsx";

function App() {
  if (!localStorage.getItem("todos")) {
    localStorage.setItem("todos", [{
      name: "Tarea 1",
      id: "a74c9cd6-778c-4783-94e0-1d0f6630e92f",
      check: false,
      timeout: 1000,
    }, ]);
  }

  const [todos, setTodos] = React.useState([    {
    name: "Tarea 1",
    id: "a74c9cd6-778c-4783-94e0-1d0f6630e92f",
    check: false,
    timeout: 1000,
  },]);

  const [todosShow, setTodosShow] = React.useState([
    {
      name: "Tarea 1",
      id: "a74c9cd6-778c-4783-94e0-1d0f6630e92f",
      check: false,
      timeout: 1000,
    },
  ]);

  const getData = () => {
    return localStorage.getItem('todos');
   }

  useEffect(() => {
    setTodos(JSON.parse(getData()));
    setTodosShow(JSON.parse(getData()));
  })

  const [mode, setMode] = React.useState(Theme);

  const changeMode = (mode) => {
    if (mode == ThemeDark) {
      setMode(Theme);
    } else {
      setMode(ThemeDark);
    }
  };

  const handleAddTodos = (name) => {
    const newTodo = {
      name: name,
      id: uuidv4(),
      check: false,
      timeout: 1000,
    };
    setTodos([...todos, newTodo]);
    setTodosShow([...todosShow, newTodo]);
    localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    console.log(localStorage.getItem("todos"), newTodo);
  };
  ///////uuidv4 es una libreria que genera un id aleatorio
  //////newTodos lo que hace es crear un objeto con propiedades
  //////Luego setTodos selecciona todos los todos ya existentes y agrega el nuevo objeto con los valores correspondientes

  const deleteTodos = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    setTodosShow(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };
ç
  ////Lo que hace es filtrar todos los todos que no coincidan con el id y crea todos menos el que coincida

  const clearTodos = () => {
    const newTodos = todos.filter((todo) => !todo.check);
    setTodos(newTodos);
    setTodosShow(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  /////Lo que hace es filtrar todos los todos que tengan check como false y crea todos menos esos

  const allTodos = () => {
    const newTodos = todos;
    setTodosShow(newTodos);
  };
  /////Coloca todos los todos existentes

  const activeTodos = () => {
    const newTodos = todos.filter((todo) => todo.check == false);
    setTodosShow(newTodos);
  };
  ////Lo que hace es mostrar todos los todos existentes que tengan check como true

  const completedTodos = () => {
    const newTodos = todos.filter((todo) => todo.check == true);
    setTodosShow(newTodos);
  };

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
    setTodosShow(newTodos);
  };
  //////Lo que hace es cambiar el valor de check del todo que coincida con el id y vuelve a crear todos

  //////////Crea una lista de todos y un checkbox para cada uno de ellos usando los datos de los objetos
  const listTodos = todosShow.map((todo) => (
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
              ? mode.palette.text.disabled
              : mode.palette.text.primary,
            textDecoration: todo.check ? "line-through" : "none",
            maxWidth: "80vw",
          }}
        />
        <IconButton
          sx={{
            color: todo.check
              ? mode.palette.text.disabled
              : mode.palette.text.primary,
          }}
          onClick={() => deleteTodos(todo.id)}
        >
          <CloseIcon label="clickable" />
        </IconButton>
      </ListItem>
    </Grow>
  ));

  return (
    <ThemeProvider theme={mode}>
      <Container
        component="main"
        sx={{
          padding: { xs: "0px", md: "0px" },
          height: "100vh",
          margin: "0",
          backgroundColor: mode.palette.background.paper,
        }}
      >
        <Decoration mode={mode} />
        <Container
          sx={{
            zIndex: "100",
            position: "relative",
            padding: { xs: "50px 40px" },
          }}
        >
          <Bar
            handleAddTodos={handleAddTodos}
            mode={mode}
            changeMode={changeMode}
          />
          <Todos
            mode={mode}
            clearTodos={clearTodos}
            listTodos={listTodos}
            handleCheck={handleCheck}
            deleteTodos={deleteTodos}
          />
          <Footer
            mode={mode}
            allTodos={allTodos}
            activeTodos={activeTodos}
            completedTodos={completedTodos}
          />
        </Container>
      </Container>
    </ThemeProvider>
  );
}

export default App;
