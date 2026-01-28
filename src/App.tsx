import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListarCaronas from "./components/carona/listarcaronas/ListarCaronas";

function App() {
  return (
    <>
      <BrowserRouter>
        <ListarCaronas />
      </BrowserRouter>
    </>
  );
}

export default App;
