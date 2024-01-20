import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "./styles/Shares";
import { ThemeProvider } from "styled-components";
import { GlobalCSS } from "./styles/GlobalCSS";
import Home from "./components/Home";

const theme = {
  colors: {
    primary: "aliceblue",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalCSS />
      <Container>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route></Route>
          </Routes>
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
