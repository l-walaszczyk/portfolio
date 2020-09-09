import React, { useState, useEffect } from "react";
import { LangProvider } from "./containers/Lang";
import { HashRouter, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./styles/simplebar-overrides.css";
import HeaderMobile from "./components/HeaderMobile";
import HeaderDesktop from "./components/HeaderDesktop";
import Footer from "./components/Footer";
import styled from "styled-components/macro";
import variables from "./styles/variables";

const Main = styled.main`
  min-height: ${(props) =>
    props.windowHeight - variables.headerHeight - variables.footerHeight}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const handleResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    if (window) {
      handleResize();
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HashRouter basename="/">
      <GlobalStyle />
      <ScrollToTop />
      <LangProvider>
        <SimpleBar
          style={{
            height: height - variables.headerHeight,
            width: "100vw",
            position: "absolute",
            top: variables.headerHeight,
          }}
        >
          <Main windowHeight={height}>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} height={height} />}
              />
              <Route
                path="/about"
                exact
                render={(props) => <About {...props} height={height} />}
              />
              <Route path="/skills" exact component={Skills} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/contact" exact component={Contact} />
              <Route component={Error404} />
            </Switch>
          </Main>
          <Footer />
        </SimpleBar>
        {width === undefined ? (
          <header></header>
        ) : width < 1024 ? (
          <HeaderMobile />
        ) : (
          <HeaderDesktop />
        )}
      </LangProvider>
    </HashRouter>
  );
}

export default App;
