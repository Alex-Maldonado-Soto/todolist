import {
  Button,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import { Theme } from "../Theme";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { v4 as uuidv4 } from "uuid";

export default function Todos() {
  const [todos, setTodos] = React.useState([]);
  const [check, setCheck] = React.useState([]);

  const handleAddTodos = () => {
    const newTodo = {
      name: Math.random(),
      id: uuidv4(),
      check: true,
    };
    const newCheck = {
      id : newTodo.id,
      value: false
    }
    setTodos([...todos, newTodo]);
    setCheck([...check, newCheck]);
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
  }
//////Lo que hace es cambiar el valor de check del todo que coincida con el id y vuelve a crear todos

  const listTodos = todos.map((todo) => (
    <ListItem
      key={todo.id}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Checkbox
        color="secondary"
        checked={todo.check}
        onChange={() => {
          handleCheck(todo.id);
        }}
        icon={<Brightness1OutlinedIcon />}
        checkedIcon={<CheckCircleOutlineIcon />}
      />
      <ListItemText
        primary={todo.id}
        sx={{ textDecoration: todo.check ? "line-through" : "none" }}
      />
      <IconButton color="secondary" onClick={() => deleteTodos(todo.id)}>
        <CloseIcon label="clickable" />
      </IconButton>
    </ListItem>
  ));

  return (
    <Container
      component="section"
      sx={{
        height: "55vh",
        padding: "0",
        backgroundColor: Theme.palette.background.default,
        borderRadius: "10px",
      }}
    >
      <List>{listTodos}</List>
      <Button onClick={handleAddTodos}>Hola</Button>
    </Container>
  );
}
