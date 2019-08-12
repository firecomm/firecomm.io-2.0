import React from "react";
import App, { Container, Head } from "next/app";

import { createGlobalStyle, ThemeProvider } from "styled-components";

import Highlights from "../styles/Highlights";

const theme = {
  mainColor: "#e01634",
  darkMainColor: "#8E0E34",
  offColor: "#60BBE5",
  grey: "#edf0f2",
  white: "#fcfdff",
  black: "#2b282b"
};

const GlobalStyle = createGlobalStyle`
  body {
    width:100%;
    margin:0;
    height:100%;
    font-family: 'Roboto', sans-serif;
    background-color:${theme.white};
    
  }
  a{
    color: ${theme.white};
    text-decoration: none;
  }
`;

class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {}
  //
  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx)
  //   }
  //
  //   return { pageProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <GlobalStyle />
        <Highlights />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
