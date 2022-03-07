import React from 'react';
import './App.css';
import { css } from 'aphrodite-to-jss';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { SimpleChooseComponent } from './components/SimpleChooseComponent';
import { NavBarComponent } from './components/NavBarComponent';
import { style } from './style';
import { AboutComponent } from './components/AboutComponent';
import { themeLabelState } from './state/selectors';
import { BoardComponent } from './components/BoardComponent';

function App() {
  const themeLabel = useRecoilValue(themeLabelState);
  return (
    <div className={css(style(themeLabel).Main)}>
      <NavBarComponent />
      <div className={css(style(themeLabel).Container)}>
        <Routes>
          <Route path="/" element={<Navigate to="about" />} />
          <Route path="/about" element={<AboutComponent />} />
          <Route path="/simple" element={<SimpleChooseComponent />} />
          <Route path="/complex" />
          <Route path="/board" element={<BoardComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
