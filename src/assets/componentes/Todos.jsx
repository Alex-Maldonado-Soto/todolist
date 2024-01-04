import {
  Button,
  Checkbox,
  Container,
  Divider,
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

export default function Todos() {
  const [todos, setTodos] = React.useState(["hola", "chau"]);
  const [check, setCheck] = React.useState([true, false]);

  const handleAddTodos = () => {
    const newTodos = {
      Name: Math.random(),
      id: todos.length - 1,
    };
    setTodos([...todos, newTodos]);
    setCheck([...check, false]);
  };

  function checkBox(id, checked) {
    console.log(id, checked);
  }

  const listTodos = todos.map((todo) => (
    <ListItem
      sx={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <Checkbox
        color="secondary"
        checked={check[todo.id]}
        onChange={(e) => {
          setCheck([
            ...check.slice(0, todo.id),
            e.target.checked,
            ...check.slice(todo.id + 1),
          ]);
          
          console.log(e.target.checked, todo.id);
        }}
        icon={<Brightness1OutlinedIcon />}
        checkedIcon={<CheckCircleOutlineIcon />}
      />
      <ListItemText primary={todo.id} />
      <IconButton color="secondary">
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
