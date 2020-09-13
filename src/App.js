import "focus-visible";
import React, { useState, useEffect, createRef } from "react";
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

const FocusVisible = styled.div`
  &.js-focus-visible {
    a,
    button {
      &:focus:not(.focus-visible) {
        outline: none;
      }
      &.focus-visible {
        outline: none;
        color: ${variables.hoverColor};
      }
    }
  }
`;

const Main = styled.main`
  min-height: ${(props) =>
    props.windowHeight - variables.headerHeight - variables.footerHeight}px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const mainRef = createRef();
  const scrollableNodeRef = createRef();

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
      <LangProvider>
        <SimpleBar
          scrollableNodeProps={{ ref: scrollableNodeRef }}
          style={{
            height: height - variables.headerHeight,
            width: "100vw",
            position: "absolute",
            top: variables.headerHeight,
          }}
        >
          <GlobalStyle />
          <FocusVisible className="js-focus-visible focus-visible">
            <Main windowHeight={height} ref={mainRef}>
              <ScrollToTop mainRef={mainRef} />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/skills" exact component={Skills} />
                <Route
                  path="/projects"
                  exact
                  render={(props) => (
                    <Projects
                      {...props}
                      scrollableNodeRef={scrollableNodeRef}
                    />
                  )}
                />
                <Route path="/contact" exact component={Contact} />
                <Route component={Error404} />
              </Switch>
            </Main>
            <Footer />
          </FocusVisible>
        </SimpleBar>
        <FocusVisible className="js-focus-visible focus-visible">
          {width === undefined ? (
            <header></header>
          ) : width < 1024 ? (
            <HeaderMobile />
          ) : (
            <HeaderDesktop />
          )}
        </FocusVisible>
      </LangProvider>
    </HashRouter>
  );
};

export default App;
