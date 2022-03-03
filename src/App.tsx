import React from 'react';
import './App.css'
import { Box } from "@mui/material";
import { SimpleRunningLineComponent } from "./components/SimpleRuningLine";

//'rgba(0, 0, 0, 0.04)',
function App() {
  return (
      <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
              textAlign: 'center',
              fontFamily: 'monospace',
              fontSize: 'large',
              minHeight: "100vh",
              backgroundColor: '#282c34',
          }}
      >
        <SimpleRunningLineComponent />
      </Box>
  );
}

export default App;
