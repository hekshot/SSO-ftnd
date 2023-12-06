import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Todo from "./Pages/Todo";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {

  
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todo/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
