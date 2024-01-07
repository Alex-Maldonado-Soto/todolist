import { Box, Button, Container, List, Typography } from "@mui/material";
import React from "react";
import { Theme } from "../Theme";

export default function Todos({ listTodos, clearTodos }) {
  const accion = () => {
    clearTodos();
  };

  return (
    <Container
      component="section"
      sx={{
        height: "55vh",
        padding: "0",
        backgroundColor: Theme.palette.background.default,
        borderRadius: "10px",
        display: "grid",
        gridTemplateRows: "90% 10%",
      }}
    >
      <List
        sx={{
          overflowY: "auto",
          scrollbehavior: "smooth",
        }}
      >
        {listTodos}
      </List>
      <Box
        component="aside"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0px 10px",
        }}
      >
        <Button
        
          size="small"
          color="hint"
          component={"span"}
          sx={{
            color: Theme.palette.text.hint,
            fontSize: ".9rem",
            textTransform: "capitalize",
          }}
        >
          {listTodos.length} Todos
        </Button>
        <Button
          size="small"
          color="hint"
          variant="text"
          onClick={() => accion()}
          sx={{
            color: Theme.palette.text.hint,
            fontSize: ".9rem",
            textTransform: "capitalize",
          }}
        >
          Clear Completed
        </Button>
      </Box>
    </Container>
  );
}
