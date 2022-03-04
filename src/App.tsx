import React from 'react';
import './App.css'
import { css } from 'aphrodite'
import { SimpleRunningLineComponent } from "./components/SimpleRuningLine";
import { style } from "./style";

//'rgba(0, 0, 0, 0.04)',
function App() {
  return (
      <div className={css(style('a').main)}>
        <SimpleRunningLineComponent />
      </div>
  );
}

export default App;
