import React from "react";
import img from "../images/img";
import { Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import { Theme, ThemeDark } from "../Theme";

const Img = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
});

export default function Decoration({mode}) {
  if (mode == Theme) {
    return (
      <Container
        sx={{
          padding: { xs: 0, sm: 0 },
          width: "100vw",
          maxWidth: {
            xs: "100vw",
            sm: "100vw",
            md: "100vw",
            lg: "100vw",
            xl: "100vw",
            xxl: "100vw",
            xxxl: "100vw",
          },
        }}
      >
        <Box
          component="picture"
          sx={{
            display: "block",
            position: "absolute",
            width: "100vw",
            maxWidth: {
              xs: "100vw",
              sm: "100vw",
              md: "100vw",
              lg: "100vw",
              xl: "100vw",
              xxl: "100vw",
              xxxl: "100vw",
            },
            height: "30vh",
          }}
        >
          <source
            srcSet={img.bgDesktopLight}
            media="(max-width: 1024px)"
            alt=""
          />
          <Img src={img.bgMobileLight} alt="" />
        </Box>
      </Container>
    );
  } else if (mode == ThemeDark) {

      return (
        <Container
        sx={{
          padding: { xs: 0, sm: 0 },
          width: "100vw",
          maxWidth: {
            xs: "100vw",
            sm: "100vw",
            md: "100vw",
            lg: "100vw",
            xl: "100vw",
            xxl: "100vw",
            xxxl: "100vw",
          },
        }}
      >
        <Box
          component="picture"
          sx={{
            display: "block",
            position: "absolute",
            width: "100vw",
            maxWidth: {
              xs: "100vw",
              sm: "100vw",
              md: "100vw",
              lg: "100vw",
              xl: "100vw",
              xxl: "100vw",
              xxxl: "100vw",
            },
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
