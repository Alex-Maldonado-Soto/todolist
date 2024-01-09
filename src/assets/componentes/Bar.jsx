import {
  Box,
  Container,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import React from "react";
import { Theme } from "../Theme";

export default function Decoration({ handleAddTodos, mode }) {
  const [name, setName] = React.useState("");

  const addTodo = (name) => {
    handleAddTodos(name);
  };

  return (
    <Container component="nav" sx={{ padding: { xs: "0px" }, marginBottom: "20px" }}>
      <Box
        display="flex"
        sx={{
          padding: "0px",
          margin: "none",
          alignItems: "center",
          display: "flex",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Typography
        color={mode.palette.text.title}
          variant="h4"
          fontWeight="bold"
          sx={{
            fontWeight: "bold",
          }}
        >
          TODO
        </Typography>
        <WbSunnyOutlinedIcon />
      </Box>
      <Box
        component={"form"}
        onSubmit={(e) => {
          e.preventDefault();
          if (name.length > 1) {
            addTodo(name);
            setName("");
          }
        }}
        backgroundColor={mode.palette.background.default}
        sx={{
          width: "100%",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <IconButton color="secondary" type="submit">
          <CheckCircleOutlineIcon />
        </IconButton>
        <TextField
          id="createTodo"
          type="text"
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Create a new todo..."
          variant="outlined"
          size="small"
          sx={{
            width: "100%",
          }}
        />
      </Box>
    </Container>
  );
}
