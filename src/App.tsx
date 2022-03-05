import React from 'react';
import './App.css'
import { css } from 'aphrodite'
import { SimpleChooseComponent } from "./components/SimpleChooseComponent";
import { NavBarComponent} from "./components/NavBarComponent";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { style } from "./style";
import { AboutComponent } from "./components/AboutComponent";
import { RecoilRoot } from 'recoil';

//'rgba(0, 0, 0, 0.04)',
function App() {
  return (
      <RecoilRoot>
          <BrowserRouter>
              <div className={css(style('a').Main)}>
                  <NavBarComponent />
                  <div className={css(style('a').Container)}>
                          <Routes>
                              <Route path="/" element={<Navigate to="about" />}/>
                              <Route path="/about" element={<AboutComponent/>}/>
                              <Route path="/simple" element={<SimpleChooseComponent />}/>
                              <Route path="/complex" />
                              <Route path="/board" />
                          </Routes>

                  </div>
              </div>
          </BrowserRouter>
      </RecoilRoot>
  );
}

export default App;
