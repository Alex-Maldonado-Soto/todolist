import React from "react";
import img from "../images/img";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Decoration() {
  if (false) {
    return (
      <Container sx={{padding: 0}}>
        <Box component="picture"
        sx={{
          display: "block",
          position: "absolute",
          width: "100vw",
          height: "30vh",
        }}
        >
            <source srcSet={img.bgDesktopLight} media="(max-width: 1024px)" alt=""/>
          <Img
            src={img.bgMobileLight}
            alt=""
          />
        </Box>
      </Container>
    );
  } else if (true) {

      return (
        <Container sx={{padding: {xs: 0, sm: 0}}}>
          <Box component="picture"
          sx={{
            padding: 0,
            display: "block",
            position: "absolute",
            width: "100vw",
            height: "30vh",
          }}
          >
              <source srcSet={img.bgDesktopDark} media="(max-width: 1024px)" alt=""/>
            <Img
              src={img.bgMobileDark}
              alt=""
            />
          </Box>
        </Container>
      );
  }
}
