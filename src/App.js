import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";

function App() {
  const themeMode = useSelector((state) => state.theme.mode);

  const theme = createTheme(themeMode === "light" ? lightTheme : darkTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
