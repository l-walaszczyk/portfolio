import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import About from "../pages/About";
import ScrollToTop from "../components/ScrollToTop";
import GlobalStyle from "../styles/GlobalStyle";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <GlobalStyle />
      <ScrollToTop />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        {/* <Route path="/projects" exact component={Projects} /> */}
        {/* <Route path="/resume" exact component={Resume} /> */}
        {/* <Route path="/contact" exact component={Contact} /> */}
        {/* <Route component={Error404} /> */}
      </Switch>
    </Router>
  );
}

export default App;
