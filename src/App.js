import React, { useState, useEffect } from "react";
import { LangProvider } from "./containers/Lang";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import ScrollToTop from "./components/ScrollToTop";
// import Header from "./components/Header";
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
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <ScrollToTop />
      <LangProvider>
        <SimpleBar
          style={{
            height: height - 50,
            width: "100vw",
            position: "absolute",
            top: 50,
          }}
        >
          <main>
            <Switch>
              <Route
                path="/"
                exact
                render={(props) => <Home {...props} height={height} />}
              />
              <Route path="/about" exact component={About} />
              <Route path="/skills" exact component={Skills} />
              <Route path="/projects" exact component={Projects} />
              <Route path="/contact" exact component={Contact} />
              {/* <Route component={Error404} /> */}
            </Switch>
          </main>
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
    </Router>
  );
}

export default App;
