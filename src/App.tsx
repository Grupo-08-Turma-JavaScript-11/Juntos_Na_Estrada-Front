import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListarCaronas from "./components/carona/listarcaronas/ListarCaronas";
import FormCarona from "./components/carona/formcarona/FormCarona";
import DeletarCarona from "./components/carona/deletarcarona/DeletarCarona";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ListarCaronas />} />
          <Route path="/caronas" element={<ListarCaronas />} />
          <Route path="/cadastrarcaronas" element={<FormCarona />} />
          <Route path="/editarcaronas/:id" element={<FormCarona />} />
          <Route path="/deletarcaronas/:id" element={<DeletarCarona />} /> 
          <Route path="/cadastrarusuario" element={<Cadastro />} />   
          <Route path="/login" element={<Login />} />       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
