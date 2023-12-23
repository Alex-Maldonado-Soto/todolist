import { Breadcrumbs, Container, Link, Typography } from "@mui/material";
import React from "react";
import { Theme } from "../Theme";

export default function Footer() {
  return (
    <Container component="nav"
    sx={{
        backgroundColor: Theme.palette.background.default,
        borderRadius: "10px",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        marginTop: "15px",

    }}
    >
      <Breadcrumbs aria-label="breadcrumb" separator="">
        <Link underline="none" color="inherit" href="">
          All
        </Link>
        <Link
          underline="none"
          color="inherit"
          href=""
        >
          Active
        </Link>
        <Link
          underline="none"
          color="inherit"
          href=""
        >
          Completed
        </Link>
      </Breadcrumbs>
    </Container>
  );
}
