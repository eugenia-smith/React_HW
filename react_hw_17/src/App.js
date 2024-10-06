import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  // Button,
  Typography,
  Box,
} from "@mui/material";
import styled from "@emotion/styled";
import { useState } from "react";
import "./App.css";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
      light: "#d417a8",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#eeeeee",
    },
    text: {
      primary: "#512da8",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#3e2723",
    },
    text: {
      primary: "#b388ff",
    },
  },
});

function App() {
  const [useDark, setUseDark] = useState(false);

  const Button = styled.button`
    min-width: 100px;
    padding: 16px;
    border: none;
    border-radius: 24px;
    background-color: ${useDark ? "PaleGreen" : "DarkOliveGreen"};
    text-transform: uppercase;
    font-size: 12px;
    color: ${useDark ? "black" : "white"};
  `;

  return (
    <ThemeProvider theme={useDark ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          minWidth: "500px",
          alignItems: "center",
        }}
      >
        <Typography variant="h1">
          Turn {useDark ? "on" : "off"} the light
        </Typography>
        <Button variant="contained" onClick={() => setUseDark(!useDark)}>
          Toggle theme
        </Button>
      </Box>

      {/* <article className="theme_element light">
          <h1>Turn off the light</h1>
          <button>Toggle theme</button>
        </article> */}
    </ThemeProvider>
  );
}

export default App;
