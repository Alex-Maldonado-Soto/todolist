import { Breadcrumbs, Container, Button, Box } from "@mui/material";
import React from "react";
import { Theme } from "../Theme";

export default function Footer({ allTodos, activeTodos, completedTodos }) {
  const all = () => {
    allTodos();
  };
  const active = () => {
    activeTodos();
    console.log("hola");
  };
  const completed = () => {
    completedTodos();
  };

  return (
    <Container
      component="nav"
      sx={{
        backgroundColor: Theme.palette.background.default,
        borderRadius: "10px",
        padding: "20px 10px",
        display: "flex",
        justifyContent: "center",
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <Button
          sx={{ fontSize: ".8rem", textTransform: "capitalize" }}
          size="small"
          onClick={() => all()}
          color="inherit"
        >
          All
        </Button>
        <Button
          sx={{ fontSize: ".8rem", textTransform: "capitalize" }}
          onClick={() => active()}
          size="small"
          underline="none"
          color="inherit"
        >
          Active
        </Button>
        <Button
          onClick={() => completed()}
          sx={{ fontSize: ".8rem", textTransform: "capitalize" }}
          size="small"
          underline="none"
          color="inherit"
        >
          Completed
        </Button>
      </Box>
    </Container>
  );
}
