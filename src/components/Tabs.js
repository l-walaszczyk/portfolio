import React from "react";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Tabs = ({ scrollToTop, items }) => {
  const location = useLocation();

  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter onExitComplete={scrollToTop}>
        <Switch location={location} key={location.pathname}>
          {items.map((item) => (
            <Route
              key={item.route}
              path={`/${item.route}`}
              exact
              render={() => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {item.render()}
                </motion.div>
              )}
            />
          ))}
          <Route
            key="redirection"
            render={() => (
              <motion.div exit={{ opacity: 0 }}>
                <Redirect to={items[0] ? `/${items[0].route}` : "/"} />
              </motion.div>
            )}
          />
        </Switch>
      </AnimatePresence>
    </React.Fragment>
  );
};

export default Tabs;
