import { Button, Container, List, Typography } from "@mui/material";
import React from "react";
import { Theme } from "../Theme";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function Todos({ listTodos }) {
  return (
    <Container
      component="section"
      sx={{
        height: "55vh",
        padding: "0",
        backgroundColor: Theme.palette.background.default,
        borderRadius: "10px",
        display: "grid",
        overflowY: "auto",
        scrollbehavior: "smooth",
      }}
    >
      <List>{listTodos}</List>
      <Typography variant="span" color={Theme.palette.text.hint}>Hola</Typography>
    </Container>
  );
}
