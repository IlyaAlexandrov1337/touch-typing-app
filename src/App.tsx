import React from 'react';
import './App.css'
import { css } from 'aphrodite'
import { SimpleChooseComponent } from "./components/SimpleChooseComponent";
import { NavBarComponent} from "./components/NavBarComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { style } from "./style";

//'rgba(0, 0, 0, 0.04)',
function App() {
  return (

      <div className={css(style('a').main)}>
          <Router>
              <NavBarComponent />
              <Routes>
                  <Route path="/" />
                  <Route path="/about"  />
                  <Route path="/contact" />
                  <Route path="/signin" />
                  <Route path="/sign-up" />
              </Routes>
          </Router>
        <SimpleChooseComponent />
      </div>
  );
}

export default App;
