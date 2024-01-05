import { Button, Container, List } from "@mui/material";
import React from "react";
import { Theme } from "../Theme";


export default function Todos({ listTodos }) {
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
    </Container>
  );
}
