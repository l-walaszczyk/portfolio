import "focus-visible";
import React, { useState, useEffect, createRef } from "react";
import { LangProvider } from "./containers/Lang";
import { HashRouter } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import Tabs from "./components/Tabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
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
  const [width, setWidth] = useState(document.documentElement.clientWidth);
  const [height, setHeight] = useState(document.documentElement.clientHeight);

  const mainRef = createRef();
  const scrollableNodeRef = createRef();

  const handleResize = () => {
    // setWidth(window.innerWidth);
    // setHeight(window.innerHeight);
    setWidth(document.documentElement.clientWidth);
    setHeight(document.documentElement.clientHeight);
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

  const scrollToTop = () => {
    mainRef.current.scrollIntoView();
  };

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
              <Tabs
                scrollToTop={scrollToTop}
                items={[
                  {
                    route: "",
                    render: () => <Home />,
                  },
                  {
                    route: "about",
                    render: () => <About />,
                  },
                  {
                    route: "skills",
                    render: () => <Skills />,
                  },
                  {
                    route: "projects",
                    render: (props) => (
                      <Projects
                        {...props}
                        scrollableNodeRef={scrollableNodeRef}
                      />
                    ),
                  },
                  {
                    route: "contact",
                    render: () => <Contact />,
                  },
                ]}
              />
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
